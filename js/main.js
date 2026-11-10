(() => {
  const S = window.SITE || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = n => Math.round(n).toLocaleString("uk-UA").replace(/,/g, " ");

  /* ---------- hero images ---------- */
  $("#heroAfter").style.backgroundImage = `url("${S.hero}")`;
  const before = $("#heroBefore");
  before.style.backgroundImage = `url("${S.heroBefore || S.hero}")`;
  if (S.heroBefore) before.style.filter = "none";

  /* ---------- before / after ---------- */
  const cmp = $("#compare"), line = $("#compareLine");
  let pos = 50, dragging = false, touched = false;
  const setPos = p => {
    pos = Math.max(0, Math.min(100, p));
    before.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    line.style.left = pos + "%";
  };
  const fromEvent = e => {
    const r = cmp.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    setPos((x / r.width) * 100);
  };
  cmp.addEventListener("pointerdown", e => { dragging = true; touched = true; fromEvent(e); });
  addEventListener("pointermove", e => { if (dragging) fromEvent(e); });
  addEventListener("pointerup", () => (dragging = false));
  cmp.addEventListener("mousemove", e => { if (matchMedia("(hover:hover)").matches) { touched = true; fromEvent(e); } });
  cmp.addEventListener("touchmove", e => { touched = true; fromEvent(e); }, { passive: true });
  setPos(50);

  /* ---------- nav ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $("#burger").addEventListener("click", () => nav.classList.toggle("is-open"));
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => nav.classList.remove("is-open")));

  /* ---------- works ---------- */
  const catName = { living: "Вітальня", bedroom: "Спальня", bath: "Ванна", kitchen: "Кухня", plan: "Планування" };
  const grid = $("#grid");
  const works = S.works || [];
  grid.innerHTML = works.map((w, i) => `
    <figure class="tile ${w.size ? "tile--" + w.size : ""}" data-cat="${w.cat}" data-i="${i}">
      <img src="${w.src}" alt="${w.title}" loading="lazy">
      <figcaption><b>${w.title}</b><span>${catName[w.cat] || ""}</span></figcaption>
    </figure>`).join("");

  $$("#filters button").forEach(b => b.addEventListener("click", () => {
    $$("#filters button").forEach(x => x.classList.remove("is-active"));
    b.classList.add("is-active");
    const f = b.dataset.f;
    $$(".tile").forEach(t => t.classList.toggle("is-hidden", f !== "all" && t.dataset.cat !== f));
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }));

  /* ---------- lightbox ---------- */
  const lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let cur = 0;
  const visible = () => $$(".tile:not(.is-hidden)").map(t => +t.dataset.i);
  const show = i => { cur = i; lbImg.src = works[i].src; lbCap.textContent = works[i].title; };
  const step = d => { const v = visible(); const k = v.indexOf(cur); show(v[(k + d + v.length) % v.length]); };
  const close = () => { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); lenis && lenis.start(); };
  grid.addEventListener("click", e => {
    const t = e.target.closest(".tile"); if (!t) return;
    show(+t.dataset.i); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); lenis && lenis.stop();
  });
  $("#lbClose").onclick = close;
  $("#lbPrev").onclick = () => step(-1);
  $("#lbNext").onclick = () => step(1);
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  addEventListener("keydown", e => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  /* ---------- calculator ---------- */
  const area = $("#area"), client = $("#client"), optViz = $("#optViz"), optDraw = $("#optDraw");
  const fill = el => el.style.setProperty("--p", ((el.value - el.min) / (el.max - el.min)) * 100 + "%");
  const calc = () => {
    const a = +area.value, c = +client.value;
    const rate = (optViz.checked ? S.vizRate : 0) + (optDraw.checked ? S.drawRate : 0);
    const mine = a * rate, theirs = a * c, profit = theirs - mine;
    $("#areaOut").textContent = a + " м²";
    $("#clientOut").textContent = c + " $/м²";
    $("#resMine").textContent = fmt(mine) + " $";
    $("#resClient").textContent = fmt(theirs) + " $";
    const p = $("#resProfit");
    p.textContent = (profit >= 0 ? "+" : "−") + fmt(Math.abs(profit)) + " $";
    p.classList.toggle("is-neg", profit < 0);
    $("#resYear").textContent = rate === 0
      ? "Оберіть хоча б одну послугу"
      : profit > 0
        ? `Якщо 4 об'єкти на місяць, це +${fmt(profit * 4)} $ щомісяця`
        : `Ціна для клієнта має бути вищою за ${rate} $/м²`;
    fill(area); fill(client);
  };
  [area, client].forEach(el => el.addEventListener("input", calc));
  [optViz, optDraw].forEach(el => el.addEventListener("change", calc));
  calc();

  /* ---------- contacts ---------- */
  $("#ctaTelegram").href = S.telegram;
  $("#ctaInsta").href = S.instagram;
  const bits = [];
  if (S.telegramHandle) bits.push(`<a href="${S.telegram}" target="_blank" rel="noopener">Telegram ${S.telegramHandle}</a>`);
  if (S.instagramHandle) bits.push(`<a href="${S.instagram}" target="_blank" rel="noopener">Instagram ${S.instagramHandle}</a>`);
  if (S.phone) bits.push(`<a href="tel:${S.phone.replace(/\s/g, "")}">${S.phone}</a>`);
  if (S.email) bits.push(`<a href="mailto:${S.email}">${S.email}</a>`);
  $("#ctaContacts").innerHTML = bits.join(" &nbsp;·&nbsp; ");
  $("#year").textContent = new Date().getFullYear();

  /* ---------- smooth scroll + animations ---------- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    $$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id.length > 1 && $(id)) { e.preventDefault(); lenis.scrollTo($(id), { offset: -60 }); }
    }));
  }

  if (window.gsap && !reduce) {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on("scroll", ScrollTrigger.update);

    // hero intro: slider sweeps once to show the effect
    const heroEls = $$(".hero .reveal");
    gsap.from(heroEls, { y: 40, opacity: 0, duration: 1.2, stagger: .12, ease: "power3.out", delay: .2 });
    gsap.to(".compare__img", { scale: 1, duration: 2.4, ease: "power2.out" });
    const sweep = { v: 50 };
    gsap.timeline({ delay: .9 })
      .to(sweep, { v: 72, duration: 1.1, ease: "power2.inOut", onUpdate: () => !touched && setPos(sweep.v) })
      .to(sweep, { v: 38, duration: 1.3, ease: "power2.inOut", onUpdate: () => !touched && setPos(sweep.v) })
      .to(sweep, { v: 50, duration: .9, ease: "power2.inOut", onUpdate: () => !touched && setPos(sweep.v) });

    // hero parallax on scroll
    gsap.to(".hero__content", { yPercent: -18, opacity: .2, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    $$(".reveal").filter(el => !el.closest(".hero")).forEach(el => {
      gsap.from(el, { y: 36, opacity: 0, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" } });
    });

    $$(".tile").forEach((t, i) => {
      gsap.from(t, { y: 60, opacity: 0, duration: 1.2, ease: "power3.out", delay: (i % 3) * .08,
        scrollTrigger: { trigger: t, start: "top 92%" } });
    });

    gsap.from(".calc__profit b", { scale: .85, opacity: 0, duration: 1, ease: "back.out(1.6)",
      scrollTrigger: { trigger: ".calc", start: "top 75%" } });
  }
})();

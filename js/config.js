// ============================================================
//  НАЛАШТУВАННЯ САЙТУ — редагуй тільки цей файл
// ============================================================

window.SITE = {
  // Контакти
  instagram: "https://www.instagram.com/nl.archviz/",
  instagramHandle: "@nl.archviz",
  telegram: "https://t.me/nazarko_1703",
  telegramHandle: "@nazarko_1703",
  phone: "+380 95 767 38 02",
  email: "",

  // Ціни для калькулятора
  vizRate: 6,      // $/м² — візуалізація (верхня межа 5–6)
  drawRate: 2,     // $/м² — креслення

  // Головний екран: «модель → рендер» робиться автоматично з одного фото.
  // Якщо є окреме фото «до» (порожня кімната) — вкажи його в heroBefore.
  hero: "assets/img/hero.jpg",
  heroBefore: "",

  // Роботи. Категорії: living | bedroom | bath | kitchen | plan
  // Розмір: "wide" (широке), "tall" (високе) або нічого
  works: [
    { src: "assets/works/bedroom-stone.jpg",    title: "Спальня з кам'яною панеллю", cat: "bedroom", size: "wide" },
    { src: "assets/works/bath-marble.jpg",      title: "Ванна з мармуром і латунню", cat: "bath", size: "tall" },
    { src: "assets/works/living-city.jpg",      title: "Вітальня з панорамою міста", cat: "living" },
    { src: "assets/works/living-work.jpg",      title: "Вітальня з робочою зоною", cat: "living" },
    { src: "assets/works/plan.jpg",             title: "3D-планування квартири", cat: "plan", size: "tall" },
    { src: "assets/works/bedroom-classic.jpg",  title: "Спальня в неокласиці", cat: "bedroom", size: "wide" },
    { src: "assets/works/bath-dark.jpg",        title: "Темна ванна з душовою", cat: "bath", size: "tall" },
    { src: "assets/works/bedroom-curtains.jpg", title: "Спальня в теплих сірих тонах", cat: "bedroom" },
    { src: "assets/works/teen-room.jpg",        title: "Кімната підлітка", cat: "bedroom" },
    { src: "assets/works/living-moody.jpg",     title: "Вітальня, вечірнє світло", cat: "living", size: "tall" },
    { src: "assets/works/bath-grey.jpg",        title: "Ванна з нішами і підсвіткою", cat: "bath" },
    { src: "assets/works/kitchen-ethno.jpg",    title: "Кухня з українськими мотивами", cat: "kitchen", size: "tall" },
    { src: "assets/works/bedroom-ethno.jpg",    title: "Спальня з вишивкою", cat: "bedroom" },
    { src: "assets/works/bath-ethno.jpg",       title: "Ванна з орнаментом", cat: "bath" },
    { src: "assets/works/living-ethno.jpg",     title: "Вітальня в етностилі", cat: "living" }
  ]
};

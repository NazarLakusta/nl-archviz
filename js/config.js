// ============================================================
//  НАЛАШТУВАННЯ САЙТУ — редагуй тільки цей файл
// ============================================================

window.SITE = {
  // Контакти (заміни на свої)
  instagram: "https://www.instagram.com/nl.archviz/",
  instagramHandle: "@nl.archviz",
  telegram: "https://t.me/your_username",   // ← твій Telegram
  telegramHandle: "@your_username",
  phone: "+380 00 000 00 00",                // ← твій номер
  email: "",                                 // ← за бажанням: пошта для зв'язку

  // Ціни для розрахунку
  vizRate: 6,      // $/м² — візуалізація (верхня межа 5–6)
  drawRate: 2,     // $/м² — креслення

  // Головний екран: одне зображення, «модель → рендер» робиться автоматично.
  // Пізніше можна задати окреме фото «до» (порожня кімната): heroBefore
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=80",
  heroBefore: "",

  // Роботи. Категорії: interior | exterior | bath | kitchen
  // Свої рендери клади в папку assets/works/ і пиши шлях: "assets/works/1.jpg"
  works: [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80", title: "Приватний будинок", cat: "exterior", size: "wide" },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80", title: "Вітальня, Київ", cat: "interior" },
    { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80", title: "Ванна кімната", cat: "bath", size: "tall" },
    { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80", title: "Кухня-вітальня", cat: "kitchen" },
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80", title: "Спальня", cat: "interior" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80", title: "Кухня в стилі мінімалізм", cat: "kitchen", size: "wide" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", title: "Квартира в ЖК", cat: "interior" },
    { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80", title: "Вітальня з каміном", cat: "interior" }
  ]
};

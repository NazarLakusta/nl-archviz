# NL · ArchViz

Сайт 3D-візуалізатора інтер'єрів: рендери, креслення в ArchiCAD, 360° тури. Партнерство з ремонтними бригадами.

**Живий сайт:** https://nazarlakusta.github.io/nl-archviz/

## Як оновлювати

Майже все змінюється в одному файлі **`js/config.js`**:

- `telegram`, `phone`, `email` — контакти
- `vizRate`, `drawRate` — ціни за м² для калькулятора
- `hero` — головне фото (ефект «модель → рендер» робиться автоматично); `heroBefore` — окреме фото «до», якщо є
- `works` — список робіт: шлях до фото, назва, категорія (`interior`, `kitchen`, `bath`, `exterior`), розмір (`wide`, `tall` або нічого)

Свої рендери клади в `assets/works/` (JPG до ~500 КБ, ширина 1600–2000 px).

Тексти секцій — у `index.html`, стилі — у `css/style.css`.

## Технології

HTML, CSS, vanilla JS · GSAP + ScrollTrigger · Lenis · GitHub Pages

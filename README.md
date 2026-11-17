# Портфолио — Мартин Миллер

Одностраничный сайт-портфолио. Собран по данным GitHub-профиля
[MAKA-O](https://github.com/MAKA-O): проекты, стек и ссылки взяты из публичных
репозиториев, ничего не придумано.

## Стек

- HTML5, CSS3 (custom properties, Grid, `clamp()` и fluid layout)
- Vanilla JavaScript: мобильное меню, scrollspy, reveal-анимации, год в футере
- Без сборки, фреймворков и npm-зависимостей
- Google Fonts (Playfair Display, Golos Text, JetBrains Mono) с системными
  фолбэками — при отсутствии сети сайт остаётся читаемым

## Файлы

```text
index.html        разметка и весь контент
styles.css        дизайн-система, адаптив, обложки проектов
script.js         меню, навигация, анимации появления
assets/avatar.jpg локальный аватар
```

## Запуск

Самый простой способ — открыть `index.html` двойным щелчком: сайт работает по
`file://` без сервера.

Если нужен локальный сервер (например, для проверки в другом браузере):

```powershell
python -m http.server 8000
```

Затем откройте <http://localhost:8000>.

## Публикация на GitHub Pages

1. Создайте репозиторий (для адреса вида `maka-o.github.io` он должен
   называться `MAKA-O.github.io`).
2. Загрузите `index.html`, `styles.css`, `script.js` и папку `assets`.
3. В **Settings → Pages** выберите **Deploy from a branch**, ветку `main` и
   папку `/ (root)`.
4. Через минуту сайт будет доступен по адресу из раздела Pages.

Сборка не требуется: все пути относительные.

## Что можно настроить

- **Фото** — замените `assets/avatar.jpg`, сохранив имя файла.
- **Тексты** — блоки «О себе», описания проектов и подписи находятся в
  `index.html`.
- **Ссылки и почта** — поиском по `MAKA-O` и `mrmmvo@gmail.com`.
- **Цвета и шрифты** — токены в `:root` в начале `styles.css`.
- **Проекты** — карточки устроены однотипно; обложки собраны из CSS/SVG, без
  растровых скриншотов.

## Источники данных

- Профиль: <https://github.com/MAKA-O>
- Проекты: [HH7d](https://github.com/MAKA-O/HH7d),
  [sit](https://github.com/MAKA-O/sit) (+ [демо](https://maka-o.github.io/sit/index.html)),
  [bl2](https://github.com/MAKA-O/bl2),
  [VUE1](https://github.com/MAKA-O/VUE1)
- Аватар: GitHub-профиль пользователя

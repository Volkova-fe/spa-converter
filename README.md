## Конвертер валют
___
## Обзор

Резиновая верстка веб-страницы

Функционал:
 * Приложение из двух страниц
 * Конвертер из одной валюты в другую - На этой странице есть текстовое поле, в которое можно ввести текст получить результат.
 * Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20
Default значение базовой валюты определять по языку браузера.
___
## Использованные технологии
* HTML
* CSS
* React - JSX (модульный подход с использованием import, export)
* Hooks
* Redux (redux-thunk)
* React Router v5.2.1
* Установка заготовенного CRA - npx create-react-app react-burger --template typescript 
* Библиотека готовых компонентов - MUI CORE
* Библиотека - money.js
* Библиотека - lodash
* Библиотека - axios
 
* Организована файловая структура : 
  - Компоненты в директории components/, экшены и редьюсеры - services/, роутинг - router/, страницы - pages/
  - Каждый компонент хранится в отдельной директории
  - Для стилизации некоторых компонентов используются CSS-модули 
  - Директории и файлы компонентов в нотации kebab-case

___
## Тестовая версия SPA

* [Ссылка на страницу проекта github](https://volkova-fe.github.io/spa-converter/)

___
## Локальная установка и запуск

```
Клонировать репозиторий
  git clone git@github.com:Volkova-fe/spa-converter.git

Войти в проект через консоль
  cd spa-converter

Установить зависимости
  npm install

Старт сервера
  npm start
```
___
## Исправить

1. Нет кеширования, смотреть здесь https://docs.openexchangerates.org/reference/etags
2. Селектор с валютами: самые ходовые должны быть сверху, в селекторе должны быть не только коды, но и расшифровка на языке пользователя. Селектор должен быть не только с выбором, но с поиском\подсказкой при вводе.
3. Поддержка локализации, сейчас строки прямо в коде, нужно выносить их сразу в настройки https://www.i18next.com/ как минимум. Чтобы была возможность динамически изменить, тогда добавить поддержку языка в дальнейшем не составит труда даже если сейчас она не нужна.
4. Структурирование кода: не выделены самые ключевые компоненты форма конвертации и список курсов валют. Это нужно чтобы при необходимости легким движением руки превратить код в библиотеку для повторного использования.
5. Инициализация: если мы говорим о виджете, то в index.jsx инициализиру приложение как функцию, которая получает параметры относительно которых запускается как приложение с навигацией, либо просто выводит виджет в указанном месте.
6. Вывод: инпуты с вводом и выводом без имен и обрамлены отдельной формой. Форма в режиме приложения ок, но в режиме виджета он должен встроиться туда куда поместят и для этого у инпутов должны быть имена, либо делают скрытые поля куда помещают значение, которое далее будет использоваться формой и иным кодом.
7. Компонент с формой всегда должен быть выделен и настраиваться под контекст, это опять же не накладывает избыточного кода, но позволяет сделать его универсальнее.

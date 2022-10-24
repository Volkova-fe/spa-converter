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
* Использована библиотека готовых компонентов - MUI CORE
* Использована библиотека - money.js
* Использована библиотека - lodash
 
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

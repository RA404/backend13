# server express
Разработка бэкенда для проекта (Mesto)

# description
Подключение к базе данных MongoDB

# API 
Запрос: GET localhost:3000/users Ответ: JSON-список всех пользователей

Запрос: GET localhost:3000/cards Ответ: JSON-список всех карточек

Запрос: GET localhost:3000/users/8340d0ec33270a25f2413b69 Ответ: JSON-user с таким идентификатором. Если такого нет JSON:{ "message": "Нет пользователя с таким id" }

Запрос: Несуществующий адрес Ответ: JSON: { "message": "Запрашиваемый ресурс не найден"}

## How to install
1. Склонировать проект
* git clone git@github.com:RA404/backend13.git
2. Установите экпресс и пакеты
* npm init -y
* npm install express
* npm i body-parser
3. Установить зависимости для разработчика
* npm install nodemon -D
* npm install eslint --save-dev   
* npm i eslint-config-airbnb-base --save-dev
* npm i eslint-plugin-import --save-dev
4. Установить mongodb
5. Установить mongoose для взаимодействия с mongodb
* npm i mongoose
6. Запустить mongo
* Зайти в папку bin mongodb
* В терминале запустить команду $ mongod --dbpath <путь к базе данных>
* В новом окне терминала запустить команду mongo
7. Запустить сервер в среде для разработки
* Из папки с проектом запустить команду npm run dev
8. Запустить продакшн версию
* Из папки с проектом запустить команду npm run start

# Project link 
[https://github.com/RA404/backend13](https://github.com/RA404/backend13)

## Version v0.0.1
v0.0.1 - первая версия проекта
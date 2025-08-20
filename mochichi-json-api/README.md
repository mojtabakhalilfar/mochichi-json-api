# Mochichi JSON API

این یک وب‌سرویس ساده Node.js است که فایل `data.json` شما را به صورت API منتشر می‌کند.

## مسیرها
- `/menu`
- `/articleHome`
- `/banner`
- `/discount`
- `/category`
- `/categoris`
- `/mostpopular`
- `/newblog`
- `/bestchoice`
- `/blogs`
- `/blog`
- `/product`
- `/commentsP`
- `/commentsB`

## اجرای محلی
```bash
npm install
npm start
```
سپس:
- http://localhost:8000/menu
- http://localhost:8000/product/1

## دیپلوی روی Render
1. این پروژه را در یک ریپازیتوری GitHub قرار دهید (همراه با `data.json`).
2. در Render → New → Web Service
3. Build Command لازم نیست.
4. Start Command:
```
npm start
```
5. بعد از دیپلوی، آدرس‌ها مانند زیر خواهند بود:
```
https://YOUR-SERVICE.onrender.com/menu
https://YOUR-SERVICE.onrender.com/product
```

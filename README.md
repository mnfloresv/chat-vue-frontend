# chat-vue-frontend

Frontend of web chat application that allow users to join rooms and communicate in real time.

This project includes the user interface of the app made with Vue.js, for the backend part see: https://gitlab.com/manufloresv/chat-ror-backend

## Demo

A demo of the application is available at: https://chat-vue-frontend.netlify.com/

![Screenshot](https://i.imgur.com/8st8SOS.png)

## Technologies

* Vue.js
* vue-router
* vue-resource
* actioncable
* Bootstrap 4

## Set up environment

For running a clean clone of the app:

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

```
You must run also the backend project for server calls.

By default `API_URL` and `ACTIONCABLE_URL` environment variables in `config/dev.env.js` are both pointing to `localhost:3000`

## Credits

Chat icon made by DinosoftLabs from Flaticon is licensed by CC 3.0 BY: https://www.flaticon.com/free-icon/chat_717947

@ECHO OFF 

start /b nodemon ./server/server.js

start /b yarn serve

EXIT

PAUSE>NUL
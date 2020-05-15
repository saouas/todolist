# Todolist
Online todolist.

This todolist is very helpful if you are someone who often forgets 🤔.

## Backend

Backend API REST hosted on a static VM instance.

*3 routes :*
- GET ALL
- POST ADD
- POST DEL

***How to deploy ?***
1) Set up your VM instance.
2) Create firewall rules to open your PORT
3) Using pm2 cli : `pm2 start server.js --name backend_todolist`

**Stack :**
- ExpressJS
- Redis

## Frontend

Frontend deploy with Varcel Zeit/now.

***How to deploy ?***
1) delete node_modules and package lock
2) using now-cli : `now login`
3) using now-cli : `now -e FOO=BAR` then test that all works fine.
4) using now-cli : `now --prod -e FOO=BAR`

**Stack :**
- Nextjs
- Reactjs
- Axios

## Test

Link : [Todolist](https://todolist.salimaouas.dev)

Enjoy 😊

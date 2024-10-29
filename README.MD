# ToDo List Web Application
## How to run in docker:
### 1. Set .env variables
- DB_USER=
- DB_PASSWORD=
- DB_HOST=
- DB_PORT=
- DB_DATABASE=
- DATABASE_URL=
### 2. Run Docker Compose
```shell
docker-compose up
```
###
___
## How to run locally:
### 1. Set up own postgres DB
### 2. Set .env variables as above for docker
### 3. Install dependencies
```shell
# cd to the project folder
npm install
cd view
npm install
```
### 4. Start local servers
```shell
# cd to the project folder
npm run migrate-and-start
cd view
npm run start
```
### 5. Optional - build frontend
```shell
# cd to the project folder
cd view
npm run build
serve -s build
```
## How to access servers:
#### Frontend: http://localhost:3000/
#### Backend: http://localhost:8000/api/

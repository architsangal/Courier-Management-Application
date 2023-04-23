# Courier-Management-Application
SPE Major Project

start docker
minikube start
minikube tunnel

npm run build
docker build -t architsangal/courier_react:latest .
docker push architsangal/courier_react:latest

mvn clean install
docker build -t architsangal/courier_react:latest .
docker push architsangal/courier_spring_boot:latest

http://courier-management/temp/?#/login
http://springboot.com/api/


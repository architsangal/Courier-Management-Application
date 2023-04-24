# Courier-Management-Application
SPE Major Project

```
start docker
minikube start
minikube tunnel

npm install
npm run build
docker build -t architsangal/courier_react:latest .
docker push architsangal/courier_react:latest

mvn clean install
docker build -t architsangal/courier_spring_boot:latest .
docker push architsangal/courier_spring_boot:latest
```
- http://courier-management/temp/?#/login
- http://springboot.com/api/



In case MySQL in not working in local system:

```
$ brew uninstall mysql
$ brew install mysql
$ sudo pkill mysqld # (multiple times)
$ cd /usr/local/mysql/bin
$ sudo mysqld_safe --skip-grant-tables --skip-networking # should give Starting mysqld daemon with databases from /opt/homebrew/var/mysql
```
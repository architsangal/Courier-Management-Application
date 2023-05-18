# Courier-Management-Application

Basic Commands to run manually:
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

Accessing frontend and backend
- http://courier-management/temp/?#/login
- http://springboot.com/api/


Prometheus Grafana
http://localhost:3000/login
- username: admin
- password: prom-operator

In case MySQL in not working in local system:

```
$ brew uninstall mysql
$ brew install mysql
$ sudo pkill mysqld # (multiple times)
$ cd /usr/local/mysql/bin
$ sudo mysqld_safe --skip-grant-tables --skip-networking # should give Starting mysqld daemon with databases from /opt/homebrew/var/mysql
```

GROK
```
%{TIMESTAMP_ISO8601:timestamp} \[%{LOGLEVEL:level}\] %{DATA:class} \[%{DATA:thread}\] \[%{WORD:type}\] %{WORD:type_val} \[%{WORD:method}\] %{WORD:method_val} \[%{WORD:apiName}\] %{WORD:apiName_val} \[%{WORD:caller}\] %{WORD:caller_val} \[%{WORD:status}\] %{WORD:status_val}
```

Logs
```
kubectl cp default/springboot-9594b4f67-svq5k:logs/ ~/logs/
kubectl cp default/<name of the pod>:logs/ ~/logs/ # (Don't put it like pod/<name of the pod>)
```

To exec into the pod
```
kubectl exec -it pod/springboot-9594b4f67-svq5k bash
```

To filter the custom logs:
```
cat controllerLog.log | grep CALLER >> ~/Downloads/a.log
```

ELK Log
- http://localhost:5601/app/lens#/?_g=(filters:!(),refreshInterval:(pause:!t,value:60000),time:(from:'2023-05-08T18:39:23.507Z',to:'2023-05-09T16:53:50.347Z'))
- http://localhost:5601/app/lens#/?_g=(filters:!(),refreshInterval:(pause:!t,value:60000),time:(from:'2023-05-08T18:39:23.507Z',to:'2023-05-09T16:53:50.347Z'))
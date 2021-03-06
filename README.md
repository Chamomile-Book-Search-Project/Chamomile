# Check this out (이미지 기반 책 정보검색 웹 서비스) 

## Introduce web service
------------------
Check this out is an image-based book information search web service that analyzes the book cover when a user inserts an image of the book cover and informs the category, title, writer, publisher, and price of the book.


![github](https://user-images.githubusercontent.com/76832303/154727170-272b4883-c5ca-4710-b145-19071a79d2a0.gif)



### System Architechure
---------------------------------------
![Chamomile drawio (4)](https://user-images.githubusercontent.com/76832303/154666423-e402d5f6-4f3a-4ea7-bd74-204571d3a696.png)

### Tech Stack 
~~~~~~~~~~~~~~~~~~~~~~
Frontend : React
Backend : Flask 
WSGI : gunicorn 
WebServer : Nginx
Database : MongoDB, ElasticSearch 
Open API : Clova OCR API 
Etc : Docker, Prometheus, Grafana, Kibana
~~~~~~~~~~~~~~~~~~~~~~
### Frontend 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

### Backend & Crawling
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"><img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white"><img src="https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=Gunicorn&logoColor=white">

### DataBase 
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>

### Search engine
<img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=Elasticsearch&logoColor=white">


### etc 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"><img src="https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=Kibana&logoColor=white"><img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white"><img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white">

### Initialization

- clone repository

~~~~~~~~~~
$ git clone https://github.com/Chamomile-Book-Search-Project/Chamomile.git
$ cd Chamomile
~~~~~~~~~~~~

- Docker build up 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
docker-compose up --build
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Team Chamomile
-----------------
2022 성남청년 Silicon Vally Pre Intership program - Team D 

                              

|          김서진          |         김의빈           |          김주원           |          손정민         |
| ------------------------| ------------------------ | ------------------------ | ------------------------|  
|        Frontend        |        Backend          |       AI -> frontend     |         Backend        |
|                         |             DB           |                          |         Crawling        |
|                         |           Server         |                          |                         |                       |                         |                     |                         |                          |                          |                         |
|                         |       etc Setting        |                          |                         | 
|                         |                          |                          |                         | 

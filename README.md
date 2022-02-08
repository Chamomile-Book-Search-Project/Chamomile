# Chamomile 진행상황 & 계획 작성 

# Docker < 김의빈 > 

## 예상기간 
1/28~1/30 : 개발환경 내 Docker 구축 예정 (1/31 : nginx , frontend까지는 Dockerfile 완성 이후 부분에 대한 보강 필요 )
<br>
2/2 : 위 내용에 대한 내용 완료 Docker build up 완료 (하지만 오류 생김) 
<br>
2/7 : 개발환경에 대한 연결 완료 (배포까지 두고 작성했기에 해당 부분 약간만 수정해서 배포로 사용해도 무관 ) 
<br> 
## 진행방안 
1/27 : 작성 및 공부를 진행하며 아직 데이터 수집을 해야하기에 이에 따른 Back-end file에 쓸 내용이 없음 + Front도 마찬가지 <br>
1/31 : requirements로 필요한 내용들을 분리하여 관리해줌으로서 현재 진행중, 더 공부를 하며 채워나가고 있는 중 
<br>
진행 순서 : 1. 데이터 수집 후, DB 구축 -> DB 제작 -> flask 연결 후 Dockerfile 작성 순으로 가는것이 맞는거같아 보인다. 
<br> 
1/28 yml 파일과 , nginx파일에 대한 dockerfile 작성완료 해당부분 점검을 다시 해보긴해야됨 
<br>
2/2 : Docker build up 완료 backend not module found에 대한 문제 해결 진행해야함
<br>
2/3 : Docker build up 전반적으로 다 클리어 ( compose 이후 mongodb 데이터 넣는 부분에 대해서 이야기해봐야할거같음 ) 
<br>
2/6 : Docker monogoDB 연결 확인 
<br> 
2/7 : Docker container간의 공유 오케스트레이션 진행하였음 
<br> 
2/9 : MongoDB 연결 문제 해결 

# Back-end < 김의빈 , 손정민 > 
## 진행방안 
1/27 전반적인 Flask 구조 파악 및 간단한 페이지 작성 성공 (아직까지 채울내용은 딱히 있어보이진 않음) <br>
1/28 React와 api 연동을 진행하여야 함 / 현재 올라가 있는 html 파일 연결시도해봤는데 해당 방법 보다는 React연결에 초점을 맞춰야할것같음 


1/28~ 데이터가 생기기 전, 몽고db의 예제 데이터를 가져와 flask를 이용해 화면에 띄워보는 연습을 하고 있음. 
      예제파일을 클러스터로 불러오는 것 완료. 데이터 띄우는 코드 작성 80%(모듈을 불러올 수 없다는 오류 해결 중). 렌더링 되는 html파일 작성 중 
      
1/31 : 몽고db 템플릿 소스코드 작성완료 (해당 부분이제 우리 입맛에 맞게 수정해야하는 작업 필요)

<br> 

2/9 : 전반적 코드 구성 및 Mongo DB에 연결구도 확인 완료 앞으로의 진행상황 주석으로 다 달아놈 

# Front-end < 김서진 > 
figma에서 디자인한 것을 html로 가져와서 적용하려고 하는 중이나 component의 위치가 깨져서 업로드 되기 때문에 위치를 지정하는 요소를 넣어주고 위치를 잡을 예정

# AI < 김주원 > 
2/4 : front으로 포지션 변환 

# Ngnix & Gunicorn <김의빈>
## 진행방안 
연결 후에 서비스 구축

# 현재까지의 진행 상황 
1/28 : 제대로 활용해본적이 없기에 어떻게 연결을 해야하는지, 파악하며 작성 진행중 <br>
2/6 : 컨테이너 이후 , 연결확인  + 리액트과의 포트 연결 주소 값이 일치하게 하도록 현재 진행중 

# 문제 (질문사항)
1/28 nginx.conf파일을 brew로 설치 이후, 생성된 부분에서 가져와서 프로젝트에 접해야하는것인지, 그게 아니라면 새로 작성후에 하는것이 맞는지 궁금 ... (멘토님에게 질문할 예정)
<br>
2/6 0.0.0.0:8080 으로는 nginx / 0.0.0.0:3000으로는 React로 각 따로 연결이되어있기에 이부분을 합치는 부분을 생각해봐야할거같다.
<br>
2/6 nginx에 계속하여 맵핑을 시켜줘도 초기 화면만 실행되었다. 
# 해결 
1/31 : 그대로 사용해도된다 라는 답변 / 다른 프로젝트를 토대로 살펴보았을때도 그냥 사용하신분 대다수 그래도 해당 부분에 대해 어떻게 작동되는지 알 필요성이 있어보임 
<br>
2/7 : 피드백을 통해 해당 build_file을 만들어 그 build_file을 nginx에 넣어 주는 것으로 해결 
<br> 
2/7 : docker-compose.yml에 image nginx :latest를 해줬었기에 , 만든 nginx Dockerfile이 아닌, Docker내장에 되어있는 이미지 파일이 연결되어 있어 작동이 안됬었던 것을 확인할 수 있었다. 그리고 세미클론....(;) 

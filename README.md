[![frontend deployment](https://github.com/Jinwook94/bootme/actions/workflows/frontend-deploy.yml/badge.svg)](https://github.com/Jinwook94/bootme/actions/workflows/frontend-deploy.yml)
[![backend deployment](https://github.com/Jinwook94/bootme/actions/workflows/backend-deploy.yml/badge.svg)](https://github.com/Jinwook94/bootme/actions/workflows/backend-deploy.yml)

## 프로젝트 소개
- 개발자 커뮤니티 & 소프트웨어 커리큘럼 Aggregator 웹 서비스

<br>

## 주요 기능
<img src="https://github.com/Jinwook94/bootme/assets/44575214/a7c8fad7-2db3-44fa-8f08-cf8c28b4bc80">
<img src="https://github.com/Jinwook94/bootme/assets/44575214/b4f85fed-a6f9-4ae2-9c9f-60486b8f4820">

<br>

## 기술 스택
- Java 17, TypeScript 4.8.4
- Spring Boot 3.1.4, React 18.2.0, MariaDB 10.5.20
- AWS CodeDeploy, CloudFront, EC2, S3, Secrets Manager

<br>

## 인프라

<details>
  <summary>운영환경 아키텍처</summary>

  <img src="https://github.com/Jinwook94/bootme/assets/44575214/3bade8d0-6b3c-430e-8a53-f31485c2f6a4">
</details>

<details>
  <summary>스테이징 환경 아키텍처</summary>

  <img src="https://github.com/Jinwook94/bootme/assets/44575214/16178a70-34e0-4647-976e-ffbeba3da62f">
</details>

<details>
  <summary>로컬 개발 환경 아키텍처</summary>

  <img src="https://github.com/Jinwook94/bootme/assets/44575214/f0c16ceb-450a-46aa-845a-765e119c595c">
</details>

<details>
  <summary>프론트엔드 CI/CD</summary>

  <img src="https://github.com/Jinwook94/bootme/assets/44575214/61817685-222f-4bf8-a10d-9cffaf13d994">
</details>

<details>
  <summary>백엔드 CI/CD</summary>

  <img src="https://github.com/Jinwook94/bootme/assets/44575214/2569b04f-74e8-457a-815e-5d641afce6c1">
</details>


### CloudWatch 모니터링

```mermaid
flowchart LR

subgraph EC2
    subgraph Springboot
        1[Tomcat]
				2[ApplicationLogic]
    end
		subgraph Logs
			3
			4
			5
			6
		end
end

1 --logback--> 3[accessLog-text.log]
1 --logback--> 4[accessLog-json.log]
2 --logback--> 5[generalLog-text.log]
2 --logback--> 6[generalLog-json.log]

subgraph CloudWatch
	7[ Log Groups<br>ㅡㅡㅡㅡㅡㅡㅡㅡㅡ<br> springboot/access/text <br> springboot/access/json <br> springboot/general/text <br> springboot/general/json <br>]
end

Logs --CloudWatch Agent--> CloudWatch

Springboot:::springboot
CloudWatch:::cloudwatch
classDef springboot fill:#a7f49a,stroke:#FFF
classDef cloudwatch fill:#f2d5e0, stroke:#FFF
```

## API 문서

- https://api.bootme.co.kr/docs/swagger/index.html
- https://api.bootme.co.kr/docs/rest/index.html

<br>

---
title: "HTTP 클라이언트 도구들(HTTPie, curl)"
date: 2026-11-07 16:00:00 +0900
categories:
  - tools
tags:
  - http
last_modified_at: 2026-11-07 16:00:00 +0900
---

HTTP 요청을 생성하고 전송할 수 있는 대표적인 CLI 도구로는 **HTTPie**와 **curl**이 있습니다. 두 도구 모두 GET, POST 등의 HTTP 요청을 전송하고, 헤더·쿠키·요청 바디 등을 조작할 수 있습니다.

- **HTTPie**: 직관적인 문법을 HTTP 요청을 작성하고 응답을 읽기 쉽게 확인하는 HTTP 클라이언트
- **curl**: 다양한 옵션을 조합하여 HTTP 요청을 세밀하게 제어하는 범용 데이터 전송 도구

# 주요 명령어

| 기능       | HTTPie        | curl             |
| -------- | ------------- | ---------------- |
| GET 요청   | http URL      | curl URL         |
| POST 요청  | http POST URL | curl -X POST URL |
| HEAD 요청  | http HEAD URL | curl -I URL      |
| 응답 헤더 포함 | http -h URL   | curl -i URL      |
| 상세 통신 정보 | http -v URL   | curl -v URL      |
| 리다이렉션 추적 | http -F URL   | curl -L URL      |
| 조용한 출력   | http -q URL   | curl -s URL      |

# HTTP 메서드 지정

| 기능          | HTTPie | curl    |
| ----------- | ------ | ------- |
| HTTP 메서드 지정 | 메서드명   | -X 메서드명 |
| 기본 GET 요청   | 생략 가능  | 생략 가능   |

- http: 메서드 지정
```zsh
http GET https://example.com
http POST https://example.com
http PUT https://example.com
http PATCH https://example.com
http DELETE https://example.com
http OPTIONS https://example.com
http HEAD https://example.com
```

- curl: -X 옵션 사용
```zsh
curl -X GET https://example.com
curl -X POST https://example.com
curl -X PUT https://example.com
curl -X PATCH https://example.com
curl -X DELETE https://example.com
curl -X OPTIONS https://example.com
curl -I https://example.com
```

# HTTP Header 지정

| 기능    | HTTPie           | curl       |
| ----- | ---------------- | ---------- |
| 헤더 지정 | -H "Name: Value" | Name:Value |

```zsh
http GET https://example.com \
  User-Agent:"Mozilla/5.0" \
  Accept:application/json \
  Origin:https://example.org
```

```zsh
curl https://example.com \
  -H "User-Agent: Mozilla/5.0" \
  -H "Accept: application/json" \
  -H "Origin: https://example.org"
```

# HTTP Request Body 지정

| 기능        | HTTPie          | curl             |
| --------- | --------------- | ---------------- |
| 데이터 전송    | field=value     | -d               |
| JSON      | 기본              | --json           |
| Form      | -f              | -d               |
| Multipart | --multipart     | -F               |
| Binary    | 파일 입력 및 스트리밍 방식 | --data-binary    |
| URL 인코딩   | field==value 등  | --data-urlencode |

## JSON 데이터 전송

```zsh
http POST https://example.com/api/users \
  username=admin \
  role=user
  
http POST https://example.com/api/users \
  username=admin \
  age:=25 \
  active:=true
```

```zsh
curl https://example.com/api/users \
  --json '{"username":"admin","role":"user"}'
```

## Form 데이터 전송

```zsh
http -f POST https://example.com/login \
  username=admin \
  password=1234
```

```zsh
curl -X POST https://example.com/login \
  -d "username=admin&password=1234"
```

## Multipart 파일 업로드

```zsh
http --multipart POST https://example.com/upload \
  file@test.txt
```

```zsh
curl https://example.com/upload \
  -F "file=@test.txt"
```

## 원시 데이터 전송

```zsh
http POST https://example.com/api/data \
  value=test
```

```zsh
curl https://example.com/api/data \
  --data-raw '{"value":"test"}'
```

# 쿠키 지정

| 기능         | HTTPie     | curl   |
| ---------- | ---------- | ------ |
| 쿠키 지정      | Cookie: 헤더 | -b     |
| 쿠키 파일 저장   | --session  | -c     |
| 저장된 쿠키 재사용 | --session  | -b 파일명 |
| 세션 유지      | 세션 파일      | 쿠키 파일  |

## 쿠키 직접 지정

```zsh
http GET https://example.com/mypage \
  Cookie:session=123456
```

```zsh
curl https://example.com/mypage \
  -b "session=123456"
```

## 여러 쿠키 지정

```zsh
http GET https://example.com/mypage \
  'Cookie:session=123456; role=admin'
```

```zsh
curl https://example.com/mypage \
  -b "session=123456; role=admin"
```

## 쿠키 저장 및 재사용

```zsh
# 세션 생성 및 쿠키 저장
http --session=login https://example.com/login

# 기존 세션 재사용
http --session=login https://example.com/mypage
```

```zsh
# 응답 쿠키 저장
curl -c cookies.txt https://example.com/login

# 저장된 쿠키 사용
curl -b cookies.txt https://example.com/mypage
```

# URL Query Parameter 지정

| 기능                 | HTTPie      | curl             |
| ------------------ | ----------- | ---------------- |
| Query Parameter 지정 | ==          | URL에 직접 작성       |
| GET 파라미터 반환        | 기본 GET + == | -G               |
| URL 인코딩            | 자동 인코딩      | --data-urlencode |

## GET 파라미터 전송

```zsh
http GET https://example.com/search \
  q==admin \
  page==1
```

```zsh
curl "https://example.com/search?q=admin&page=1"
```

## 파라미터 자동 인코딩

```zsh
http GET https://example.com/search \
  "q==hello world"
```

```zsh
curl -G https://example.com/search \
  --data-urlencode "q=hello world"
```

# Proxy 설정

| 기능     | HTTPie | curl    |
| ------ | ------ | ------- |
| 프록시 설정 | -x     | --proxy |
| 프록시 인증 | -U     | URL     |

## 기본 프록시 연결

```zsh
http --proxy=http:http://127.0.0.1:8080 \
  --proxy=https:http://127.0.0.1:8080 \
  GET https://example.com
```

```zsh
curl https://example.com \
  -x http://127.0.0.1:8080
```

## 프록시 인증

```zsh
http --proxy=http:http://username:password@127.0.0.1:8080 \
  GET https://example.com
```

```zsh
curl https://example.com \
  -x http://127.0.0.1:8080 \
  -U username:password
```

# 파일 다운로드

| 기능          | HTTPie | curl |
| ----------- | ------ | ---- |
| 원격 파일명으로 저장 | -d     | -O   |
| 지정 파일명으로 저장 | -o     | -o   |

## 파일 다운로드

```zsh
http --download https://example.com/test.zip
```

```zsh
curl -O https://example.com/test.zip
```

## 파일명 지정 다운로드

```zsh
http --download --output=result.zip \
  https://example.com/test.zip
```

```zsh
curl -o result.zip https://example.com/test.zip
```

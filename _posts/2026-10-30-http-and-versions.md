---
layout: post
title: "HTTP 프로토콜과 버전"
date: 2026-10-30 15:00:00 +0900
description: HTTP 버전별 정리
categories: [web, http]
tags: [web, http]
toc: true
last_modified_at: 2026-10-30 15:00 +0900
---

HTTP(Hypertext Transfer Protocol)는 웹 브라우저와 웹 서버가 데이터를 주고받기 위해 사용하는 애플리케이션 계층 프로토콜.

# 1. HTTP 버전별 정리

| 버전       | 발표 연도 | 주요 특징                      |
| :------- | :---: | -------------------------- |
| HTTP/0.9 | 1991  | GET만 지원, HTML 문서 전송        |
| HTTP/1.0 | 1996  | 헤더, 상태 코드, POST 지원         |
| HTTP/1.1 | 1997  | 지속 연결(Kepp-Alive), Host 헤더 |
| HTTP/2   | 2015  | 바이너리 프레이밍, 멀티플렉싱, HPACK    |
| HTTP/3   | 2022  | QUCI 기반, UDP 사용, QPACK     |

# 2. 버전별 핵심 특징

## HTTP/0.9
- GET 메서드만 지원
- 요청에 HTTP 버전 정보가 없음
- HTTP 헤더 미지원
- 응답은 HTML 본문만 전송
- 상태 코드 미지원

## HTTP/1.0
- Request / Response 구조 도입
- HTTP 헤더 지원
- 상태 코드 지원
- GET, POST, HEAD 등 메서드 지원
- 기본적으로 요청마다 TCP 연결 생성

## HTTP/1.1
- Persistent Connection 기본 지원
- Host 헤더 필수
- Chunked Transfer Encoding 지원
- 캐싱 기능 개선
- Pipelining 지원

## HTTP/2
- 텍스트 기반 메시지 대신 바이너리 프레이밍 사용
- Multiplexing 지원
- HPACK 헤더 압축
- 하나의 TCP 연결에서 여러 요청을 동시에 처리
- Server Push 지원 (현재는 브라우저에서 대부분 비활성화 또는 제거)

## HTTP/3
- TCP 대신 QUIC 사용
- UDP 기반 전송
- QPACK 헤더 압축
- 스트림 간 독립성 향상
- TLS 1.3 통합
- 네트워크 변경 시 연결 유지 기능 지원

---
# 참고
> [MDN Web Docs - HTTP resources and specifications](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Resources_and_specifications)

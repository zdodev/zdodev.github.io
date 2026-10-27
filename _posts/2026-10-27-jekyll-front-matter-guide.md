---
layout: post
title: "Jekyll에서 사용하는 Front Matter 정리"
date: 2026-10-27 15:30:00 +0900
description: jekyll front matter 정리
categories: [blog, jekyll]
tags: [github-pages, jekyll, chirpy]
toc: true
last_modified_at: 2026-10-27 15:30 +0900
---

# 주요 Front Matter

## Jekyll 기본 내장 변수 (Jekyll Core)

Jekyll 자체 엔진이 인식하여 사이트 빌드 시 직접 반영하는 기본 속성 리스트입니다.

| 속성 | 타입 | 설명 |
| :--- | :---: | :--- |
| `layout` | string | 사용할 레이아웃 템플릿 이름(post 등) |
| `title` | string | 글의 제목. 페이지 타이틀 및 메타태그에 반영 |
| `date` | date | 포스트 발행 시각 `YYYY-MM-DD HH:MM:SS +0900` 형태로 타임존까지 작성 |
| `published`| bool | 빌드 대상 포함 여부입니다. |
| `permalink` | string | 글의 최종 URL를 강제로 지정합니다. |
| `categories` | array, string | 글의 대분류/카테고리입니다. `[Web, Frontend]` 형태로 작성합니다. |
| `tags` | array, string | 검색 및 필터링용 태그 목록입니다. `[jekyll, github]` 형태로 작성합니다. |
| `toc` | bool | 목차(Table of Contents) 자동 생성 여부 (`true` / `false`). 테마별로 지원합니다. |
| `excerpt_separator` | string | 본문 요약의 기준 구분자 |

## SEO 및 소셜 공유 메타 변수 (jekyll-seo-tag 기반)

검색 엔진 최적화와 카카오톡, 트위터, 슬랙 등 링크 공유 시 미리보기를 생성하는 데 쓰입니다.

| `description` | string | SEO(검색 엔진)용 글 요약문입니다. |
| `image` | string | 링크 공유 시 카드 형태로 뜰 대표 썸네일 이미지 경로 |
| `author` | string | 작성자 이름 또는 _data/authros.yml에 등록된 작성자 ID |
| `last_modified_at` | date | 글의 최종 수정 시작 |
| `canonical_url` | string | 원본 출처 URL |
| `sitemap` | bool | false로 지정 시 검색엔진용 sitemap.xml에서 제외 |
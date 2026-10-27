---
layout: post
title: "GitHub Pages에 Jekyll Chirpy 테마 설치 가이드"
date: 2026-10-26 11:00:00 +0900
description: 블로그 chirpy 테마 설치 및 front matter 설명
categories: [blog, jekyll]
tags: [github-pages, jekyll, chirpy]
toc: true
last_modified_at: 2026-10-27 16:00 +0900
---

깔끔한 다크 모드, 모바일 반응형 디자인, 목차(TOC), 코드 하이라이팅, 검색 기능을 기본 지원하는 Chirpy 테마를 GitHub Pages에 설치하고 배포하는 전체 과정을 정리합니다.

과거에는 테마 소스 전체를 포크(Fork)해서 쓰는 경우가 많았으나, 현재는 공식 템플릿인 chirpy-starter를 사용하는 것이 업그레이드와 유지보수 측면에서 가장 안정적입니다.

# 사전 준비
- ruby 설치

```zsh
# ruby version manager 설치
brew install rbenv

# 설치 가능한 ruby version 확인
rbenv install -l

# ruby 설치
rbenv 3.3.13

# global 설정
rbenv global 3.3.13
```

# chirpy starter 저장소 생성

1. 공식 템플릿 저장소인 [cotes2020/chirpy-starter](https://github.com/cotes2020/chirpy-starter)에 접속합니다.
2. 우측 상단의 녹색 버튼 [Use this template] → [Create a new repository]를 클릭합니다.
3. 저장소 설정:
- Repository name: username.github.io (반드시 본인의 GitHub 사용자명과 일치해야 개인 도메인 루트로 연결됩니다.)
- Visibility: Public 선택
4. [Create repository]를 눌러 생성을 완료합니다.

# 의존성 설치

```zsh
# 1. 저장소 클론
git clone https://github.com/<username>/<username>.github.io.git
cd <username>.github.io

# 2. 필요한 Ruby 젬(Gem) 설치
bundle install
```

# 로컬 테스트 서버 구동

```zsh
bundle exec jekyll serve --livereload
```

정상 실행되면 http://127.0.0.1:4000 으로 접속하여 기본 화면이 뜨는지 확인합니다.

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
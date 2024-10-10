---
title: "macOS Ruby 최신버전 설치하기"
categories:
  - Ruby
last_modified_at: 2024-10-10 17:00:00
toc: true #Table of Contents
comments: true


---

macOS 시스템에 기본 설치된 ruby 버전은 낮은 버전으로 ruby를 활용한 작업을 진행할 때 문제가 발생할 수 있다.
따라서 시스템에 영향이 없으면서 최신 버전의 ruby를 설치하는 방법을 알아보았다!

아래 명령어를 터미널에서 입력하면 된다.

```shell
# rbenv 설치
brew install rbenv

# 설치된 ruby 버전 확인
rbenv versions

# 설치 가능한 ruby 버전 조회
rbenv install -l

# ruby {version} 설치
rbenv install {version}

# 설치한 ruby 버전 적용
rbenv global {version}
```

그리고 환경설정을 적용한다.

```shell
vi ~/.zshrc

# 아래 구문 삽입 후 저장
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"
```

터미널을 재실행하면 최신 ruby을 확인할 수 있다.

### 참고 URL

---

> [Ruby 설치하기](https://www.ruby-lang.org/ko/documentation/installation/)

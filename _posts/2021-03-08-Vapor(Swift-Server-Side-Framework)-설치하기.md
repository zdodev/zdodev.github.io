---
title: "Vapor(Swift Server Side Web Framework)"
categories: 
  - Vapor
  - Web Framework
last_modified_at: 2021-03-08 10:50:00
toc: true #Table of Contents
comments: true

---

## Vapor란?

Vapor는 Swift로 작성된 오픈소스 웹 프레임워크입니다. RESful API, 웹 앱을 지원하고, 웹 소켓을 사용하여 실시간 애플리케이션을 만드는데 사용할 수 있습니다. 그 외에도 ORM, 템플릿 언어 및 패키지를 제공하여 사용자 인증, 인가 기능을 용이하게 합니다.

---

### Vapor 설치하기

Vapor를 설치하기 위해서 `Xcode`, `homebrew` 가 설치되어 있어야 합니다. 이후 다음과 같이 Vapor를 설치할 수 있습니다.

1. 터미널에서 다음 명령어를 실행하여 Vapor를 설치합니다.

   ```bash
   brew install vapor
   ```

   ![2021-03-08-21-28.06-Vapor-install](/assets/image/2021-03-08-21-28.06-Vapor-install.png)

---

### Vapor 프로젝트 생성 및 서버 실행하기

Vapor 설치 후 프로젝트를 생성하고 서버에 접속하여 `Hello, world!` 화면을 출력할 수 있습니다.

1. 터미널에서 다음 명령어를 실행하여 새 프로젝트를 생성합니다.

   ```bash
   vapor new hello -n
   ```

   ![2021-03-08-21-29-00-Vapor-new-project](/assets/image/2021-03-08-21-29-00-Vapor-new-project.png)

2. 프로젝트 생성하면 다음 명령어를 실행하여 Xcode로 프로젝트를 열 수 있습니다.

   ```bash
   cd hello
   open Package.swift
   ```

   ![2021-03-08-21-29-19-open-Vapor](/assets/image/2021-03-08-21-29-19-open-Vapor.png)

3. Xcode에서 프로젝트를 실행합니다.

   ![2021-03-08-21-57-56-xcode-project](/assets/image/2021-03-08-21-57-56-xcode-project.png)

   중간에 `Developer Tools Access` 창이 뜨는데 인증하고 넘어갑니다.

   ![2021-03-08-21-58-51-access](/assets/image/2021-03-08-21-58-51-access.png)

4. 로컬에서 실행된 Vapor에 접근하면 `"Hello, world!"` 메시지를 확인할 수 있습니다.

   >http://127.0.0.1:8080/hello

![2021-03-08-22-08-13-hello](/assets/image/2021-03-08-22-08-13-hello.png)

### 참고 URL

---

[Vapor 공식 사이트](https://vapor.codes)

[Vapor GitHub](https://github.com/vapor/vapor)

[Vapor Wiki](https://en.wikipedia.org/wiki/Vapor_(web_framework))


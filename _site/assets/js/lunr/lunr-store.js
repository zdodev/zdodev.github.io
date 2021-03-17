var store = [{
        "title": "first post",
        "excerpt":"zerodotone의 첫 포스팅인 것인가      이것은 인용인 것인가            이것은 단락인 것인가 header 2 인 것인가       func swift() { \tprint(\"이것은 코드인 것인가\") }   이것은 코드인 것이다.           하나 둘 셋       이것은 하나 둘 셋 인 것인가      내 블로그인 것이야   ","categories": ["etc"],
        "tags": [],
        "url": "/etc/first-post/",
        "teaser": null
      },{
        "title": "iOS link",
        "excerpt":"링크 모음   Xcode 프로젝트 컨벤션: Xcode 프로젝트 구성 시 네이밍 컨벤션 도움글.   ","categories": ["iOS"],
        "tags": [],
        "url": "/ios/iOS-link/",
        "teaser": null
      },{
        "title": "UML Class Diagram with Swift",
        "excerpt":"Class Diagram, 클래스 다이어그램   클래스 다이어그램은 클래스 내부의 정적인 내용이나 클래스 사이의 관계를 표현할 수 있는 다이어그램이다. 클래스 내부의 변수, 메서드를 표현하고 각 클래스간의 관계(상속, 참조 등)을 나타낼 수 있다. 한 마디로 소스코드에 나타난 타입간의 의존 관계를 모두 나타낸다.   클래스 다이어그램의 구성 요소         abstract: 추상 클래스는 구현체가 없는 1개 이상의 추상 메서드를 가지고 있는 클래스입니다.   annotation: annotation의 경우 Java 5에서 추가된 기능으로 @Override, @Deprecated 와 같은 annotation이 있다.   class: 객체지향 언어에서의 클래스입니다.   entity: 시스템이 동작할 때 오랫동안 그 값이 유지되어야 하는 클래스?   enum: 열거형을 나타냅니다.   interface: 인터페이스를 나타냅니다.   관계의 종류   클래스간에는 다양한 관계가 있을 수 있으며 표현 방식도 다양합니다.      Association   Inheritance, Generalization   Implementation, Realization   Dependency   Aggregation   Composition   Association, 연관 관계   다른 객체의 참조를 가지는 인스턴스 변수를 가지고 있을 때 두 클래스는 연관 관계라고 합니다. 아래 그림은 Phone 클래스가 Button 클래스를 참조하는 연관 관계를 보여줍니다.      연관 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   class Phone {   \t// buttons 프로퍼티의 타입이 Button 클래스     let button: Button }  class Button {      }     Inheritance, Generalization, 상속 관계, 일반화 관계   객체지향 개념에서 상속을 나타내는 관계입니다. 한 클래스가 다른 클래스를 포함하는 상위 개념일 때 이를 일반화 관계라고 합니다. 아래 그림은 SalariedEmployee 클래스가 Employee 클래스를 상속하는 관계를 보여줍니다.      상속 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   class Employee {    }  class SalariedEmployee: Employee {    }     Implementation, Realization, 구현 관계, 실체화 관계   객체지향 개념에서 (인터페이스) 구현을 나타내는 관계입니다. 한 클래스가 인터페이스를 구현할 경우 이를 실체화 관계라고 합니다. 아래 그림은 ButtonListenerAdapter 클래스가 ButtonListener 프로토콜을 구현하는 관계를 보여줍니다.      구현 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   protocol ButtonListener {    }  class ButtonListenerAdapter: ButtonListener {    }     Dependency, 의존 관계   한 클래스가 다른 클래스를 참조하는 관계입니다. 한 클래스의 내부 프로퍼티에 저장하지 않고 사용하는 관계를 의존 관계라고 합니다. 아래 그림은 User 클래스가 Scheduel 클래스를 의존하는 관계를 보여줍니다.      의존 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   class Schedule {     func date() {            } }  class User {     func createSchedule() -&gt; Schedule {         Schedule()     }        func useSchedule(schedule: Schedule) {         schedule.date()     } }     Aggregation, 집합 관계   클래스 사이에서 전체 또는 부분 같은 관계를 나타냅니다. 한 클래스가 다른 클래스를 내부 프로퍼티로 가지고 있지만 라이프 타임이 독립적인 관계를 집합 관계라고 합니다. 아래 그림은 Whole 클래스와 Part 클래스의 집합 관계를 보여줍니다.      집합 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   class Part {    }  class Whole {     let part: Part \t\t// 외부에서 Part를 받아옵니다. Whole 클래스가 deinit이 되어도 Part는 deinit 되지 않습니다.     init(part: Part) {         self.part = part     } }     Composition, 합성 관계   클래스 사이에서 전체 또는 부분 같은 관계를 나타냅니다. 한 클래스가 다른 클래스를 직접 생성하고 내부 프로퍼티에 할당하여 가지고 있어 라이프 타임이 종속적인 관계를 합성 관계라고 합니다. 아래 그림은 Ward 클래스와 Owner 클래스가 합성 관계에 있는 것을 보여줍니다.      합성 관계를 소스코드로 다음과 같이 표현해 볼 수 있습니다.   class Ward {    }  class Owner {     let ward: Ward = Ward() }   ","categories": ["UML","Swift"],
        "tags": [],
        "url": "/uml/swift/UML-Class-Diagram/",
        "teaser": null
      },{
        "title": "macOS 초기 설정하기",
        "excerpt":"키보드 누르고 있을 때 반복 입력하도록 수정   터미널이나 메모장에서 키보드를 누르고 있으면 문자가 하나만 입력되는데 키보드를 누르고 있으면 계속 입력되도록 변경하려면 터미널에서 다음의 명령을 실행합니다.   defaults write -g ApplePressAndHoldEnabled -bool false   해당 명령을 실행하고 프로그램을 다시 실행시키면 문자를 계속 입력 할 수 있습니다.     중간중간 점(.) 입력될 때 해당 기능 끄기   타이핑 시 중간에 점(.)이 입력될 때가 있다. 원인을 알아보니 스페이스 바를 두 번 누르면 입력이 되는 데 해당 기능이 방해가 된다면 키보드 환경 설정에서 해당 기능을 끌 수 있다.      설정 경로     🍏 &gt; System Preferences &gt; Keyboard &gt; Text    Add period with double-space 메뉴의 체크박스를 해제하면 된다.     ","categories": ["macOS","Preferences"],
        "tags": [],
        "url": "/macos/preferences/macOS-%EC%B4%88%EA%B8%B0-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Vapor(Swift Server Side Web Framework)",
        "excerpt":"Vapor란?   Vapor는 Swift로 작성된 오픈소스 웹 프레임워크입니다. RESful API, 웹 앱을 지원하고, 웹 소켓을 사용하여 실시간 애플리케이션을 만드는데 사용할 수 있습니다. 그 외에도 ORM, 템플릿 언어 및 패키지를 제공하여 사용자 인증, 인가 기능을 용이하게 합니다.     Vapor 설치하기   Vapor를 설치하기 위해서 Xcode, homebrew 가 설치되어 있어야 합니다. 이후 다음과 같이 Vapor를 설치할 수 있습니다.           터미널에서 다음 명령어를 실행하여 Vapor를 설치합니다.       brew install vapor                    Vapor 프로젝트 생성 및 서버 실행하기   Vapor 설치 후 프로젝트를 생성하고 서버에 접속하여 Hello, world! 화면을 출력할 수 있습니다.           터미널에서 다음 명령어를 실행하여 새 프로젝트를 생성합니다.       vapor new hello -n                       프로젝트 생성하면 다음 명령어를 실행하여 Xcode로 프로젝트를 열 수 있습니다.       cd hello open Package.swift                       Xcode에서 프로젝트를 실행합니다.              중간에 Developer Tools Access 창이 뜨는데 인증하고 넘어갑니다.                   로컬에서 실행된 Vapor에 접근하면 \"Hello, world!\" 메시지를 확인할 수 있습니다.              http://127.0.0.1:8080/hello               참고 URL     Vapor 공식 사이트   Vapor GitHub   Vapor Wiki   ","categories": ["Vapor","Web Framework"],
        "tags": [],
        "url": "/vapor/web%20framework/Vapor(Swift-Server-Side-Framework)-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "macOS 업데이트 후 개발도구 에러 해결하기(xcrun error)",
        "excerpt":"xcrun: error: invalid active developer path 에러 해결하기   macOS 업데이트 후 xcrun: error: invalid active developer path 관련 에러가 출력될 때가 있습니다. 특히 Big Sur 업데이트 이후 계속 발생하여 해결방법을 정리해보았습니다.      다음 명령어를 실행하여 command line developer tools를 재설치하면 문제가 해결됩니다.   xcode-select --install   ","categories": ["macOS"],
        "tags": [],
        "url": "/macos/macOS-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%9B%84-%EA%B0%9C%EB%B0%9C%EB%8F%84%EA%B5%AC-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "macOS Command Line Tool 프로젝트에 Unit Test 추가하기",
        "excerpt":"macOS 프로젝트에서 테스트 생성하기   Xcode에서 순수하게 Swift만을 다루기 위해 macOS Command Line Tool 프로젝트를 생성할 때가 종종 있는데, 이때 테스트를 포함해서 생성하는 기능이 없어서 프로젝트 생성 후 Unit Test를 추가하는 방법을 정리해보았습니다.   Xcode를 실행한 후 Create a new Xcode project를 클릭합니다.      macOS 플랫폼에서 Command Line Tool을 선택합니다.      Product Name을 입력한 후 프로젝트를 생성합니다.      프로젝트 환경설정 중앙 왼쪽에 있는 TARGETS 탭  가장 하단의 + 버튼을 클릭합니다.      macOS 플랫폼에서 Unit을 검색하여 Unit Testing Bundle 을 선택합니다.      Product Name 을 입력하고 테스트를 생성합니다.      화면 상단의 터미널 아이콘이 있는 MyApp 을 클릭합니다. (아까 클릭한 TARGETS 탭에서 최상단으로 바로 올라가면 됩니다.) 클릭 후 Edit Scheme 을 클릭합니다.      Test 탭에서 하단의 + 버튼을 클릭합니다.      이전에 생성한 Test를 선택하고 Add 를 클릭합니다.      main.swift 에서 테스트할 코드를 작성하고 오른쪽 Target Membership 탭에서 Tests(생성한 테스트이름) 체크박스를 선택합니다.      테스트 코드를 작성하고 테스트를 수행하면 정상적으로 테스트가 수행되는 것을 확인할 수 있습니다.😎     ","categories": ["macOS","XCTest"],
        "tags": [],
        "url": "/macos/xctest/macOS-Command-Line-Tool-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-Unit-Test-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Swift에서 커맨드라인으로 입력받고 조작하기",
        "excerpt":"Swift에서 키보드, 커맨드라인(표준입력)으로 입력받는 방법   Swift에서는 표준입력 받는 함수를 readLine(strippingNewline:)으로 정의하고 있습니다. readLine() 함수는 다음과 같이 정의되었습니다.   func readLine(strippingNewline: Bool = true) -&gt; String?   readline 함수는 입력을 받아서 문자열을 반환하는데 만약 파일의 끝에서 다시 한 번 호출할 경우 nil을 반환합니다.   strippingNewline 파라미터는 개행문자와 문자조합을 문자열에서 제거 여부를 나타냅니다. 디폴트로 true로 설정되어있으며 개행문자와 문자조합이 제거됩니다.   키보드에서 입력을 받으면 문자열 옵셔널이 반환되므로 옵셔널 바인딩을 통해 사용할 수 있습니다.   if let input = readLine() {     print(\"input = \\(input)\")   이후 정수형 또는 실수형으로 변경하여 사용할 수 있습니다.   if let input = readLine() {     print(\"input = \\(input)\")          if let integer = Int(input) {         print(\"integer = \\(integer)\")     }          if let double = Double(input) {         print(\"double = \\(double)\")     }   기본적으로 문자열이므로 split(separator:) 메서드를 통해 각각의 요소로 분리할 수 있습니다. split(separator:) 메서드의 반환 타입은 String.SubSequence 입니다.   if let input = readLine() {     let splitString = input.split(separator: \" \")     print(splitString) }   Foundation 프레임워크에 있는 components(separatedBy:) 메서드를 사용하여 위 메서드와 같이 각각의 요소로 분리할 수 있습니다. components(separatedBy:) 메서드의 반환 타입은 문자열 배열 [String] 입니다.   if let input = readLine() {     let componentsString = input.components(separatedBy: \" \")     print(componentsString) }  ","categories": ["Swift"],
        "tags": [],
        "url": "/swift/Swift%EC%97%90%EC%84%9C-%EC%BB%A4%EB%A7%A8%EB%93%9C%EB%9D%BC%EC%9D%B8-%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B3%A0-%EC%A1%B0%EC%9E%91%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Vim 환경설정 세팅하기",
        "excerpt":"Vim 환경설정 세팅하기   Vundle은 Vim Bundle을 줄인 말로 Vim 플러그인을 관리하는 플러그인입니다.   Vundle을 설치하는 방법은 다음과 같습니다.   git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/vundle vi ~/.vimrc   다음의 내용을 입력합니다.   set rtp+=~/.vim/bundle/vundle/ call vundle#begin()\" Bundle 'gmarik/Vundle.vim' Plugin 'The-NERD-tree' Bundle 'davidhalter/jedi-vim' call vundle#end() filetype plugin indent on   플러그인 검색   :PluginSearch    플러그인 설치   :PluginInstall  // 특정 플러그인 설치   :BundleInstall // vimrc에 적힌 플러그인 전체 설치   The NERD tree 플러그인은 Finder처럼 사용할 수 있는 Vim 디렉터리 탐색기입니다.   받은 파일을 플러그인 디렉터리에 놓고 압축을 풀면 설치가 완료됩니다.   vi 입력창에서 :NERDTree 명령을 입력하면 적용됩니다.   :NERDTree [ start-directory | bookmark ]   :NERDTreeClose // NERD tree 창을 닫습니다.   &lt;CR&gt;, o는 디렉터리를 이동하거나 파일을 엽니다.   t는 파일을 새로운 탭에 엽니다.   T는 파일을 새로운 탭의 백그라운드로 엽니다.   x는 현재 선택된 노드를 닫고 상위 노드로 이동합니다.   X는 현재 선택된 노드를 포함하여 하위 노드를 모두 닫습니다.   e는 선택된 노드를 새 창에서 엽니다.     Vim 환경설정   et nocompatible           \" Use Vim defaults (much better!) set bs=indent,eol,start    \" allow backspacing over everything in insert mode. set autowrite              \" write the contents of the file, if it has been modifired, on each and command. set autoread               \" automatically read it again. set laststatus=2           \" the value of this option influences when the last windows will have a status line. set ruler                  \" show the line and column number of the cursor position, separated by a comma. set cindent                \" enables automatic C program indenting. C 언어 스타일의 들여쓰기를 사용합니다. set autoindent             \" always set autoindenting on. 자동 들여쓰기를 사용합니다. set smartindent            \" do smart autoindenting when starting a new line. set showcmd                \" show (partial) command in the last line of the screen set showmatch              \" when a bracket is inserted, briefly jump to the matching one. set number                 \" print the line number in front of each line. 화면에 행 번호를 표시합니다. set tabstop=4              \" number of spaces that a &lt;Tab&gt; in the file counts for. set shiftwidth=4           \" numver of spaces to use for each of (auto)indent. set softtabstop=4          \" number of spaces that a &lt;Tab&gt; counts for while performing editing operations, like inseting a &lt;Tab&gt; or using &lt;BS&gt;. set expandtab              \" use the appropriate number of spaces to insert a &lt;Tab&gt;.  \" ----- Vundle Setting ----- set rtp+=~/.vim/bundle/vundle/ call vundle#begin() Plugin 'The-NERD-tree' Bundle 'gmarik/vundle' Bundle 'davidhalter/jedi-vim' call vundle#end()  syntax enable syntax on let python_highlight_all=1 filetype indent plugin on  \" ----- Color Setting ----- colorscheme elflord  \" ----- Macro Setting ----- map &lt;F1&gt; :x!&lt;cr&gt; map &lt;F2&gt; :up&lt;cr&gt; map &lt;F3&gt; :q!&lt;cr&gt; map &lt;F4&gt; :up&lt;cr&gt;:!python3 %&lt;cr&gt; map &lt;F5&gt; :up&lt;cr&gt;:!gcc -Wall -W -O2 %&lt;cr&gt;:!./a.out&lt;cr&gt; \" -Wall: 모든 경고 메시지 출력 \" -W: Wall에서 제외된 16가지의 경고를 출력 \" -O2: 최적화 수행 map &lt;F6&gt; :NERDTreeToggle&lt;cr&gt;   ","categories": ["Vim"],
        "tags": [],
        "url": "/vim/Vim-%EC%84%A4%EC%A0%95-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "UML 작성하기 (feat. PlantUML)",
        "excerpt":"UML 작성하기   프로젝트를 시작하기 전에나 기존의 코드들 구성을 가시적으로 보고 싶어서 여러 방법을 고민하다가 UML을 작성해보기로 했습니다.   막상 UML 작성 도구들을 찾아보니 많은 도구가 나와 있고 도구별로 UML 지원 버전이나 편의성도 아주 달랐습니다. 데스크톱 앱 기반도 있고 웹앱 기반도 많이 있었습니다. 이런저런 고민을 하다가 텍스트 스크립트 기반의 UML 도구를 선택했습니다. 다른 도구들과 다르게 스크립트 배우고 작성해야 하는 어려움은 있지만, 텍스트 기반이므로 git을 통해 공유 및 편집을 통한 협업을 자유롭게 할 수 있습니다. 그중에서도 PlantUML 은 오픈소스 UML 작성 도구로 라이선스 걱정도 없습니다.   여기에서는 Visual Studio Code를 통해 UML을 작성해보았습니다.      Visual Studio Code의 Extension 탭에서 PlantUML 을 검색하여 설치합니다.         여러 가지 다이어그램을 그리기 위해서 GraphViz 를 설치해야 합니다. macOS에서 homebrew를 통해 쉽게 설치할 수 있습니다.   brew install graphviz   설치를 다 하고 나서 Visual Studio Code에서 다음과 같이 PlantUML 스크립트를 작성합니다.   @startuml  scale 2 class Event {     +startTime: DateTime     +venue: string     +registrationClosed: boolean     -notifyAttendes() }  class ApplicationUser {     -username: string     -password: string     +isLocked: boolean     -suggestRandomPassword()     +changeProfilePic() }  class Speaker {     +openForSpeaking: boolean     -callForAction()     +applyAsSpokePerson() }  class Topic {     +title: string     +sourcesCodeUrl: string     +downloadMaterials() }  class Attendee {     -eventAttended: number     -suggestEventBasedOnPreference()     +registerForTicket() }  ApplicationUser &lt;|-- Speaker ApplicationUser &lt;|-- Attendee Speaker \"1\" *-- \"*\" Topic Event \"1\" o-- \"*\" Speaker Event \"1\" o-- \"*\" Attendee  @enduml   스크립트 작성 후 shift + command + p를 누르고 PlantUML: Preview Current Diagram을 입력하고 선택합니다. 그러면 다음 화면과 같이 UML을 확인할 수 있습니다.        참고 URL      Visual Studio Code: https://code.visualstudio.com   PlantUML: https://plantuml.com/ko/   Graphviz: https://graphviz.org  ","categories": ["UML"],
        "tags": [],
        "url": "/uml/UML-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0-(feat.PlantUML)/",
        "teaser": null
      },{
        "title": "iOS App이 실행되는 과정",
        "excerpt":"iOS App이 실행되는 과정   iOS 애플리케이션 실행 과정에 일어나는 초기화 과정과 애플리케이션 라이프사이클 이벤트를 알아보았습니다.   아래 그림은 애플 공식 사이트에 있는 그림입니다.      main() 함수   main()은 iOS의 시작지점이자 Swift의 시작지점입니다. main() 함수를 호출하면서 앱이 시작됩니다. main() 함수는 UIKit이 관리하기 때문에 일반적으로 사용할 일은 없습니다. 그러나 개발자가 main() 함수를 조작할 방법이 없는 것은 아닙니다. main() 함수를 조작하면 프로젝트에서 재미있는 경험을 할 수 있습니다.   애플 공식 문서에서 main()에 대해 찾아보았습니다.      아무 설명이 없습니다. 🤬   main() 함수는 UIApplicationMain(_:_:_:_:) 함수를 호출합니다.   UIApplicationMain(_:_:_:_:)   그 다음으로 UIApplicationMain(_:_:_:_:) 함수가 호출됩니다. UIApplicationMain(::::) 함수는 UIApplication 객체를 만들고 앱 델리게이트를 만듭니다. 그리고 이벤트 사이클을 설정합니다.   애플 공식 문서에서 UIApplicationMain(::::)에 대해 찾아보았습니다.   다음과 같이 설명이 되어있습니다.      UIApplicationMain(::::) 호출 이후, UIKit은 메인 스토리보드 또는 nib 파일에서 앱의 기본 인터페이스를 로드합니다.   application(_:willFinishLaunchingWithOptions:)   이제부터는 Xcode 프로젝트에서 찾아볼 수 있는 메서드입니다. application(_:willFinishLaunchingWithOptions:)는 앱 초기화를 하기위한 메서드입니다. 앱이 실행되었지만 아직 준비가 끝난 단계가 아닙니다.   application(_:didFinishLaunchingWithOptions:)   application(_:didFinishLaunchingWithOptions:) 메서드는 앱의 초기화가 완료되고 호출되는 메서드입니다. 앱이 실행할 준비를 마친 단계입니다.   이후 iOS는 Window와 Scene 그리고 ViewController를 생성합니다.   참고 URL        About the App Launch Sequence  ","categories": ["iOS"],
        "tags": [],
        "url": "/ios/iOS-App%EC%9D%B4-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94-%EA%B3%BC%EC%A0%95/",
        "teaser": null
      },{
        "title": "Swift inout 키워드란?",
        "excerpt":"inout   일반적인 Swift 함수의 파라미터는 상수입니다. 따라서 변경할 수 없습니다. 함수에 전달된 파라미터는 값이 복사되어 전달되기 때문에 원본 값에도 영향을 미치지 않습니다. 그러나 때에 따라 변경 가능한 파라미터를 전달하고 파라미터를 변경할 수 있는 방법이 있습니다. inout 키워드를 사용하면 전달한 파라미터를 변경할 수 있고 그 변경 내용이 원본 값에도 영향을 미칩니다.   inout 키워드를 사용하여 더하기를 할 수 있는 함수를 정의하고 그 값을 변경해보겠습니다.   func add(number: inout Int) {     number += 1 }   이 함수를 사용하기 위해서는 변수를 사용해야 합니다. inout 키워드로 인한 값의 변경이 있을 수 있기 때문에 상수를 전달할 수 없습니다. 그리고 호출 시 &amp;기호를 사용하여 호출해야 합니다.   var myNumber = 10 add(number: &amp;myNumber) print(myNumber) // 11   inout 키워드는 변수의 주소를 전달하며 파라미터를 변경하면 실제 원본의 값도 변경되는 것을 확인할 수 있습니다.  ","categories": ["Swift"],
        "tags": [],
        "url": "/swift/Swift-inout-%ED%82%A4%EC%9B%8C%EB%93%9C%EB%9E%80/",
        "teaser": null
      },{
        "title": "01. Swift The Basics",
        "excerpt":"상수와 변수   상수(constant)는 값을 변경할 수 없으며, 변수(variable)은 값을 변경할 수 있습니다.   상수와 변수 선언하기   상수와 변수는 사용하기 전에 반드시 선언해야 합니다. 상수는 let 키워드를 사용하며 변수는 var 키워드를 사용하여 선언합니다.   // let - Let Declararion // Creates a variable that cannot be changed. let maximumNumberOfLoginAttempts = 10 // var - Var Declaration // Creates a variable that can be changed. var currentLoginAttemp = 0  let price = 100 var score = 100   콤마(,)를 사용하여 한 줄에 여러 상수, 변수를 선언할 수 있습니다.   var x = 0.0, y = 0.0, z = 0.0   타입 명시   상수 또는 변수 선언 시 타입을 명시하면 변수가 저장할 수 있는 값의 타입을 명확하게 선언할 수 있습니다. 타입은 콜론(:)을 사용하여 명시합니다.   var welcomeMessage: String welcomeMessage = \"Hello\"   콤마(,)를 사용하여 한 줄에 같은 타입의 변수를 선언할 수 있습니다.   var red, green, blue: Double   실제로 타입을 명시하여 사용하지 않더라고 Swift의 타입 추론을 통해 Swift에서 타입을 추론하여 변수에 지정합니다.   상수와 변수 이름짓기   상수와 변수는 유니코드 문자를 포함하여 거의 모든 문자를 이름으로 사용할 수 있습니다.   let π = 3.14159 let 你好 = \"你好世界\" let 🐶🐮 = \"dogcow\" let 전공 = \"컴퓨터공학\"   변수의 이름은 공백, 수학 기호, 화살표, 사용자 정의 유니코드, line- and box-drawing 문자를 사용할 수 없습니다. 숫자의 경우 변수의 첫 번째 문자로 사용할 수 없지만 두 번째 문자 이후로 사용할 수 있습니다.   Swift에서 사용하는 예약된 키워드는 변수명으로 사용할 수 업습니다. 하지만 ` 억음 부호를 사용하면 예약된 키워드를 변수로 사용할 수 있습니다.   let `case` = 3  var friendlyWelcome = \"Hello!\" friendlyWelcome = \"Bonjour!\"  let languageName = \"Swift\" // Cannot assign to value: 'languageName' is a 'let' constant // languageName = \"Swift++\"   상수와 변수 출력하기   상수와 변수의 값은 print(_:separator:terminator:) 함수를 사용하여 출력할 수 있습니다.   print(friendlyWelcome)   Swift의 string interpolation을 사용하면 문자열 내에 변수의 현재 값을 포함하여 문자열을 생성할 수 있습니다.   print(\"The current value of friendlyWelcome is \\(friendlyWelcome)\")   주석   주석은 코드 내 실행하지 않는 구문을 삽입하기 위해 사용합니다. 주로 메모, 설명, 기록을 위해 사용합니다.   한 줄 주석은 // 기호를 사용합니다.   // This is a comment.   여러 줄 주석은 /*기호로 시작하여 */로 끝냅니다. 여러 줄에 걸쳐 주석을 표시할 수 있습니다.   /* This is also a comment but is written over multiple lines. */   중첩 주석은 /*와 */의 짝으로 주석을 사용합니다. (마지막 줄도 주석처리가 됩니다.)   /* This is the start of the first multiline comment.  /* This is the second, nested multiline comment. */ //This is the end of the first multiline comment. */   세미콜론   스위프트는 코드 마지막에 세미콜론을 사용하지 않습니다. 그러나 한 줄에 여러 코드를 사용하기 위해서는 세미콜론을 사용해야 합니다.   let cat = \"🐱\"; print(cat)   정수   정수는 수학에서 이야기 하는 정수를 말하며, 양의 정수, 0, 음의 정수가 있습니다.   스위프트는 8bit, 16bit, 32bit, 64bit 형태의 정수를 제공합니다.   정수의 경계   UInt 형의 최솟값과 최솟값은 min, max 프로퍼티로 접근할 수 있습니다.   let minValue = UInt8.min  // minValue is equal to 0, and is of type UInt8 let maxValue = UInt8.max  // maxValue is equal to 255, and is of type UInt8   Int   Int는 정수형(양수, 음수) 숫자를 나타내는 타입입니다. Swift에서 Int 타입은 현재 플랫폼의 아키텍처에 따라 그 크기가 결정됩니다.      32비트 아키텍처에서는 Int32 크기로 결정됩니다.   64비트 아키텍처에서는 Int64 크기로 결정됩니다.   특정한 정수 타입으로 동작해야하는 것이 아니면 기본적으로 Int 타입을 사용하는게 좋습니다.                  Int       비트 수                       Int8       8bit 부호 있는 정수형                 Int16       16bit 부호 있는 정수형                 Int32       32bit 부호 있는 정수형                 Int64       64bit 부호 있는 정수형           Int 타입을 사용할 경우 32bit 플랫폼에서는 Int32와 동일하며, 64bit 플랫폼에서는 Int64와 동일합니다.   let int8Value: Int8 = Int8.max let int16Value: Int16 = Int16.max let int32Value: Int32 = Int32.max let int64Value: Int64 = Int64.max   UInt   UInt는 정수형(양수) 숫자를 나타내는 타입입니다. Swift에서 UInt 타입은 현재 플랫폼의 아키텍처에 따라 그 크기가 결정됩니다.      32비트 아키텍처에서는 UInt32 크기로 결정됩니다.   64비트 아키텍처에서는 UInt64 크기로 결정됩니다.                  UInt       비트 수                       UInt8       8bit 부호 없는 정수형                 UInt16       16bit 부호 없는 정수형                 UInt32       32bit 부호 없는 정수형                 UInt64       64bit 부호 없는 정수형           UInt 타입을 사용할 경우 32bit 플랫폼에서는 UInt32와 동일하며, 64bit 플랫폼에서는 UInt64와 동일합니다.   let uInt8Value: UInt8 = UInt8.max let uInt16Value: UInt16 = UInt16.max let uInt32Value: UInt32 = UInt32.max let uInt64Value: UInt64 = UInt64.max   부동소수점수   부동소수점수는 컴퓨터에서 실수를 표현하는 방법으로 3.14159, 0.1, -273.15와 같은 숫자들이 있습니다.   스위프트에서 부동소수점수를 표현하기 위한 타입은 다음과 같습니다.                  Float       비트 수                       Float       32bit 실수형                 Double       64bit 실수형           let floatValue: Float = Float.greatestFiniteMagnitude let float80Value: Float80 = Float80.greatestFiniteMagnitude let doubleValue: Double = Double.greatestFiniteMagnitude   타입 안전과 타입 추론   Swift는 타입 안전 언어입니다. 타입 안전은 코드에서 사용할 수 있는 값의 타입에 대해 명확하게 알려줍니다. 컴파일 시 타입 검사를 통해 일치하지 않는 타입에 대해 에러를 표시합니다.   Swift는 타입 추론 기능을 지원합니다. 변수 선언 시 할당된 값에 따라 자동으로 타입을 지정해줍니다.   타입 추론의 예시는 다음과 같습니다.   // 다음 구문은 Int 타입으로 추론합니다. let meaingOfLife = 42  // 다음 구문은 Double 타입으로 추론합니다. let pi = 3.141592 let pi2 = 3 + 0.141592  // 다음 구문은 String 타입으로 추론합니다. let language = \"Swift\"   수치 상수값   수치 상수값은 프로그램에서 사용하는 일반적인 숫자를 말합니다. 10진수는 5, 8, 17과 같이 표현하며 2진수는 접두사 0b를 붙여서 0b1101과 같이, 8진수는 접두사 0o를 붙여서 0o435과 같이 그리고 16진수는 접두사 0x를 붙여서 0xFF와 같이 표현합니다. 정수형 상수값은 다음과 같이 표현할 수 있습니다. 각각 17을 표현한 값입니다.                  진수       표현                       10진수       17                 2진수       0b10001                 8진수       0o21                 16진수       0x11           실수형 상수값은 다음과 같이 표현할 수 있습니다. 16진수는 정수형과 같은 접두사 0x를 붙여서 표현할 수 있습니다.                  지수       표현                       1.25e2       1.25 x 10^2                 1.25e-2       1.25 x 10^-2                 0xFp2       15 x 2^2                 0xFp-2       15 x 2^-2           다음의 모든 실수는 12.1875라는 10진수 값을 표현합니다.   let decimalDouble = 12.1875 let exponentDouble = 1.21875e1 let hexadecimalDouble = 0xC.3p0   16진수의 경우 밑이 2가 됩니다.   let floatingPointNumber3 = 0xFp2 let floatingPointNumber4 = 0xFp-2   수치 상수값은 읽기 쉽도록 하기 위해 추가적인 표현법을 가지고 있습니다. 상수 앞에 추가적으로 0을 채워 표현하거나 상수 내 _ 특수문자를 사용하여 표현할 수 있습니다. 이러한 표현법은 실제 값에 영향을 미치지 않습니다.   let paddedDouble = 000123.456 let oneMillion = 1_000_000 let justOverOneMillion = 1_000_000.000_000_1   수치 타입 변환   정수 변환   변수에 값을 할당할 때에는 타입이 저장할 수 있는 범위 내의 값을 할당해야 합니다.   let cannotBeNegative: UInt8 = -1 // UInt8 타입은 음수를 저장할 수 없습니다. let tooBig: Int8 = Int8.max + 1 // Int8 타입보다 큰 수를 저장할 수 없습니다.   같은 정수형이라도 수치 타입이 다르면 연산을 할 수 없습니다. 때문에 연산을 하기 위해 새로 초기화된 값을 생성하여 연산을 수행해야 합니다.   let twoThousand: UInt16 = 2_000 let one: UInt8 = 1 let twoThousandAndOne = twoThousand + UInt16(one)   정수와 실수 변환   정수를 실수 타입으로 변환하는 것은 반드시 명시적으로 수행해야 합니다.   let three = 3 let pointOneFourOneFiveNine = 0.14159 let pi = Double(three) + pointOneFourOneFiveNine   실수에서 정수 타입으로 변환하는 것 역시 명시적으로 수행해야 합니다.   let integerPi = Int(pi)   변수끼리의 연산과 수치 상수값끼리의 연산 규칙은 다릅니다.   Type Aliase, 타입 별명, typealias   타입 별명은 기존에 선언되어 있는 이름에 새로운 이름을 지정하는 것입니다.typealias 키워드를 사용하여 새로운 이름을 정의합니다.   Language Reference -&gt; Types -&gt; Type Identifier   // 기존에 정의된 UInt16 타입에 AudioSample이라는 이름을 지정합니다. typealias AudioSample = UInt16  var maxAmplitudeFound = AudioSample.min  // (Int, Int) 튜플 타입에 Point라는 이름을 지정합니다. typealias Point = (Int, Int)  var point = Point(3, 4)  // 사용자가 정의한 클래스 Student 배열 타입에 Students 라는 이름을 지정합니다. typealias Students = [Student]  class Student {}  var students = Students()  // 클로저에 대한 새로운 이름을 지정할 수도 있습니다. typealias intHandler = (Int) -&gt; ()  func typeAliasExample(completeHandler: intHandler) {}   Boolean, 논리값   A value type whose instances are either true or false. ` @frozen struct Bool`   스위프트는 Bool이라는 참과 거짓을 표현하는 타입을 가지고있습니다. Bool은 항상 true 또는 false 값만을 가질 수 있습니다.   let orangesAreOrange = true let turnipsAreDelicious = false   Boolean 타입은 조건문에서 유용하게 쓰입니다.   if turnipsAreDelicious {     print(\"Mmm, tasty turnips!\") } else {     print(\"Eww, turnips are horrible.\") }   스위프트의 타입 안전장치에 의해 if 조건문에 Bool 타입이 아닌 다른 타입으로 참과 거짓을 구분하려고 할 때, 컴파일시 에러를 출력합니다.   let i = 1 if i {     // this example will not compile, and will report an error }   다음과 같이 논리 연산자를 사용할 경우 그 결과값이 Bool 타입이기 때문에 정상적으로 실행됩니다.   let i = 1 if i == 1 {     // this example will compile successfully }   Tuples, 튜플   튜플은 여러 개의 값을 단일 값으로 묶어서 표현하는 타입입니다. 튜플 내 값은 어떤 타입이든 상관이 없습니다.   let http200Success: (Int, String) = (200, \"Ok\") let http404Error = (404, \"Not Found\")   튜플이 가지고 있는 값은 각각의 변수로 대입할 수 있습니다.   let (statusCode, statusMessage) = http404Error print(\"The status code is \\(statusCode)\") print(\"The status message is \\(statusMessage)\")   튜플 내 일부분의 값만 필요할 경우 _ 문자를 이용해 무시할 수 있습니다.   let (justTheStatusCode, _) = http404Error print(\"The status code is \\(justTheStatusCode)\")   튜플에 있는 개별 원소에 접근하기 위해서 .(index number)를 사용할 수 있습니다.   print(\"The status code is \\(http404Error.0)\") // Prints \"The status code is 404\" print(\"The status message is \\(http404Error.1)\") // Prints \"The status message is Not Found\"   튜플에 있는 개별 원소에 이름을 지정할 수 있습니다.   let http200Status = (statusCode: 200, description: \"OK\")   튜플에 있는 개별 원소에 이름을 지정한 경우, 그 원소의 값에 접근할 때 원소의 이름을 사용할 수 있습니다.   print(\"The status code is \\(http200Status.statusCode)\") // \"The status code is 200\" 를 출력합니다. print(\"The status message is \\(http200Status.description)\") // \"The status message is OK\" 를 출력합니다.   튜플은 함수에서 두 개 이상의 값을 반환할 때 유용할 수 있습니다. 서로 관련된 값에 그룹을 지어 표현하기 좋습니다. 복잡한 값을 구성할 때에는 구조체나 클래스를 사용하는 것이 더 유용합니다.   Optionals, 옵셔널, ?   옵셔널은 값이 존재하지 않을 수 있는 상황에서 사용할 수 있는 타입입니다.   다음의 구문은 문자열 타입을 정수형 타입으로 변환하기 위해 Int() 구문을 사용하고 있습니다. 문자열은 정수형으로 변환할 수 있습니다. 정수형으로 변환할 수 있는 문자열은 변환 성공 시 옵셔널 리터럴 상수가 반환되고, 문자열을 정수형으로 변환할 수 없으면 nil이 반환됩니다.   let possibleNumber = \"123\" let convertedNumber = Int(possibleNumber) print(convertedNumber)   반환된 옵셔널 리터럴 상수의 타입은 ‘Int?’ 타입입니다. 타입 뒤에 삽입된 특수문자 ‘?’는 옵셔널을 나타내는 표현입니다.   nil, 닐   nil은 옵셔널 변수에 값이 없는 상태로 저장하기 위해 사용하는 키워드입니다. ‘값이 없음’을 나타냅니다.   // Int 옵셔널 변수에 404를 저장합니다. var serverResponseCode: Int? = 404 // nil(값이 없음)을 할당합니다. serverResponseCode = nil   옵셔널 변수를 정의하면서 초기화값을 지정하지 않으면 자동으로 nil로 설정됩니다.   var surveyAnswer: String? print(surveyAnswer)   If Statements and Forced Unwrapping, If 문과 강제 언래핑, !   if문을 사용해서 옵셔널 변수에 값이 존재하는지 확인할 수 있습니다.   if convertedNumber != nil {     print(\"convertedNumber contains some integer value.\") }   옵셔널 변수가 nil이 아니면 옵셔널 변수 끝에 ! 특수문자를 사용하여 옵셔널 변수의 값을 추출할 수 있습니다. ! 특수문자를 사용하여 옵셔널 변수값을 추출하는 것을 옵셔널 강제 언래핑이라고 합니다.   if convertedNumber != nil {     print(\"convertedNumber has an integer value of \\(convertedNumber!).\") }   옵셔널 변수의 값이 nil일 경우 강제 언래핑을 시도하면 런타임 에러가 발생합니다. 항상 옵셔널 변수에 값이 존재하는지 검증을 하고 강제 언래핑을 해야 합니다.   Optional Binding, 옵셔널 바인딩   옵셔널 바인딩을 통해 옵셔널에 값이 존재할 경우 값을 추출하여 임시로 변수에 할당할 수 있습니다. if let 또는 if var를 사용하여 옵셔널 바인딩을 할 수 있습니다. 옵셔널 강제 언래핑은 값이 존재하지 않을 경우 런타임 에러가 발생하므로, 옵셔널 바인딩을 통해 옵셔널 변수를 제어하는 것이 더 좋습니다.   if let constantName = someOptional {     statements }   옵셔널 강제 언래핑을 사용하는 대신에 옵셔널 바인딩을 사용하여 옵셔널 변수 값을 사용할 수 있습니다.   if let actualNumber = Int(possibleNumber) {     print(\"The string \\\"\\(possibleNumber)\\\" has an integer value of \\(actualNumber)\") } else {     print(\"The string \\\"\\(possibleNumber)\\\" could not be converted to an integer\") }  if var actualNumber = Int(possibleNumber) {     actualNumber += 3     print(\"The string \\\"\\(possibleNumber)\\\" has an integer value of \\(actualNumber)\") } else {     print(\"THe string \\\"\\(possibleNumber)\\\" could not be converted to an integer\") }   다음의 두 구문은 서로 동일한 코드입니다. 콤마를 이용하여 여러 가지 조건을 한번에 판단할 수 있습니다.   if let firstNumber = Int(\"4\") {     if let secondNumber = Int(\"42\") {         if firstNumber &lt; secondNumber &amp;&amp; secondNumber &lt; 100 {             print(\"\\(firstNumber) &lt; \\(secondNumber) &lt; 100\")         }     } }  // 위 구문은 아래와 같이 다시 표현할 수 있습니다. 동일하지만 한 줄에 나열할 수 있습니다. if let firstNumber = Int(\"4\"), let secondNumber = Int(\"42\"), firstNumber &lt; secondNumber &amp;&amp; secondNumber &lt; 100 {     print(\"\\(firstNumber) &lt; \\(secondNumber) &lt; 100\") }   if문 옵셔널 바인딩으로 임시로 할당된 변수는 해당 if문 영역 안에서만 사용할 수 있지만 guard문 옵셔널 바인딩으로 임시로 할당된 변수는 guard문을 작성한 영역에서 사용할 수 있습니다.   Implicity Unwrapped Optionals, 암시적 언래핑 옵셔널   옵셔널 중에 암시적 언래핑 옵셔널이 있는데, 옵셔널 변수이지만 일반 변수처럼 사용할 수 있는 옵셔널 변수입니다. 암시적 언래핑 옵셔널은 값이 항상 존재한다는 것을 확신할 수 있을 때 사용합니다. 클래스 이니셜라이저 사용 시에 유용합니다.   let possibleString: String? = \"An optional string.\" let forcedString: String = possibleString!  let assumedString: String! = \"An implicitly unwrapped optional string.\" let implicitString: String = assumedString   암시적 언래핑 옵셔널은 기본적으로 옵셔널로 동작하지만 옵셔널로 사용할 수 없을 경우, 강제 언래핑을 수행하여 값을 추출하여 사용합니다.   let optionalString = assumedString print(\"optioanlString type: \\(type(of: optionalString))\")   암시적 언래핑 옵셔널도 if문을 통해 nil값을 확인할 수 있습니다.   if assumedString != nil {     print(assumedString!) }   암시적 언래핑 옵셔널도 옵셔널 바인딩을 통해 값을 추출할 수 있습니다.   if let definiteString = assumedString {     print(definiteString) }   Error Handling, 에러 처리   에러 처리는 프로그램 실행 중 일어날 수 있는 에러를 처리하거나 다른 곳으로 전달할 수 있는 기능입니다.   // 함수 정의 뒤에 'throws' 키워드를 사용하여 에러를 발생시킬 수 있다고 알린다. func canThrowAnError() throws {     // this function may or may not throw an error }   에러를 발생시킬 수 있는 함수를 호출할 때는 do문 영역 내 try 키워드를 사용하여 호출합니다. 에러가 발생하면 catch문 영역으로 실행흐름이 전달됩니다.   do {     try canThrowAnError()     // no error was thrown } catch {     // an error was thrown }   발생한 에러 종류별로 catch문 영역을 나눌 수 있습니다. 에러는 throw 키워드를 사용하여 발생시킬 수 있습니다.   func makeASandwich() throws {     let one = 1          if one == 1 {         throw SandwichError.outOfCleanDishes     } else {         throw SandwichError.missingIngredients     } }  enum SandwichError: Error {     case outOfCleanDishes     case missingIngredients }  func eatASandwich() {} func washDishes() {} func buyGroceries() {}  do {     try makeASandwich()     eatASandwich() } catch SandwichError.outOfCleanDishes {     washDishes() } catch SandwichError.missingIngredients {     buyGroceries() }   Assertions and Preconditions, 선언문과 선행조건문   assertion과 precondition의 조건이 true면 코드가 계속 실행됩니다. assertion은 개발 과정에 있는 실수나 잘못된 가정들을 찾도록 해주며, precondition은 문제를 찾는것을 도와줍니다.   Debugging with Assertions, 선언문으로 디버깅하기   assert(_:_:file:line:) 함수를 사용하여 디버깅을 할 수 있습니다.   let age = 3 assert(age &gt;= 0, \"A person's age can't be less than zero.\")   코드 조건을 검사한 경우 assertionFailture(_:file:line:) 함수를 사용하여 디버깅 메시지를 남길 수 있습니다.   if age &gt; 10 {     print(\"You can ride the roller-coaster or the ferris wheel.\") } else if age &gt;= 0 {     print(\"You can ride the ferris wheel.\") } else {     assertionFailure(\"A person's age can't be less than zero.\") }   Enforcing Preconditions, 선행조건문 강제하기   assert와 precondition의 차이는 assert는 debug 모드에서만 동작하며, precondition은 debug, release 모드 두 가지에서 동작합니다.   precondition(age &gt;= 3, \"A person's can't be less than zero.\")  ","categories": ["Swift"],
        "tags": [],
        "url": "/swift/Swift-The-Basics/",
        "teaser": null
      },{
        "title": "상시 무료 클라우드 서비스(오라클 클라우드 프리 티어)",
        "excerpt":"오라클 클라우드 프리 티어   많은 클라우드 서비스들이 있지만, 오라클에서 상시 무료로 사용할 수 있는 사용 스펙이 훌륭한? 서비스가 나왔다고 해서 사용해보았습니다. 아래 링크에 접속하면 관련 서비스로 이동할 수 있습니다.   Oracle Cloud Free Tire   상시 무료 제공 스펙은 다음과 같습니다.      Oracle Application Express(APEX) 및 Oracle SQL Developer와 같은 강력한 도구가 있는 Oracle Autonomous Database 2개   Oracle Cloud Infrastructure 컴퓨팅 VM 2개, 블록, 객체 및 아카이브 스토리지, 로드 밸런서 및 데이터 이그레스, 모니터링 및 알림   자율 운영 데이터베이스 2개, 각각 20GB   1/8 OCPU 및 1GB 메모리   2개의 블록 볼륨, 총 100GB 블록 볼륨, 10GB 객체 스토리지, 10GB 아카이브 스토리지.   로드 밸런서: 인스턴스 1개, 10Mbps 대역폭   모니터링: 5억 개의 수집 데이터 포인트, 10억 개의 검색 데이터 포인트   알림: 매월 https를 통해 전송되는 백만 개   매월 이메일을 통해 전송되는 1,000개   데이터 전송: 매월 10TB   다른 스펙은 넘기고 컴퓨팅 자원을 50GB, 1GB, 매월 10TB 트래픽을 사용할 수 있다는 점에서 다른 클라우드 서비스보다 훨씬 좋다고 생각합니다. 상시 무료 서비스라서 기간 제한은 없는 점이 매력적이지만 나중에 약관이 변경될 수 있지 않을까 싶지만 24시간 컴퓨터를 무료로 사용할 수 있다는 점에서 매력적입니다.   아래는 오라클 클라우드 서비스 시작하기 화면입니다.      동작 중인 컴퓨터를 보여주는 대시보드입니다.      오라클 클라우드에서 생성한 우분투에 접속한 화면입니다. 50GB, Ubuntu 20.04.2 LTS 버전을 확인할 수 있습니다.      용량과 메모리가 한정적이긴 하지만 매월 10TB 트래픽과 고정 IP를 제공해준다는 점에서 무료 서버 구축 서비스 중에서 좋은 선택지가 될 수 있다고 생각합니다.  ","categories": ["Cloud"],
        "tags": [],
        "url": "/cloud/Cloud-Free-Tier/",
        "teaser": null
      },{
        "title": "iOS UIView의 init?(coder: NSCoder) 초기화 메서드란?",
        "excerpt":"iOS의 init?(coder: NSCoder) 메서드   UIView 클래스의 초기화 메서드를 보면 두 가지가 있습니다. 첫 번째 메서드는 이해가 가지만 두 번째 메서드가 이해가 가지 않아서 정리해보았습니다.   // UIView initializer method init(frame: CGRect) // 첫 번째  init?(coder: NSCoder) // 두 번째   애플 공식 홈페이지에서 찾아봤습니다.      아무 설명이 없습니다.🤬   그래서 더 많은 검색을 시도하여 다음과 같은 결과를 확인했습니다.   첫 번째 init(frame: CGRect) 초기화 메서드는 CGRect 구조체에 정의된 위치와 크기를 통해 UIView를 생성합니다. 주로 코드로 UI를 개발할 때 사용합니다.   두 번째 init?(coder: NSCoder) 초기화 메서드는 코드로 생성하는 것이 아닌 스토리보드(또는 Xib)를 통해서 UIView를 생성할 때 사용합니다.   그래서 UIStoryboard에 대해서 찾아보았습니다.      다음과 같은 설명이 있습니다.      프로세스를 초기화하는 동안 UIStoryboard는 init(coder:) 메서드를 사용하여 프로그래밍 방식으로 뷰 컨트롤러를 생성합니다.    위에 적힌 내용처럼 init?(coder: NSCoder) 초기화 메서드는 스토리보드에서 사용하는 것을 알 수 있습니다.   참고 URL        UIView init?(coder: NSCoder)   UIStoryboard  ","categories": ["iOS"],
        "tags": [],
        "url": "/ios/iOS-UIView%EC%9D%98-init-method/",
        "teaser": null
      }]

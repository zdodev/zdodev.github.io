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
      }]

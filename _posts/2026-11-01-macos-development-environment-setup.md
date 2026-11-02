---
title: "macOS 초기 (개발)환경 설정하기"
date: 2026-11-01 22:00:00 +0900
categories:
  - development
  - macOS
tags:
  - macOS
  - homebrew
  - ghostty
  - zsh
  - starship
last_modified_at: 2026-11-01 22:00 +0900
---

macOS 초기 환경 설정 시 필요한 내용을 정리한다.

# 기본 애플리케이션 설치

- Homebrew: 패키지 설치하고 관리하기 위한 패키지 매니저
- Obsidian: 메모장
- LinearMouse: 마우스와 트랙패드 세부 사항 조절 및 뒤로가기, 스크롤 설정
- Ghostty: 이쁘고 빠른 터미널
- macshot: 스크린샷 도구

# 터미널 환경 구성

필요한 프로그램 설치

```zsh
brew install font-jetbrains-mono-nerd-font
brew install starship zsh-autosuggestions zsh-syntax-highlighting
brew install eza bat fzf zoxide
```

## Ghostty 환경 설정

```text
# Theme
theme = Catppuccin Mocha

# Font
font-family = JetBrainsMono Nerd Font
font-size = 16

# Window
window-padding-x = 14
window-padding-y = 12
window-decoration = true

# Transparency
background-opacity = 0.92
background-blur = 20

# Cursor
cursor-style = block
cursor-style-blink = false

# macOS
macos-titlebar-style = tabs
```

## Zsh 설정

**~/.zshrc**

```text
# Starship
eval "$(starship init zsh)"

# Directory navigation
eval "$(zoxide init zsh)"

# Zsh plugins
source "$(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh"
source "$(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"

# Aliases
alias l="eza -lah --icons --git"
alias ls="eza --icons --group-directories-first"
alias ll="eza -lah --icons --git"
alias cat="bat"
alias cd="z"
```

# ruby 버전 관리 환경 구성

```zsh
brew install rbenv

rbenv install -l

rbenv install <version>

rbenv global 3.4.0

gem install jekyll

bundle install
```
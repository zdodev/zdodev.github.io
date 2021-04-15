---
title: "gitignore에 추가해야 할 구문 정리"
categories: 
  - Git
last_modified_at: 2021-04-15 21:30:00
toc: true #Table of Contents
comments: true


---

Github 저장소를 사용할 때 굳이 올리지 않아도 되는 파일이 있습니다. macOS의 .DS_Store 파일 또는 대용량 라이브러리 파일이 있습니다. 또는 개인정보, 민감정보를 포함하고 있거나 개인적으로 올리지 않고 싶은 파일도 있습니다. 이러한 파일을 하나씩 걸러가며 정리하기 불편하기 때문에 gitignore를 사용합니다. 저는 주로 macOS에서 Xcode 환경에서 git을 사용하므로 macOS와 Xcode에서 생성하는 불필요한 파일을 gitignore에 등록합니다.

주로 등록하는 구문은 다음과 같습니다.

```bash

# Created by https://www.toptal.com/developers/gitignore/api/macos,linux,windows,objective-c,swift,xcode
# Edit at https://www.toptal.com/developers/gitignore?templates=macos,linux,windows,objective-c,swift,xcode

### Linux ###
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### Objective-C ###
# Xcode
#
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings
xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)
*.xcscmblueprint
*.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)
build/
DerivedData/
*.moved-aside
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3

## Obj-C/Swift specific
*.hmap

## App packaging
*.ipa
*.dSYM.zip
*.dSYM

# CocoaPods
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
# Pods/
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
# Add this line if you want to avoid checking in source code from Carthage dependencies.
# Carthage/Checkouts

Carthage/Build/

# fastlane
# It is recommended to not store the screenshots in the git repo.
# Instead, use fastlane to re-generate the screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots/**/*.png
fastlane/test_output

# Code Injection
# After new code Injection tools there's a generated folder /iOSInjectionProject
# https://github.com/johnno1962/injectionforxcode

iOSInjectionProject/

### Objective-C Patch ###

### Swift ###
# Xcode
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore






## Playgrounds
timeline.xctimeline
playground.xcworkspace

# Swift Package Manager
# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.
# Packages/
# Package.pins
# Package.resolved
# *.xcodeproj
# Xcode automatically generates this directory with a .xcworkspacedata file and xcuserdata
# hence it is not needed unless you have added a package configuration file to your project
# .swiftpm

.build/

# CocoaPods
# We recommend against adding the Pods directory to your .gitignore. However
# you should judge for yourself, the pros and cons are mentioned at:
# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control
# Pods/
# Add this line if you want to avoid checking in source code from the Xcode workspace
# *.xcworkspace

# Carthage
# Add this line if you want to avoid checking in source code from Carthage dependencies.
# Carthage/Checkouts


# Add this lines if you are using Accio dependency management (Deprecated since Xcode 12)
# Dependencies/
# .accio/

# fastlane
# It is recommended to not store the screenshots in the git repo.
# Instead, use fastlane to re-generate the screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://docs.fastlane.tools/best-practices/source-control/#source-control


# Code Injection
# After new code Injection tools there's a generated folder /iOSInjectionProject
# https://github.com/johnno1962/injectionforxcode


### Windows ###
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

### Xcode ###
# Xcode
# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore




## Gcc Patch
/*.gcno

### Xcode Patch ###
*.xcodeproj/*
!*.xcodeproj/project.pbxproj
!*.xcodeproj/xcshareddata/
!*.xcworkspace/contents.xcworkspacedata
**/xcshareddata/WorkspaceSettings.xcsettings

# End of https://www.toptal.com/developers/gitignore/api/macos,linux,windows,objective-c,swift,xcode

```

이 구문은 gitignore 구문을 생성해 주는 사이트에서 생성한 구문입니다.

![2021-04-15 at 9.19.15 PM-gitignore](/assets/image/2021-04-15 at 9.19.15 PM-gitignore.png)

위 사이트에서 특정 플랫폼이나 환경에 대한 키워드를 검색하면 해당 플랫폼에서 생성하는 불필요한 파일에 대한 gitignore 텍스트를 생성해줍니다. 보통 그대로 써도 문제는 없습니다만 중간에 선택적으로 파일을 올릴 수 있도록 주석을 통해 텍스트를 제공합니다. 선택 파일에 대한 옵션을 잘 보고 주석을 지우고 사용하면 됩니다.

### 참고 URL

---

>   [gitignore.io](https://www.toptal.com/developers/gitignore)


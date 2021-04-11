---
title: "Operating System"
categories: 
  - macOS
  - Tools
last_modified_at: 2021-04-09 01:00:00
toc: true #Table of Contents
comments: true


---

# Operating System

`운영체제`는 컴퓨터 하드웨어를 관리하는 프로그램입니다.

## What Operating System Do

컴퓨터 시스템은 대개 네 가지 구성 요소인 하드웨어, 운영체제, 응용프로그램, 사용자로 구분할 수 있습니다.

하드웨어는 CPU, 메모리 및 입출력장치로 구성되어, 기본 계산용 자원을 제공합니다.

### User View

### System View

### Defining Operating Systems

## Computer System Organization

### Computer System Operation

### Storage Structure

### I/O Structure

## Computer System Architecture

컴퓨터 시스템은 사용된 범용 프로세서의 수에 따라 분류 가능한 다양한 방식으로 구성됩니다.

### Single Processor Systems

단일 프로세서 시스템은 사용자 프로세스의 명령어를 포함하여 범용 명령어 집합을 수행할 수 있는 하나의 메인 CPU를 가지고 있습니다.

### Multiprocessor Systems

멀티프로세서 시스템은 하나 이상의 프로세서를 가지며, 컴퓨터 버스, 그리고 때로는 클락, 메모리와 주변 장치를 공유합니다.

### Clustered Systems

클러스터 시스템은 둘 이상의 독자적 시스템 또는 노드를 연결하여 구성합니다.

## Operating System Structure

`멀티프로그래밍`은 CPU가 수행할 작업을 항상 하나 가지도록 구성하는 것이다. `멀티태스킹`은 멀티프로그래밍의 논리적 확장이다. 멀티태스킹 시스템에서는 CPU가 다수의 작업들을 교대로 수행하지만, 매우 빈번하게 교대가 일어나기 때문에 프로그램이 실행되는 동안에 사용자는 각자 자기의 프로그램과 상호 작용할 수 있다.

## Operating System Operations

현대의 운영체제는 `interrupt driven` 방식입니다.

### Dual Mode and MultiMode Operation

사용자 모드와 커널 모드

### Timer

## Process Management

-   CPU에 프로세스와 스레드 스케줄하기
-   사용자 프로세스와 시스템 프로세스의 생성과 제거
-   프로세스의 일시 중지와 재수행
-   프로세스 동기화를 위한 기법 제공
-   프로세스 통신을 위한 기법 제공

## Memory Management

-   메모리의 어느 부분이 현재 사용되고 있으며 누에 의해 사용되고 있는지를 추적해야 한다.
-   어떤 프로세스(또는 그 일부)를 메모리에 적재하고 제거할 것인가를 결정해야 한다.
-   필요에 따라 메모리 공간을 할당하고 회수해야 한다.

## Storage Management

### File System Management

-   파일의 생성 및 제거
-   디렉터리 생성 및 제거
-   파일과 디렉터리를 조작하기 위한 프리미티브의 제공
-   파일을 보조 저장 장치로 매핑
-   안정적인(비휘발성) 저장 매체에 파일을 백업

### Mass Storage Management

-   자유 공간(free space)의 관리
-   저장 장소 할당
-   디스크 스케줄링

### Caching

### I/O Systems

## Protection and Security

## Kernel Data Structures

### Lists, Stacks and Queues

### Trees

### Hash Functions and Maps

### Bitmaps

## Computing Environments

### Traditional Computing

### Mobile Computing

### Distributed Systems

### Client Server Computing

### Peer to Peer Computing

### Virtualizations

### Cloud Computing

### Real Time Embedded Systems

## Open Source Systems

### History

### Linux

### BSD Unix

### Solaris

### Open Source Systems as Learning Tools
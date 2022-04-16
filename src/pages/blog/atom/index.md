---
cover-image: images/cover.jpg
date: 2015-09-25T00:00:00Z
description: Atom เป็น open source text editor จาก GitHub ที่หน้าตาและการใช้งานคล้ายกับ
  Sublime Text มาก เพิ่งจะเปิดตัวเวอร์ชั่น 1.0 ไปเมื่อไม่กี่เดือนก่อน ซึ่งผมเองได้ลองใช้มาตั้งแต่เวอร์ชั่นแรกๆ
  ตอนนั้นไม่ประทับใจเลย ช่วงนี้ได้มาทดลองใช้งานจริงจังอีกครั้ง พบว่าความเร็วนั้นถือว่าใช้งานได้อย่างไม่ติดขัดแล้ว
  ผมเลยถือโอกาสทดสอบต่อเลยว่า จะมีฟีเจอร์ที่ต้องการ ใช้งานจริงจังแทน Sublime Text
  เลยได้หรือไม่
published: true
tags:
  - coding
  - editor
  - atom
thumbnail: images/atom-editor.png
title: ใช้งาน Atom
url: /2015/09/25/setting-up-atom/
---

<div class="text-center">
  <img src="images/atom-logo-2x.png" alt="Atom Logo" width="290" height="60">
</div>

[Atom](https://atom.io/) เป็น open source text editor จาก GitHub ที่หน้าตาและการใช้งานคล้ายกับ Sublime Text มาก
เพิ่งจะเปิดตัวเวอร์ชั่น 1.0 ไปเมื่อไม่กี่เดือนก่อน ซึ่งผมเองได้ลองใช้มาตั้งแต่เวอร์ชั่นแรกๆ ตอนนั้นไม่ประทับใจเลย
เพราะรู้สึกว่าช้ากว่า Sublime Text เยอะอยู่พอสมควร แต่ก็ได้แต่แอบส่องเป็นระยะๆ หวังลึกๆ ว่าวันหนึ่งจะมาแทน
Sublime Text ได้

<div class="text-center">
  <img src="images/atom-editor.png" alt="Atom Editor">
</div>

ช่วงนี้ได้มาทดลองใช้งานจริงจังอีกครั้ง พบว่าความเร็วนั้นถือว่าใช้งานได้อย่างไม่ติดขัดแล้ว
ผมเลยถือโอกาสทดสอบต่อเลยว่า จะมีฟีเจอร์ที่ต้องการ ใช้งานจริงจังแทน Sublime Text เลยได้หรือไม่

## 1. พื้นฐาน

แทบจะไม่ต้องปรับตัวอะไรจาก Sublime Text เลยก็ว่าได้ครับ

- <kbd>⌘</kbd> + <kbd>p</kbd> (หรือ <kbd>⌘</kbd> + <kbd>t</kbd>) เปิดไฟล์
- <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd> เปิด command palette
- <kbd>⌘</kbd> + <kbd>k</kbd> + <kbd>b</kbd> (หรือ <kbd>⌘</kbd> + <kbd>\</kbd>) เปิด/ปิด sidebar (tree view)
- มี multiple cursor (<kbd>Ctrl</kbd> + click)

Atom มาพร้อมกับ [`apm`](https://github.com/atom/apm) หรือ Atom Package Manager ลักษณะคล้ายกับ Package Control ใน Sublime Text
แต่ผ่าน command line ครับ (หรือจะใช้ผ่าน UI ตรง settings ก็ได้เหมือนกัน) เอาไว้เพิ่ม/ลบ/อัพเดท package
ได้จากสะดวกเลยทีเดียว

<div class="text-center">
  <img src="images/apm-command.png" alt="apm command" width="798" height="392">
</div>

เปิด `atom` จาก terminal ได้เลย

<img src="images/atom-executable.png" alt="atom command" width="221" height="65">

## 2. `vim-mode` กับ `ex-mode`

[`vim-mode`](https://atom.io/packages/vim-mode) เป็น package ของ atom ที่จำลองเอา vim มาใส่ใน atom ซึ่งสำหรับผมถือว่าพอใช้งานได้ (ผมใช้งานเป็นแค่ฟีเจอร์พื้นฐานของ vim) แต่การที่ไม่มี visual block mode (ctrl+v) บางครั้งก็รู้สึกอืดอัดเหมือนกัน
มีคนรู้สึกเหมือนกันเยอะ เลยมีคนทำ [`vim-mode-visual-block`](https://atom.io/packages/vim-mode-visual-block) package มา ลงคู่กับ vim-mode ทำให้ใช้ <kbd>Ctrl</kbd> + <kbd>v</kbd> ใช้งาน visual block mode ได้ครับ

<div class="text-center">
  <img src="images/virtual-block-mode.png" alt="virtual block mode" width="460" height="227">
</div>

ส่วน [`ex-mode`](https://atom.io/packages/ex-mode) นั้นก็ส่วนเสริมของ vim-mode ที่ทำให้ใช้คีย์ <kbd>:</kbd> สำหรับ command mode ของ vim ได้

### ตั้ง keymap เอง

จริงๆ ผม map แค่ตัวเดียวคือ <kbd>,</kbd> + <kbd>e</kbd> เป็น escape เพื่อออกจาก insert mode ไปหา command mode
วิธีการตั้ง keymap เอง กด <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd> แล้วหาคำว่า `open your keymap` แล้วก็ใส่แบบนี้

{{< highlight text >}}
'body':
  ', e': 'vim-mode:activate-normal-mode'
{{< / highlight >}}

## 3. UI Theme & Syntax Theme

ใช้เวลาหาอยู่นาน จนได้คู่ UI Theme ใช้ One Dark (ติดมากับ Atom) ส่วน Syntax Theme ใช้ [Afterglow Monokai](https://atom.io/themes/afterglow-monokai-syntax) กับ [Afterglow Plus](https://atom.io/themes/afterglow-plus) สลับกันไป
(จริงๆ ชอบ Afterglow Plus มากกว่า แต่เวลาใช้กับ One Dark UI แล้วมันมืดทึมๆ ไปหน่อย)
Atom มันแปลกตรงที่ UI Theme กับ Syntax Theme สวยๆ บางอันก็ไม่ค่อยเข้ากันเท่าไหร่

**Afterglow Monokai**

<div class="text-center">
  <img src="images/syntax-afterglow-monokai.png" alt="afterglow monokai syntax theme" width="664" height="773">
</div>

**Afterglow-Plus**

<div class="text-center">
  <img src="images/syntax-afterglow-plus.png" alt="afterglow plus syntax theme" width="664" height="773">
</div>

### ซ่อน Tab bar

ใน command palette (<kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>) ไม่มีคำสั่งสำหรับ toggle tab bar สำหรับซ่อน tab ทั้งหมดที่เปิดอยู่เหมือนใน Sublime Text ปกติผมไม่ได้ใช้งาน tab เลยก็จะปิดไว้
ส่วนใน Atom ต้องไปแก้ใน custom style ด้วย CSS เพื่อซ่อน tab bar เอาครับ

เปิด command palette แล้วเลือก `open your stylesheet` แล้วก็ใส่ CSS ให้ `.tab-bar` เป็น `display: none`

{{< highlight css >}}
.tab-bar {
  display: none;
}
{{< / highlight >}}

## 4. Packages

ผมไม่ได้ลงอะไรเยอะเท่าไหร่ แต่ package ที่จำเป็นสำหรับ Atom ที่สุดสำหรับผมน่าจะเป็น [Project Manager](https://atom.io/packages/project-manager) ครับ
ทำให้ save project และสลับไปมาระหว่าง project ได้เหมือน <kbd>Ctrl</kbd> + <kbd>⌘</kbd> + <kbd>p</kbd> ใน Sublime Text

พวกตระกูล [Atom-linter](https://atom.io/packages/linter) ทั้งหลายก็แจ่มเลยทีเดียว แสดง error/warning แบบ inline ได้เลย

<div class="text-center">
  <img src="images/inline-linting.png" alt="eslint in atom">
</div>

อื่นๆ ก็ตามนี้จ้า

{{< highlight sh >}}
$ apm list

/Users/armno/.atom/packages (17)
├── afterglow-monokai-syntax@1.3.3
├── afterglow-plus@1.6.0
├── chester-atom-syntax@0.1.1
├── editorconfig@1.2.0
├── emmet@2.3.12
├── ex-mode@0.7.0
├── highlight-line@0.11.0
├── highlight-selected@0.10.1
├── language-javascript-better@1.5.0
├── language-javascript-semantic@0.2.1
├── linter@1.6.0
├── linter-eslint@3.0.2
├── linter-jshint@1.2.0
├── project-manager@2.5.2
├── react@0.12.10
├── vim-mode@0.60.0
└── vim-mode-visual-block@0.2.13
{{< / highlight >}}

ถ้าใครมี package อะไรเจ๋งๆ แนะนำกันหน่อยนะครับ :D

### ภาษาไทย

การพิมพ์ภาษาไทยใน Atom นั้นสระไม่ลอยเหมือนใน Sublime Text ครับ เยี่ยมเลย

<div class="text-center">
  <img src="images/thai.png" alt="ภาษาไทยใน Atom">
</div>

### (ไม่ชอบใจ)

การทำงานกับ Atom Linter นั้นยังมีข้อจำกัด (อันใหญ่หลวง) คือไม่สามารถเลือก linter ของแต่ละเฉพาะ project ได้
เช่น project ที่ทำงานผมจะใช้ JSHint ส่วนที่บ้านจะใช้ ESLint แต่ Atom ไม่มีที่สำหรับตั้งค่า linter ของแต่ละ project
นั่นก็คือถ้าลง JSHint มันก็จะใช้ lint กับทุก project หรือ ESLint ก็เช่นกัน (อ้างอิง [linter/744](https://github.com/atom-community/linter/issues/744))

วิธีแก้ของผมก็คือลงไว้ทั้ง 2 ตัว แล้วค่อยไป enable/disable package ใน settings ตอนสลับ project เอา ไม่สะดวกเท่าไหร่ครับ

อีกเรื่องก็คงเป็น startup time ที่ยังช้ากว่า Sublime Text อยู่พอสมควร ถ้าต้องสลับ project บ่อยๆ ก็ไม่สนุกครับ

-----

ตอนนี้ก็พยายามใช้ Atom เป็นหลักอยู่ครับ ผมชอบตรงที่มัน open แล้วก็ release บ่อยดี พัฒนาฟีเจอร์ต่างๆ เร็วดี ส่วนใครมีเทคนิคเจ๋งๆ มาแนะนำกันหน่อยนะ Happy Coding ครับ

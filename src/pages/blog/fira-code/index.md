---
title: "แนะนำ font สำหรับเขียน code: Fira Code"
date: 2017-08-10T11:19:30+07:00
url: /2017/08/10/fira-code-font-for-coding
description: Fira Code ถูกพัฒนามาจาก Fira Mono ที่เพิ่มการแสดงผลอักษระพิเศษ (ligagures) ที่ใช้ในการเขียน code บ่อยๆ เพิ่มเข้ามา (พวกวงเล็บ เครื่องหมายมากกว่า น้อยกว่า เท่ากับ ฯลฯ) ทำให้แยกแยะเครื่องหมายที่คล้ายๆ กันได้ดีขึ้น
cover-image: images/cover.png
thumbnail: images/all_ligatures.png
tags:
  - Fira Code
  - Coding Font
  - VSCode
  - iTerm
---

โดยทั่วไปแล้วพวกเราเหล่า developer ใช้ font ประเภท monospace ในการเขียน code ซึ่งแต่ละคนก็มีความชอบแตกต่างกันไป ผมเองก็ลองใช้มาหลายตัว ตอนนี้มาจบที่ [Fira Code](https://github.com/tonsky/FiraCode) ครับ

Fira Code ถูกพัฒนามาจาก Fira Mono ที่เพิ่มการแสดงผลอักษระพิเศษที่ใช้ในการเขียน code เข้ามา (พวกวงเล็บ เครื่องหมายมากกว่า น้อยกว่า เท่ากับ ฯลฯ) แบบในรูปข้างล่างนี้ (ยืมรูปมาจาก GitHub repo) จุดประสงค์เพื่อทำให้แยกแยะเครื่องหมายที่คล้ายๆ กันได้ดีขึ้น

![รูปตัวอย่างอักขระพิเศษทั้งหมดใน font Fira Code](images/all_ligatures.png)

ที่เห็นได้ชัดเจนก็น่าจะเป็นเครื่องหมาย `===` `!==` หรือลูกศรต่างๆ ที่มีเส้นเชื่อมเข้ามา

ในตอนแรกผมเห็นแล้วยังไม่ถูกใจเท่าไหร่ เราจะมองเห็นเครื่องหมายต่างๆ เปลี่ยนไปจากเดิม กลัวจะมีปัญหากับการอ่าน code แต่พอลองใช้ดู กลับกลายเป็นข้อดี เพราะลดการพิมพ์ผิดไปได้มาก เช่น `=>` ถ้าพิมพ์ผิดเป็น `=<` อาจจะมองผ่านๆ ไม่เห็น แต่ Fira Code แสดงออกมาได้ชัดเจนกว่าเดิม

รูปจาก Roboto Mono
<div class="text-center">
![Roboto Mono](images/roboto-mono.png)
</div>

รูปจาก Fira Code
<div class="text-center">
![Fira Code](images/fira-code.png)
</div>

ส่วนเรื่องการอ่าน code พอเริ่มคุ้นเคยแล้ว ก็ไม่ได้มีปัญหาอย่างที่คิด สมองเราจะจำได้ของมันเอง ด้วยเครื่องหมายต่างๆ ที่ชัดเจนขึ้น ก็อ่านง่ายกว่าเดิมครับ

## ติดตั้งและใช้งาน
[ดาวน์โหลด Fira Code ได้จาก GitHub](https://github.com/tonsky/FiraCode#solution) ได้เลย วิธีติดตั้งก็เหมือนลง font ทั่วไป ครับ (ใน Mac: double click แล้วกด Install Font ลงใน Fontbook)

### VSCode

เปิด Settings ด้วย `⌘ + p` แล้วใส่ค่า `editor.fontFamily` เป็น `Fira Code` กับ `editor.fontLigatures` เป็น `true`

```json
{
  ...
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  ...
}
```

### iTerm2

iTerm2 เวอร์ชั่นล่าสุด (Stable Release: 3.0) นั้นยังไม่ support font ligatures ก็เลยต้องไปดาวน์โหลด [beta version](https://www.iterm2.com/downloads.html) (Test Release: 3.1) มาใช้ก่อน จากนั้นก็เปลี่ยน font ใน Preferences ได้เลยครับ

<div class="text-center">
  <img src="images/iterm-preferences.png" alt="เปลี่ยน font settings ใน iTerm2 beta 3.1">
</div>

Vim ใน iTerm ก็ใช้ได้เหมือนกัน อาจจะเพี้ยนๆ บ้างนิดหน่อย แต่ไม่ค่อยเจอ (บรรทัดสุดท้าย)

<div class="text-center">
  <img src="images/fira-code-in-vim.png" alt="font Fira Code ใน Vim">
</div>

ส่วน Editor ตัวอื่นๆ ดูได้จาก [repo readme](https://github.com/tonsky/FiraCode#editor-support) ได้ครับ มีทั้งที่ support และไม่ support เลือกใช้ได้ตามใจชอบเลย นอกจาก Fira Code แล้วก็ยังมีอีกหลายตัวที่ support ligatures ลองเล่นดูได้ครับ

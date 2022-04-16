---
date: 2013-09-18T00:00:00Z
description:
  EditorConfig นั้นเป็นไฟล์ config ที่ทำให้ editor/IDE ต่างๆ นั้นใช้ coding
  style แบบเดียวกันได้ (เช่นการใช้ tab หรือ space) ถ้าทั้งทีมใช้ coding style แบบเดียวกันก็ช่วยให้
  code เป็นระเบียบดีและลด conflict ได้ครับ
tags:
  - editorconfig
  - sublimetext
  - vim
thumbnail: images/9797239403_d6949b2514_o.png
title: ใช้งาน EditorConfig
url: /2013/09/18/editorconfig-with-sublime-text/
---

อีกปัญหาหนึ่งที่พบบ่อยๆ กับการ coding เป็นทีมนั่นก็คือ developer แต่ละคนนั้นตั้งค่า editor ของตัวเองไม่เหมือนกัน บางคนก็ใช้ tab บางคนก็ใช้ space ระยะห่างแต่ละ tab ก็ไม่เท่ากันอีก ทำงานบน version control บางทีก็ conflict กระจาย หลายๆ ทีมจึงเซ็ต coding style เป็นบรรทัดฐานขึ้นมา ที่ทุกคนต้องทำตาม

แต่ก็มีหลายครั้งครับที่หลายคนไม่ได้ทำตาม coding style ไม่ว่าจะตั้งใจหรือไม่ตั้งใจก็ตาม (บางคนก็ไม่รู้จะตั้งค่า editor ของตัวเองตรงไหน) จึงมีคนคิด [EditorConfig](http://editorconfig.org/) ปล่อยให้หน้าที่นี้เป็นของ editor/IDE แทนครับ

EditorConfig ก็เป็นไฟล์​ text ธรรมดาที่ที่เก็บการตั้งค่าเกี่ยวกับ coding style ไว้ในไฟล์เดียว ปกติแล้วจะตั้งชื่อไฟล์ว่า `.editorconfig` เก็บไว้ที่ root directory ของแต่ละ project เมื่อเปิดกับ editor/IDE ที่ support EditorConfig การตั้งค่าเกี่ยวกับ coding style ก็จะถูกใช้งานโดยอัตโนมัติครับ

### ตัวอย่างไฟล์ `.editorconfig`

{{< highlight text >}}

# editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
{{< / highlight >}}

ทุกไฟล์ใน project ก็จะใช้ coding style แบบนี้ครับ ซึ่งเรายังสามารถกำหนด coding style ที่แตกต่างกันไปตามแต่ละชนิดของไฟล์ก็ได้ เช่น

{{< highlight text >}}

# editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2

[*.css]
indent_style = tab
indent_size = 4

[tests/**.html]
indent_style = tab
indent_size = 2
{{< / highlight >}}

ส่วนในไฟล์ `.editorconfig` นั้นสามารถตั้งค่าอะไรได้บ้าง ดูได้จาก [EditorConfig Properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) ได้เลยจ้า

### ติดตั้ง plugin

ไฟล์ `.editorconfig` นั้นทำหน้าที่แค่เก็บค่า config ของ coding style ไว้ แต่ไม่ได้เข้าไปตั้งค่าให้แต่ละ editor/IDE โดยตรง ซึ่งเราก็ต้องลง plugin ให้กับ editor/IDE ของเราอ่าน config จากไฟล์นี้ด้วยครับ ถึง ณ ตอนนี้ก็มีเกินกว่า 10 ตัวแล้วที่มี plugin รองรับ ไม่ว่าจะ Sublime Text, Vim, Textmate, Emacs ก็มาครบๆ ครับ

สำหรับ Sublime Text นั้นสามารถติดตั้ง [editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime) ได้จาก Package Control หาคำว่า "EditorConfig" ก็ได้ครับ

พอลงไว้แล้ว Sublime Text ก็จะอ่านค่าและใช้งาน config ในไฟล์ `.editorconfig` ในแต่ละ project/repo ได้โดยอัตโนมัติ อย่างรูปผมลองตั้งค่าใน `.editorconfig` ให้ไฟล์ `.css` กับ `.scss` ใช้ `indent_size` ที่ไม่เท่ากัน Sublime Text ก็มองออกครับ (สังเกตเส้น guide)

![editorconfig for sublime text](images/9797239403_d6949b2514_o.png)

ส่วน vim นั้นก็มี plugin [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim) ลงผ่าน pathogen ได้เลย ลงปุ๊บก็อ่าน `.editorconfig` ได้ทันทีครับ

{{< highlight bash >}}
$ cd ~/.vim/bundle
$ git clone https://github.com/editorconfig/editorconfig-vim.git
{{< / highlight >}}

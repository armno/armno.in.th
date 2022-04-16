---
categories:
  - Web Development
comments: true
date: 2012-10-25T14:29:26Z
description:
  Workflow ของ Git ในชีวิตประจำวันของผมค่อนข้างจะตรงไปตรงมาครับ จะมีคำสั่งที่ใช้งานอยู่บ่อยๆ
  ซึ่งผมมักจะสร้างเป็น alias ไว้เพื่อที่จะไม่ต้องพิมพ์ยาวๆ
slug: creating-git-alias
tags:
  - Git
  - terminal
  - Web Development
title: สร้าง Git Alias สำหรับคำสั่งที่ใช้งานบ่อย
url: /2012/10/25/creating-git-alias/
---

Workflow ของ Git ในชีวิตประจำวันของผมค่อนข้างจะตรงไปตรงมาครับ จะมีคำสั่งที่ใช้งานอยู่บ่อยๆ ซึ่งผมมักจะสร้างเป็น alias ไว้เพื่อที่จะไม่ต้องพิมพ์ยาวๆ เช่น `git checkout` ให้เป็น `git co` หรือ `git status` (ซึ่งใช้บ่อยมาก) ให้เหลือแค่ `git s` เป็นต้นครับ

เราสามารถสร้าง alias ของ Git ได้ 2 ระดับ คือ repository level กับ global level โดยที่ global level จะทำให้เราสามารถใช้งาน Git alias ได้กับทุก repository ในเครื่องเราครับ

### วิธีการสร้าง Git alias

{{< highlight sh >}}
\$ git config --global alias.s "status"
{{< / highlight >}}

ซึ่งเวลาเราพิมพ์ `git s` ก็จะเรียกใช้คำสั่ง `git status` ครับผม

{{< highlight sh >}}
\$ git config --global alias.lol "log --decorate --oneline --graph"
{{< / highlight >}}

ก็จะได้ผลอย่างในรูปครับ

![git-lol](images/8506174807_402c740ffd_z.jpg)

### แก้ไข alias ที่เคยสร้างไว้

alias ที่เราสร้างไว้ ถ้าเป็น global alias จะอยู่ในไฟล์ config ของ Git ในเครื่องเราครับ อยู่ที่ `~/.gitconfig` (OSX/Ubuntu) เปิดไฟล์นี้ด้วย text editor แล้วแก้ไข หรือจะเพิ่ม alias จากตรงนี้ก็ได้ครับ อย่างในรูปผมเพิ่มบรรทัด `pom` เข้าไป

![edit-git-alias](images/8506179011_8bd2b49f68_o.png)

### Git alias เฉพาะ repository หนึ่งๆ

ใช้คำสั่งเดียวกันครับ เพียงแต่ลบ `--global` ออก ก็จะเหลือแค่

{{< highlight sh >}}
\$ git config alias.s "status"
{{< / highlight >}}

alias ที่ถูกสร้างขึ้นก็จะอยู่ในไฟล์ `.git/config` ในโฟลเดอร์โปรเจ็คครับผม

![git-alias-local](images/8506182065_c39a603276_o.png)

การสร้าง alias ไว้ใช้งานนั้น ดูเผินๆ เหมือนจะไม่ค่อยคุ้มค่าเท่าไหร่ (ประหยัดการพิมพ์ไปได้แค่ไม่กี่ตัวอักษร แล้วต้องมานั่งจำ alias ที่เราสร้างไว้อีก) แต่เมื่อรวมกันเยอะๆ แล้ว ถือว่าช่วยประหยัดเวลาไปได้มาก กับคำสั่งงานที่ต้องพิมพ์ซ้ำๆ หลายรอบในแต่ละวัน ใช้งานบ่อยๆ จนมันจะซึมเข้าหัวเราเอง ไม่ต้องจำครับ

#### ปล.

- อ่านเพิ่มเติมได้ที่ [Git Tips & Tricks หัวข้อ Git Aliases](http://git-scm.com/book/en/Git-Basics-Tips-and-Tricks#Git-Aliases) ครับ
- `git lol` นั้นผมยืมมาจากคุณ [Scott Chacon](http://scottchacon.com/) ครับ
- ใครมี alias แปลกๆ เอามาแบ่งกันได้นะ

---
categories:
  - Web Development
comments: true
date: 2012-09-09T16:42:35Z
description:
  หากต้องทำ HTML Mockup อยู่บ่อยๆ ปลั๊กอิน Nettuts+ Fetch นั้นช่วยประหยัดเวลาในช่วงแรกๆ
  ไปได้เยอะเลยครับ
slug: sublime-text-2-nettuts-fetch
tags:
  - Editor
  - Plugin
  - SublimeText
  - Web Development
title: "Sublime Text 2: ใช้งานปลั๊กอิน Nettuts+ Fetch"
url: /2012/09/09/sublime-text-2-nettuts-fetch/
---

หากต้องทำ HTML Mockup อยู่บ่อยๆ ปลั๊กอิน Nettuts+ Fetch นั้นช่วยประหยัดเวลาในช่วงแรกๆ ไปได้เยอะเลยครับ ก่อนอื่น หากยังไม่รูู้จักปลั๊กอินตัวนี้ เชิญไปอ่านข้อมููลก่อนที่ [Introducing Nettuts+ Fetch](https://code.tutsplus.com/articles/introducing-nettuts-fetch--net-23490) จากผู้ผลิตได้เลย

หรือชอบดู video ก็ดูได้ที่ [Fetch Files with Ease](https://tutsplus.com/lesson/fetch-files-with-ease/) ที่ Tutsplus+ ได้ครับ

### ติดตั้ง

![install-nettuts-fetch](images/8506229417_48ec338571_o.png)

สามารถติดตั้งได้จาก Package Manger หาคำว่า Fetch แล้วก็ติดตั้งเลยครับ หลังจากติดตั้งแล้วกดใช้งานด้วยคีย์ Ctrl + Shift + P (Cmd + Shift + P บน Mac) แล้วเลือก Fetch ครับ

### ใช้งาน

![using-fetch](images/8507342672_f6d71e2376_o.png)

package ที่มากับ Fetch นั้นมีแค่ 2 ตัวคือ jQuery กับ HTML5 Boilerplate อาจจะไม่เพียงพอ ซึ่งเราสามารถเพิ่ม package อื่นๆ เข้าไปในลิสต์ได้ครับ โดยกด Ctrl + Shift + P (Cmd + Shift + P บน Mac) แล้วเลือก Fetch: Manage remote files

![manage-remote-files](images/8506234847_6d5d504ed6_z.jpg)

ไฟล์ที่เปิดขึ้นมาจะมี 2 ส่วนคือ files กับ packages ส่วนของ files นั้น URL จะเป็นไฟล์ text ชนิดใดก็ได้ (ถ้าเป็น snippet บน Gist ต้องไปกดเอา raw URL ของไฟล์นั้นมาเด้อ) (ผมลองใส่ URL เป็นไฟล์รูปแล้ว ไม่เวิร์ก) ปลั๊กอินจะโหลด content ของไฟล์จาก remote URL มา paste ณ จุดที่ cursor เราอยู่เลย (เฮ้ย!) ดังนั้นแนะนำว่ากด Ctrl + N เพื่อสร้างไฟล์ใหม่ก่อนค่อย fetch แล้ว save ครับ

![file-fetched](images/8506239899_2ace529034_z.jpg)

ส่วน packages เป็น URL อะไรก็ได้ที่ให้ไฟล์ .zip เท่านั้น ถ้าเป็น Github repo เอา url ของปุ่ม ZIP มาได้เลย พอเลือก fetch package แล้วมันจะถามว่าเราจะ extract file ไว้ที่ไหน ส่วนมากก็ไว้ที่ root ของโปรเจ็คเราครับ ถ้าไฟล์ชื่อซ้ำกัน ไฟล์ที่ถูก fetch มาทีหลังจะไปทับไฟล์เดิมให้ด้วย (ดีมั้ยน่ะ?)

เริ่มโปรเจ็คใหม่แบบไวไวควิกก็คือ สร้างโฟลเดอร์เปล่า > เปิดใน Sublime > fetch ไฟล์ที่ต้องใช้ให้ครบ > เขียนโค้ด ครับผม นอกจากสะดวกรวดเร็วแล้ว ยังได้ไฟล์ที่ใหม่สดเสมอด้วย :)

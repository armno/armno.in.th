---
categories:
  - Web Development
comments: true
date: 2012-03-11T22:39:31Z
description:
  Normalize.css เป็น CSS ที่ทำให้ทุก browser แสดงผล default style ได้ใกล้เคียงกันที่สุด
  ต่างจาก CSS Reset ตรงที่ Normalize.css นั้นไม่เคลียร์ style ทุกอย่างทิ้งไปเลย
slug: normalize-css
tags:
  - CSS
  - CSS Reset
  - Normalize.css
  - Web Development
title: ทำความรู้จักกับ Normalize.css
url: /2012/03/11/normalize-css/
wordpress_id: 1993
---

Web Developer หลายคนคงรู้จักและคุ้นเคยกับ [CSS Reset](https://www.google.co.th/#hl=th&q=css+reset) เป็นอย่างดี บนโลกนี้ก็มี CSS Reset หลายตัวให้เลือกใช้ CSS Framework เกือบทุกตัวก็ยังมี reset เป็นของตัวเองอีกต่างหาก เรียกได้ว่า reset ได้ครองโลก CSS มาอย่างยาวนาน จนกระทั่งมียอดกระทาชาย 2 หนุ่ม คือ **Nicolas Gallagher** ([@necolas](https://twitter.com/necolas)) และ **Jonathan Neal** ([@jon_neal](https://twitter.com/jon_neal)) พัฒนา [Normalize.css](https://necolas.github.com/normalize.css/) ขึ้นมาด้วยจุดประสงค์ที่แตกต่างออกไปจาก CSS Reset คือ ไม่ต้องให้ทุก browser เริ่มกำหนด style ใหม่จาก 0 แต่เน้นปรับการแสดงผล style เริ่มต้นให้ตรงกันทุกๆ browser มากกว่า

### ความแตกต่างระหว่าง CSS Reset กับ Normalize.css

> อ้างอิงจาก [เว็บของผู้พัฒนา](https://nicolasgallagher.com/about-normalize-css/) นะครับ

- Normalize.css รักษา style ปกติของ browser ไว้ โดยที่เราไม่จำเป็นต้องกำหนด style ใหม่ให้กับทุกๆ element อีกครั้งหนึ่ง
- Normalize.css แก้บั๊กหลายๆ อย่างที่อยู่นอกเหนือ CSS Reset เช่น HTML5 search form หรือ การแสดงผล SVG เป็นต้น
- Normalize.css ดูไม่รกรุงรังเมื่อดูจาก developer tools ทั้งหลาย  ที่เจอบ่อยๆ เวลา inspect element ดู เมื่อใช้ reset

![cluttered-css](images/8507760424_b37ae2b173_z.jpg)

- Normalize.css แยกเป็นส่วนๆ ชัดเจน เช่น form, typography ส่วนไหนที่เราไม่ต้องการ ก็ลบออกไปได้
- Normalize.css มี document ที่ดีกว่า CSS Reset .. ที่เห็นได้ชัดก็คือมีอธิบายในตัวโค้ดเลย ส่วน CSS Reset มักจะมาแบบแห้งๆ ไม่มีอธิบายอะไร นอกจากนี้ Normalize.css ยังมี document บน Github ที่ละเอียดดีอีกด้วย

### ควรเลือกใช้ CSS Reset หรือ Normalize.css ?

แล้วแต่สไตล์ครับ CSS Reset กับ Normalize.css มันตอบโจทย์คนละอย่างกัน อยู่ที่ว่าเราอยากเริ่มโปรเจ็คต์แบบไหน แบบแห้งๆ ดิบๆ เราเขียนเองใหม่หมดทุกอย่าง ก็ใช้ reset ได้ แต่ถ้าเบื่อที่จะต้องมากำหนด style ใหม่ให้กับแต่ละ element ก็ใช้ Normalize.css ดีกว่า

ผมว่า reset เหมาะกับคนที่วางโครงสร้าง CSS ดีๆ รอบคอบๆ หน่อย สามารถเขียนกำหนด style ให้กับทุก element ที่ถูก reset ได้ครบ (คนพวกนี้ บางคนก็มี reset เป็นของตัวเองด้วยซ้ำ) ส่วน Normalize.css นั้นน่าจะเหมาะกับคนที่ชอบเขียน CSS เท่าที่จำเป็น หรือไม่ชอบเขียนอะไรซ้ำซ้อนครับ

ระยะหลังมานี้ผมเลือกใช้ Normalize.css มากกว่า CSS Reset ครับผม

อ่านเพิ่มเติม [What is the different between Normalize.css and Reset CSS?](https://stackoverflow.com/questions/6887336/what-is-the-different-between-normalize-css-and-reset-css) (StackOverflow)

---
categories:
- Web Development
comments: true
date: 2011-12-11T19:45:25Z
description: หลายคนเปลี่ยนมาใช้ Sublime Text แล้วงงว่าหน้าต่างตั้งค่าของมันอยู่ตรงไหน
  จริงๆ แล้วมีไฟล์เก็บ config ต่างๆ ของมันอยู่ครับ
slug: sublime-text-2-config
tags:
- Coding
- Sublime Text 2
- Web Development
title: แก้ไขการตั้งค่าต่างๆ ใน Sublime Text 2
url: /2011/12/11/sublime-text-2-config/
---

สำหรับคนที่เปลี่ยนจาก full-featured IDE อย่าง [NetBeans](https://armno.in.th/2010/07/10/netbeans-ide-for-php-coding/), [Aptana](https://armno.in.th/2011/08/19/aptana-studio/) หรือแม้แต่ [Notepad++](http://notepad-plus-plus.org/) มาใช้ editor จรวดอย่าง [Sublime Text 2](https://armno.in.th/2011/09/20/sublime-text-2-editor-v12-engine/) ในตอนแรกอาจจะงงว่า หน้าจอการตั้งค่าต่างๆ ของ Sublime Text 2 มันอยู่ตรงไหน อย่างใน Netbeans ก็จะมีหน้าต่าง Options แบบในรูปข้างล่าง เอาไว้เข้าไปแก้ไขการตั้งค่าต่างๆ ของ IDE .. แต่ว่า ของ ​Sublime Text 2  มันอยู่ตรงไหนล่ะ

![หน้าต่ง config ของ NetBeans](https://files.armno.in.th/uploads/2010/07/image20.png)

ความจริง Sublime Text 2 ก็มีการตั้งค่าต่างๆ เก็บไว้เหมือนกันครับ เพียงแต่ไม่ได้มีหน้าต่าง Options ให้เราใช้งาน (ณ ตอนนี้นะ) การที่เราจะแก้การตั้งค่าต่างๆ ของ Sublime Text 2 ก็ทำได้โดย การดำดิ่งลงไปแก้ text file ที่เก็บการตั้งค่าต่างๆ โดยตรงครับ โดยเมนูจะอยู่ที่ Preference

<i>UPDATED - ตั้งแต่ build 2181 (ออกวันที่ 22 กุมภาพันธ์ 2555) เป็นต้นไป เมนู File Settings กับ Global Settings ถูกยุบรวมกันเป็น Settings แล้วครับ</i>

![User settings ใน Sublime Text](https://files.armno.in.th/uploads/2011/12/user_settings-600x352.jpg)

การตั้งค่าต่างๆ จะแบ่งเป็น 2 ส่วน คือ

* `Settings` เป็นการตั้งค่าต่างๆ ของตัว code editor เช่น ฟอนต์ ขนาดฟอนต์ การปิด-เปิด word-wrap รวมไปถึง theme หรือ การจำค่าการปิด-เปิดไฟล์
* `Key Bindings` เป็นการตั้งค่า hotkey ต่างๆ ครับ

โดย Sublime Text 2 จะแบ่งแต่ละส่วนเป็น 2 ไฟล์อีกที คือ

* Default ของ Sublime Text 2
* User การตั้งค่าของเราเอง

ถ้าลองเปิด File Settings - Default มาก็จะเจอ JSON File ยาวๆ แบบนี้ครับ

![ไฟล์ Default Settings ใน Sublime Text](https://files.armno.in.th/uploads/2011/12/file_settings-600x527.jpg)

ตัว default นี้ ก็จะมี comment บอกไว้หมดครับ ตัวไหนคือการตั้งค่าอะไร และค่า value ที่เราเปลี่ยนได้ มีอะไรบ้าง ตรงนี้เอาไว้  "ดู" เฉยๆ ครับ ถ้าเราเกิดอยากแก้ไขอะไรขึ้นมา เราจะไม่แก้ในไฟล์นี้ แต่จะไปเขียนใหม่ที่ส่วนของ User Settings แทน

อย่างเช่น ผมต้องการเปลี่ยนฟอนต์ และขนาดของฟอนต์ ก็ทำได้โดยเปิด File Settings - User ขึ้นมา

![Default User Settings](https://files.armno.in.th/uploads/2011/12/user_settings_empty-1.jpg)

ตอนแรกจะยังไม่มีอะไร เราก็เอาค่าที่เราต้องการเปลี่ยน มาเพิ่มตรงนี้ โดยเพิ่มเฉพาะค่าที่เราต้องการเปลี่ยนครับ

![เพิ่ม user settings เข้าไป](https://files.armno.in.th/uploads/2011/12/user_set.jpg)

เสร็จแล้วก็ save ไฟล์นี้ การตั้งค่านี้ก็จะมีผลทันตาเห็น .. เสร็จละครับ ส่วน Global Settings นั้นก็เหมือนกันเลย

จริงๆ เราจะแก้ค่าใน Default File เลยก็ได้ มีผลเหมือนกัน แต่ไม่แนะนำครับ เพราะทุกครั้งที่ Sublime Text อัพเดท ไฟล์ default config จะถูกเขียนทับเป็นค่าเริ่มต้น ดังนั้นควรจะเขียนเพิ่มมากกว่า ส่วน Default เอาไว้อ้างอิงครับ ส่วน Key Bindings นั้นออกจะแปลกไปหน่อย เพราะเป็น Array ซะส่วนมาก ลองสังเกตและก็จับทางดูครับ หลักการเดียวกัน

ดูจะ Geek ไปหน่อยสำหรับการตั้งค่าของ Sublime Text 2 ลองเล่นกันดูครับ

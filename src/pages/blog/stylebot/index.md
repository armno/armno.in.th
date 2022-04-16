---
categories:
  - Web Development
comments: true
date: 2012-10-10T14:07:30Z
description:
  เคยไหมครับเวลาเข้าเว็บบางเว็บแล้วรู้สึกไม่ชอบใจอะไรบางอย่าง เช่น ฟอนต์ไม่สวย
  สีพื้นหลังเปรี้ยวเกิน หรือฟอนต์ตัวเล็กเท่าจิ๋มมดครั้นจะไปแจ้งเจ้าของเว็บให้ปรับปรุง
  ก็ดูจะเกินกำลังไปหน่อย Stylebot ช่วยคุณได้ครับ
slug: stylebot-custom-css
tags:
  - CSS
  - Extension
  - Google Chrome
  - Stylebot
title: 'Stylebot: Custom CSS'
url: /2012/10/10/stylebot-custom-css/
---

<p class="message--warning">
  <strong>Update 2018: บทความนี้เก่าแล้ว ตอนนี้ StyleBot หยุดพัฒนาไปแล้ว ใช้ [Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en) ดีกว่าครับ
</p>

เคยไหมครับเวลาเข้าเว็บบางเว็บแล้วรู้สึกไม่ชอบใจอะไรบางอย่าง เช่น ฟอนต์ไม่สวย สีพื้นหลังเปรี้ยวเกิน หรือ[ฟอนต์ตัวเล็กเท่าจิ๋มมด](https://www.manager.co.th) ครั้นจะไปแจ้งเจ้าของเว็บให้ปรับปรุง ก็ดูจะเกินกำลังไปหน่อย Stylebot ช่วยคุณได้ครับ

[**Stylebot**](https://github.com/ankit/stylebot) เป็น Extension ของ Google Chrome ที่ให้เราช่วยเปลี่ยน style (CSS) ของเว็บใดๆ ในโลกนี้ได้ โดย Stylebot จะจำค่าที่เราเปลี่ยนแปลงไว้ พอเรากลับเข้าเว็บนั้น style ก็จะเป็นตามที่เรากำหนดไว้ครับ สามารถดาวน์โหลดและติดตั้งได้จาก [Chrome Web Store](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha) ได้เลย นอกจากนี้ยังมี source บน [Github](https://github.com/ankit/stylebot) ด้วยครับผม

### ใช้งาน Stylebot

กรณีแรกที่ผมใช้ก็กับ WordPress นี่แหละครับ ต้องการเปลี่ยนฟอนต์ของ textarea บางที่จาก sans-serif ให้เป็นพวก monospace เพราะอ่านโค้ดได้ง่ายกว่า อย่างข้างล่างนี่เป็น editor ของ [Contact Form 7](https://wordpress.org/extend/plugins/contact-form-7/) ครับ

![default-sans-serif-font](images/8506203367_0420429f87_o.png)

อยากเปลี่ยนให้เป็นฟอนต์ monospace ก็คลิกขวาที่ textarea แล้วเลือก Stylebot > Style Element เจ้าตัว Stylebot ก็จะงอกออกมาด้านขวามือครับ

![screenshot ของ plugin contact form 7](images/8507317410_60f3b5c751_z.jpg)

มีออพชั่นให้ปรับแต่งมากมาย จะเลือกจากตรงนั้นก็ได้ หรือจะเขียน CSS เองก็ได้ หากต้องการเขียนเอง คลิกตรงปุ่ม Advanced ข้างล่างครับ

![stylbot-applied](images/8506211115_85e4de2e96_o.png)

![edit-advanced-css](images/8507324720_f3bec711a1_o.png)

จากนั้นก็กด Save แล้วคราวต่อไปถ้าเราเปิดเว็บนี้อีก Stylebot ก็จะจัดการโหลด style ที่เรากำหนดเองให้อัตโนมัติครับ

![stylebot-in-real-life](images/8506217379_173afce33a_o.png)

ส่วนมากผมก็จะใช้กับฟอนต์เป็นหลัก แต่ก็มีอีกหลายคนที่ใช้งานกับทั้งเว็บ แบบว่าโมฯ จนไม่เหลือโครงเดิมเลยก็มี ตามไปดูได้ที่ [https://stylebot.me/](https://stylebot.me/) ครับผม

Chrome Extension ตัวนี้ เอาไว้ตามใจตัวเองจริงๆ เลย :)

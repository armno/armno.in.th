---
categories:
- Web Development
comments: true
date: 2010-07-11T08:55:23Z
slug: netbeans-tips2-code-auto-complete
tags:
- Auto-completion
- Editor
- HTML
- NetBeans IDE
- PHP
title: NetBeans Tips#2 ใช้งาน Code Auto-complete
url: /2010/07/11/netbeans-tips2-code-auto-complete/
wordpress_id: 1258
---

บทความที่ 3 ในซีรี่ส์ [NetBeans IDE](https://armno.in.th/content/netbeans-ide) นะครับ




  * [รู้จัก NetBeans IDE](https://armno.in.th/20100710/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3-netbeans-ide-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%80%e0%b8%82%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b9%82%e0%b8%84%e0%b9%89%e0%b8%94-php)


  * [NetBeans Tips#1 เริ่มสร้างโปรเจ็ค](https://armno.in.th/20100710/netbeans-tips1-%e0%b9%80%e0%b8%a3%e0%b8%b4%e0%b9%88%e0%b8%a1%e0%b8%aa%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%87%e0%b9%82%e0%b8%9b%e0%b8%a3%e0%b9%80%e0%b8%88%e0%b9%87%e0%b8%84)


วันนี้จะพูดถึงเรื่อง **Code Auto-completion** ของ NetBeans นะครับ ฟีเจอร์นี้ถือเป็นฟีเจอร์มาตรฐานของ IDE ทุกตัวเลยก็ว่าได้ (ใครไม่มีเชยแย่เลย) .. สำหรับฟีเจอร์นี้ เป็นฟีเจอร์ที่ผมคิดว่าผมใช้บ่อยมากที่สุดของ NetBeans IDE เลยนะ .. ปกติแล้ว Code Auto-completion ถูกเปิดใช้งานโดยอัตโนมัติอยู่แล้วครับ และยังปรับแต่เพิ่มเติมได้ด้วยนะ โดยไปที่เมนู **Tools > Options** และเลือกแท็บ **Editor > Code Completion** ครับผม เลือกตั้งค่าแยกภาษาก็ได้นะ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb5.png)](https://files.armno.in.th/uploads/2010/07/image5.png)



การทำงานของ Code Auto-completion ของ NetBeans IDE คือ จะ**ทำงานอัตโนมัติเมื่อเราเคาะ space ครับ** ทุกสิ่งทุกอย่างที่มีความเป็นไปได้ว่าจะมาต่อโค้ดตรงนั้น ก็จะโผล่ขึ้นมา พร้อม document ครับ .. ในรูปผมเคาะ space หนึ่งครั้งหลังแท็ก `<body>` ครับ เราสามารถใช้ลูกศรเลื่อนขึ้น-ลงบนคีย์บอร์ด เพื่อเลือกโค้ดที่เราต้องการ แล้วกดปุ่ม Enter มันก็จะเติมโค้ดให้เราอัตโนมัติครับ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb6.png)](https://files.armno.in.th/uploads/2010/07/image6.png)

ถ้าเป็น NetBeans for PHP ก็แน่นอนว่าจะต้องมี Auto-completion สำหรับโค้ด PHP ด้วย ในภาพข้างล่าง ผมพิมพ์เครื่องหมาย **$** (dollar sign) ซึ่งก็หมายถึงผมต้องการประกาศตัวแปรในโค้ด เจ้า NetBeans ก็ pop-up ขึ้นมาให้ครับ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb7.png)](https://files.armno.in.th/uploads/2010/07/image7.png)

แค่นี้มันยังน้อยไป NetBeans IDE ยังสามารถใช้งาน Auto-completion กับ Framework ต่างๆได้ด้วยนะ (แต่ต้อง[สร้างโปรเจ็คใน NetBeans IDE](https://armno.in.th/20100710/netbeans-tips1-%e0%b9%80%e0%b8%a3%e0%b8%b4%e0%b9%88%e0%b8%a1%e0%b8%aa%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%87%e0%b9%82%e0%b8%9b%e0%b8%a3%e0%b9%80%e0%b8%88%e0%b9%87%e0%b8%84) ก่อนนะครับ) .. ลองกับ **WordPress** บอกหมดทั้งชื่อฟังก์ชั่น, อาร์กิวเม้นต์ พร้อมบอกด้วยว่าอยู่ที่ไฟล์ไหน

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb8.png)](https://files.armno.in.th/uploads/2010/07/image8.png)

สมมุติผมเลือกซักฟังก์ชั่นนึง ที่มีอาร์กิวเม้นต์เยอะๆนะครับ ตัว NetBeans IDE จะใส่อาร์กิวเม้นต์ทั้งหมดมาให้เลย ซึ่งสังเกตว่าจะมีกรอบสีม่วงรอรับค่าจากคียบอร์ด เราก็พิมพ์ค่าของอาร์กิวเม้นต์ที่จะส่งไปครับ แล้วพอกด **Enter** หรือ **Tab** เจ้ากรอบสีม่วงนั้น ก็จะเลื่อนไปยังอาร์กิวเม้นต์ถัดไปให้ทันที … ต่างกันแค่ตรงที่ กด Tab กรอบสีม่วงจะวนไปเรื่อยๆ จนถึงอาร์กิวเม้นต์สุดท้าย แล้ววนมาอาร์กิวเม้นต์ตัวแรกให้ใหม่ แต่ถ้ากด Enter เมื่อถึงอาร์กิวเม้นต์สุดท้ายแล้ว กด Enter อีกครั้ง cursor จะไปอยู่ท้ายประโยคแทนครับ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb9.png)](https://files.armno.in.th/uploads/2010/07/image9.png)

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb10.png)](https://files.armno.in.th/uploads/2010/07/image10.png)

**jQuery** ก็มีนะ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb11.png)](https://files.armno.in.th/uploads/2010/07/image11.png)

จะทำงานกับ Auto-completion ให้ดี มันต้องเร็วและสะดวกกว่านี้ครับ ปกติจะหน่วงเวลาประมาณ 1 วินาที ก่อนที่มันจะ pop-up ขึ้นมา ถ้าคิดว่าช้าไป กดคีย์ลัดเพื่อ force ให้ตัว auto-complete โผล่มาทันทีเลยก็ได้ครับ คีย์ลัดนั้นก็คือ **Ctrl+space** ครับ กดปุ๊ป เด้งปั๊ปเลย

NetBeans IDE มันฉลาดพอที่จะเติมโค้ดที่มีเพียงค่าเดียว ให้ทันทีโดยที่ไม่ต้องกดเลือกครับ .. งงกันล่ะสิ ลองดูตัวอย่าง ผมต้องการพิมพ์ height ใน CSS ก็แค่พิมพ์ he แล้วกด Ctrl+space เจ้า NetBeans IDE ก็จะเติมโค้ดส่วนที่เหลือให้เลยทันที (พร้อมเครื่องหมาย colon ด้วยนะ) เพราะมันรู้แน่ๆว่า property ที่ขึ้นต้นด้วย he มีเพียง height อย่างเดียว เลยเติมให้ทันทีโดยไม่ต้องเสียเวลาครับ .. ซึ่งคีย์ลัด Ctrl+space เนี่ยผมใช้บ่อยมากกกกกกเลยล่ะ ประหยัดเวลาได้เยอะทีเดียว

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb12.png)](https://files.armno.in.th/uploads/2010/07/image12.png)


### Code-Autocompletion ใน NetBeans IDE เติมอะไรได้บ้าง






  * Basic HTML, PHP, CSS, JavaScript


  * ฟังก์ชั่นต่างๆใน Framework (ทั้ง PHP และ JavaScript Framework) พร้อม Argument


  * Property, Method ของ class และ parent class


ลองไปเล่นกันดูครับ

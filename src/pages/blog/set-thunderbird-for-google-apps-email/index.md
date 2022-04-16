---
categories:
- Life
comments: true
date: 2010-05-31T19:33:41Z
slug: set-thunderbird-for-google-apps-email
tags:
- GMail
- Google Apps
- Mozilla Thunderbird
- การตั้งค่า Thunderbird
title: วิธีตั้งค่า Mozilla Thunderbird ให้ใช้งานอีเมล Google Apps ได้
url: /2010/05/31/set-thunderbird-for-google-apps-email/
wordpress_id: 1195
---

ผมเป็นคนหนึ่งที่ใช้บริการ [Google Apps](http://www.google.com/apps/index1.html) กับโดเมนเนมของตัวเองครับ _(ทั้ง loveofze.com และ armno.in.th)_ ที่ใช้เป็นหลัก และเหมือนจะใช้อยู่อย่างเดียวด้วย ก็คือ GMail มี email address เป็นชื่อเว็บตัวเอง นอกจากจะดูเท่แล้ว ยังใช้งานได้จริงด้วย



แต่ปัญหาอย่างหนึ่งที่ผมรู้สึกขัดใจ ก็คือการเข้าไปเช็คอีเมลผ่านหน้าเว็บของ GMail ใน Google Apps ต้องเข้าผ่าน URL ที่ค่อนข้างจะจำยาก คือ **http://mail.google.com/a/ชื่อโดเมนของเรา** _(เช่น [http://mail.google.com/a/armno.in.th](http://mail.google.com/a/armno.in.th))_ ทางออกของผมก็คือ ใช้ email client แทน ใช้ [Mozilla Thunderbird](http://www.mozillamessaging.com/en-US/thunderbird/) แบบที่ใช้ที่ทำงานครับ ซึ่งการที่จะทำให้ Mozilla Thunderbird ใช้งาน GMail Google Apps ของเราได้นั้น ก็ต้องมีการตั้งค่าเล็กน้อย ดังนี้ครับ



หลังจากดาวน์โหลดและติดตั้ง Mozilla Thunderbird ในเครื่องเรียบแล้วร้อยแล้ว เปิดโปรแกรม เลือกเมนู **File > New > Mail Account** ตามภาพข้างล่างครับ



[![image](https://files.armno.in.th/uploads/2010/05/image_thumb1.png)](https://files.armno.in.th/uploads/2010/05/image1.png)



หลังจากนั้นก็ใส่ข้อมูลในช่องตามอีเมลของเราครับ ผมเลือก **Remember password** ด้วยเพื่อจะได้ไม่ต้องกรอกรหัสผ่านตอนล็อกอิน เนื่องจากใช้คอมฯของตัวเองน่ะครับ ตรงนี้ก็แล้วแต่สะดวกใจเลย :)



[![image](https://files.armno.in.th/uploads/2010/05/image_thumb2.png)](https://files.armno.in.th/uploads/2010/05/image2.png)



หลังจากนั้นเจ้า Thunderbird ก็จะพยายามวิ่งหา mail server ของโดเมนเราครับ ผมลองรอดูแล้ว นานสองนาน ก็ยังหาไม่เจอ เนื่องจากมันไม่รู้ว่า Mail Server ของเรา เป็นของ Google เนื่องจากเราใช้ Google Apps นั่นเอง .. กด **Stop** เลยครับ เพราะว่าเราต้องใส่ข้อมูล mail server แบบ manual



[![image](https://files.armno.in.th/uploads/2010/05/image_thumb3.png)](https://files.armno.in.th/uploads/2010/05/image3.png)



พอกด Stop แล้ว Thunderbird ก็จะให้เราใส่ข้อมูลเอง .. กรณีนี้ผมเปิด IMAP ไว้แล้ว จะเลือกใช้ IMAP แทน POP นะครับ ([อ่านวิธีเปิดการใช้งาน IMAP สำหรับ GMail](http://mail.google.com/support/bin/answer.py?answer=77695)) ตั้งค่าตามนี้ครับ

* Username: ใส่**อีเมลแบบเต็ม**ของเรา (รวมโดเมนด้วย)
* Incoming: `imap.gmail.com` เลือก `IMAP` พอร์ต `993` ส่วนช่องสุดท้ายเลือก `SSL/TLS`
* Outgoing: `smtp.gmail.com` พอร์ต `587` และเลือก `SSL/TlS` ในช่องสุดท้ายเช่นกันครับ

สำหรับใครที่ไม่ได้ใช้ IMAP แต่ใช้ POP แทน เปลี่ยน Incoming เป็นตามนี้ครับ (นอกนั้นเหมือนกับแบบ IMAP)

* Incoming: `pop.gmail.com` เลือก `POP` พอร์ต `995` ช่องสุดท้ายเลือก `SSL/TLS`

เสร็จแล้วกด `Re-test Configuration` เลย

[![image](https://files.armno.in.th/uploads/2010/05/image_thumb4.png)](https://files.armno.in.th/uploads/2010/05/image4.png)

รอมันหมุนๆต่ออีกซักแป๊ป ก็จะมีเม็ดถั่วเขียวขึ้นมาแบบภาพด้านล่างครับ กด `Create Account` ได้เลย

[![image](https://files.armno.in.th/uploads/2010/05/image_thumb5.png)](https://files.armno.in.th/uploads/2010/05/image5.png)

รอ Thunderbird ไป get mail มาอีกสักนิด ก็ใช้ได้แล้วล่ะครับ

[![image](https://files.armno.in.th/uploads/2010/05/image_thumb6.png)](https://files.armno.in.th/uploads/2010/05/image6.png)

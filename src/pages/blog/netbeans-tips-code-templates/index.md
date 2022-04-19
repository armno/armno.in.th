---
categories:
- Web Development
comments: true
date: 2011-04-25T22:27:10Z
slug: netbeans-tips-code-templates
tags:
- Code Templates
- Coding
- CSS3
- NetBeans IDE
- Zen Coding
title: 'Netbeans Tips: สร้าง Code Template ไว้ใช้เอง'
url: /2011/04/25/netbeans-tips-code-templates/
---

ฟีเจอร์ **Code Templates** ของ **[NetBeans IDE](https://armno.in.th/20100710/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3-netbeans-ide-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%80%e0%b8%82%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b9%82%e0%b8%84%e0%b9%89%e0%b8%94-php)** นั้น เราสามารถเพิ่ม custom code templates เองได้ พูดง่ายๆก็คือ การสร้าง Code Snippet ที่เราต้องพิมพ์เองบ่อยๆ ย่อเป็นคำสั้นๆ ทำให้เราสามารถลดเวลาการพิมพ์โค้ดไปเยอะเลยทีเดียว .. จริงๆแล้ว [Zen Coding](https://armno.in.th/2010/10/20/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89-zen-coding-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A-netbeans-ide/) ของ Netbeans ก็ใช้ความสามารถนี้แหละครับพี่น้อง

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb8.png)](https://files.armno.in.th/uploads/2011/04/image9.png)


เอาล่ะ มาดูสถานการณ์กัน .. ยกตัวอย่างผมเขียน CSS บางส่วนต้องใช้ CSS3 อย่าง border-radius หรือ text-shadow แต่ด้วยความที่ browser รุ่นเก่าบางตัว ยังต้องใช้ vendor-prefix properties ถึงจะสามารถแสดงผลได้สมบูรณ์ บ่อยครั้งเลยที่ property บางตัว ต้องเขียน CSS ถึง 3 บรรทัด (หรือบางคนก็ 5) (หรือบางคนขยันเว่อร์ก็ล่อไป 8!) ทั้งๆที่ values เหมือนกัน อย่างภาพข้างล่าง

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb9.png)](https://files.armno.in.th/uploads/2011/04/image10.png)

จะดีกว่าไหม ถ้าเรา**พิมพ์ครั้งเดียวแล้วมันออกทั้ง 3 บรรทัดเลย** ..

เข้าไปที่ **Tools > Options > Editor > Code Templates** ครับ .. มีหลายภาษาให้เลือก ลองกดเลือกเล่นๆดูก่อนได้ .. ถ้าว่างนะ

เลือกภาษาเป็น Cascading Style Sheet (CSS) ตอนนี้ยังไม่มีอะไรเลย ก็กดปุ่ม New เพื่อเพิ่มอันใหม่เข้าไป .. Abbreviation (คำย่อ) คือ คำที่เราต้องการพิมพ์แบบย่อๆนั่นแหละครับ ผมใส่เป็น text-shadow ละกัน

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb10.png)](https://files.armno.in.th/uploads/2011/04/image11.png)

จากนั้นในส่วนกล่องเบิ้มๆข้างล่าง Expanded Text นั้น เป็นช่องที่ Netbeans จะเติมโค้ดให้อัตโนมัติ เมื่อเราพิมพ์ตาม Abbreviation แล้วกด Tab .. กรณีนี้ก็คือ ผมต้องการพิมพ์แค่ text-shadow แล้วกด tab แล้วให้มันบรึ้มมม กลายเป็นโค้ดสามบรรทัดนั้น

โค้ดในเครื่องหมาย **${}** ก็เหมือนตัวแปรครับ จะเป็นตัวรับ input จากเรา .. คล้ายๆ scanf ในภาษา C แหละมั้ง (โห้ววว ยังจำได้) .. ข้างล่างนี้ ผมตั้งตัวแปรชื่อว่า value เหมือนกันทั้ง 3 บรรทัด เพราะผมต้องการใช้ value ทั้ง 3 ตัวของ CSS 3 บรรทัดนี้ มีค่าเหมือนกันนั่นเอง

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb11.png)](https://files.armno.in.th/uploads/2011/04/image12.png)

ทดสอบครับ โดยการพิมพ์ text-shadow .. แล้วสวดมนต์รอ

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb12.png)](https://files.armno.in.th/uploads/2011/04/image13.png)

พอสวดมนต์จนพอใจแล้ว กด Tab ครับ แล้วโค้ดเราก็จะ วรึ๊บ ออกมาอย่างที่เห็น โดยในกรอบสีม่วงๆนั่นคือ ตัวแปรที่ใส่ไว้ใน ${} นั่นเอง

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb13.png)](https://files.armno.in.th/uploads/2011/04/image14.png)

พิมพ์ values ของ text-shadow ที่เราต้องการลงไป .. เนื่องจากเราใช้ตัวแปรเดียวกัน มันเลยโผล่ทีเดียว 3 บรรทัดเลย

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb14.png)](https://files.armno.in.th/uploads/2011/04/image15.png)

หรือใครขยันหน่อย อาจทำแยกตัวแปรกันเป็นแบบข้างล่างก็ได้ครับ

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb15.png)](https://files.armno.in.th/uploads/2011/04/image16.png)

กดพิมพ์ทีละค่า แล้วกด Enter หรือ Tab มันก็จะเลื่อนไปตัวแปรถัดไปให้

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb16.png)](https://files.armno.in.th/uploads/2011/04/image17.png)

หรือจะใช้กับมหากาพย์ CSS3 อย่าง Gradient Background ก็ได้นะครับ พิมพ์เองคงเหนื่อยน่าดู

[![image](https://files.armno.in.th/uploads/2011/04/image_thumb17.png)](https://files.armno.in.th/uploads/2011/04/image18.png)

ส่วนตัวแล้วคิดว่า ฟีเจอร์นี้มีประโยชน์มากๆครับ ถ้าใครคิดจะใช้ Netbeans ไปนานๆ สร้าง Code Templates เป็นโกดังเก็บไว้ก็ดีนะครับ เพราะเราสามารถ Export Code Templates พวกนี้ ไปใช้กับ Netbeans เครื่องอื่นๆได้ด้วยนะ (ดูวิธีการได้ที่การใช้ Zen Coding ครับ)

ลองใช้ดูนะ ผมว่าหลายคนต้องชอบแน่ๆ ![Smile](https://files.armno.in.th/uploads/2011/04/wlEmoticon-smile3.png)

> ปล. เราใส่ค่า default ของตัวแปรแต่ละตัวได้นะครับ ถ้าต้องพิมพ์แบบเดิมซ้ำกันบ่อยๆ (แต่ผมไม่ได้ใช้เลย) ลองดูตัวอย่าง code template ของแท็ก a ใน HTML ดูนะครับ

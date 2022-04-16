---
categories:
- Web Development
comments: true
date: 2011-11-19T23:31:27Z
description: สำหรับการเพิ่ม code snippet ให้กับ Sublime Text 2 นั้นก็ง่ายๆ เลย เริ่มจากไปที่เมนู
  Tools > New Snippet ก็จะเจอหน้าจอ default ตามรูป
slug: code-snippet-sublime-text-2
tags:
- Coding
- Snippets
- Sublime Text 2
- Web Development
title: เพิ่ม Code Snippet ให้ Sublime Text 2
url: /2011/11/19/code-snippet-sublime-text-2/
wordpress_id: 1911
---

หลังจากใช้งาน Sublime Text 2 มาได้สักพัก พอคุ้นเคยแล้วก็จะเริ่มหาวิธีการเพิ่ม code snippet ไว้ใช้เอง ([แบบที่เคยทำบน NetBeans](https://armno.in.th/2011/04/25/netbeans-tips-code-templates/)) เพื่อช่วยให้การเขียนโค้ดนั้นสะดวกรวดเร็วยิ่งขึ้นครับ

สำหรับการเพิ่ม code snippet ให้กับ Sublime Text 2 นั้นก็ง่ายๆ เลย เริ่มจากไปที่เมนู **Tools > New Snippet** ก็จะเจอหน้าจอ default ตามรูปข้างล่างครับ

![default snippet](https://files.armno.in.th/uploads/2011/11/default-snippet.jpg)

ดูลักษณะแล้วเป็น markup คล้ายๆ XML ประกอบด้วย 3 อวัยวะด้วยกันคือ content, tabTrigger, และก็ scope

* `content` คือ โค้ดส่วนที่ต้องการให้มัน expand ออกมาเมื่อเรากด tab
* `tabTrigger` คือ คำที่เราต้องการพิมพ์แล้วให้มันยืดออกเป็น content ข้างบน
* `scope` เป็นตัวบอกว่า snippet นี้ให้มีผลเฉพาะกับโค้ดภาษาใดภาษาหนึ่งเท่านั้น (ก็ได้) เช่น ถ้าเรากำหนด scope ให้เป็น php ตัว snippet นี้ก็จะไม่ทำงานตอนเราเขียน javascript เป็นต้น

### ตัวอย่างการใช้งาน

สมมุติว่าผมไปเจอตัวสร้าง dummy text น่ารักๆ อย่าง [CupcakeIpsum](http://cupcakeipsum.com/) แล้วถูกใจ อยากสร้าง snippet เก็บไว้ใช้เอง ผมก็ไปสร้าง dummy text จากในเว็บ แล้วก็ก๊อปปี้มาวางอย่างในรูป พร้อมกำหนด tabTricker ให้เป็นคำว่า cupsum .. นั่นหมายความว่า ถ้าผมพิมพ์แค่ cupsum แล้วกด tab มันก็จะยืดๆ เป็นข้อความยาวๆ ให้อัตโนมัติ .. สำคัญก็คือ วางข้อความระหว่าง `<![CDATA[` กับ `]]` นะครับ

![เพิ่มโค้ด snippet ใน Sublime Text](https://files.armno.in.th/uploads/2011/11/pasted-text.jpg)

จากนั้นก็เซฟ (Ctrl + s) ตั้งชื่อไฟล์เป็นอะไรก็ได้ แต่นามสกุลไฟล์ต้องเป็น .sublime-snippet นะครับ

![Save snippet](https://files.armno.in.th/uploads/2011/11/saved.jpg)

เรียบร้อยแล้ว เพียงเท่านี้เราก็จะมี snippet ประจำตัวอย่างง่ายๆ กับเขาแล้ว

### ใส่ตัวแปรให้กับ snippet

ในส่วน content นอกจากเราจะใส่เป็นข้อความธรรมดาได้แล้ว เรายังสามารถกำหนดให้มันรับค่าจากเราได้อีกตัว (เหมือนเป็นตัวแปร) ส่วนนี้ก็คล้ายๆ แบบที่ Netbeans ทำได้ครับ .. ตัวอย่างเช่นผมอยากได้ snippet สำหรับเป็นเมนู navigation ในเว็บไซต์ง่ายๆ (จริงๆ โค้ดแบบนี้ใช้ [Zen Coding](http://code.google.com/p/zen-coding/) น่าจะไวกว่า)

![ใส่ตัวแปรใน snippet](https://files.armno.in.th/uploads/2011/11/supernav.jpg)

ตัวแปรใน content จะมี pattern เป็นแบบ** ${ตัวเลข:ข้อความ default}** โดยที่เรากด tab ตัว cursor มันก็จะเลื่อนไปเรื่อยๆ ตามตัวเลขครับ .. นอกจากนี้ เรายังใส่ตัวแปรซ้ำกันหลายๆ ที่ เพื่อให้ไม่ต้องพิมพ์หลายครั้งก็ได้นะครับ

![ใส่ตัวแปรใน snippet](https://files.armno.in.th/uploads/2011/11/supernav_repeat.jpg)

แค่นี้เราก็จะได้ code snippet มาช่วยให้เราเขียนโค้ดไวขึ้นแล้วล่ะครับ


### เพิ่มเติม

* snippet ที่เซฟไว้ เราสามารถเปิดขึ้นมาแก้ไขได้ โดยไม่ต้องสร้างใหม่
* เซฟแล้วใช้งานได้ทันที ไม่ต้อง restart โปรแกรม
* ถ้ายังงงๆ ลองดูวิดีโอตอน [How to Create Snippets](http://learncss.tutsplus.com/lesson/how-to-create-snippets/) นี้ได้ครับ

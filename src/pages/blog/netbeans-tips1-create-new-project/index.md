---
categories:
- Web Development
comments: true
date: 2010-07-10T09:30:47Z
slug: netbeans-tips1-create-new-project
tags:
- NetBeans IDE
- PHP
- Web Developement
title: 'NetBeans Tips#1: เริ่มสร้างโปรเจ็ค'
url: /2010/07/10/netbeans-tips1-create-new-project/
wordpress_id: 1240
---

### ทำไมถึงต้องสร้างเป็นโปรเจ็คใน NetBeans?


ปกติใช้ Text Editor ก็แค่ไปหาไฟล์ใน Windows Explorer แล้วลากมาวางในโปรแกรม แต่การทำงานกับ IDE ควรจะสร้างโปรเจ็คใน IDE ของเราทุกครั้งที่ทำโปรเจ็คใหม่ เนื่องจากถ้าแค่เปิดไฟล์ธรรมดา มันจะเป็นแบบนี้




  * หาไฟล์ยาก .. แต่เมื่อสร้างโปรเจ็คใน NetBeans IDE แล้ว มี File Explorer ให้ใข้เลย


  * กดหาฟังก์ชั่นไม่ได้


  * Code Auto-complete ออกเฉพาะโค้ดมาตรฐาน (PHP, HTML, CSS, JavaScript) .. อาจไม่เป็นปัญหา แต่หากทำกับ Framework ที่มีฟังก์ชั่นเยอะๆ แล้วไม่ทำให้ตัว NetBeans IDE รู้จักเนี่ย เหนื่อยนะ


  * ก็ยังคิดออกแค่นี้ครับ - -“


ขั้นตอนหมูมากๆใน [NetBeans IDE](https://armno.in.th/content/netbeans-ide) ครับ .. หลังจากเปิดโปรแกรม NetBeans IDE ขึ้นมาแล้ว ไปที่เมนู **File > New Project …**

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb.png)](https://files.armno.in.th/uploads/2010/07/image.png)




### เริ่มสร้างโปรเจ็ค


สำหรับโปรเจ็ค PHP จะมี 3 แบบให้เลือกครับ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb1.png)](https://files.armno.in.th/uploads/2010/07/image1.png)




  * **PHP Application** - เริ่มต้นสร้างโปรเจ็ค PHP ใหม่จาก 0


  * **PHP Application with Existing Sources** - สร้างโปรเจ็คใน NetBeans โดยที่เรามี source code folder อยู่แล้ว (ส่วนมากผมใช้แบบนี้)


  * **PHP Application with Remote Server** - สร้างโปรเจ็ค PHP จากไฟล์บนเซิฟเวอร์เลย .. ผมขอลองแบบนี้ละกัน เพราะยังไม่เคยทำเลย




### ตั้งค่า Name and Location


[![image](https://files.armno.in.th/uploads/2010/07/image_thumb2.png)](https://files.armno.in.th/uploads/2010/07/image2.png)

หน้าจอถัดมาเป็นการตั้งค่าต่างๆของโปรเจ็ค ตามนี้เลยครับ




  *


**Project Name** - ชื่อโปรเจ็ค ส่วนนี้เก็บไว้เป็น Metadata ของ NetBeans เฉยๆครับ ไม่เกี่ยวกับโค้ดหรือที่เก็บไฟล์



  *


**Sources Folder** - โฟลเดอร์ในเครื่องเราที่จะเก็บ source code ไว้ .. ในที่นี้ผมเลือกเก็บใน www directory ของ wamp เลยละกัน



  *


**PHP Version** - ตามที่เห็นในรูป คือสำหรับ code hints ครับ .. ผมเลือกเป็น PHP 5.2 ตามเวอร์ชั่นบนโฮสต์ที่ผมใช้นะครับ



  *


**Default Encoding** - รหัสอักขระของโค้ด เลือกเป็น UTF-8 นะดีแล้ว



  *


**Put NetBeans metadata into a separate directory** - สำหรับแต่ละโปรเจ็คที่สร้างขึ้นมาใน NetBeans จะมีโฟลเดอร์ที่ชื่อว่า **.nbproject** ไว้สำหรับเก็บข้อมูลต่างๆเกี่ยวกับโปรเจ็ค **ควรเลือกเก็บไว้ในโฟลเดอร์เดียวกับโปรเจ็ค** (ไม่ติ๊กเครื่องหมายถูก) เพราะเวลาย้ายโปรเจ็คไปทำเครื่องอื่น metadata จะได้ไม่หายครับ





### ตั้งค่าเกี่ยวกับ Remote Server


[![image](https://files.armno.in.th/uploads/2010/07/image_thumb3.png)](https://files.armno.in.th/uploads/2010/07/image3.png)

ต่อมาเป็นหน้าจอตั้งค่าเกี่ยวกับเซิฟเวอร์ครับ .. ผมเพิ่งเคยเจอหน้าจอนี้ครั้งแรก งั้นผมจะมั่วไปก่อนนะครับ ![Smile with tongue out](https://files.armno.in.th/uploads/2010/07/wlEmoticonsmilewithtongueout.png) .. สำหรับใครที่สร้างโปรเจ็คในเครื่องตัวเอง จะไม่มีหน้าจอแบบนี้นะครับ ข้ามขั้นตอนนี้ไปได้เลย




  * **Project URL** – ใน URL ของเว็บเราเข้าไป


  * **Remote Connection** – ตั้งค่าเกี่ยวกับ FTP Access ของเซิฟเวอร์เราครับ ใครยังไม่มี ก็กดปุ่ม Manage แล้วเข้าไปมั่วในนั้นได้ตามสบาย


  * **Upload Directory** – path ของโฟลเดอร์บนเซิฟเวอร์ครับ เช่นของผมจะเป็น /armno_in_th/htdocs


จากนั้นก็รอให้ NetBeans ดาวน์โหลดไฟล์จากเซิฟเวอร์ มาไว้ในเครื่องของเราครับ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb4.png)](https://files.armno.in.th/uploads/2010/07/image4.png)

รอจนเสร็จ เราก็จะได้โปรเจ็ค PHP ใหม่ พร้อมเริ่มงานได้ทันที ![Open-mouthed smile](https://files.armno.in.th/uploads/2010/07/wlEmoticonopenmouthedsmile.png)

_เนื่องจากอินเตอร์เน็ตของผมมีปัญหา ไม่สามารถดาวน์โหลดไฟล์ได้ทันเวลา จึงขอจบโพสต์นี้ไว้แต่เพียงเท่านี้ครับ_ ![Sick smile](https://files.armno.in.th/uploads/2010/07/wlEmoticonsicksmile.png)

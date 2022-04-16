---
categories:
- Web Development
comments: true
date: 2010-07-26T22:11:41Z
slug: netbeans-tips5-editor-appearance
tags:
- Coding
- Editor
- NetBeans IDE
title: NetBeans Tips#5 เปลี่ยนลักษณะ Editor ได้ดั่งใจ
url: /2010/07/26/netbeans-tips5-editor-appearance/
wordpress_id: 1311
---

NetBeans Tips มาอีกแล้ววว




  * [รู้จัก NetBeans IDE](https://armno.in.th/20100710/%e0%b9%81%e0%b8%99%e0%b8%b0%e0%b8%99%e0%b8%b3-netbeans-ide-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%80%e0%b8%82%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b9%82%e0%b8%84%e0%b9%89%e0%b8%94-php)


  * [NetBeans Tips#1 เริ่มสร้างโปรเจ็ค](https://armno.in.th/20100710/netbeans-tips1-%e0%b9%80%e0%b8%a3%e0%b8%b4%e0%b9%88%e0%b8%a1%e0%b8%aa%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%87%e0%b9%82%e0%b8%9b%e0%b8%a3%e0%b9%80%e0%b8%88%e0%b9%87%e0%b8%84)


  * [NetBeans Tips#2 ใช้งาน Code-Autocomplete](https://armno.in.th/20100711/netbeans-tips2-%e0%b9%83%e0%b8%8a%e0%b9%89%e0%b8%87%e0%b8%b2%e0%b8%99-code-auto-complete)


  * [NetBeans Tips#3 จัดระเบียบโค้ดด้วยเมนู Format](https://armno.in.th/20100713/netbeans-tips-3-%e0%b8%88%e0%b8%b1%e0%b8%94%e0%b8%a3%e0%b8%b0%e0%b9%80%e0%b8%9a%e0%b8%b5%e0%b8%a2%e0%b8%9a%e0%b9%82%e0%b8%84%e0%b9%89%e0%b8%94%e0%b8%94%e0%b9%89%e0%b8%a7%e0%b8%a2%e0%b9%80%e0%b8%a1)


  * [NetBeans Tips#4 หาคลาส ตัวแปร ยังไงก็เจอ](https://armno.in.th/20100717/netbeans-tips-4-%e0%b8%ab%e0%b8%b2%e0%b8%84%e0%b8%a5%e0%b8%b2%e0%b8%aa-%e0%b8%95%e0%b8%b1%e0%b8%a7%e0%b9%81%e0%b8%9b%e0%b8%a3-%e0%b8%a2%e0%b8%b1%e0%b8%87%e0%b9%84%e0%b8%87%e0%b8%81%e0%b9%87%e0%b9%80)


คงสังเกตกันได้ไม่ยากนะครับ ว่าทุกตอนของซีรี่ส์ [NetBeans IDE](https://armno.in.th/content/netbeans-ide) นั้น ภาพ Editor ที่ผม capture มา ไม่เหมือน editor แบบ default ของ NetBeans IDE ที่เห็นได้ชัดคือ สีพื้นหลังเป็นสีเข้ม และฟอนต์ก็ไม่เหมือน deafult ของ NetBeans IDE เลย .. จริงๆแล้ว NetBeans IDE อนุญาตให้เราปรับสี ฟอนต์ ขนาดฟอนต์ ของ editor ได้ตามใจชอบเลยล่ะครับ ซึ่งวิธีการก็ไม่ยากเลย

ขั้นแรก ไปที่เมนู **Tools > Options** เพื่อเปิดหน้าต่างการตั้งค่าต่างๆของ NetBeans IDE ขึ้นมาครับ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb19.png)](https://files.armno.in.th/uploads/2010/07/image19.png)



แล้วไปที่แท็บ **Fonts & Colors** เพื่อตั้งค่าสีสันต่างๆให้ editor ของเราครับ .. ซึ่งเราสามารถเลือกภาษาที่เราใช้ใน drop-down menu ได้ตามที่แสดงในรูปครับ แยกย่อยกันไปตามแต่ละ syntax ของภาษานั้นๆได้เลย

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb20.png)](https://files.armno.in.th/uploads/2010/07/image20.png)

ตรงส่วน **Category** นั้นคือ ประเภทของตัวอักษร(คำ)ใน source code ของเราครับ ว่าเป็นตัวแปร ชื่อฟังก์ชั่น ชื่อคลาส เป็นต้นครับ .. ซึ่งถ้าเราไม่ชัวร์ว่า category ไหนคืออะไร เราสามารถคลิกลงไปที่โค้ดในช่อง Preview ข้างล่างได้ครับ .. อย่างเช่นผมคลิกคำว่า `<<<HEREDOC` ตัว Category ก็จะไป select ตัว HereDoc Delimiter ให้

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb21.png)](https://files.armno.in.th/uploads/2010/07/image21.png)

ค่าที่เราตั้งเองได้ ก็ตั้งแต่รูปแบบฟอนต์ (รวมถึงขนาด ตัวหนา เอียง) สีพื้นหน้าและพื้นหลัง และยังเลือกได้ด้วยว่า effect จะให้เป็นขีดเส้นใต้หรือขีดทับก็ได้นะ

[![image](https://files.armno.in.th/uploads/2010/07/image_thumb22.png)](https://files.armno.in.th/uploads/2010/07/image22.png)

นอกจากนี้ยังเปลี่ยนสีของส่วนอื่นๆเช่น สีพื้นหน้า/พื้นหลังของการ highlight ข้อความ หรือเมื่อตอน diff ไฟล์ดูก็ยังได้ครับ .. เรียกได้ว่า ได้หมดแทบจะทุกส่วนของ editor เลยก็ว่าได้

ลองปรับเปลี่ยนตามสไตล์ของคุณเองดูนะครับ ![Winking smile](https://files.armno.in.th/uploads/2010/07/wlEmoticonwinkingsmile1.png)

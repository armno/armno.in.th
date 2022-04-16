---
categories:
- Life
comments: false
date: 2009-04-29T20:57:09Z
slug: fix-msn-error-8100030d-again
tags:
- 8100030d
- MSN Error
- วีธีแก้ Error MSN
title: วิธีแก้ MSN Error 8100030d ฉบับเอาจริง!
url: /2009/04/29/fix-msn-error-8100030d-again/
wordpress_id: 772
---

[![msn-error-8100030d](https://armno.in.th/wp-content/uploads/2009/04/msnerror8100030d-thumb.gif)](https://armno.in.th/wp-content/uploads/2009/04/msnerror8100030d.gif)

คิดว่าหลายๆคนยังติดปัญหากับเจ้า **Error Code: 8100030d** ใน MSN กันอยู่ สำหรับผมเองก็ยังมีโผล่มาให้เห็นบ้างเหมือนกัน (นานๆครั้ง) วันนี้เอาวิธีแก้เจ้า 8100030d มาฝาก จากบล็อกของ Messenger Support ครับผม แต่ขอรวบรัดหน่อยละกันนะครับ

เท่าที่อ่านๆมา ต้นเหตุของปัญหานี้มาจาก 2 สิ่งนี้เป็นสำคัญครับ คือ **Contact Cache ของ MSN** กับ** AVG Antivirus** .. สำหรับ AVG Antivirus นั้น ผม[เคยเขียนวิธีแก้ไว้แล้ว](https://armno.in.th/20081220/error-8100030d-%e0%b9%83%e0%b8%99-windows-live-messenger-2009)นะครับ คราวนี้มาดูวิธีแก้สำหรับคนที่ไม่ใช้ AVG กันนะครับ

1. อัพเกรด Windows Live Messengerให้ เป็นเวอร์ชั่นล่าสุด .. สำหรับคนที่ไม่มีปัญหาอะไรกับการใช้เวอร์ชั่นใหม่ ก็อัพเกรดซะเถอะครับ
2. ลบ cache files ของ Windows Live Messenger** .. วิธีการจะแตกต่างกันไปตาม Windows ที่ใช้อยู่นะครับ

### สำหรับ Windows XP

ทำให้เครื่องแสดงไฟล์และโฟลเดอร์ที่ซ่อนอยู่ก่อนนะครับ โดยเข้าไปที่ **My Computer > Tools > Folder Options > แท็บ View > เลือก Show hidden files and folders** แล้วก็ OK ครับ หลังจากนั้นให้เข้าไปลบไฟล์ข้างในโฟลเดอร์ตาม path นี้ครับ (ลบไฟล์ข้างในนะครับ ไม่ใช่ลบโฟลเดอร์เหล่านี้)

    C:\Documents and Settings\{ชื่อ User}\Contacts\{email ของคุณ}
    C:\Documents and Settings\{ชื่อ User }\Local Settings\Application Data\Microsoft\Windows Live Contacts\{email ของคุณ}

### สำหรับ Windows Vista และ Windows 7

เหมือนกันครับ **My Computer > Organize > Folder and Search Options > แท็บ View > เลือก Show hidden files and folders** แล้วกด OK จากนั้นก็เข้าไปลบ cache เหมือนกันครับ เพียงแต่ path จะต่างไปจาก Windows XP เล็กน้อย คือ

    C:\Users\ {ชื่อ User} \Contacts\ {email ของคุณ}
    C:\Users\{ชื่อ User}\AppData\Local\Microsoft\Windows Live Contacts\{email ของคุณ}

เสร็จแล้วก็ sign in ใหม่อีกทีครับผม

จาก: [http://messenger-support.spaces.live.com/blog/cns!8B3F39C76A8B853F!13937.entry](http://messenger-support.spaces.live.com/blog/cns!8B3F39C76A8B853F!13937.entry)

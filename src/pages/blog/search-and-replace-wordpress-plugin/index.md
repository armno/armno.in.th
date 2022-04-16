---
categories:
- Life
comments: true
date: 2009-07-02T16:25:58Z
slug: search-and-replace-wordpress-plugin
tags:
- Search and Replace
- WordPress
- WordPress Plugin
- ย้ายบล็อก
title: ค้นหาและแก้ไขข้อความทั้งบล็อก ด้วยปลั๊กอิน Search and Replace
url: /2009/07/02/search-and-replace-wordpress-plugin/
wordpress_id: 850
---

จากที่เคยแนะนำ [“วิธีการย้ายบล็อก WordPress”](https://armno.in.th/20090624/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%9A%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%81-wordpress) ไปแล้ว ผมพบปัญหาอยู่อย่างนึงครับ คือ internal links (ลิ้งก์ภายในบล็อก) ยังคงลิ้งก์ไปยังบล็อกเดิมอยู่ ไม่ว่าจะเป็นลิ้งก์รูป หรือลิ้งก์ที่เราทำไปยังบทความต่างๆ (แต่ไม่รวมจากปลั๊กอินนะครับ) .. ผมจึงต้องมานั่งแก้ลิ้งก์ของทุกโพสต์จากเมนู edit post .. ซึ่งทำไปได้สักโพสต์สองโพสต์ ผมรู้สึกว่าเป็นงานที่ถึกมาก ทั้งบล็อกมีบทความแค่ 148 posts แต่ว่าจำนวนลิ้งก์นั้นไม่น้อยเลย ไหนจะโพสต์ที่เป็น Gallery อีกแน่ะ .. ก็เลยลองหาเครื่องมือทุ่นแรงดูครับ และก็พบกับปลั๊กอินตัวนี้ **[“Search and Replace”](http://wordpress.org/extend/plugins/search-and-replace/)**



[![search_and_replace_wordpress_plugin](https://armno.in.th/wp-content/uploads/SearchandReplace_E319/search_and_replace_wordpress_plugin_thumb.png)](https://armno.in.th/wp-content/uploads/SearchandReplace_E319/search_and_replace_wordpress_plugin.png)



คุณสมบัติของปลั๊กอินตัวนี้คือ สามารถ**ค้นหาและแทนที่**ข้อความในฐานข้อมูล WordPress ทั้งหมดได้ในคลิกเดียว .. การใช้งานนั้นง่ายมากๆครับ หลังจากติดตั้งปลั๊กอินและ activate แล้ว ก็เข้าไปที่เมนู Settings > Search and Replace ก็จะพบกับหน้าจอแบบในรูปข้างบนครับ แค่เลือกข้อมูลที่ต้องการแก้ไข, ใส่คำที่ต้องการหาในช่อง Replace, และใส่คำที่ต้องการแทนที่ ในช่อง with แล้วก็กด Go .. แค่นี้ก็เสร็จแล้วล่ะครับ



อย่างเช่นของผม ต้องการเปลี่ยนข้อความ monkeyarmno.com ใน post content ทั้งหมดให้เป็น armno.in.th ก็เลือกเฉพาะช่อง content .. ใส่ค่าที่ต้องการลงไปในช่อง Replace กับ with, กด Go ให้โปรแกรมทำงาน .. เท่านี้ก็เสร็จแล้วล่ะครับ



;)

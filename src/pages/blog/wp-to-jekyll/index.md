---
date: 2013-03-09T00:00:00Z
description:
  Armno.in.th เปลี่ยน blog engine จาก WordPress มาเป็น Jekyll และ Github
  Pages ถือเป็นการเปลี่ยนแปลงครั้งใหญ่ที่สุด ตั้งแต่ผมเริ่มเขียนบล็อกมาเมื่อปี 2007
tags:
  - WordPress
  - Jekyll
  - Blog
title: จาก WordPress สู่ Jekyll
url: /2013/03/09/from-wordpress-to-jekyll/
---

การอัพเดท design ของบล็อก [armno.in.th](https://armno.in.th) ครั้งล่าสุดเป็นแบบที่เห็นอยู่นี้ จริงๆ แล้วมันเป็นการ "รื้อ" บล็อกใหม่แทบทั้งหมดครับ ถือว่าเป็นครั้งแรกตั้งแต่เริ่มทำบล็อกมาเลยก็ว่าได้

### เกี่ยวกับ WordPress

<div class="text-center">
  <img src="images/8540179341_f34d468c82_o.png" alt="WordPress Logo">
</div>

ผมเริ่มทำบล็อกด้วย [WordPress](https://wordpress.org) มาตั้งแต่ปี 2007 (น่าจะราวๆ เวอร์ชั่น 2.0) หลังจากนั้นก็ลองผิดลองถูกอยู่เรื่อยมาจนถึงทุกวันนี้ สังเกตความเปลี่ยนแปลงของ WordPress จาก blogging platform จนทุกวันนี้เป็นมากกว่านั้นไปเยอะแล้ว สำหรับผม WordPress ตอนนี้ "เยอะเกินไป" สำหรับการเขียนบล็อก เลยรู้สึกเบื่อขึ้นมา

เหตุผลสำคัญอีกอย่างคือ บล็อก WordPress นั้นขับเคลื่อนด้วย PHP + MySQL นั่นหมายความว่าต้องมีทั้ง Apache รันอยู่ มี code ในเครื่อง database ก็ต้องติดตั้งในเครื่องไว้พร้อม ไม่ค่อยสะดวกเวลาเปลี่ยนไปทำงานด้วยคอมพิวเตอร์เครื่องอื่น กว่าจะเซ็ตอัพทุกอย่างให้รันได้ใน localhost พร้อมอัพเดท database ก็รู้สึกว่าเสียเวลาไปบ้างเหมือนกัน

มันคงจะดีกว่านี้ถ้าต้องทำบล็อกจากคอมพิวเตอร์หลายๆ เครื่อง ด้วย command ใน terminal แค่ไม่กี่ command

### Jekyll & Github Pages

<div class="text-center">
  <img src="images/8540179349_5cb4d1be5f_o.png" alt="Jekyll Blog Engine">
</div>

[Jekyll](https://github.com/mojombo/jekyll) นั้นเป็น static website generator ที่เขียนด้วย Ruby ผลลัพธ์ที่ออกมาก็คือเว็บที่เป็น HTML ธรรมดาๆ ผมชอบ Jekyll ตรงที่มี server ในตัว (ไม่ต้องมี Apache ก็รันบล็อกได้) อีกทั้งใช้ Markdown ในการเขียน content ด้วย เลยทำให้ชอบมากขึ้น

Jekyll นั้นเข้ากันเป็นปี่เป็นขลุ่ยกับ [Github Pages](https://pages.github.com/) บล็อกที่ทำด้วย Jekyll สามารถ deploy บน Github Pages ได้เลย ซึ่งก็หมายความว่า ตอนนี้บล็อก armno.in.th นั้นถูกโฮสต์บน Github ครับ (แน่นอนว่า [source code](https://github.com/armno/armno.github.com) ก็ต้องอยู่บน Github ด้วย)

### Exitwp

จาก[โพสต์นี้](https://csswizardry.com/2012/12/a-new-css-wizardry/)ที่ csswizardry.com ผมก็ใช้ [exitwp](https://github.com/thomasf/exitwp) ตามเขาบ้าง ปัญหาที่พบหลังจาก export posts ใน WordPress ออกมาเป็น Markdown คือ

- exitwp ตั้งชื่อไฟล์ `.markdown` จาก slug ของแต่ละ post และไม่เวิร์กกับ slug ภาษาไทย (ชื่อไฟล์จะเป็นตัวยึกยือๆ) ผมจึงต้องเปลี่ยน slug ของ post ทั้งหมดใน WordPress ให้เป็นภาษาอังกฤษก่อน
- markdown syntax ยังไม่สมบูรณ์ 100% พวก space ระหว่าง `*` หรือ `_` มักชอบทำให้ syntax error แล้วเวลารัน jekyll server จะมี error dump ออกมาเยอะ ทำให้เสียเวลา generate ต้องนั่งซ่อมที่ละไฟล์

<div class="text-center">
  <img src="images/8541290168_e6cc784e3d_o.png" alt="Sublime Text vs Vim">
  <p>Sublime Text (ซ้าย) นั้นแสดงภาษาไทยไม่ดีเท่า Vim (ขวา) เขียนใน Vim จะสะดวกกว่า</p>
</div>

### หลังจากเปลี่ยนมาใช้ Jekyll

- เว็บโหลดเร็วขึ้น มาก
- comment หายหมดเลย (ส่วนหนึ่งเพราะผมตั้งใจไม่เอามาด้วย) ตอนนี้ใช้ disqus สำหรับ comment
- การเขียนบล็อก + แก้ไขบล็อก สำหรับผมแล้วง่ายขึ้น ไม่ต้อง import/export database ระหว่างเครื่องอีกต่อไป
- ได้เรียนรู้อะไรใหม่ๆ อีกเยอะเลยครับ

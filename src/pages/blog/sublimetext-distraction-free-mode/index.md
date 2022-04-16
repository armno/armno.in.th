---
categories:
  - Web Development
comments: true
date: 2012-06-26T23:14:57Z
description:
  ปกติใช้ Sublime Text 2 ผมจะใช้งานใน Distraction Free mode แทบตลอดเวลา
  อยากให้มันแสดงเลขบรรทัดใน Distraction Free mode ด้วย
slug: sublime-text-2-distraction-free-mode
tags:
  - Distraction Free
  - Editor
  - SublimeText
  - Web Development
title: 'Sublime Text 2: แสดงเลขบรรทัดใน Distraction Free Mode'
url: /2012/06/26/sublime-text-2-distraction-free-mode/
---

การใช้งาน [Sublime Text 2](https://armno.in.th/2011/09/20/sublime-text-2-editor-v12-engine/) นั้น ปกติผมใช้ Distraction Free Mode เป็นหลัก (เมนูอยู่ที่ View > Enter Distraction Free Mode) แต่รู้สึกขัดใจตรงที่ตัวแสดงเลขบรรทัดกลับหายไปเมื่อเข้าสู่โหมดนี้ หาในไฟล์ Settings อยู่นานก็หาไม่เจอว่าต้องทำยังไง เพิ่งถึงบางอ้อวันนี้เอง

Distraction Free Mode นั้นมีไฟล์ Settings แยกต่างหากครับ โดยจะอยู่ที่เมนู Preference > Settings - More > Distraction Free - User เปิดมาครั้งแรกจะเป็นไฟล์เปล่าๆ เราก็แค่ใส่ 2 option นี้ลงไป

<pre><code class="language-javascript">{
  "line_numbers": true,
  "gutter": true
}</code></pre>

ประเด็นอยู่ที่ตรง **gutter** ครับ (เพราะที่ผ่านมาผมใส่แค่ `line_numbers` ให้ตายยังไงก็ไม่ออก) `gutter` คือแถบเทาๆ ที่เอาไว้โชว์เลขบรรทัดนั่นแหละครับ ซึ่ง Distraction Free Mode นั้นจะปิด `gutter` ไว้ ทำให้ `line_numbers` ไม่มีที่ให้ออก ถึงแม้จะเซ็ตเป็น `true` ก็ตาม ซึ่งก็ทำให้เราต้องเซ็ตให้ `gutter` เป็น `true` ด้วยครับ เลขบรรทัดนั้นถึงจะโผล่มาใน Distraction Free Mode

ก่อน

![before](images/8507382376_e17e2e9f5d_z.jpg)

หลัง

![after](images/8506275931_16de1b9957_z.jpg)

สำหรับผมแล้ว เลขบรรทัดมันสำคัญเวลาขี้เกียจกด Ctrl + G เพื่อกระโดดข้ามบรรทัด และบางครั้งถึงแม้รู้แล้วว่า error อยู่ที่บรรทัดไหน แต่ก็ชอบเลื่อนๆ ไปดูมากกว่าอยู่ดี ง่ายต่อการเดา :)

ปล. Sublime Text 2 เวอร์ชั่น 2.0 (build 2210) มาแล้วนะครับ [https://www.sublimetext.com/2](https://www.sublimetext.com/2)

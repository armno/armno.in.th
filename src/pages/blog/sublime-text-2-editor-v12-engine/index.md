---
categories:
- Web Development
comments: true
date: 2011-09-20T23:01:09Z
description: ก่อนหน้านี้ใช้ NetBeans กับ Aptana พบว่ายังชักช้าไม่ทันใจ พอเปลี่ยนมาใช้
  editor อย่าง Sublime Text แล้วชีวิตสนุกขึ้นเยอะครับ
slug: sublime-text-2-editor-v12-engine
tags:
- Sublime Text 2
- Text Editor
- Web Development
title: Sublime Text 2 - Editor เครื่องยนต์ V12
url: /2011/09/20/sublime-text-2-editor-v12-engine/
---

### ปัญหากับ Aptana

ปัญหาหลักที่ผมมีกับ Aptana คือ code autocomplete ที่กวนตีนมาก มักจะเติม code ที่ไม่ต้องการ และเกินจำเป็นเสมอ นอกจากนี้ ยังสัมผัสได้ถึงความอืดในบางครั้ง เนื่องจากเป็น IDE ที่ขนาดค่อนข้างใหญ่นั่นเอง .. ส่วน วิธีการ format code (จัด code ให้เป็นระเบียบ) นั้น ยังหาตัวที่จะสู้ Netbeans ไม่ได้ ซึ่งพักหลังตั้งแต่เปลี่ยนมาใช้ Aptana นั้น ผมมักจะจัด code เองมากกว่า (feature นี้ของ Aptana หวังผลไม่ค่อยได้เลย).. เหตุผลพวกนี้แหละ เลยมองหา IDE ตัวใหม่

> ผมต้องการ editor ที่เร็วอย่างเครื่องยนต์ V12!

### รู้จักกับ Sublime Text 2

ผมเห็นชื่อนี้จาก [Nettuts+](http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/) ตอนแรกไม่รู้ว่ามันคืออะไร ช่วงเปลี่ยน IDE ผมเลยลองไปปล้ำกับ [Vim](http://www.vim.org/) อยู่ครึ่งวัน ซึ่ง Vim นั้นก็เป็น editor เทพสมคำร่ำลือ ใช้งานสนุกครับ แต่ไม่ค่อยได้งานให้ทันกับช่วงเร่งรีบ เลยกลับไปที่ Nettuts+ และลอง [Sublime Text 2](http://www.sublimetext.com/) ดู

[![](https://files.armno.in.th/uploads/2011/09/sublime_website-600x472.png)](https://files.armno.in.th/uploads/2011/09/sublime_website.png)

ตัว Sublime Text นั้นน่าจะเรียกว่าเป็น text editor มากกว่า IDE เพราะตัวเล็กๆ เบาๆ คล้ายกับพวก [Notepad++](http://notepad-plus-plus.org/) <del>ซึ่ง ณ ตอนนี้ Sublime Text เวอร์ชั่น 2 นั้นยังอยู่ในสถานะ beta อยู่</del>  หลุดจากสถานะ beta ตอนเวอร์ชั่น 2.0 ออก เราสามารถใช้งานได้ฟรีครับ หรือจะซื้อ license ก็ได้ ถ้าใช้งานแบบฟรี จะมี pop up เด้งมาให้กดซื้อเป็นระยะๆ ครับ นานๆ มาที ไม่รบกวนการทำงาน ส่วนใครที่อยากซื้อ ก็ราคาประมาณ <del>1,800</del> 2,100 บาท

### หน้าตา

ตามแบบฉบับของ text editor ทั่วไป ด้านซ้ายมือเป็น sidebar ที่แสดงชื่อไฟล์ที่เราเปิดอยู่ ซึ่งเราก็สามารถลาก folder ที่เราทำงานอยู่ทั้ง folder มาโยนลงตรง sidebar นี้ได้ มันก็จะทำหน้าที่เป็น file explorer ให้โดยอัตโนมัติ ส่วนด้านขวามือเป็น mini map ของ code ในไฟล์นั้น ซึ่งผมไม่ได้ใช้ประโยชน์ก็เลยปิดทิ้งไปเลย

[![](https://files.armno.in.th/uploads/2011/09/sublime_interface_overview-600x333.png)](https://files.armno.in.th/uploads/2011/09/sublime_interface_overview.png)

### ข้อดีของ Sublime Text 2

* เร็วมาก เร็วกว่า IDE อยู่แล้ว เพราะว่าเป็น Text Editor แต่ก็ไม่เฉพาะในแง่ของการพิมพ์ code เท่านั้น แต่ยังรวมไปถึงการอ่าน file, search อะไรต่างๆ ก็เร็วไปซะหมด
* syntax highlighting มาครบทั้ง HTML, JavaScript, CSS, PHP และ[ภาษาอื่นๆ อีกกว่า 20+](http://www.sublimetext.com/features)
* full screen mode ตัดทุกอย่างออกหมด เหลือแต่หน้าจอ code (คล้ายของ WordPress แต่เหลือน้อยกว่า) ผมชอบนะ ดูไม่รกรุงรังดี แต่บางคนอาจจะงง เพราะว่าหายไปหมดเลย
* auto complete มีมาให้เรียบร้อย ครบๆ (และไม่น่าหงุดหงิดเหมือนของ Aptana)
* เพิ่ม snippet เองได้แบบไม่ยากเย็นนัก (แต่ก็ไม่ง่ายเท่าของ Netbeans)
* มี portable version ด้วยนะ

[![](https://files.armno.in.th/uploads/2011/09/sublime_fullscreen-600x337.png)](https://files.armno.in.th/uploads/2011/09/sublime_fullscreen.png)

### ข้อสังเกต

ขอไม่เรียกว่า ข้อเสีย ละกันครับ เพราะบางอย่าง ผมเองยังหาไม่เจอว่ามันทำไง ซึ่งจริงๆ แล้วอาจจะมี feature นั้นให้ใช้ หรืออาจต้องลง plugin เพิ่ม ก็ว่ากันไป

* ถ้าติด IDE มาก่อน อาจจะมึนเมื่อเปิดตอนแรก ไม่มี project explorer ไม่มี function outline ให้ .. พอใช้ไปสักพักก็จะชินเอง
* ปรับตั้งค่าผ่าน <del>text</del> JSON file .. ต้องเปิด document เอาเองว่ามันมี option อะไรยังไงบ้าง
* code linter (เช็ค syntax code) ไม่ทำงานแบบ real time สู้พวก IDE ไม่ได้
* ยังหาวิธี format code ไม่เจอครับ
* แล้วก็ ยังหาวิธีกระโดดไปยัง function ต้นตอไม่ได้ .. นึกถึงเวลาเรากด Ctrl + click ใน IDE ทั่วไป มันจะกระโดดไปยังส่วนที่เราประกาศตัวแปรหรือ function นั้นให้เลย แต่ Sublime Text 2 นี้ยังทำไม่ได้ครับผม

### สรุป Sublime Text 2 เหมาะกับใคร

* เน้น code คือโฟกัสเฉพาะเรื่องการ coding เป็นหลัก
* เน้นความเร็ว ความคล่องตัว และความสามารถในการปรับแต่ง editor ตามใจชอบ แต่ไม่มีเวลาศึกษา terminal-based อย่าง Vim หรือ Emacs
* ค่อนข้างคุ้นเคยกับ code ที่ทำงานด้วยพอสมควร รู้ว่า file/class/function อยู่ที่ไหนบ้าง เพราะ Sublime Text เน้นให้เรา "กระโดดไปหา code เอง" มากกว่าที่ตัว editor จะคอยหามาเสิร์ฟเรา .. ข้อนี้กำกวม ไม่เห็นภาพ ขอติดไว้ก่อนละกัน

### ทิ้งท้าย การใช้งาน Sublime Text 2 เบื้องต้น

* เปิด Sublime Text 2 ขึ้นมา
* ลาก folder ที่ทำงานอยู่ ไปใส่ที่ sidebar
* กด `Ctrl + p` พิมพ์ชื่อไฟล์ เพื่อเปิดไฟล์
* กด `Ctrl + r` พิมพ์ชื่อ function/class/id ที่อยู่ในไฟล์ที่เปิดอยู่
* กด `Ctrl + g` กระโดดไปยังบรรทัดที่ต้องการ
* Code!

[![](https://files.armno.in.th/uploads/2011/09/sublime_search-600x354.png)](https://files.armno.in.th/uploads/2011/09/sublime_search.png)

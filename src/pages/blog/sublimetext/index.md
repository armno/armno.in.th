---
date: 2013-07-08T00:00:00Z
description:
  เคยแชร์ blog post เกี่ยวกับการ set up Sublime Text ของ developer หลายคนไปแล้ว
  ขอแชร์ของผมเองบ้างนะครับ ว่าตั้งแต่เริ่มติดตั้งจนถึงลงมือทำงาน ทำอะไรไปบ้าง
published: true
tags:
  - sublimetext
  - packages
title: Setting up Sublime Text 3
url: /2013/07/08/setting-up-sublime-text-3/
---

Sublime Text นั้นเป็น editor ที่ได้รับความนิยมเพิ่มขึ้นเรื่อยๆ ล่าสุดนั้นเวอร์ชั่น 3 เป็น public beta ให้คนทั่วไป (ที่ไม่มี license) สามารถใช้งานได้แล้ว ใน v3 นี้ที่รู้สึกได้ก็คือ เร็วขึ้นครับ

เคยแชร์ blog post เกี่ยวกับการ set up Sublime Text ของ developer หลายคนไปแล้ว ขอแชร์ของผมเองบ้างละกันครับ

> อ้างอิงกับ [Sublime Text เวอร์ชั่น 3](https://www.sublimetext.com/3) นะครับ

### 1. ติดตั้ง Sublime Text 3

การติดตั้ง Sublime Text เวอร์ชั่น 3 นั้นไม่ต่างจากเวอร์ชั่นก่อนเลย สามารถเลือกตาม OS ที่ใช้อยู่ได้จากหน้า [download](https://www.sublimetext.com/3) เลย

![Sublime Text 3 Download](images/9240438994_fc446d682c_o.png)

### 2. ติดตั้ง Package Control

การติดตั้ง Package Control plugin สำหรับ Sublime Text 3 น้นต่างไปจากเวอร์ชั่น 2 นิดหน่อย โดยที่ v3 นั้นต้อง install แบบ manual ผ่าน Git เอาครับ

โดยที่ขั้นตอนแรกต้อง ต้อง <code>cd</code> ไปยัง directory <code>Packages</code> ก่อน

สำหรับ Mac จะอยู่ที่

{{< highlight sh >}}
~/Library/Application Support/Sublime Text 3/Packages
{{< / highlight >}}

ส่วน Ubuntu นันจะอยู่ที่

{{< highlight sh >}}
~/.config/sublime-text-3/Packages
{{< / highlight >}}

จากนั้น <code>clone</code> Git repo ของ Package Control ลงมาครับ แล้วก็ <code>checkout</code> ไปที่ branch <code>python3</code>

{{< highlight sh >}}
$ git clone https://github.com/wbond/sublime_package_control.git "Package Control"
$ cd "Package Control"
\$ git checkout python3
{{< / highlight >}}

หลังจากนั้นก็ restart Sublime Text ครับ

### 3. ติดตั้ง packages ที่จำเป็น

Packages ที่ผมลงก็ตามนี้ครับ

<dl>
  <dt><a href="https://github.com/thinkpixellab/flatland">Theme - Flatland</a></dt>
  <dd>ตัวนี้มาพร้อมทั้ง theme แล้วก็ color scheme ซึ่งจะมาแนวเรียบๆ มืดๆ หน่อยครับ</dd>

  <dt><del><a href="https://github.com/titoBouzout/SideBarEnhancements/tree/st3">Sidebar Enhancement</a></del> ดูวิธีติดตั้ง Sidebar Enhancement ได้ด้านล่างครับ</dt>
  <dd>เพิ่มความสามารถของ sidebar (จากการคลิกขวา) ให้มากขึ้นกว่าเดิม</dd>

  <dt><a href="https://github.com/Warin/Sublime/tree/master/DocBlockr">DocBlockr</a></dt>
  <dd>ช่วยให้เขียน function document ใน code ได้สะดวกขึ้น</dd>

  <dt><a href="https://emmet.io/">Emmet</a></dt>
  <dd><a href="https://armno.in.th/2012/11/06/emmet-zen-coding-replacement/">Emmet</a> ทำให้เขียน HTML/CSS ได้เร็วขึ้น</dd>

  <dt><a href="https://github.com/hayaku/hayaku#readme">Hayaku</a></dt>
  <dd>abbreviations สำหรับเขียน CSS โดยเฉพาะ</dd>

  <dt><a href="https://github.com/SublimeText/TrailingSpaces">TrailingSpaces</a></dt>
  <dd>ช่วยแสดง และลบ trailing spaces ใน code ให้เรา</dd>

  <dt><a href="https://github.com/jdc0589/JsFormat">JS Format</a></dt>
  <dd>จัดระเบียบ code JavaScript พวกวงเล็บ indent ไรงี้</dd>

  <dt><a href="https://github.com/danro/SCSS-sublime">SCSS</a></dt>
  <dd>syntax highlighting สำหรับไฟล์ <code>.sass</code> กับ <code>.scss</code></dd>

  <dt><a href="https://github.com/weslly/Nettuts-Fetch">Nettuts+ Fetch</a></dt>
  <dd>เคยเขียนรายละเอียดใน <a href="https://armno.in.th/2012/09/09/sublime-text-2-nettuts-fetch/">ใช้งานปลั๊กอิน Nettuts Fetch</a></dd>

  <dt><a href="https://github.com/jisaacks/GitGutter">GitGutter</a></dt>
  <dd>ทำงานกับ Git แสดงบรรทัดใน code ที่เราเพิ่ม ลบ หรือแก้ไข ด้วยจุดสีเล็กๆ ตรง gutter</dd>

  <dt><a href="https://github.com/SublimeLinter/SublimeLinter">SublimeLinter</a></dt>
  <dd>ช่วยตรวจสอบหา syntax error ตอนกด save ครับ ตัวนี้ต้องลงแบบ manual เหมือนกัน ดูข้างล่างเลย</dd>
</dl>

### 4. User Settings & Key Bindings

ตามด้วยการตั้งค่าอีกเล็กน้อย ดู comment ในไฟล์ได้เลยครับ ส่วน keyboard bindings หรือคีย์ลัด ของผมใช้ <code>alt+shift+left/right</code> เพื่อเพิ่มพื้นที่ของแต่ละข้าง เวลาเขียน code แบบ split screen ครับ key binding ชุดนี้ลอกมาจาก [@jeffrey_way](https://twitter.com/jeffrey_way) ครับ

<script src="https://gist.github.com/armno/5946018.js"></script>

### Sidebar Enhancement

Sidebar Enhancement เป็น plugin ตัวหนึ่งที่ผมต้องมีติดไว้เสมอ มันช่วยให้เวลาเราคลิกขวาที่ไฟล์ต่างๆ ใน Sidebar มีเมนูเพิ่มขึ้นมาอีกเยอะครับ

แต่กับ Sublime Text เวอร์ชั่น 3 นี้ หากลง Sidebar Enhancement ผ่าน Package Control จะทำให้ plugin ใช้งานแทบไม่ได้เลย เมนูจะกลายเป็นสีเทาๆ คลิกไม่ได้เกือบทั้งหมด

![Sidebar Enhancement ใน Sublime Text 3](images/9297756157_bdf7790626.jpg)

วิธีแก้ก็คล้ายๆ กับของ Package Control คือต้องลงแบบ manual เอาครับ ก่อนอื่นเลยต้องเอา Sidebar Enhancement ที่ลงไว้ผ่าน Package Control ออกก่อน กด <code>Cmd+Shift+P</code> (<code>Ctrl+Shift+P</code>) เลือก <code>Remove Package</code> แล้วเอา Sidebar Enhancement ออกครับ

จากนั้นไปที่ terminal ครับ <code>cd</code> ไปยังโฟลเดอร์ Packages (ที่เดียวกับที่ลง Package Control)

{{< highlight sh >}}
$ cd ~/Library/Application Support/Sublime\ Text\ 3/Packages
$ git clone -b st3 git://github.com/titoBouzout/SideBarEnhancements.git "SideBarEnhancements"
{{< / highlight >}}

จากนั้น restart Sublime Text แล้ว Sidebar Enhancement ก็จะใช้ได้ครับ

### SublimeLinter

ขั้นตอนเหมือนกัน Sidebar Enhancement เพียงแต่ชื่อ branch ที่ checkout หลังจาก clone นั้น ชื่อ branch `sublime-text-3` ครับ

{{< highlight sh >}}
$ cd ~/Library/Application Support/Sublime\ Text\ 3/Packages
$ git clone -b sublime-text-3 https://github.com/SublimeLinter/SublimeLinter.git
{{< / highlight >}}

แต่ละคนมีวิธี set up Sublime Text กันยังไงบ้าง เอามาแชร์กันได้นะครับ

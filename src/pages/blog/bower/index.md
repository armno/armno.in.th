---
date: 2013-12-25T00:00:00Z
description: Bower เป็น client-side package manager จากทาง Twitter ใช้สำหรับติดตั้ง
  / ค้นหา / อัพเดท 3rd-party package ได้สะดวกมาก ทำได้ผ่าน Terminal ครับ
published: true
tags:
  - bower
  - terminal
thumbnail: images/11576530464_6dd5174254_o.png
title: ใช้งาน Bower
url: /2013/12/25/using-bower/
---

ปกติแล้วเวลาเราจะติดตั้ง package หรือ plugin สักตัว สิ่งที่ต้องทำก็คือ (สมมุติ jQuery)

1. เข้าเว็บ [jquery.com](https://jquery.com/)
2. กดปุ่ม download
3. unzip แล้ว copy ไฟล์ไปไว้ใน directory ที่ทำงานอยู่
4. เพิ่ม path ในไฟล์ html

หรือสะดวกขึ้นมาหน่อยก็จะใช้ plugin ของ editor อย่าง [Nettuts+ Fetch](https://armno.in.th/2012/09/09/sublime-text-2-nettuts-fetch/) แต่ก็ยังไม่สะดวกสำหรับการหา package ใหม่ หรือการอัพเกรดเวอร์ชั่นของ package เดิม Bower ช่วยแก้ปัญหาเหล่านี้ได้ครับ

![bower logo](images/11576530464_b141d1b021.jpg)

[Bower](https://bower.io) เป็น client-side package manager จากทาง Twitter ใช้สำหรับติดตั้ง / ค้นหา / อัพเดท 3rd-party package ได้สะดวกมากขึ้น ทำได้ผ่าน Terminal ที่เดียวเลย

### ติดตั้ง Bower

ก่อนติดตั้ง Bower นั้น ในเครื่องต้องมี Node กับ Git อยู่ก่อน ซึ่งหากติดตั้งไว้แล้วก็สามารถติดตั้ง Bower ได้จาก command

{{< highlight bash >}}
$ npm install -g bower
{{< / highlight >}}

### ติดตั้ง package ผ่าน Bower

สมมุติว่าเราต้องการติดตั้ง jQuery ก็เพียงแค่รัน

{{< highlight bash >}}
$ bower install jquery
{{< / highlight >}}

หรือจะเป็น package CSS ก็ได้ เช่น Normalize.css

{{< highlight bash >}}
$ bower install normalize-css
{{< / highlight >}}

ซึ่งโดยปกติแล้ว package ที่ติดตั้งผ่าน Bower ก็จะถูกเก็บไว้ใน directory `bower_components` ครับ (เปลี่ยนได้)

![bower_components directory](images/11545868783_cb11223bcb_b.jpg)

ในไฟล์ html เราก็โหลดไฟล์เข้ามาตามปกติ

![include bower packages](images/11558637724_591f9bf4e7_z.jpg)

ปกติแล้ว `bower install` จะติดตั้ง package เวอร์ชั่นล่าสุดให้เราเสมอ แต่เราก็สามารถระบุเวอร์ชั่นของ package ที่จะติดตั้งได้ โดยเพิ่ม `#<version>` ต่อท้ายเข้าไปหลังชื่อ package ครับ (ของผมต้องใส่ `"` ครอบเพราะเวลาพิมพ์เครื่องหมาย `#` แล้ว zsh มันบ่นครับ)

{{< highlight bash >}}
$ bower install "jquery#1.9"
{{< / highlight >}}

นอกจากเลขเวอร์ชั่นแล้ว ยังสามารถบอก branch หรือ commit ที่จะเลือกใช้ได้ด้วย เช่น

{{< highlight bash >}}
$ bower install "angular#unstable"
{{< / highlight >}}

{{< highlight bash >}}
$ bower install "angular#68b09bbf2b439a567d80798c4f74e715d2a5833f"
{{< / highlight >}}

### ค้นหา package

ทำได้ผ่าน command `bower search <package name>` ครับ เช่นผมต้องการหา normalize ก็

{{< highlight bash >}}
$ bower search normalize
{{< / highlight >}}

สามารถใช้ `grep` ในการฟิลเตอร์ผลการค้นหาได้ครับ เช่น

{{< highlight bash >}}
$ bower search normalize | grep bootstrap
{{< / highlight >}}

![bower search](images/11558436455_3abf8cacf8_z.jpg)

search มีประโยชน์เวลาติดตั้ง package ครับ เนื่องจากเราต้องใส่ชื่อ package ให้ตรงกับชื่อ package ของ Bower (ในรูปบนคือตัวสีฟ้า) ไม่งั้น Bower จะหา package ไม่เจอ

### ดูรายชื่อ package ที่ติดตั้งไว้แล้ว

{{< highlight bash >}}
$ bower list
{{< / highlight >}}

command นี้จะแสดงรายชื่อ package กับเวอร์ชั่นที่ติดตั้งไว้แล้ว และก็มีบอกด้วยว่า package ไหนมีเวอร์ชั่นใหม่ออกมาหรือยัง ส่วนที่ซ้อนกันเป็นขั้นๆ ก็บอกถึงลำดับ dependency ของแต่ละ package ครับ

![bower list](images/11568157035_256a332c6c_z.jpg)

### `bower.json` / `.bowerrc`

ไฟล์สำคัญสำหรับ Bower มีอยู่สองไฟล์คือ `.bowerrc` (dotfile) เป็นไฟล์ที่เก็บ config ของตัว Bower เอง เช่นหากต้องการให้ Bower ติดตั้ง package ใน directory อื่นที่ไม่ใช่ `bower_components` ก็ตั้งค่าได้ในไฟล์ `.bowerrc` นี้

{{< highlight javascript >}}
{
  "directory": "lib"
}
{{< / highlight >}}

ส่วนอีกไฟล์คือ `bower.json` สำหรับไว้เก็บข้อมูลรายละเอียด package ที่เราทำอยู่ ในกรณีที่เราอยากให้ package ของเรา ทำงานร่วมกับ Bower ได้ เช่น ชื่อ, เวอร์ชั่น และที่สำคัญ dependency ที่จำเป็นต้องใช้ (ไฟล์นี้ก็เหมือนไฟล์ `package.json` ของ Node นั่นแหละครับ)

{{< highlight javascript >}}
{
  "name": "bowertest",
  "version": "0.0.1",
  "dependencies": {
    "jquery": "~2.0",
    "bootstrap": "~3.0"
  }
}
{{< / highlight >}}

ตัวอย่างไฟล์ `bower.json` ข้างบนก็จะบอกว่า package ของเราต้องมี jQuery 2.0 ขึ้นไป และ Bootstrap 3.0 ขึ้นไป เมื่อใช้ command `bower install` Bower ก็จะจัดการ dependency พวกนี้ให้ครับ

นอกจากนี้ยังมี command `bower init` สำหรับช่วยสร้างไฟล์ `bower.json` แบบ interactive ด้วย เราแค่ใส่ข้อมูลลงไปไม่กี่อย่าง Bower ก็จะช่วยสร้างไฟล์ `bower.json` ให้

ช่วงแรกที่ใช้งาน Bower ผมเองก็ยังมึนๆ เหมือนกัน ต้องลองใช้บ่อยๆ พอจับทางได้ก็น่าจะชอบกันนะครับ สามารถลดขั้นตอนการทำงานซ้ำๆ ลงไปได้พอสมควร

#### เพิ่มเติม

- [Introduction to Bower](https://egghead.io/lessons/bower-introduction-and-setup) (video) แนะนำวิธีใช้ Bower สั้นๆ
- [Package Managers: An Introductory Guide For The Uninitiated Front-End Developer](https://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer) รวมถึง npm ด้วย
- [sublime-bower](https://github.com/benschwarz/sublime-bower) ใช้งาน Bower ผ่าน Sublime Text ได้เลย (ผมไม่ได้ใช้เองนะครับ แต่มีคนแนะนำมา)

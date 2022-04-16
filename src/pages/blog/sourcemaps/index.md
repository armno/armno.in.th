---
categories:
- Web Development
date: 2013-04-22T00:00:00Z
description: การเปิดใช้งาน Source maps กับ Google Chrome ทำให้ debug Sass file ได้ง่ายขึ้น
  เราสามารถดู source ของไฟล์ .scss ได้จาก browser เลย
tags:
  - css
  - sourcemaps
  - devtools
title: ใช้งาน Source Maps กับ Sass project
url: /2013/04/22/using-source-maps-with-sass/
---

เวลาทำงานโปรเจ็คที่ต้องใช้ [Sass](https://armno.in.th/2012/05/20/setting-up-sass/) เรามักวางโครงสร้างไฟล์ประมาณนี้

{{< highlight sh >}}
css
|-- _normalize.scss
|-- _base.scss
|-- _common.scss
`-- _style.scss
{{< / highlight >}}

แล้วใช้ `@import` (ของ Sass) ในการรวมไฟล์เป็นไฟล์เดียวตอน compile

{{< highlight scss >}}
// style.scss

@import "normalize";
@import "base";
@import "common";

// style อื่นๆ ...
.class1 { ... }
.class2 { ... }
{{< / highlight >}}

สั่ง watch แบบ compress css ไฟล์ output ให้เลย

{{< highlight sh >}}
$ sass --watch style.scss:style.css --style=compressed
{{< / highlight >}}

ปัญหาที่พบก็คือตอน inspect element โดยใช้ devtools นั้น inspector บอกเลขบรรทัดไม่ตรงกับความจริง (ถ้า compress มาก็เป็นบรรทัดที่ 1 หมดเลย) ทำให้ตามไปแก้ยากหน่อยครับ (โดยเฉพาะเมื่อเราไม่ได้เป็นคนวางโครงสร้างไฟล์ `.scss` เอง)

![รูป inspect element](images/8672545930_b8283fd22a_o.png)

### ใช้ Source Maps เข้ามาช่วย

[Source maps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) จะช่วยทำให้เราใช้ devtools เพื่อ inspect หรือดู source ของไฟล์ที่ถูก compile มาได้ อย่างเวลาเขียน Sass หรือ CoffeeScript การใช้งาน source maps ทำให้เราดู source ของไฟล์ `.scss` `.coffee` ที่เราเขียนได้ผ่าน browser เลย

### เปิดใช้ Source Maps ด้วย Google Chrome

ฟีเจอร์ source maps ของ Google Chrome นั้นไม่ได้ถูกเปิดไว้ตั้งแต่แรกครับ เราต้องเปิดใช้งานเองโดย

1. เปิด url `chrome://flags/` ด้วย Google Chrome
2. มองหา **Enable Developer Tools experiment** กด enable เพื่อเปิดใช้งาน แล้วกดปุ่ม relaunch now เพื่อ restart chrome ครับ
3. หลังจากเปิด chrome ใหม่แล้ว กด `F12` หรือ `Cmd + Shift + j` เพื่อเปิด devtools แล้วไปที่ settings (ไอคอนรูปเฟืองมุมขวาล่าง)
4. หน้า General เช็คถูกตรง **Enable source maps**
5. แล้วไปที่หน้า Experiments เช็คถูกตรง **Support for Sass** _(แท็บ Experiments จะไม่ออกมาถ้าไม่ enable devtools experiment ก่อน)_

![เมื่อเปิด chrome:://flags](images/8674535858_c9c6f3207d_o.png)

![รูป devtools experiment](images/8674535862_00c8abd8dc_o.png)

### Compile Sass เพื่อใช้งาน source maps

เราต้องเพิ่ม option `--debug-info` ต่อท้ายคำสั่ง `sass` เข้าไป ส่วน output style เป็นอะไรก็ได้ **ยกเว้น** `compressed`

{{< highlight sh >}}
$ sass --watch style.scss:style.css --debug-info
{{< / highlight >}}

ทีนี้เมื่อเราใช้ inspector จิ้ม element ดู path ของไฟล์ css ก็จะเป็นของ scss แทน

![รูป inspect element ที่เปิด source maps](images/8673467159_8ae882f17a_o.png)

ซึ่งถ้าเราสังเกตในไฟล์ `style.css` ที่ออกมา จะมี path แปลกๆ (เป็น file system) ออกมาเต็มไปหมด ส่วน panel ซ้ายมือเราสามารถเลือกดู source ในไฟล์ scss ได้เลย

![รูป file system path ใน scss](images/8673467195_04d5a595b4_z.jpg)

การเปิด source maps ตอนเขียน sass ก็จะทำให้ช่วยแก้งานจาก browser ได้ง่ายขึ้นครับ ก่อน push ขึ้น production server อย่าลืม compile scss อีกครั้งแบบไม่ต้องเปิด `--debug-info` นะครับ

### ดูเพิ่ม

- [@import ของ Sass](https://sass-lang.com/documentation/at-rules/import)
- [Using Sass source maps in Webkit Inspector (bricss.net)](https://bricss.net/post/33788072565/using-sass-source-maps-in-webkit-inspector)

#### ปล.

ถ้าใช้ [guard](https://github.com/guard/guard) เป็นตัว watch ใน `Guardfile` ก็จะประมาณนี้ครับ

{{< highlight ruby >}}
guard 'sass', :input => 'scss', :output => 'css', :debug_info => true
{{< / highlight >}}

---
categories:
  - Web Development
comments: true
date: 2012-05-20T22:58:44Z
description:
  Sass นั้นช่วยให้การเขียน CSS นั้นสนุกขึ้นเยอะ โพสต์นี้จะไม่เน้นเรื่องวิธีการเขียน
  Sass แต่จะเกี่ยวกับการติดตั้งและเซ็ต environment ให้เข้าที่เข้าทางเพื่อทำงานกับ
  Sass มากกว่าครับผม
slug: setting-up-sass
tags:
  - CSS
  - Preprocessor
  - Sass
  - Sublime Text 2
  - Tools
  - Web Development
title: เริ่มต้นใช้งาน Sass
url: /2012/05/20/setting-up-sass/
---

**[Sass](https://sass-lang.com/)** เป็น CSS Preprocessor ที่ทำให้เราเขียน CSS ด้วย syntax ในเชิงคล้ายๆ กับเขียนโปรแกรมภาษาอื่นทั่วไปได้ แล้วเจ้าตัว Sass ก็จะ compile เป็น CSS แบบธรรมดาให้ครับ ตัวผมเองก็เพิ่งเริ่มใช้ คิดว่าถ้าใช้คล่องๆ จะช่วยให้เราประหยัดเวลาเขียน CSS ได้อีกเยอะครับ

> โพสต์นี้จะไม่เน้นเรื่องวิธีการเขียน Sass แต่จะเกี่ยวกับการติดตั้งและเซ็ต environment ให้เข้าที่เข้าทางเพื่อทำงานกับ Sass มากกว่าครับผม

### ติดตั้ง Sass

ขอแนะนำวิธีติดตั้งผ่าน command line นะครับ เพราะง่ายดี ในเว็บของ Sass มีวิธีติดตั้งอยู่หน้าแรกบนสุดเลย ซึ่งเราต้องติดตั้งผ่าน `rubygems` ครับ ใน Ubuntu (12.04) นั้นไม่มีแพ็คเกจ Ruby กับ Rubygems ติดมาด้วย ก็ต้องลงสองตัวนี้ก่อนครับ ส่วนใน OSX (Lion) นั้น มี Ruby ลงมาให้แล้ว ก็ข้ามขั้นตอนนี้และติดตั้ง Sass ได้เลย

<pre><code class="language-bash">$ sudo apt-get install ruby     # หรือ ruby1.9.1
$ sudo apt-get install rubygems</code></pre>

จากนั้นติดตั้ง Sass ผ่าน Rubygems ครับผม

<pre><code class="language-bash">$ sudo gem install sass</code></pre>

เพียงเท่านี้ Sass ก็พร้อมให้เราใช้งานได้แล้ว

### เริ่มใช้งาน Sass

<ol>
    <li>เปลี่ยนไฟล์ <code>.css</code> เป็น <code>.scss</code> (เช่น จาก <code>style.css</code> เป็น <code>style.scss</code>)</li>
    <li>compile ไฟล์ <code>.scss</code> โดยใช้ Sass</li>
</ol>

<pre><code class="language-bash">$ sass style.scss:style.css</code></pre>

รูปแบบของ command นี้ก็คือ

<pre><code class="language-bash">$ sass &lt;input_file>:&lt;output_file&gt;</code></pre>

ผลลัพธ์ที่ได้คือ ได้ไฟล์ .css ที่เหมือนเดิมทุกประการ (อ้าว!?) เพราะเรายังไม่ได้ใส่ syntax ของ Sass ลงในไฟล์ .scss ทำให้ compile ออกมาได้เหมือน CSS ของเดิม นั่นหมายความว่าในไฟล์ .scss นั้น เราสามารถเขียน Sass syntax ปนกัน CSS syntax ได้ เดี๋ยว Sass จะ compile เป็น CSS ให้เองครับ

เช่น การใช้ child selector ปกติเราจะเขียน

<pre><code class="language-css">.parent {
  display: block;
}
.parent a {
  display: inline-block;
}
.parent a .child {
  display: none;
}</code></pre>

ใน Sass เขียนได้เป็น

<pre><code class="language-scss">.parent {
  display: block;
  a {
    display: inline-block;
    .child {
      display: none;
    }
  }
}</code></pre>

หรืออย่างการสร้างตัวแปร เอาไว้ใช้งานบ่อยๆ ก็ทำได้สะดวกดี

<pre><code class="language-scss">$bgColor : #f9f9f9;
body {
  background-color: $bgColor;
}</code></pre>

นอกจากนี้ยังมี syntax ของ Sass อีกมากมาย (ผมเองก็ยังใช้ไม่หมดเหมือนกัน) ลองเข้าไปอ่านได้ที่ [Sass Reference](https://sass-lang.com/documentation) ครับ

### อัพเดทไฟล์ .css ทุกครั้งที่บันทึกไฟล์ .scss

แค่เพิ่มพารามิเตอร์ `--watch` ใน sass command ครับ

<pre><code class="language-bash">$ sass --watch style.scss:style.css</code></pre>

มันจะขึ้นเป็น process ค้างไว้นะครับ ทุกครั้งที่เรากดเซฟไฟล์ มันก็จะอัพเดทไฟล์ CSS ให้เรา ไม่ต้องมานั่งรัน Sass ทุกครั้งไป

![sass-watch](images/8506286221_44ca74391b_z.jpg)

### บีบอัด CSS หลัง compile

เพิ่มพารามิเตอร์ `:style` เซ็ตให้เป็น compressed ไฟล์ output ที่ได้ จะถูก compress ให้เสร็จสรรพ แหล่มแท้

<pre><code class="language-bash">$ sass --watch style.scss:style.css --style compressed</code></pre>

![compressed](images/8506290933_9ed30fc258_o.png)

### Sublime Text กับ Sass

ปกติแล้ว Sublime Text ไม่รู้จักไฟล์ `.scss` ครับ จะมองเป็นไฟล์ text ธรรมดา และไม่ทำ syntax highlight ให้ ซึ่งวิธีแก้ก็มีสองวิธีคือ

ให้ Sublime Text มองเป็นไฟล์ CSS โดยไปที่เมนู **View > Syntax > CSS**

![select-css-syntax-for-sass](images/8507404164_c524851f17_o.png)

หรือ ลง plugin ชื่อว่า Sass ผ่าน Package Manger ..<del> ผมลองดูแล้วมันยังเอ๋อๆ กับ CSS comment แล้วก็ attribute selector ด้วย แนะนำให้ใช้แบบแรกดีกว่าครับ</del>

(Update: ผมมึนเองครับที่ลง plugin Sass แล้วไปเปิดไฟล์ .scss จริงๆ แล้วมี plugin อีกตัวนึงชื่อ [SCSS](https://github.com/kuroir/SCSS.tmbundle/tree/SublimeText2) อ่านไฟล์ .scss ได้ถูกต้องทุกประการครับ)

![sublime-text-sass-plugin](images/8507408254_23d0a26632_o.png)

นอกจากนี้แล้ว Sass ยังมีอะไรให้เล่นอีกเยอะมากครับ ใน Reference หน้าเดียวเอาอยู่เลย ส่วนการเริ่มใช้งาน Sass กับโปรเจ็คที่กำลังทำอยู่ ก็ไม่เป็นปัญหาครับ เพราะเราสามารถเขียน CSS พร้อมกับเรียนรู้และปรับใช้ Sass syntax ไปทีละนิดๆ ได้ ถือเป็นตัวช่วยของ web developer ที่มีประโยชน์และใช้งานสนุกอีกตัวนึงครับ

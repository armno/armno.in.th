---
title: "Inline CSS"
date: 2019-12-24T17:21:04+07:00
url: /2019/12/24/blog-inline-css
description: บางที critical CSS กับ loadCSS ก็อาจจะไม่ได้จำเป็นสำหรับทุกคน
thumbnail: images/wpt-after.png
tags:
- blog
- performance
- css
categories:
- web development
layout: '../../../layouts/PostLayout.astro'
setup: |
  import lazy from './images/lazy.css.png';
  import before from './images/wpt-before.png';
  import after from './images/wpt-after.png';
---

> โพสต์นี้ถือว่าเป็นภาคต่อของโพสต์ [_Case study: เปลี่ยนวิธีโหลด CSS เพื่อให้เว็บ render ไวขึ้น_](https://armno.in.th/2015/05/04/use-loadcss-to-improve-rendering-performance/) (2015) ก็ได้ครับ

ปกติ CSS Workflow ของบล็อกนี้แบ่งเป็น 2 ส่วนหลักๆ ส่วนแรกคือ Sass:

- ใช้ Sass เป็นตัว preprocessor
- เก็บไฟล์ `.scss` ไว้ในโฟลเดอร์ธีม [`themes/lazy/assets/css`](https://github.com/armno/blog/tree/master/themes/lazy/assets/css)
- compile Sass เป็น CSS ด้วย [Sass Pipe](https://gohugo.io/hugo-pipes/scss-sass/) ที่ติดมากับ Hugo (ไม่ต้องลง build tools เพิ่ม)
- จากไฟล์ `.scss` หลายๆ ไฟล์ ได้ไฟล์ output CSS ออกมา 1 ไฟล์

ส่วนที่สองคือการใช้งาน CSS ที่ได้ออกมา:

- ใช้ [loadCSS](https://github.com/filamentgroup/loadCSS) เพื่อ[โหลด CSS แบบ asynchronous](https://armno.in.th/2015/05/04/use-loadcss-to-improve-rendering-performance/#3--loadcss--css--asynchronous)
- **generate critical CSS** โดยใช้ online tool [Critital Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/)
แล้ว copy critial CSS มา inline ใส่ในแท็ก `<style>` ใน `<head>` อีกที [แบบนี้](https://github.com/armno/blog/blob/3f55490bb0ac275fa02723f4c112e1e811a96a3a/themes/lazy/layouts/partials/style.html#L2)

<p class="message--warning">
ที่ทำไว้เยอะขนาดนี้ เพื่อลองเล่นฟีเจอร์ Sass Pipe ของ Hugo พร้อมกับใช้ loadCSS เพื่อเพิ่ม performance เมื่อก่อนนู้นครับ
</p>

---

ปัญหาอยู่ตรงส่วนที่ 2 ก็คือ ในขั้นตอนการ generate critical CSS นั้น ผมต้องทำเองแบบ manual ทุกครั้ง
เพราะไม่ได้ทำ tool อะไรที่เอาไว้ ให้มันทำงานอัตโนมัติ (บล็อกนี้ยังไม่ได้ใช้ tool อะไรพิเศษนอกเหนือจากที่มีอยู่ใน Hugo)

ผมคิดว่าการใช้ critical CSS _ให้คุ้มค่า_ ควร automate process ให้ได้ ซึ่ง process ที่ว่านี้ก็คือ

1. อัพเดทไฟล์ CSS หลัก
2. auto generate critical CSS
3. inject (inline) critical CSS เข้าไปในแท็ก `<style>` ใน HTML template

ถ้า automate ข้อ 2. กับ 3. ไม่ได้ ก็อาจไม่คุ้มค่าเท่าไหร่

อีกปัญหาหนึ่งที่เจอคือ ถ้า generate critical CSS มาไม่ดี คือไม่ครอบคลุม above the fold content ทุก element
ตอน render ครั้งแรกอาจจะดูพังๆ หน่อย เพราะมี Flash of Unstyled Content

## ทั้งหมดนี้เพื่อ CSS แค่ 4.6KB!

ผมย้อนกลับไปมองต้นทาง คือไฟล์ CSS หลักไฟล์เดียวของบล็อกนี้ ขนาดของไฟล์เมื่อ gzip แล้วอยู่ที่ 4.6KB ซึ่งเล็กมาก

เทคนิคทั้งหมดตอนต้น ก็เพื่อพยายามทำให้ไฟล์ CSS ที่มีขนาด 4.6KB _โหลดไวขึ้นอีก!_ ซึ่งผมก็กลับมาตั้งคำถามว่า **มันจำเป็นไหม** กับไฟล์จิ๋วแค่นี้

<img src={lazy} alt="lazy.css">

เมื่อก่อนมันเวิร์กเพราะไฟล์ CSS มันเคยใหญ่กว่านี้ แต่ตอนนี้ไม่แล้ว

ไฟล์เล็กจนสามารถ inline CSS ทั้งหมดเข้าไปใน HTML ได้เลย โดยไม่จำเป็นต้องแยกไฟล์ CSS ออกมาเป็นอีก 1 HTTP request ด้วยซ้ำ

เมื่อ inline CSS ทั้งหมดที่มีเข้าไปใน `<head>` แล้ว รวมกับขนาดของ HTML ของแต่ละหน้า หรือแต่ละโพสต์แล้ว ส่วนมากก็ยังไม่เกิน 14KB ซึ่งไม่ได้แย่เลย

> #nerdalert - โดยหลักการแล้ว เพื่อการ render ที่ไวที่สุด ควรจะทำให้ content ที่จำเป็นต้องใช้เริ่ม render ทั้งหมด[อยู่ใน 14KB ของ request แรก](https://web.dev/extract-critical-css/) ซึ่งเป็น roundtrip แรกระหว่าง browser กับ server

## แก้ template ของ theme

ในไฟล์ partial [`style.html`](https://github.com/armno/blog/blob/master/themes/lazy/layouts/partials/style.html) ที่เป็นส่วนหนึ่งของ `<head>` จากเดิม

```html
<style>/* generated critical CSS */</style>

<script>/* loadCSS.js ที่ inline ไว้ */</script>

{{ $sass := resources.Get "css/lazy.scss" }}
{{ $style := $sass | resources.ToCSS }}
<link rel="preload" href="{{ $style.RelPermalink }}" as="style" onload='this.onload=null;this.rel="stylesheet"'>
<noscript><link rel="stylesheet" href="{{ $style.RelPermalink }}"></noscript>
```

ถูกเอาออกหมด ก็เหลือเพียงการให้ Hugo compile Sass เป็น CSS แล้ว print ออกมาเป็น inline CSS ในแท็ก `<style>` เลย

```html
{{ with resources.Get "css/lazy.scss" | toCSS | minify }}
<style>{{ .Content | safeCSS }}</style>
{{ end }}
```

ไม่มีท่าพิศดาร, ไม่ต้องเปิดเว็บไป generate critical CSS อีก, ไม่มี external resource จากแท็ก `<link>`, ไม่มี JavaScript หรือ `<noscript>`,
ไม่ต้องคอยเช็คว่าโค้ด JavaScript ของ loadCSS มีอัพเดทหรือไม่

เว็บโหลดไวเหมือนกัน

## Audit

ผมลองใช้ [webpagetest.org](https://webpagetest.org/) วัดผลเทียบกันดูระหว่างแบบเดิม critical CSS + loadCSS + CSS หลัก กับแบบใหม่ inline CSS หลักไปทั้งหมดเลย

กับโพสต์ที่มี content พอประมาณ ก็ลดเวลาโหลดได้นิดหน่อย

ก่อน:

<img src={before} alt="webpagetest.org result: before">

หลัง:

<img src={after} alt="webpagetest.org result: after">

แน่นอนว่าการันตีผลอะไรไม่ได้จากการเทสต์แค่ครั้งสองครั้ง
แต่ก็อาจจะพอเห็นภาพได้บ้าง

## สรุป

แต่สิ่งที่ชอบคือ ไม่ต้องมานั่งนึกว่าอัพเดท critical CSS ไปหรือยัง เวลาที่แก้ layout หรือ markup ของธีม
ได้ตัด _ความซับซ้อนที่ไม่จำเป็น_ ออกไป

อย่างกรณีของผมข้างต้น แก้ปัญหาไปอีกแนวทางก็ได้ คือเพิ่ม build tool เข้าไปอีก ให้ทุกอย่าง automate ได้หมด
แต่ผมมองว่าแค่นี้มันก็ overengineering พอแล้ว

เราหาอ่านบทความแนว performance best practices หรือหา tools ได้มากมาย
เชื่อว่าทุกอย่างเป็นไปได้ ทุกอย่างใช้งานได้
แต่ก็ไม่ใช่ทุกอย่างที่ _จำเป็น_ จะต้องนำมาใช้กับโปรเจ็คที่เรากำลังทำอยู่

- บางทีมันก็อาจไม่เข้ากับบริบทของเรา
- บางทีมันก็ไม่คุ้มกับการลงเวลาลงแรง
- หรือบางทีมันก็ไม่ได้ตอบโจทย์อะไรเลย นอกจากเพื่อความพึงพอใจของคนทำ

อาจจะไม่ถูกใจที่ไม่ได้รีดเค้น performance ออกมาทุกเม็ดเท่าที่จะทำได้
แต่ผมว่ากับบล็อกนี้ แค่นี้ก็พอแล้ว

ตัดออกแล้วสบายใจดี

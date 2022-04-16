---
categories:
  - Life
comments: true
date: 2012-03-18T18:00:50Z
description:
  Prefixfree.js เป็น JavaScript เล็กๆ ที่ทำให้เราสามารถเขียน CSS แบบไม่ต้องมี
  vendor prefix ได้ โดย prefixfree.js จะเติม vendor prefix ให้เองตอน runtime ครับ
slug: prefixfree-js
tags:
  - CSS3
  - JavaScript
  - Lea Verou
  - PrefixFree
  - Web Development
title: จัดการ CSS3 Vendor Prefixes ด้วย prefixfree.js
url: /2012/03/18/prefixfree-js/
---

ปกติเวลาเราเขียน CSS3 นั้นต้องเขียน prefix สำหรับ property บางตัว ที่ browser บางเวอร์ชั่นที่ยังไม่รู้จัก W3C standards เช่น gradient background ลากยาวมหึมา (โค้ดจาก [CSS3Please.com](https://css3please.com/))

{{< highlight css >}}
.box_gradient {
  background-color: #444444;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#444444), to(#999999));
  background-image: -webkit-linear-gradient(top, #444444, #999999);
  background-image: -moz-linear-gradient(top, #444444, #999999);
  background-image: -ms-linear-gradient(top, #444444, #999999);
  background-image: -o-linear-gradient(top, #444444, #999999);
  background-image: linear-gradient(to bottom, #444444, #999999);
}
{{< / highlight >}}

เห็นโค้ดแล้วเหนื่อย **[Lea Verou](https://lea.verou.me/)** เจ้าของเดียวกับ [dabblet](https://armno.in.th/2012/03/12/dabblet-com-css-playground/) เลยทำ [prefixfree.js](https://leaverou.github.com/prefixfree/) ขึ้นมาเพื่อเป็นตัวจัดการกับ prefix ต่างๆ ให้ โดยที่เราเขียนแค่เวอร์ชั่น W3C standards ตัว prefixfree.js ก็จะใส่ prefix ให้เท่าที่จำเป็น ขึ้นอยู่กับ browser ที่ใช้ครับ

![prefix-free](images/8506629435_7bed3a069c_o.jpg)

วิธีใช้ก็แค่เรียกใช้ prefixfree.js ในหน้าที่เราต้องการครับ

{{< highlight css >}}
&lt;script src="js/prefixfree.min.js"&gt;&lt;/script&gt;
{{< / highlight >}}

เวลาเขียน CSS ก็เขียนแค่เวอร์ชั่นธรรมดา

{{< highlight css >}}
.box_gradient {
  background-image: linear-gradient(to bottom, #444444, #999999);
}
{{< / highlight >}}

พอไปรันใน browser ตัว prefixfree.js ก็จะเติม prefix ให้อัตโนมัติ ข้อดีก็คือ เราไม่ต้องไปจำ vendor prefix ที่ไม่ใช่มาตรฐานของ CSS3 ไม่ต้องเขียนให้เสียเวลา โค้ด CSS เราก็จะสั้นลงนิดหน่อย อีกอย่างก็คือ ดูไม่รกรุงรังเมื่อใช้ developer tools inspect ดูใน browser ครับ

ข้อมูลอื่นๆ อ่านได้จาก [https://leaverou.github.com/prefixfree/](https://leaverou.github.com/prefixfree/) ครับ ลองใช้กันดูนะ

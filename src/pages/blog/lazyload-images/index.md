---
title: "Lazy Load รูปภาพด้วย LazyLoad library"
date: 2018-09-10T20:24:15+07:00
url: /2018/09/10/lazyload-images
thumbnail: /images/lazyload-images/audit-results-after.png
description: การใช้ lazy loading กับไฟล์จำพวกรูปภาพ เป็นเทคนิคที่นำมาใช้ได้ง่าย และส่งผลดีอย่างเห็นได้ชัด ในโพสต์นี้ผมนำ library ที่ชื่อว่า LazyLoad มาใช้งานกับบล็อกนี้ครับ
tags:
  - lazy load
  - performance
  - javascript
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

[Lazy loading](https://en.wikipedia.org/wiki/Lazy_loading) เป็นเทคนิคหนึ่งในการทำให้เว็บแสดงผลได้ไวขึ้น หลักการก็คือ
แทนที่จะส่ง request ไปเรียกไฟล์ assets ทั้งหมดที่ใช้ในเพจพร้อมกันตั้งแต่ตอนโหลด
ก็เปลี่ยนเป็นการส่ง request ออกไปเมื่อ "จำเป็น" เท่านั้น

สำหรับไฟล์ JavaScript/CSS ก็ส่ง request ออกไปก็ต่อเมื่อจะได้ใช้งาน
ส่วนไฟล์รูปภาพ ก็คือการส่ง request ออกไปก็ต่อเมื่อต้องแสดงผลบนหน้าจอ

การใช้ lazy loading กับไฟล์จำพวกรูปภาพ เป็นเทคนิคที่นำมาใช้ได้ง่าย
และส่งผลดีอย่างเห็นได้ชัด ถ้าในภาษานักลงทุนก็อาจจะบอกว่า ลงทุนน้อย แต่ได้ผลตอบแทนค่อนข้างดี (แต่ก็ยังมีความเสี่ยงนะ)

สำหรับบล็อกนี้ ผมใช้ JavaScript library ชื่อว่า [**LazyLoad**](https://github.com/verlok/lazyload)
เพื่อ lazy load รูปภาพ สำหรับบางโพสต์ที่มีรูปเยอะๆ
อยากจะมาแชร์บันทึกครับผม

> นอกจาก LazyLoad แล้วก็ยังมี library อีกตัวชื่อว่า [**lazysizes**](https://github.com/aFarkas/lazysizes) ที่ดูเหมือนจะได้รับความนิยมเหมือนกัน (ดูจากจำนวนดาวใน GitHub) แต่ผมยังไม่เคยใช้ครับ

## `LazyLoad`

หลักการของ LazyLoad คือจะโหลด asset เมื่อมันเข้ามาอยู่ใน viewport
หรือเมื่อเรา scroll ลงไปถึง viewport นั่นเอง

asset ที่รองรับคือ รูปภาพ วิดีโอ และ content ใน iframe

วิธีการใช้งาน ใน [readme ของ repo](https://github.com/verlok/lazyload/blob/master/README.md) เขียนไว้ละเอียดดีมาก มีตัวอย่างให้ดูหลายๆ use case
ที่ผมเลือกใช้เป็น [Async script + auto initilization](https://github.com/verlok/lazyload#async-script--auto-initialization)

ใส่ code เหล่านี้ไว้ส่วนล่างสุดของ HTML ก่อนปิด `</body>`

```html
<script>
  window.lazyLoadOptions = {
    elements_selector: '.lazy'
  }
</script>
<script async src="/js/lazyload.min.js"></script>
</body>
```

ส่วน tag `<img>` ก็ต้องเปลี่ยนจาก `src` attribute เป็น `data-src`

```html
<img class="lazy" data-src="/path/to/image" alt="">
```

เมื่อรูปนี้เข้ามาอยู่ใน viewport LazyLoad จะทำการเปลี่ยน attribute `data-src` ให้เป็น `src`
และก็จะทำให้ browser ส่ง request ออกไปโดยอัตโนมัติ

## ต้องทำงานได้โดยที่ไม่มี JavaScript

แน่นอนว่าการใช้ library LazyLoad นั้น ต้องใช้ JavaScript

สำหรับ browser ที่ไม่มี JavaScript หรือ user ไม่ได้เปิด JavaScript ไว้
รูปนั้นก็จะไม่ขึ้นเลย เพราะ browser มองว่าไม่มี attribute `src`

วิธีแก้ก็คือต้องใส่ fallback ใน tag `<noscript>` ด้วย tag `<img>` ธรรมดาแบบนี้

```html
<img class="lazy" data-src="/path/to/image" alt="">
<noscript>
  <img src="/path/to/image" alt="">
</noscript>
```

วิธีนี้ทำให้รูปใน content แสดงผลได้ตามปกติไม่ว่าจะเปิด JavaScript ไว้หรือไม่
เพียงแต่ก็จะไม่ได้ประโยชน์จาก lazy load เท่านั้นเอง (ก็ยังดีกว่ารูปไม่ขึ้นเลย)

(ทดสอบการปิด JavaScript ใน Chrome DevTools โดยการเปิด command palette (CMD + Shift + P) แล้วหา `disable javascript`
แล้ว refresh)

<Picture src="/images/lazyload-images/disable-javascript-in-devtools.png" alt="ปิด JavaScript ใน Chrome DevTools" />

โชคดีที่มี [shortcode ใน Hugo](https://armno.in.th/2018/09/08/hugo-shortcode/)
ผมเลยสร้าง [shortcode อีกอัน](https://github.com/armno/blog/blob/master/themes/armno/layouts/shortcodes/picture-lazy.html)สำหรับใส่รูปที่ต้องการใช้ lazy load ใน content ได้
ไม่ต้องไปตามใส่ tag ```<noscript>``` ให้กับทุกรูป

```markdown
{{< picture-lazy src="/path/to/image" alt="test" />
```

## วัดผล

วัดผลโดยใช้แท็บ Audits (Lighthouse) ใน Chrome DevTools จากโพสต์: [Deploy blog อัตโนมัติด้วย Netlify](https://armno.in.th/2018/08/18/move-to-netlify/)
ที่มีรูปภาพในโพสต์เยอะๆ
หลายๆ ครั้ง

ผลออกมา แต่ละครั้งได้ค่าไม่เท่ากัน แต่มีแนวโน้มไปทางเดียวกันคือ

- คะแนน performance แบบใช้ LazyLoad จะเยอะกว่า
- ดูจาก screenshot ที่ Lighthouse บันทึกไว้ แบบใช้ LazyLoad จะเริ่ม render content ได้ไวกว่า

ก่อน

<Picture  src="/images/lazyload-images/audit-results-before.png" alt="ก่อนใช้ LazyLoad คะแนน performance อยู่ที่ 73" />

หลัง

<Picture  src="/images/lazyload-images/audit-results-after.png" alt="หลังใช้ LazyLoad คะแนน performance อยู่ที่ 90" />

นอกจากนั้นคือ ช่วยประหยัด bandwidth สำหรับ user ที่ใช้ 3g/4g ไม่ต้องเสียเวลาและค่าเน็ตมือถือ รอโหลดรูปทั้งหมดก่อนที่จะเริ่มอ่านบทความได้

สำหรับผมถือว่าเป็นการ _ลงทุนน้อย แต่ได้ผลตอบแทนค่อนข้างดี_

แต่อย่างไรก็ตาม ถ้าจะใช้ในเว็บ production จริงจัง ก็ยังมีเรื่องอื่นให้ต้องคำนึงถึงอยู่ด้วย ตามไปดูได้ในส่วน [Tips & Tricks](https://github.com/verlok/lazyload#-tips--tricks) ของ LazyLoad ได้ครับ

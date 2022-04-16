---
title: "Hugo: สร้าง custom shortcode"
date: 2018-09-08T20:04:30+07:00
url: /2018/09/08/hugo-shortcode
thumbnail: images/platoo.jpg
description: สร้าง custom shortcode ไว้ใช้เพื่อประหยัดเวลา ไม่ต้องพิมพ์ HTML เต็มๆ
tags:
  - Hugo
  - Blog
  - Shortcode
---

## Shortcode ใน Hugo คืออะไร

แนวคิดก็คล้ายๆ ภาษา markdown หรือ shortcode ของ WordPress คือ snippet ที่มีให้เราใช้ เขียนสั้นๆ แต่แปลงออกมาเป็น output HTML ยาวๆ ได้

ตัวอย่างเช่น built-in shortcode ของ Hugo เวลาอยากจะ[แทรกรูปจาก Instagram](https://gohugo.io/content-management/shortcodes/#example-instagram-input)
ในโพสต์ แทนที่จะต้องไป copy [embed HTML code](https://help.instagram.com/513918941996087)
ยาวๆ มาทั้งหมด (ซึ่งยาวมาก) ก็จะเหลือแค่

```markdown
{{</* instagram BhjmuHLBs48 */>}}
```

`instagram` คือชื่อของ shortcode ส่วน `Bhj..` คือ ID ของรูปจาก Instagram
ทั้งหมดถูกหุ้มด้วย `{{</* */>}}`

นอกจาก Instagram แล้ว Hugo ยังมี [built-in shortcode](https://gohugo.io/content-management/shortcodes/#use-hugo-s-built-in-shortcodes)
ให้อีกจำนวนหนึ่งไว้ช่วยทุ่นแรง

---

บล็อกนี้ผมได้ทำ style ของรูปไว้ 3 แบบ

- ธรรมดา: ความกว้างเท่ากับ content ที่เป็น text (`max-width: 760px`)
- แบบกึ่งเต็ม: ความกว้างเกิน text content ไปนิดหน่อย แต่ไม่เต็มจอ (`max-width: 75vw`)
- แบบเต็ม: ความกว้างเต็มจอ (`width: 100%`)

เวลาผมแทรกรูปลงในโพสต์ จะใช้ tag `<p>` ครอบไว้
พร้อมกับ CSS class `.media` แล้วตามด้วย CSS class เพิ่มเติม ตามแต่ละ style

เช่น

```html
<!-- แบบธรรมดา -->
<p class="media">
  <img src="" alt="">
</p>

<!-- แบบกึ่งเต็ม -->
<p class="media semi-full">
  <img src="" alt="">
</p>

<!-- แบบเต็ม -->
<p class="media full">
  <img src="" alt="">
</p>
```

_(ในโพสต์[รีวิวจักรยาน Storck Visioner](https://armno.in.th/2018/03/17/review-storck-vision-comp-g1/) มีรูปทั้ง 3 style)_

ปกติแล้วเวลาเขียน markdown file syntax การใส่รูปคือ

```markdown
![alt text](image.png)
```

ซึ่งพอ compile เป็น HTML ก็จะได้

```html
<img src="image.png" alt="alt text">
```

แต่ถ้าอยากเอา tag `<p>` มาครอบ จะทำแบบนี้**ไม่ได้** รูปจะไม่ออก

```markdown
<p class="media">
  ![alt text](image.png)
</p>
```

ที่ผ่านมา เวลาจะใส่รูปลงไปในโพสต์ ก็เลยต้องเขียน HTML แบบเต็มๆ เลยคิดว่า ทำเป็น shortcode ไว้ น่าจะช่วยทุ่นแรงได้

## สร้าง Shortcode ใช้เอง

จะลองทำ 1 shortcode ที่สามารถ render HTML output สำหรับรูปภาพออกมาได้ทั้ง 3 แบบ จะให้ชื่อเป็น
`picture` และให้ส่ง parameter เข้าไปได้ แบบนี้

```markdown
{{</* picture style="full" src="image.png" alt="image alternate text" */>}}
```

เริ่มจาก ต้องไปสร้างไฟล์ HTML สำหรับ shortcode นี้ก่อน ผมเลือกเก็บไว้ใน theme
ต้องสร้างไฟล์ที่ `/themes/armno/layouts/shortcodes/picture.html`

จากนั้น ในไฟล์ `picture.html` เราก็ต้องมี HTML code เตรียมไว้

```html
<!-- picture.html -->
<p class="media">
  <img src="" alt="">
</p>
```

และใส่ค่าจาก parameter ของ shortcode โดยใช้ `{{ .Get "param-name" }}` method จาก Hugo

```text
<!-- picture.html -->
<p class="media {{ with .Get "style"}}{{.}}{{ end }}">
  <img {{ with .Get "src"}} src="{{.}}"{{ end }}
  {{ with .Get "alt"}} alt="{{.}}"{{ end }}>
</p>

```

เพียงเท่านี้ก็ได้ shortcode ใหม่มาใช้แล้ว .. ผ่าม!

ทดสอบเพิ่มรูปโดยใช้ `pitcure` shortcode

{{< picture wrapper-class="semi-full" src="images/platoo.jpg" alt="ทดสอบ picture shortcode ด้วยรูปปลาทู" >}}

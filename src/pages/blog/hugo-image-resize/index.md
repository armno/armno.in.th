---
title: "Hugo: Resize รูปด้วย Image Processing"
date: 2019-07-25T22:10:57+07:00
url: /2019/07/25/hugo-image-resize
description: Hugo มาพร้อมกับฟีเจอร์ Image Processing ที่ช่วยย่อรูป/crop รูปเป็นขนาดต่างๆ ได้จากรูปต้นฉบับที่เราเตรียมไว้รูปเดียว
thumbnail: images/thumbnail.png
tags:
- blog
- hugo
- performance
- content
---

Hugo มาพร้อมกับฟีเจอร์ [Image Processing](https://gohugo.io/content-management/image-processing/) ที่ช่วยย่อรูป/crop รูปเป็นขนาดต่างๆ ได้
จากรูปต้นฉบับที่เราเตรียมไว้รูปเดียว
ผมได้ลองใช้แล้วพบว่าสะดวกดี จึงอยากจะบันทึกไว้ครับ

<p class="message--warning">
  <strong>Update:</strong> พบปัญหาจากการใช้งาน image processing อยู่ 2 อย่าง อย่างแรกคือ ขนาดไฟล์อาจจะใหญ่ขึ้นกว่าเดิม
  อย่างที่สองคือ คุณภาพของรูปที่ผ่าน image processing ของ hugo นั้นค่อนข้างแย่ ภาพดูแตกอย่างชัดเจน
  ถึงแม้ตั้ง quality เป็น 100 แล้วก็ตาม ปัญหานี้ผมยังหาทางแก้ไม่ได้ จึงปิดฟีเจอร์ไว้ก่อนครับ
</p>

![bigger file size after resized](images/resized-image-bigger.png)

---

## Page Bundle

แต่ละหน้าใน Hugo จะถูกเก็บไว้ในโฟลเดอร์ `content/`

ตัวอย่าง content แบบ `post` จากโฟลเดอร์ `content/post/fira-code/`

```sh
content/      # โฟลเดอร์เก็บ content ทั้งหมด
├── post/       # โฟลเดอร์เก็บ content ประเภท post
│   ├── fira-code/  # 1 page bundle
│   │   ├── images/
│   │   │   ├── all_ligatures.png
│   │   │   ├── cover.png
│   │   │   ├── fira-code-in-vim.png
│   │   │   ├── fira-code.png
│   │   │   ├── iterm-preferences.png
│   │   │   └── roboto-mono.png
│   │   └── index.md
```

โฟลเดอร์ `content/post/fira-code/` ถือเป็น 1 [page bundle](https://gohugo.io/content-management/organization/#page-bundles)
หรือ 1 ก้อน

นอกจากมีไฟล์สำคัญคือ `index.md` ที่เป็นเนื้อหาของโพสต์แล้ว
ยังมีโฟลเดอร์ `images/` ที่เอาไว้เก็บรูปประกอบต่างๆ
หรืออาจจะมีไฟล์ประเภทอื่น หรือโฟลเดอร์อื่นรวมอยู่ด้วยก็ได้

ไฟล์ต่างๆ ที่อยู่ใน page bundle 1 ก้อน เรียกว่า [page resources](https://gohugo.io/content-management/page-resources/)
รูปในโฟลเดอร์ `images/` ก็ถือเป็น page resource ชนิดหนึ่งเหมือนกัน
เราสามารถเรียกใช้ page resources ผ่านทางตัวแปร `{{ .Resources }}` ของ Hugo
และใช้งาน property/function ต่างๆ ของ Hugo ได้

## เรียกใช้ Page Resources ใน template

สมมุติว่าเก็บไฟล์ที่จะใช้เป็น thumbnail ที่ `images/thumbnail.png`
ใน template (`.html`) จะเขียนประมาณนี้

```html
{{ $original :=  .Resources.GetMatch "thumbnail.png" }}
```

เราจะได้ `$original` ที่เป็น page resource object มี property ให้เลือกใช้

เช่น ใช้ property `.RelPermalink` สำหรับ attribute `src` ของแท็ก `<img>`

```html
<img src="{{ $original.RelPermalink }}">
```

(property ทั้งหมดดูได้จาก [document](https://gohugo.io/content-management/page-resources/#properties) ได้เลย)

## ใช้ page resource object กับ image processing

เมื่อได้ object `$original` แล้ว เราก็สามารถใช้ function Image Processing ของ Hugo ได้

เช่น ต้องการย่อรูปจาก `$original` ให้เป็นขนาด 400x400 pixel แล้วเก็บไว้ใน object `$thumbnail`

```html
{{ $thumbnail := $original.Resize "400x400" }}
```

หรือบอกขนาดเฉพาะด้านใดด้านหนึ่ง โดยรักษาอัตราส่วนของรูปไว้ตามต้นฉบับ

```html
<!-- กว้าง 400px สูงเท่าไหร่ก็ได้ -->
{{ $thumbnail := $original.Resize "400x" }}

<!-- สูง 400px กว้างเท่าไหร่ก็ได้ -->
{{ $thumbnail := $original.Resize "x400" }}
```

ถ้าเป็นรูป jpeg กำหนด quality และบีบอัดรูปให้เล็กลงได้ด้วยการส่ง parameter `q` เพิ่มเข้าไป

```html
{{ $thumbnail := $original.Resize "400x q60" }}
```

`$thumbnail` ก็จะเป็นรูปขนาดที่ย่อแล้ว ทำให้เราใช้งานใน template ได้เหมือน object อื่นๆ

```html
<img src="{{ $thumbnail.RelPermalink }}">
```

ตอนรัน local server หรือตอน build Hugo ก็จะสร้างรูปใหม่ และแก้ path ของรูปใน build output ให้ ตัวอย่าง

![path ของรูปที่ Hugo generate ให้](images/img.png)

### ย่อรูปพร้อมกันทีละหลายๆ ขนาด

เราสามารถสร้างรูปหลายๆ ขนาดได้จากรูปต้นฉบับรูปเดียว

```html
{{ $src := .Resources.GetMatch "thumbnail.png" }}

{{ $small := $src.Resize "500x q90" }}
{{ $medium := $src.Resize "800x q90" }}
{{ $large := $src.Resize "1400x q70" }}
```

จะได้รูปขนาดกว้าง 500, 800 และ 1400 pixel ตามลำดับ ในกรณีนี้ก็เราไปใช้กับ
attribute `srcset` ของแท็ก `<img>` เพื่อทำ responsive image ให้ browser
เลือกขนาดรูปที่เหมาะสมกับหน้าจอได้ (ตัดมาจาก [shortcode `image.html`](https://github.com/armno/blog/blob/master/themes/lazy/layouts/shortcodes/image.html))
```html
<img srcset='
  {{ with $small.RelPermalink }}{{.}} 500w{{ end }}
  {{ with $medium.RelPermalink }}, {{.}} 800w{{ end }}
  {{ with $medium2x.RelPermalink }}, {{.}} 1400w{{ end }}
'>
```

ถือเป็นการประหยัดเวลาในการเตรียมรูปประกอบ content ได้ดีครับ

ข้อควรระวังก็คือ ถ้าในโพสต์มีรูปที่ต้อง process เยอะ ก็จะยิ่งกินเวลา build time นานขึ้นด้วย
บางทีทำให้เกิด timeout ตอน build ได้ครับ

Image Processing ยังมี option อื่นๆ อีก ตามอ่านได้ที่ [Hugo Docs](https://gohugo.io/content-management/image-processing/) ได้เลย

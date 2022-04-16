---
title: "Hugo: สร้าง template ของ front matter ด้วย Archetypes"
date: 2018-09-03T17:03:27+07:00
url: /2018/09/03/hugo-archetypes
layout: '../../../layouts/PostLayout.astro'
cover-image: images/cover.png
thumbnail: images/thumbnail.png
description: ใช้ประโยชน์จาก archetype ใน hugo สำหรับสร้าง template ของ front matter เวลาสร้างโพสต์ใหม่
tags:
  - hugo
  - archetypes
  - blog
---

## Archetype คืออะไร

ก่อนอื่นต้องเข้าใจ content type ใน Hugo ก่อน

เวลาใช้ Hugo ทำเว็บ เราสามารถกำหนด content type หลายๆ แบบขึ้นมาได้ เช่น สำหรับเว็บโรงแรม
ก็สามารถมี content type หลายๆ แบบ

- type `room` สำหรับแสดงข้อมูลห้องแต่ละประเภทของโรงแรม
- type `event` สำหรับข้อมูลที่เป็น event ที่โรงแรมกำลังจะจัดขึ้น
- type `post` สำหรับแต่ละโพสต์ในบล็อก

การกำหนด content type ที่แตกต่างกัน ทำให้เราสามารถแสดงข้อมูลที่ต่างกัน ใช้ design ที่ไม่เหมือนกันได้

- type `room` แสดงผลข้อมูลห้อง ราคา พร้อม gallery รูปภาพ
- type `event` แสดงผลข้อมูลของ event นั้นๆ, วันที่ เวลา หรือปุ่มกดจอง
- type `post` แสดงผลแบบ blog ทั่วไปที่มีชื่อโพสต์ เนื้อหา วันที่

ชื่งความหมายในโลก static site generator คือทำให้เราใช้ view/template/layout ที่แตกต่างกันไป
ตามแต่ละ content type ได้นั่นเอง

*(ในโลก WordPress อาจใกล้เคียงกับ [post type](https://codex.wordpress.org/Post_Types))*

นอกจากการแสดงผลที่ไม่เหมือนกัน แต่ละ content type อาจต้องเก็บข้อมูลแตกต่างกันด้วย

- type `room` ก็ต้องมีชื่อห้อง, จำนวนแขกที่พักได้สูงสุด, จำนวนเตียงเสริม, option เสริมต่างๆ
- type `event` มีวันที่จัด, สถานที่ (ชื่อห้อง)
- type `post` มีวันที่โพสต์, หมวดหมู่ (category), tags เป็นต้น

เราสามารถเก็บข้อมูลพวกนี้ ของแต่ละ content object ไว้ใน front matter ของแต่ละ object ได้

ตัวอย่าง front matter ของ content type: `room` อาจจะหน้าตาเป็นแบบนี้

```yaml
---
title: "post-name"
date: 2018-09-03T16:56:20+07:00
price: 3000
max_guests: 2
max_extra_beds: 1
gallery:
  - photo1.jpg
  - photo2.jpg
  - photo3.jpg
---
```

ซึ่งเราสามารถใช้ค่าต่างๆ ใน front matter นี้ ใน template ของ content type นั้นๆ ได้

### archetype

archetype คือ template ของไฟล์ที่จะถูกสร้างขึ้นจาก command `$ hugo new <content type>` ตาม content type ที่เราระบุ
เราสามารถใช้ archetype กำหนด template ของ front matter ของ content type แต่ละประเภทได้

ตัวอย่างจากบล็อกนี้เลย: ปกติผมสร้างโพสต์ใหม่ในบล็อกโดยใช้ command

```sh
$ hugo new post/<post-name>/index.md
```

Hugo จะสร้างไฟล์ใหม่ `index.md` ในโฟลเดอร์ `content/post/<post-name>/` พร้อมกับ
[Front Matter](https://gohugo.io/content-management/front-matter/) (YAML) แบบนี้ให้

```yaml
---
title: "post-name"
date: 2018-09-03T16:56:20+07:00
draft: true
---
```

ผมจะต้องเติม property อื่นๆ ที่จะใช้เข้าไปอีก เช่น `url`, `layout`, `description` ให้กลายเป็น (ตัวอย่าง)

```yaml
title: "ทดสอบฟีเจอร์ก่อน deploy ด้วย Netlify Deploy Preview"
date: 2018-09-02T11:14:22+07:00
url: /2018/09/02/netlify-deploy-preview
layout: free
description: Netlify มีฟีเจอร์หนึ่งชื่อว่า Deploy Preview ที่ทุกครั้งที่เราสร้าง pull request (หรือ merge request สำหรับ GitLab) Netlify จะสร้าง URL สำหรับ pull requets นั้นให้โดยอัตโนมัติ ทำให้เราสามารถเช็คดูก่อนได้โดยที่ยังไม่ต้อง merge branch นั้น เข้า production branch
thumbnail: images/idea.png
tags:
  - Netlify
  - Continuous Deployment
```

แทนที่จะต้องมาเติมแบบ manual ทุกครั้ง เราสามารถใช้ archetype ใน Hugo มาช่วยทุ่นแรงได้
โดยให้ทุกไฟล์ที่ถูกสร้างขึ้นมาใหม่ ให้ Hugo เติมค่าใน front matter พวกนี้ให้ไว้ก่อน

## สร้าง archetype สำหรับ post

การสร้าง archetype ทำได้โดยการสร้างไฟล์ใหม่ในโฟลเดอร์ `archetype` อย่างเช่นผมจะสร้าง archetype สำหรับ content type ที่เป็น post
ก็ต้องสร้างไฟล์ `archetypes/post.md`

```sh
$ touch archetypes/post.md
```

ในไฟล์ `post.md` สร้าง template สำหรับ front matter ไว้แบบนี้

```yaml
---
title: "{{ .Name }}"
date: {{ .Date }}
url: {{ dateFormat "/2006/01/02/" .Date }}{{ .Name }}
layout: free
cover-image: images/cover.jpg
thumbnail:
description:
tags:
---
```

- `title` ให้เป็นชื่อตาม `<post-name>` ที่เราตั้งตอนรัน `$ hugo new post/<post-name>/index.md`
- `date` ให้เป็นวันเวลาตอนที่สร้างไฟล์
- `url` ใช้ `dateFormat` function ของ hugo เพื่อสร้าง URL ตาม pattern ที่กำหนดไว้ คือ `/year/month/day/post-name`
- `layout` ให้เป็น `wide` ใช้กับ theme ปัจจุบัน
- `cover-image` ใช้กับส่วน header ของ post ปกติจะตั้งชื่อไฟล์ให้เหมือนกันคือ `cover.jpg`
- `thumbnail`, `description`, กับ `tags` ให้เป็นค่าว่างๆ ไว้

ทดสอบโดยรัน `$ hugo new post/test-new-post/index.md` ในไฟล์ที่ถูกสร้างมาก็จะมี front matter เตรียมไว้ให้ตามที่ต้องการ

```yaml
---
title: "test-new-post"
date: 2018-09-04T08:39:14+07:00
url: /2018/09/04/test-new-post
layout: free
cover-image: images/cover.jpg
thumbnail:
description:
tags:
---
```


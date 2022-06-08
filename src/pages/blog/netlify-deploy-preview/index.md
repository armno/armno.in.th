---
title: "ทดสอบฟีเจอร์ก่อน deploy ด้วย Netlify Deploy Preview"
pubDate: 2018-09-02T11:14:22+07:00
url: /2018/09/02/netlify-deploy-preview
description: Netlify มีฟีเจอร์หนึ่งชื่อว่า Deploy Preview ที่ทุกครั้งที่เราสร้าง pull request (หรือ merge request สำหรับ GitLab) Netlify จะสร้าง URL สำหรับ pull requets นั้นให้โดยอัตโนมัติ ทำให้เราสามารถเช็คดูก่อนได้โดยที่ยังไม่ต้อง merge branch นั้น เข้า production branch
thumbnail: /images/netlify-deploy-preview/idea.png
tags:
  - Netlify
  - Continuous Deployment
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

[Netlify](https://www.netlify.com/) มีฟีเจอร์หนึ่งชื่อว่า Deploy Preview ที่ทุกครั้งที่เราสร้าง pull request (หรือ merge request สำหรับ GitLab)
Netlify จะสร้าง URL สำหรับ pull requets นั้นให้โดยอัตโนมัติ ทำให้เราสามารถเช็คดูก่อนได้โดยที่ยังไม่ต้อง merge branch นั้น
เข้า production branch หรือพูดง่ายๆ ก็คือให้เรา preview branch นั้นก่อน deploy ไปยัง production website ได้ง่ายๆ นั่นเอง

มีประโยชน์เวลาเราต้องการทำฟีเจอร์ใหม่ หรือแก้ bug และอยากทดสอบบน environment เดียวกับกับ production website ก่อน
หรือเช่นอยากทดสอบ performance บน server ดูก่อน เมื่อทุกอย่างดูโอเคแล้ว จึงค่อย deploy สู่ production website ของจริง

---

ตัวอย่างเช่น ผมอยากแก้หน้า home page ของบล็อกนี้ ด้วยการเปลี่ยนรูปและข้อความ

<p class="media semi-full">
  <img src="/images/netlify-deploy-preview/idea.png" alt="new homepage idea">
</p>

หลังจากสร้าง branch และแก้ code แล้ว ผมก็ push branch นี้ขึ้นไปบน GitHub repo
พร้อมกับสร้าง pull request บน GitHub

พอสร้าง pull request ปุ๊บ Netlify ก็จะเริ่มสร้าง deploy preview ให้อัตโนมัติ

<p class="media semi-full">
  <img src="/images/netlify-deploy-preview/new-pull-request.png" alt="netlify สร้าง deploy preview เมื่อสร้าง pull request">
</p>

เมื่อ build เสร็จ URL ใหม่ก็จะถูกสร้างขึ้นใน pattern `https://deploy-preview-<PULL_REQUEST_ID>--yoursitename.netlify.com` เช่นของผมก็จะเป็น [`https://deploy-preview-24--armno.netlify.com`](https://deploy-preview-24--armno.netlify.com/)

<p class="media semi-full">
  <img src="/images/netlify-deploy-preview/deploy-preview-ready.png" alt="netlify สร้าง deploy preview เมื่อสร้าง pull request">
</p>

เราสามารถกด link `Details` ไปดู deploy preview ที่ถูกสร้างขึ้นอัตโนมัติได้เลย

<p class="media semi-full">
  <img src="/images/netlify-deploy-preview/preview-deployed.png" alt="กด details เข้าไปดูได้เลย">
</p>

ในหน้า dashboard ของ Netlify ก็จะมีข้อมูลของ deploy preview ขึ้นมาแยกกับ production deploy

<p class="media semi-full">
  <img src="/images/netlify-deploy-preview/builds-on-netlify.png" alt="deploy previews บน dashboard ของ Netlify">
</p>

### ข้อสังเกต

ถึงแม้ฟีเจอร์ deploy preview จะมาพร้อมกับความสะดวกสบาย ไม่ต้อง config อะไรเพิ่มเลย แต่ก็มีข้อสังเกตคือ

- URL ที่ถูกสร้างขึ้นมา จะเป็น sub-domain ของ Netlify ไม่ใช่ของ custom domain ที่เราใช้ครับ
- deploy preview URL เมื่อถูกสร้างขึ้นมาแล้ว มันก็จะอยู่อย่างนั้นไปตลอด **จะไม่ถูกลบโดยอัตโนมัติ** ถึงแม้เราจะ merge pull request นั้น หรือไม่ก็ตาม
- เท่าที่อ่านใน Document ของ Netlify ยังไม่มีวิธีลบ deploy preview จากหน้า dashboard ของเรา

ใครใช้ Netlify อยู่ก็ลองเล่นกันดูได้ครับ

---
title: "Deploy Blog อัตโนมัติด้วย Netlify"
date: 2018-08-18T17:35:19+07:00
url: /2018/08/18/move-to-netlify
description: "แทนการใช้ Docker กับ CircleCI เพื่อ deploy blog แบบอัตโนมัติด้วยการใช้ continuous delivery ของ Netlify"
tags:
  - Blog
  - Continuous Delivery
  - Netlify
thumbnail: images/05-first-deploy-success.png
cover-image: images/cover.png
---

ในตอนที่แล้ว ผมใช้ [Docker กับ ​CircleCI เพื่อทำฟีเจอร์ auto deploy](https://armno.in.th/2018/08/16/blog-automated-deployment/) ให้บล็อกนี้
อัพเดทตัวเองอัตโนมัติเมื่อมีการอัพเดทจาก git repo ใน master branch

ซึ่งสำหรับบล็อกเล็กๆ ที่ทำจาก [Hugo](https://gohugo.io) มีแต่ static HTML แบบบล็อกนี้ การใช้ tools เยอะแยะอาจจะเกินจำเป็นไปสักนิด
ในโพสต์นี้ จะใช้ **Netlify** เพื่อลดขั้นตอนและ tools ที่ใช้ลง แต่ยังคงความสามารถ
automated deploy ไว้เหมือนเดิม พร้อมกับได้ของแถมเพิ่มมาอีกเล็กน้อยครับ

## Netlify คืออะไร

{{< picture-lazy src="images/netlify-homepage.png" alt="netlify.com screenshot">}}

[Netlify](https://www.netlify.com/) เป็นผู้ให้บริการโฮสต์ static website บน cloud server
รองรับทั้ง static HTML website ธรรมดา หรือจะให้ build จาก static site generator
อย่าง [Hugo](https://gohugo.io) หรือ [Jekyll](https://jekyllrb.com/) แล้ว deploy บน cloud ของ Netlify ก็ได้ (หรือจะใช้ tool ก็ได้เช่นกัน รองรับ Node, Python, Ruby)

Concept คล้ายกับ [GitHub Pages](https://pages.github.com/)
หรือ [GitLab Pages](https://about.gitlab.com/features/pages/) ครับ
แต่เพิ่มฟีเจอร์อื่นเข้ามาเยอะกว่า มีบริการอื่นๆ ที่คล้ายกันก็มี เช่น [Firebase Hosting](https://firebase.google.com/docs/hosting/)
หรือ [Amazon S3](https://aws.amazon.com/s3/)

ผมได้ยินชื่อ Netlify เมื่อปีที่แล้ว ตอน [SmashingMagazine.com](https://www.smashingmagazine.com/) เปลี่ยนระบบ backend
[จาก WordPress มาใช้ static site generator](https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/) จุดเด่นในตอนนั้นเป็นเรื่อง performance
ที่เร็วกว่าเดิมถึง [10 เท่า](https://www.netlify.com/blog/2017/03/16/smashing-magazine-just-got-10x-faster/)

ตอนนั้นผมยังไม่ค่อยเข้าใจและเห็นภาพเท่าไหร่ เพราะ SmashingMagazine ใช้ tool อื่นๆ ร่วมด้วยเยอะมาก
เว็บถึงได้ไวขึ้นมากขนาดนั้น ผมตามไม่ค่อยทัน

จนกระทั่งเร็วๆ นี้ได้กลับมา~~ยุ่งวุ่นวายกับ~~<em>ปรับปรุง</em>ระบบ deploy ของบล็อกนี้อีกครั้ง
ก็เลยนึกถึงชื่อ Netlify และได้ลองใช้งานดู

### Netlify ดีอย่างไร

นอกจากการที่เราไม่ต้องเช่า server เองแล้ว Netlify ก็ยังมีฟีเจอร์พวกนี้ให้

- โฮสต์ website ของเราบน cloud server ที่ทำหน้าที่เป็น CDN ได้ด้วย
- รองรับ custom domain พร้อมทั้งใช้ HTTPS ได้ฟรีจาก Let's Encrypt
- มีระบบ continuous deployment มาให้ใช้ฟรีๆ (deploy อัตโนมัติ, เก็บ snapshot ของการ deploy แต่ละครั้งไว้ได้, มี log ให้ดูย้อนหลัง)
- มีระบบ optimize static assets (JS/CSS/รูปภาพต่างๆ) ให้อัตโนมัติทุกครั้งที่ deploy
- ใช้งานฟีเจอร์ที่เคยต้องมี backend อย่าง sign up/login หรือ form ได้
- ใช้งาน [AWS Lambda functions](https://www.netlify.com/docs/functions/) ได้อีกต่างหาก

นอกจากนี้ยังมีฟีเจอร์อื่นๆ ที่กำลังพัฒนาอีกมากมาย.. ทั้งหมดนี้ใช้งานได้โดยที่เราไม่ต้องมี server เป็นของตัวเองเลย .. ทั้งหมดนี้ ฟรี (มีเวอร์ชั่นที่ไม่ฟรีด้วย ก็จะได้ฟีเจอร์อื่นๆ สำหรับ website scale
ใหญ่ๆ มาให้อีกเยอะแยะ)

ด้านการเลือกใช้ GitHub Pages นั้นมีข้อดีในเรื่องความง่าย เพราะทุกอย่างจบได้ใน GitHub
แต่ก็ต้องเสียแต้มเรื่อง performance ที่คุมไม่ได้บางอย่างออกไป

ส่วนอีกด้านหนึ่งคือการเช่า server และโฮสต์ website เอง มีข้อดีที่เราควบคุมปัจจัยได้แทบทุกอย่าง แต่ข้อเสียก็คือต้องมานั่งเซ็ตเอง ปรับเอง อาจไม่ใช่เรื่องสนุกสำหรับทุกคน

ผมมองว่า Netlify นั้นอยู่ตรงกลางระหว่างสองด้าน ได้ทั้งความง่ายของการ deploy
โดยที่ไม่เสียแต้มเรื่อง performance ในขณะที่ทุกอย่างเป็นระบบ auto อยู่
และได้ฟีเจอร์เกี่ยวกับการจัดการ server มาให้ได้ใช้บ้าง โดยที่เราไม่ต้องจัดการดูแล server เอง

---

## ลงมือย้ายบล็อกจาก DigitalOcean server ไปยัง Netlify

_(ใช้คำว่า "ลงมือ" เพื่อให้อ่านแล้วดูเหมือนจริงจังไปงั้นแหละ จริงๆ แล้ว process ไม่มีอะไรมาก ตรงไปตรงมา
ผมก็มั่วๆ ไปจนจบ)_

### Flow คร่าวๆ

ถ้าเทียบกับ[ของเดิม](https://armno.in.th/2018/08/16/blog-automated-deployment/#flow-%E0%B8%84%E0%B8%A3-%E0%B8%B2%E0%B8%A7%E0%B9%86)ก็จะเหลือเพียง 2 ขั้นตอน

1. **เขียน content ในไฟล์ markdown**
2. **Push code ไปที่ GitHub Repo**
3. ~~SSH ไปที่ server ของ DigitalOcean ที่ใช้เป็น web server ของบล็อกนี้อยู่~~
4. ~~Pull code จาก GitHub~~
5. ~~รัน $ hugo command เพื่อให้ Hugo build (generate) ไฟล์ markdown เป็นไฟล์ HTML~~

ที่เหลือก็คือ จิบกาแฟแล้วให้ Netlify รัน Continuous Deployment ซึ่งส่วนมากแค่เดินไปทำกาแฟ ยังไม่ทันได้กินก็ deploy เสร็จแล้ว *(แหม่ ก็อวยเกิน!)*

เริ่มเลย

### 1. สร้าง Project ใน Netlify

ก่อนอื่นก็ต้องสร้างบัญชีของ Netlify ก่อน จากปุ่ม Sign Up ในหน้าแรก ผมเลือก Sign Up จาก GitHub account เลย ง่ายดี

{{< picture-lazy src="images/00-create-account.png" alt="สมัครบริการ Netlify">}}

หลังจากนั้นก็สร้าง project ใน Netlify โดยเลือก repo จาก GitHub .. ของผมก็เลือก `armno/blog`

{{< picture-lazy src="images/00-create-new-site-in-netlify.png" alt="สร้างโปรเจ็ค Netlify">}}

ขั้นตอนต่อไปคือการเลือก branch ที่จะให้ deploy (`master`) พร้อมทั้งใส่ build command (`hugo`)
Publish directory คือ folder output จาก build command (`public` กรณีที่ใช้ค่า default ของ Hugo)

{{< picture src="images/01-just-hugo-as-build-script.png" alt="ระบุ build command และ publish directory">}}

แค่ 3 ขั้นตอน Netlify ก็จะสร้าง site ใหม่พร้อม URL ที่ไม่ซ้ำกับชาวบ้านมาให้ (`cranky-bohr-0e8ecb`, เปลี่ยนทีหลังได้) แล้วเริ่ม build และ deploy ทันที

แน่นอนว่าต้องพังก่อน.. จะให้ build ผ่านตั้งแต่ครั้งแรกเลย ชีวิตก็ดูจะง่ายเกินไป

{{< picture-lazy src="images/02-first-deploy-attempt-fails-of-course.png" alt="build แรกก็พังเลย">}}

ข้อดีของการมีระบบ CD แบบนี้คือ เรากดเข้าไปดู log ของการ build หรือ deploy แต่ละครั้งได้ ว่าเกิดปัญหาอะไรขึ้น
(build log เป็น public ใครจะ[กดเข้าไปดู](https://app.netlify.com/sites/armno/deploys/5b769bc9c96592071cef82df)ก็ได้ครับ)

ใน log (ยาวมาก) บอกว่า error code คือ 255

{{< picture-lazy src="images/02-failed-logs.png" alt="logs ของ build แรกที่พัง">}}

ด้านบนของ build log จะมี link ["Debugging guide"](https://www.netlify.com/docs/build-gotchas/?_ga=2.119989133.400480420.1534516918-2113870570.1534516918) เตรียมไว้รอเราอยู่แล้ว กดเข้าไปดูได้เลย

{{< picture-lazy src="images/02-debugging-guide.png" alt="สำหรับ build ที่ fail มี debugging guide เตรียมไว้ให้">}}

ค้นหาคำว่า `255` ก็เจอจริงๆ คำแนะนำสำหรับ error code 255 คือลองเซ็ต version ของ Hugo ผ่านทาง Environment Variable ให้ตรงตามที่เราใช้จริงดู

{{< picture-lazy src="images/03-fix-failed-build-hugo-instruction.png" alt="คำแนะนำสำหรับ error code 255 คือลองเซ็ต version ของ Hugo ให้ตรงตามที่เราใช้ดู">}}

Environement variables จะอยู่ที่หน้า **Project > Deploy Settings > Continuous Deployment**
ผมใช้ Hugo เวอร์ชั่น `0.46` ก็ตั้งค่า `HUGO_VERSION` ตามนั้น ตามที่ debugging guide แนะนำ

{{< picture-lazy src="images/04-fix-failed-build-by-putting-hugo-version-env-variable.png" alt="ตั้งค่าเวอร์ชั่นของ Hugo ผ่าน environment variable">}}

จากนั้นในหน้า Project กดปุ่ม **Trigger Deploy** เพื่อ deploy ซ้ำอีกครั้ง

{{< picture-lazy src="images/05-first-deploy-success.png" alt="build ผ่านแล้ว">}}

เมื่อ deploy สำเร็จ เราก็จะได้ URL ของ website บน Netlify มา (ตัวเขียวๆ ข้างบน) กดเข้าไปดูได้เลย

{{< picture-lazy src="images/06-new-site-deployed-with-netlify-generated-url.png" alt="website บน Netlify">}}

---

### 2. ตั้งค่า Custom Domain Name

เมื่อ website ใหม่พร้อมแล้วบน Netlify ขั้นตอนต่อไปก็คือการตั้งค่า domain name
ให้ชี้ไปที่ Netlify แทนที่ DigitalOcean ของที่เดิม

เลือก **Add custom domain** จากเมนู Domain Management

{{< picture-lazy src="images/07-add-custom-domain.png" alt="add custom domain บน Netlify">}}

จากนั้นก็ใส่ domain name เข้าไป

{{< picture-lazy src="images/08-added-custom-domain.png" alt="add custom domain บน Netlify">}}

ในตอนแรก domain name ของเราจะยังไม่ได้แก้ DNS มันก็จะขึ้น warning แบบนี้ก่อน
ซึ่งตอนนี้ DNS (Domain Name Server) ยังเป็นที่ DigitalOcean และยังชี้ไปที่ IP Address ของ server ที่ DigitalOcean อยู่
(ในกรณีของผมที่จด domain name กับ [DotArai.com](https://dotarai.com) คือ **DotArai Registra > DigitalOcean DNS > DigitalOcean server**)

{{< picture-lazy src="images/09-waiting-for-dns-propagation.png" alt="DNS settings ที่ยังไม่ถูกต้่อง">}}

Netlify มีให้เลือก 2 ทาง คือ

**แบบแรก**: ตั้งค่า `ALIAS` หรือ `ANAME` record ให้ชี้มาที่ server หรือ IP address ของ Netlify
โดยที่เรายังใช้ DNS ของเราเองอยู่

{{< picture-lazy src="images/10-dns-config-instructions.png" alt="DNS settings ที่ Netlify แนะนำ">}}

**แบบที่สอง**: ใช้ Netlify เป็น DNS (ของผมก็จะเป็น **DotArai Registra > Netlify DNS > Netlify server** แทน)
ผมเลือกทางนี้เพราะจะได้จัดการทุกอย่างได้ใน Netlify เลย

{{< picture-lazy src="images/11-use-netlify-as-dns.png" alt="เลือกใช้ Netlify DNS">}}

พอกด Set up Netlify DNS ก็จะพบขั้นตอนการเปลี่ยนค่า name server ของ domain ของเรา

{{< picture-lazy src="images/12-dns-instructions-to-put-in-dotarai.png" alt="Netlify DNS">}}

ผมจด domain name ที่ DotArai.com ก็ต้องเข้าไปแก้ไขค่า name server ที่ DotArai ให้เป็นค่าใหม่

{{< picture-lazy src="images/14-updated-dns-dotarai.png" alt="เปลี่ยน name servers ให้ชี้ไปที่ Netlify DNS">}}

ในระหว่างนี้ต้องรอให้ค่า name server ของเราเปลี่ยนค่า (DNS propagation) ปกติแล้วจะไม่เกิน 24 ชั่วโมง
ของ DotArai ค่อนข้างไว ในถึง 1 ชั่วโมงก็อัพเดทแล้ว

พอไม่ได้ใช้ DNS เดิมแล้ว ก็ต้องค่า SSL/TLS certificate ใหม่ ให้มาใช้ของ Netlify แทน

{{< picture-lazy src="images/15-ssl-waiting-for-dns-propagation.png" alt="ระหว่างรอ dns">}}

ระหว่างที่รอก็ไป revoke certificate ของเดิมบน DigitalOcean server, ลบ virtual host,
หรือแม้แต่ลบ domain name ของจาก account ของ DigitalOcean ได้เลย

พอ DNS อัพเดทเสร็จสมบูรณ์แล้ว Netlify ก็จะขึ้น status ว่าเราได้ใช้ Netlify DNS แล้ว

{{< picture-lazy src="images/18-dns-successfully-setup-on-netlify.png" alt="dns อัพเดทเสร็จแล้ว">}}

SSL/TLS certificate ก็เช่นกัน

{{< picture-lazy src="images/17-dns-verification-after-update-dns.png" alt="dns อัพเดทเสร็จแล้ว">}}

ถึงตอนนี้เท่ากับว่า armno.in.th ได้ไปอยู่บน Netlify อย่างสมบูรณ์แล้ว

---

### 3. ตั้งค่า Redirect

sub-domain ที่สร้างขึ้นมาอัตโนมัติโดย Netlify `cranky-bohr-0e8ecb.netlify.com` ยังใช้งานได้อยู่
เราสามารถตั้งค่าให้ sub-domain นี้ redirect ไปหา custom domain ของเราได้
เพื่อที่ search engine จะได้ไม่ index URL ของเราที่ sub-domain ของ Netlify แล้วมองว่าเป็น duplicated content
กับ domain หลัก

วิธีการตั้งค่า redirect บน Netlify นั้นก็ไม่มีขั้นตอนยุ่งยาก เพียงสร้าง text file ชื่อ `_redirects`
ที่กำหนด redirect rules ไว้ แล้วเก็บไฟล์ไว้ในโฟลเดอร์ `static` ก็เสร็จเรียบร้อย
_(Netlify ให้กำหนด redirect ได้ค่อนข้างละเอียด อ่านเพิ่มเติมได้ใน [Doc](https://www.netlify.com/docs/redirects/) ครับ)_

{{< picture-lazy src="images/19-redirect-rules.png" alt="ตั้งค่า redirect rules ใน Netlify">}}

### 4. เปิดใช้ Assets Optimization

ในขั้นตอนการ deploy เราสามารถตั้งค่าให้ Netlify optimize assets เบื้องต้น ให้เราแบบอัตโนมัติได้เลย
พร้อมกับนำไปวางไว้บน CDN แล้วทำให้เว็บเราเรียก assets จาก CDN แทน สะดวกมากมาย

{{< picture-lazy src="images/20-automated-assets-optimization.png" alt="เปิดใช้งาน assets optimization">}}

## สรุป

{{< picture-lazy src="images/quick-perf-audit.png" alt="ผล audits">}}

ประทับใจกับ Netlify มากตั้งแต่ใช้งานครั้งแรก นอกจากได้ฟีเจอร์ทาง CD/automation มาเพียบแล้ว
UI ของ Netlify ก็ทำมาสวยงามและใช้งานง่ายมาก เป็น product ที่ทำมาดี ขอเชียร์ครับ
ใช้ได้ดีกับทั้ง website scale เล็กๆ ไปถึงใหญ่ๆ ได้เลย

ตอนนี้ workflow ของการอัพเดทบล็อกเรียบง่ายแบบที่ต้องการแล้ว
เป็นการบังคับตัวเองทางอ้อมว่าต้องโฟกัสกับการเขียนให้มากกว่าเดิม เขียนให้บ่อยกว่าเดิมได้แล้ว 😅

Happy Blogging ครับ

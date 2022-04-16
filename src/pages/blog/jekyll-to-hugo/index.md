---
title: 'จาก Jekyll สู่ Hugo'
date: 2018-03-24T16:40:16+07:00
url: /2018/03/24/jekyll-to-hugo
description: บันทึกเรื่องราว การเปลี่ยน static site generator ของบล็อกนี้ จาก Jekyll เป็น Hugo ครับ
tags:
  - Static Site Generator
  - Hugo
  - Jekyll
  - Blog
thumbnail: images/hugo-rebuild-time.png
---

เมื่อ 5 ปีก่อน ผมเปลี่ยน blog engine ของบล็อกนี้[จาก WordPress เป็น Jekyll](https://armno.in.th/2013/03/09/from-wordpress-to-jekyll/) แล้วก็ใช้ยาวเรื่อยมา
มีย้ายโฮสต์จาก GitHub Pages มาที่ DigitalOcean อยู่หนึ่งครั้ง แต่ก็ยังใช้ Jekyll อยู่
จนเมื่อ 2-3 เดือนก่อน ก็ตัดสินใจเปลี่ยน static site generator จาก Jekyll เป็น Hugo ครับ
โดยที่เปลี่ยนเฉพาะตัว tool ที่ผมใช้เอง และพยายามรักษาหน้าตาของบล็อกให้ได้เหมือนเดิมมากที่สุด

## ปัญหาของ Jekyll

ปัญหาของ Jekyll ที่เคยเห็นคนเขาบ่นกันคือมันช้า (เวลา re-generate กับ build) ยิ่งมี content เยอะๆ จะยิ่งช้ามาก
บล็อกผมไม่ได้มี content เยอะมากมายขนาดนั้น ประมาณ 100+ กว่าโพสต์ เวลา jekyll ต้อง re-generate
แต่ละครั้งก็ใช้เวลาประมาณ 2-3 วินาที ดูแล้วไม่ช้าเท่าไหร่ แต่มันก็ไม่ถือว่าเร็ว

อีกอย่างหนึ่งกวนใจนิดๆ ก็คือ ด้วยความที่ jekyll นั้นเขียนด้วยภาษา ruby
ถึงแม้การใช้ jekyll นั้นไม่จำเป็นต้องรู้ภาษา ruby แต่ก็ต้องมีความคุ้นเคยกับ tool ของมันอยู่บ้าง

..ซึ่งผมไม่มี พอเปลี่ยนไปใช้เครื่องอื่น หรือต้อง clone project ใหม่ ก็จะมานั่งงงทุกครั้งว่า

- ต้อง setup dev enviroment ยังไงบ้าง
- ต้อง run command ไหนบ้าง, อะไรก่อน-หลัง
- ทำไมบางเครื่องต้อง sudo แต่อีกเครื่องไม่ต้อง
- ทำไมคราวก่อนมันไม่มี error แต่คราวนี้มี
- ฯลฯ

เลยคิดว่า เราเป็น JavaScript developer ก็ต้องใช้ static site generator ที่เขียนด้วย JavaScript สิ (มีความเป็นสาวก)

## เริ่มใหม่กับ Hugo

เว็บไซต์ [staticgen.com](https://www.staticgen.com/) เป็นเว็บที่บอกว่าจริงๆ แล้ว โลกของเรามี static site generator มากแค่ไหน
ส่วน[บทความของ Netlify](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/) ก็คัดมาแต่ตัว top 10 ซึ่งก็เป็นประโยชน์กับการตัดสินใจมาก

ที่สะดุดตาตอนเลือกมีอยู่ 2 ตัว คือ [**Hugo**](https://gohugo.io) (เขียนด้วย Go) กับ [**Hexo**](https://hexo.io/) (เขียนด้วย JavaScript) นอกจากชื่อจะคล้ายกันแล้ว document ก็ยังคล้ายกันด้วย
Hugo ดูจะมีชื่อชั้นเหนือกว่าเล็กน้อย ในแง่ของความนิยม แต่ผมก็เลือก Hexo เพราะว่า เรามีความศรัทธาใน JavaScript..

แต่หลังจากปลุกปล้ำกับ hexo อยู่ 3 วัน ถึงสำนึกได้ว่า คิดผิดแล้วไอ้น้อง

นอกจาก syntax ของ template ที่ชวนปวดหัวแล้ว ผมยังเจอ bug และ error ประหลาดๆ ของ hexo อยู่เรื่อยๆ มักจะเป็น error ที่ไม่ได้เกี่ยวกับสิ่งที่พังจริงๆ
เช่น เขียน template ผิด แต่ error ดันไปโผล่ที่ไฟล์ sass เป็นต้น สุดท้ายผมก็เลยล้มเลิกความตั้งใจ ถอยกลับไปที่เดิม แล้วเริ่มต้นใหม่กับ Hugo

![Hugo Logo](images/hugo-logo.png)

Hugo เป็น static site generator ที่ชูจุดเด่นในด้านความเร็ว และความยืดหยุ่นในการใช้งาน
ผมลองอ่าน document ดูแล้ว ละเอียดกว่าของ Hexo เยอะ เลยลองสร้าง blog ใหม่ด้วย hugo CLI
โชคดีที่มี command [`$ hugo import jekyll`](https://gohugo.io/commands/hugo_import_jekyll/)
ทำให้สามารถ import content เดิมที่่เป็นของ jekyll เข้ามาในบล็อกใหม่ที่ทำด้้วย hugo ได้โดยที่แทบจะไม่ต้องแก้อะไรเลย

ส่วน theme นั้น เริ่มทำใหม่จาก 0 ต้องใช้เวลาอ่านเรื่องโครงสร้าง theme ของ hugo อยู่บ้าง แต่พอได้่ลองทำก็ไม่ได้ติดปัญหาอะไร
ไม่ได้ทำ design หรือ layout อะไรใหม่ ก็เอาของเดิมมาทั้งหมด แค่ต้องวางให้ถูกที่ถูกทางครับ

## สิ่งที่เปลี่ยนไป

ในมุมของของผู้อ่านนั้นไม่มีอะไรเปลี่ยนแปลงเลย แต่สำหรับผมที่เป็นผู้เขียนแล้วถือว่าสะดวกขึ้น
การ setup dev environment ก็ต้องลงแค่ `hugo` ตัวเดียวเท่านั้น ใน Mac ลงผ่าน homebrew ได้เลย
ส่วนใน Linux ก็ใช้แค่ binary file ที่โหลดได้จาก GitHub ไฟล์เดียวก็ใช้ hugo ได้ทันที ชอบมาก

เรื่องความเร็วในการ rebuild นั้นทิ้งห่าง jekyll อย่างไม่เห็นฝุ่น จากเดิม 2-3 วินาที เหลือแค่ 0.1-0.2 วินาที

![เวลาในการ rebuild ของ Hugo นั้นเร็วมากๆ](images/hugo-rebuild-time.png)

<del>ข้อเสียก็ใช่ว่าจะไม่มี นั่นคือ Hugo ไม่ support css-preprocess อย่าง Sass ที่เคยใช้ ก็ต้องเปลี่ยนไปใช้ CSS ธรรมดา
น่าจะเป็นความตั้งใจของผู้พัฒนาที่จะไม่ใส่ feature นี้ลงไป แต่ก็มีคนทำ tool ตัวอื่นขึ้นมา ทำให้ใช้ Sass กับ hugo ได้ครับ
(ตามอ่านได้ที่ [issue#16](https://github.com/gohugoio/hugo/issues/16))</del> ตอนนี้สามารถใช้ ​Sass ใน Hugo ด้วย [Hugo Pipes](https://gohugo.io/hugo-pipes/scss-sass/) ได้แล้วครับ

สำหรับใครที่สนใจ hugo อยากลองดูบ้าง บล็อกของ Sara Soueidan: [Migrating from Jekyll+Github Pages to Hugo+Netlify](https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/) บันทึกเรื่องราวไว้ละเอียดดีมาก แนะนำครับ

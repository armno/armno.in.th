---
title: "เลิกใช้ Google Analytics"
date: 2020-01-18T14:46:32+07:00
url: /2020/01/18/removing-google-analytics
description: เลิกใช้งาน Google Analytics และเปลี่ยนไปใช้ Netlify Analytics แทน
thumbnail: /images/removing-google-analytics/netlify-analytics-screenshot.png
tags:
- web
- blog
- analytics
- tracking
- netlify
categories:
- web development
- personal
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

ผมใช้ Google Analytics ตั้งแต่วันแรกที่เขียนบล็อก (ปี 2007, ตอนนั้นใช้ WordPress)
ข้างล่างนี้เป็นสถิติบางส่วนจากปี 2019

<Picture
  src="/images/removing-google-analytics/audience-overview-2019.png"
  alt="Audience Overview ปี 2019"
  caption="Audience Overview จาก Google Analytics ปี 2019"
/>

<Picture
  src="/images/removing-google-analytics/pageviews-2019.png"
  alt="Pageviews ปี 2019"
  caption="Pageviews จาก Google Analytics ปี 2019"
/>

<Picture
  src="/images/removing-google-analytics/geo-2019.png"
  alt="ข้อมูล user แบ่งตามประเทศ ปี 2019"
  caption="ข้อมูล user แบ่งตามประเทศ ปี 2019 เพิ่งจะมี traffic จากต่างประเทศเข้ามาช่วงปลายปี ที่เริ่มเขียนบล็อกเป็นภาษาอังกฤษ"
/>

ปี 2020 นี้ ได้เอา Google Analytics tracking ออกจากบล็อกนี้แล้วครับ

---

สำหรับบล็อกนี้ ผมต้องการแค่จะรู้ว่าข้อมูลสถิติพื้นฐานทั่วไป

- วันๆ หนึ่งมีคนเข้าบล็อกเท่าไหร่
- บล็อกที่เขียนตอนใหม่มีคนเข้ามาอ่านบ้างไหม
- โพสต์ไหนที่ได้รับความนิยม (เพื่อเป็นแนวทางในการเขียนโพสต์ต่อๆ ไป)
- keyword ที่ถูก search แล้วมาเจอบล็อก มีอะไรบ้าง
- visitor มากจากไหนบ้าง ใช้ browser อะไร

ตอนเริ่มทำบล็อกในปี 2007 Google Analytics ก็ตอบโจทย์ได้พอดี และติดตั้งได้ง่ายมากผ่าน WordPress plugin
แถมมีข้อมูลสถิติต่างๆ ให้ดูใน dashboard ของ WordPress ได้เลย

แต่เอาเข้าจริงๆ ผมก็ไม่ได้ทำอะไรกับข้อมูลพวกนั้น นอกจากดูเล่น
และเอาไว้เผื่อมีคนถามว่า แต่ละวัน หรือแต่ละเดือน มีคนเข้าอ่านบล็อกเท่าไหร่
จะได้ตอบได้ (ซึ่งก็ไม่เคยมีใครถามนะ) ไม่ได้ใช้ประโยชน์มากเท่าที่คิด

## ปัญหาของ Google Analytics

_(ต้องออกตัวก่อน ว่าเป็นปัญหาของผมนะ อาจจะไม่ได้เป็นปัญหาสำหรับทุกคน)_

Google Analytics ตอนนี้ เทียบกับเมื่อ 12 ปีก่อนแล้ว ถือว่าพัฒนาไปไกลมาก
ผมเองตามไม่ทันมานานแล้ว มีฟีเจอร์มากมายที่ผมไม่รู้จัก และใช้ไม่เป็น 😅

และมีเหตุผลที่ผมเอา Google Analytics ออกจากบล็อกอีก 2 ข้อใหญ่ๆ ด้วยกัน

1. tracking script ซึ่งเป็น JavaScript ถูกบล็อกจากได้ ad-blocker หรือจากบาง browser (เช่น Brave) ทำให้ข้อมูลที่ได้อาจไม่ตรงกับที่เป็นจริง
2. **user privacy** - ผมไม่รู้ว่าตอนนี้ Google Analytics (แอบ)เก็บข้อมูลอะไรเกี่ยวกับคนที่เข้ามาอ่านบล็อกบ้าง นอกเหนือจากที่จำเป็น

ซึ่ง 2 ข้อนี้ก็เป็นประเด็นสำคัญ ไม่เฉพาะกับ Google Analytics เท่านั้น
แต่ยังรวมถึง 3rd-party script อื่นๆ ที่ทำออกมาให้ใช้ฟรีๆ
แลกกับการเก็บข้อมูลของคนที่เข้ามาอ่านบล็อกของเรา

ในความ "ฟรี" นั้นก็มีราคาที่ต้องจ่าย ผมไม่อยากให้คนที่เข้ามาอ่านบล็อกนี้ฟรีๆ ต้องมา "จ่าย" (เป็นข้อมูล) อะไรให้ใครโดยไม่จำเป็น

## ทางเลือกอื่น

พบ combo ที่พอจะตอบโจทย์ได้ก็คือ Google Search Console กับ Netlify Analytic

- [Google Search Console](https://search.google.com/search-console/about) (ชื่อเดิมคือ Google Webmaster Tools) เก็บข้อมูลคนเข้าเว็บผ่าน Google Search, จำนวนหน้าที่ Google index ได้, keyword ที่เข้ามา ส่วนวิธีการเปิดใช้งาน ต้องการการยืนยันความเป็นเจ้าของเว็บหรือโดเมน ผ่านการอัพเดท DNS record
- [Netlify Analytics](https://www.netlify.com/products/analytics/) แสดงข้อมูล Pageviews, Unique visitors, URL ที่มีคนเข้าเยอะๆ แค่มีเว็บอยู่บน Netlify และมีตังค์จ่าย 💵 ก็ใช้ได้เลย

ทั้ง 2 service รวมกัน ถึงไม่เท่า Google Analytics แต่ก็น่าจะเพียงพอแล้วที่มีข้อมูลเท่าที่ผมอยากดู
และไม่ต้องอาศัย JavaScript ให้ทำงาน

<Picture
  src="/images/removing-google-analytics/search-console.png"
  alt="google search console screenshot"
  caption="ตัวอย่างข้อมูล search keyword ที่ได้จาก Google Search Console"
/>

### Netlify Analytics

Netlify Analytics มีจุดเด่นคือไม่ต้องติดตั้งอะไรเลย
แค่กด activate จาก dashboard ของ Netlify ก็มีข้อมูลพร้อมให้ดู ข้อมูลแม่นกว่าพวก JavaScript-based tracking

<p class="message--warning">
จุดด้อยคือ ข้อมูลที่มีให้ดู จำกัดอยู่แค่ไม่กี่อย่าง เช่น page views, unique visitors, top pages
ยังไม่ละเอียดพอ และบางอยากแยกดูตามช่วงเวลายังไม่ได้
</p>

ตอนนี้ราคาอยู่ที่ <strong>$9 ต่อเดือนต่อเว็บ</strong>
ซึ่งผมว่าแพงไปนิดเมื่อเทียบกับฟีเจอร์ที่มีให้ แต่หวังว่าจะมีฟีเจอร์เพิ่มอีกในอนาคตครับ

<Picture
  src="/images/removing-google-analytics/netlify-analytics-screenshot.png"
  alt="netlify analytics screenshot"
  caption="Screenshot ของ Netlify Analytics"
/>

- ปล. &mdash; จากข้อมูลสถิติ โพสต์ที่มีคนเปิดดูเยอะที่สุด 4 ใน 10 อันดับแรก เป็นโพสต์ที่เขียนเกี่ยวกับเรื่องดาราศาสตร์ ตั้งแต่ปี 2007
- ปล. 2 &mdash; โพสต์ที่คนเปิดดูเยอะที่สุด และมีคนค้นมาเจอทุกวัน คือโพสต์นี้:
[ความแตกต่างระหว่างดาวฤกษ์ - ดาวเคราะห์](https://armno.in.th/2007/11/03/stars-and-planets-differences/)

---
title: "ทำ Keyboard Plate จากแผ่น Acrylic"
date: 2019-08-26T20:35:49+07:00
url: /2019/08/26/custom-acrylic-keyboard-plate
description: บันทึกการลองทำ plate ของ mechanical keyboard จากแผ่น acrylic หนา 2mm
tags:
- mechanical keyboard
- build
- hardware
- acrylic
categories:
- hobby
thumbnail: /images/acrylic-plate/on-keyboard.jpg
cover: /images/acrylic-plate/on-keyboard.jpg
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

ความเดิมจากตอนที่แล้ว: [Mechanical Keyboard จาก DZ60RGB](https://armno.in.th/2019/07/19/mechanical-keyboard-mark-6/)
ใช้ plate ที่เป็นอลูมิเนียม ในเคสที่เป็นอลูมิเนียมอีกที เสียงที่ได้จากอลูมิเนียมก็จะแหลมๆ หน่อย เป็นเสียงจากโลหะ

วันหนึ่งด้วยความสงสัยว่า ถ้าเปลี่ยน plate เป็นวัสดุอื่นที่ไม่ใช่อลูมิเนียม (ไม่ใช่โลหะ)
เสียงจากคีย์บอร์ดจากเปลี่ยนไปยังไงบ้าง มากน้อยแค่ไหน เสียงจะเบาลงบ้างหรือเปล่า (เพื่อนจะบ่นน้อยลงไหม)

ลองหาดูในเน็ต นอกจากอลูมิเนียมแล้ว ก็มีทั้งวัสดุที่เป็นโลหะอย่างเช่น สเตนเลส (stainless steel),
ทองเหลือง (brass)(แพง!) หรือวัสดุที่ไม่ใช่โลหะอย่าง แผ่นอะคริลิค, โพลีคาร์บอเนต (PC), ไปจนถึงคาร์บอนไฟเบอร์

สนใจแผ่นอะคริลิค เพราะเป็นวัสดุที่หาได้ง่ายตามร้านเครื่องเขียนหรือร้านวัสดุก่อสร้าง ราคาไม่แพง (เมื่อเทียบกับวัสดุอื่นๆ)
ครั้งนี้เลยอยากลองทำเอง ไม่ได้สั่งซื้อแบบสำเร็จรูปเหมือนครั้งก่อนๆ
ถือเป็นโปรเจ็คทดลองด้วย

## หาแบบ

จะทำ plate ได้ก็ต้องมีแบบ (plan)

ใช้ online tool ที่ชื่อว่า [Plate & Case Builder](http://builder.swillkb.com/) (รู้จักจากเว็บ [68keys.io](https://68keys.io/))
เป็นเว็บที่ทำมาเพื่อออกแบบ plate กับ case ของ mechanical keyboard โดยเฉพาะ
โดยที่ใส่ข้อมูลในเว็บแล้วมันจะ generate ไฟล์ CAD มาให้เลย พร้อมขนาดที่ถูกต้องเป๊ะๆ ไม่ต้องวาดเอง

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/plate-case-builder.png"
  alt="หน้าเว็บ plate & case builder"
  ratio="16-10"
  caption="หน้าเว็บ Plate & Case Builder (http://builder.swillkb.com/)"
/>

plate ที่ผมอยากได้ ก็คือ plate ขนาด 60% layout ANSI เหมือนกับของเดิมที่ใช้อยู่
วิธีการสร้างไฟล์ CAD ก็คือ

1. ไปที่ [keyboard-layout-editor.com](http://www.keyboard-layout-editor.com/#/) เลือกเมนู Preset > Default 60%
2. เลือกแท็บ Raw data ด้านล่างของ keymap แล้ว copy code ทั้งหมดในช่อง Raw data มา
3. ไปที่ [builder.swillkb.com](http://builder.swillkb.com/) เอา code ที่ copy มาใส่ในช่อง Plate layout พร้อม option ตามที่อยากได้คือ
  * Switch Type เลือกแบบแรก `MX` (Classic MX Cutout)
  * Stablizer Type เลือก `Cherry + Costar`
  * Case Type เลือก `Poker - 60%`

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/kle.png"
  alt="keyboard-layout-editor.com"
  caption="1. เลือก Default 60%"
/>

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/copy.png"
  alt="เลือกแท็บ Raw data ด้านล่างของ keymap แล้ว copy code ทั้งหมดในช่อง Raw data มา"
  caption="2. copy Raw Data"
/>

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/builder.png"
  alt="3"
  caption="3. เอา Raw Data มาใส่ในช่อง plate layout"
/>

เสร็จแล้วก็กดปุ่ม `Draw My CAD!!!` ข้างล่าง

จากนั้นในแท็บ CAD Output ก็จะได้ไฟล์ออกมาให้เลือกโหลดได้ทั้ง SVG, DXF หรือ EPS
ซึ่งไฟล์นี้สามารถปริ๊นต์ลงกระดาษ A4 ขนาดเท่าของจริงได้เลย

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/cad-output.png"
  alt="3"
  caption="output ดาวน์โหลดไฟล์เก็บไว้ได้"
/>

<p class="message--warning">
  หากอยากวาดแบบ CAD เอง แนะนำบทความ <a href="https://matt3o.com/anatomy-of-a-keyboard/" target="_blank" rel="noopener">Anatomy of a keyboard</a>
  ของท่าน Matt3o เขียนขนาดของส่วนประกอบต่างๆ ไว้ละเอียดดี
</p>

## หาแผ่นอะคริลิค

ก่อนไปหาซื้อก็ต้องหาความหนาก่อน เพราะแผ่นอะคริลิคมีหลายขนาดความหนา

ลองกูเกิ้ลหาด้วย keyword ว่า "mechanical keyboard plate thickness"
ก็เจอ[กระทู้ในตำนานใน Deskthority](https://deskthority.net/viewtopic.php?f=7&t=5761&start=)
พบว่า plate ต้องหนาประมาณ 1.5mm และก็เป็นความหนามาตรฐานของ plate ทั่วไปที่มีขายตามเว็บต่างๆ

ขับรถไปร้านเครื่องเขียนใกล้ที่ทำงานที่ร้าน [เชียงใหม่สมุดลานนา](https://goo.gl/maps/axqByJHXpj6cjDrU9) ตรงข้าม ม. ราชภัฏเชียงใหม่
ที่ร้านมีความหนา 1mm, 2mm, 3mm แต่ไม่มี 1.5mm ผมก็เลยเลือกแผ่น 2mm มา ได้สีดำ
ขนาดกว้าง 30x60cm ราคา 135 บาท

## ตัดแผ่นอะคริลิค

ได้แผ่นอะคริลิคและแบบ CAD ที่ได้มาจากขั้นตอนแรกแล้ว ก็ไปหาร้านที่รับตัดแผ่นอะคริลิคด้วยเครื่อง Laser Cut

ใกล้ที่ทำงานมีร้านรับทำอยู่พอดี (ร้านรับทำป้ายโฆษณาและอักษรโลหะ) ลองสอบถามและให้ร้านเปิดไฟล์ที่ผมมีดูแล้ว ร้านบอกว่าทำได้

ผมมีแผ่นอะคริลิกไปเอง ร้านก็จะคิดเฉพาะค่าตัด คิดเป็นนาที นาทีละ 25 บาท
รอรับของประมาณ 2-3 วัน (เวลาตัดจริงไม่นาน แต่น่าจะต้องรอคิว)
plate ของผม ร้านคิดค่าตัด 250 บาท ต่อ 1 แผ่น

ร้านตัดได้ละเอียดดีมาก ขนาดตรงตามในแบบ รอยตัดก็คมและเนียนดี

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/acrylic-plate.jpg"
  alt="plate อะคริลิค"
  ratio="16-9"
/>

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/plate-2.jpg"
  alt="plate อะคริลิค"
  ratio="16-9"
/>

<p class="message--warning">
  ในคณะวิศวะฯ มช. เองก็มี<a href="http://me.eng.cmu.ac.th/new/?page_id=608">เครื่อง Laser Cut และ CNC</a> บริการสำหรับบุคคลภายนอกด้วย แต่ผมเองยังไม่ได้ไปลองใช้บริการครับ
</p>


## ทดลองใช้งาน

การใช้งานก็เหมือน plate อลูมิเนียมทุกอย่าง ขนาดพอดีกับเคสอลูมิเนียม 60% ที่ใช้อยู่
ใส่ switch และ stabilizer ได้ตรงตามช่องทุกตัว
เพียงแต่ต้องระวังมากขึ้นกว่าแผ่นอลูมิเนียม เพราะแผ่นอะคริลิคมันบอบบางกว่า

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/on-keyboard.jpg"
  alt="plate อะคริลิค"
  ratio="16-9"
/>

เรื่องเสียงนั้น รู้สึกว่าเปลี่ยนไปนิดหน่อย คิดว่าเสียงหลักๆ ยังมาจากเคสซึ่งก็ยังเป็นโลหะอยู่

## สรุป

ค่าใช้จ่าย

- แผ่นอะคริลิค 2mm ขนาด 30x60cm - 135 บาท (จริงๆ ตัด plate ได้ประมาณ 5 แผ่น)
- ค่าตัด 250 บาท
- รวม **385 บาท**

เป็นโปรเจ็คทดลองที่ประสบความสำเร็จดี แค่ไม่พัง และได้ของมาใช้ก็ถือว่าสำเร็จแล้ว

คราวหน้าอยากจะลองใช้แผ่นอะคริลิคทำส่วนประกอบแบบอื่นๆ ดูบ้าง
มีอะไรให้ลองเล่นอีกเยอะเลย

<Picture
  wrapper-class="semi-full"
  src="/images/acrylic-plate/full-with-keycaps.jpg"
  alt="60% custom mechanical keyboard"
  ratio="16-9"
  caption="Keycaps: MDA Bigbone"
/>

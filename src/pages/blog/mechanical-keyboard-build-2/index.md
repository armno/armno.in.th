---
title: "บันทึกการทำ Custom Mechanical Keyboard ภาค 2"
date: 2019-05-01T22:38:57+07:00
url: /2019/05/01/custom-mechanical-keyboard-build-2
cover: images/mark4-3.jpg
thumbnail: images/mark4-3.jpg
description: custom mechanical keyboard อีก 2 ตัวล่าสุดที่ทำ จากแผงวงจร DZ60 เป็น keyboard ขนาด 60%
tags:
  - Mechanical Keyboard
  - Build
  - Hardware
categories:
- hobby
layout: '../../../layouts/PostLayout.astro'
---

เมื่อเกือบ 2 ปีที่แล้ว ผมได้ลองทำ [mechanical keyboard ขนาด 60%](https://armno.in.th/2017/08/20/building-custom-mechanical-keyboard/) อันแรก
หลังจากนั้นก็ได้เรียนรู้อะไรมากขึ้นเกี่ยวกับ mechanical keyboard
ลองผิดลองถูกไปเรื่อยก็สนุกดี

เริ่มจากการเปลี่ยน case จากพลาสติกเป็นอลูมิเนียม

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/kbdfans-5-degree-case.jpg" alt="case อลูมิเนียมจากร้าน kbdfans" >}}

เปลี่ยน keycap หลายๆ profile ข้างล่างนี้ลองใช้ DSA keycaps ที่ปุ่มจะสูงเท่ากับทุกแถว พิมพ์ง่ายดีเหมือนกัน

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/dsa-keycaps.jpg" alt="blank DSA keycaps" >}}

รื้อบอร์ดใหม่เพื่อเปลี่ยน plate หรือเปลี่ยน switch ก็มี

{{< picture-lazy wrapper-class="semi-full lazy-wrapper" ratio="3-2" src="images/gateron-clears.jpg" alt="ลองใช้ switch Gateron Clears" >}}

การทำ custom mechanical keyboard นั้น นอกจากมันสนุกดีแล้ว มันเป็นกิจกรรมที่เปลืองเงินพอสมควร เพราะมักจะมีของโผล่มาเราเสียเงิน "อยากลอง" เป็นประจำ

ความอยากลองนี่แหละทำให้ keyboard ที่ทำอันแรกมันพัง พังตอนที่ผมรื้อ switch
ออกจากบอร์ดแล้วทำให้แผงวงจรเสียหายจากความซุ่มซ่ามและไม่ระวัง

พอ keyboard พัง ก็เลยต้องทำอันใหม่

ถึงตอนนี้ผม(พยายาม)ทำ mechanical keyboard มา 5 อันแล้ว ทั้งหมดเป็นขนาด 60% ถ้าเรียกชื่อตามชุดเกราะของ Iron Man ก็คงประมาณนี้

1. **Mark 1** _(GH60 Satan + Gateron Brown)_ (พัง) - อันแรกที่ทำ ทำแผงวงจรพังตอนรื้อบอร์ดเพื่อเปลี่ยน switch
2. **Mark 2** _(GH60 Satan + Gateron Clear)_ ตอนนี้ยังอยู่ดี ให้เพื่อนที่ทำงานใช้อยู่
3. **Mark 3** _(YD60BLE)_ (พัง) - เป็นแผงวงจรที่มี bluetooth ตั้งใจจะทำ wireless mechanical keyboard แต่ผมก็ทำแผงวงจรเสีย เละไม่เป็นท่า เลยล้มโครงการไป
4. **Mark 4** _(DZ60 + Kailh Box Red)_ ตัวที่ใช้อยู่ปัจจุบัน
5. **Mark 5** _(DZ60 + Gateron Brown)_ ทำให้ภรรยาใช้

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark1-mark2.jpg" alt="mark 1 กับ mark 2 ที่ทำมาเป็นฝาแฝดกัน" >}}

โพสต์นี้จะเป็นรายละเอียดของตัว Mark 4 กับ Mark 5 ครับ
ส่วน Mark 2 นั้นเหมือน Mark 1 แทบทุกอย่างยกเว้น switch ก็อ่านได้จาก[ตอนที่แล้ว](https://armno.in.th/2017/08/20/building-custom-mechanical-keyboard/)ได้เลย

-----

## GH60 to DZ60

ยังคงยึดมั่นกับการทำ keyboard ขนาด 60% อยู่ หลังจากที่ได้ใช้ GH60 มาแล้วก็เลยลองหา PCB ขนาด 60% รุ่นอื่นดูบ้าง
เจอวิดิโอของช่อง Chokkan [Why You Shouldn't Buy a GH60 in 2018](https://www.youtube.com/watch?v=1oNtulI7deg)
ใน comments มีคนแนะนำ PCB **DZ60** อยู่พอสมควร

<div class="media-youtube">
{{< youtube 1oNtulI7deg >}}
</div>

สิ่งที่ DZ60 ต่างไปจาก GH60 คือ DZ60 มีไฟ LED ติดมาใต้แผง PCB, support layout เยอะกว่า, และก็ใช้ [**QMK Firmware**](https://qmk.fm/) แทนที่จะเป็น TMK Firmware แบบใน GH60

ซึ่งสำหรับผมแล้ว QMK Firmware นี่คือทีเด็ดเลย พัฒนามาจาก TMK แต่
[documents](https://docs.qmk.fm/#/) ดีกว่ามาก แล้วยังมีแอพ [QMK Configurator](https://config.qmk.fm) กับ [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases)
ให้ใช้งานได้ง่ายๆ อีกด้วย

ไฟ RGB ของ DZ60 มีหลายโหมด หลายสี ทั้งสีเดียว หลายสีผสมกับ แต่ก็ต้องใช้ case แบบใสด้วยถึงจะมองเห็นครับ ประมาณนี้ครับ

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/dz60-rgb.jpg" alt="ไฟ RGB Underglow ของ DZ60" >}}

-----

## Mark 4 (มาร์กโฟร์) {#mark-4}

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/mark-iv.jpg" alt="custom mechanical keyboard mark 4" >}}

เจ้า Mark 4 นี่ทำไว้ใช้เองครับ สเป็คก็คือ

- PCB: **DZ60** ($38)
- Stabilizers: **Cherry-style stabilizers** (~$15)
- Case: **KBDFans 5° Aluminum Case** ($88)
- Plate: **Aluminum Plate สีส้ม (ANSI)** (~$19)
- Switches: **Kailh Box Red**, Gateron Browns, Gateron Yellows, Gateron Clears (~$20)
- Keycaps: **MAXKEYS Foundation** (วัสดุ ABS, SA Profile) ($99)

ทั้งหมดหาได้จากร้าน [KBDFans](https://kbdfan.cn) หรือหาใน [Aliexpress.com](https://www.aliexpress.com/) ก็ได้ครับ

Layout เป็น Poker Layout 60% มาตรฐานทั่วไป

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark4-layout.jpg" alt="Layout ของ Mark 4" >}}

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark4-3.jpg" alt="custom mechanical keyboard mark 4" >}}

### PCB: DZ60

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-layers.jpg" alt="ส่วนประกอบของ Mark 4" >}}

DZ60 Rev 2.0 เวอร์ชั่นที่ผมเลือกเป็นพอร์ต USB Type-C คิดว่าจะเข้ากันได้ดีกับ [Macbook Pro 2016](https://support.apple.com/kb/SP747?locale=en_US) เครื่องที่ใช้ที่ออฟฟิศ (ที่มีพอร์ต USB Type-C แค่ 2 พอร์ต 🙄) จะได้ใช้สาย USB Type C ทั้งสองหัวได้เลย จะได้ไม่ต้องใช้ adapter

แต่พอได้มาลองใช้งานจริง ใช้สาย Type C แบบสองด้าน (C-to-C ตัวอย่างเช่น สายชาร์จของ Macbook Pro) นั้นไม่สามารถใช้งานได้กับ Macbook Pro 2016 ได้

ต้องใช้สาย USB Type C to Type A แล้วใช้ adapter convert จาก Type A เป็น Type C อีกทีแบบนี้ ಠ_ಠ

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/usb-adapter.jpg" alt="ต่อสาย USB จาก DZ60 Rev 2.0 ต้องใช้ adapter USB A-to-C" >}}

ปัญหานี้เกิดมาจาก DZ60 **เวอร์ชั่น 2.0** ไม่มี chip ที่จำเป็นสำหรับ USB Type C
ให้สามารถทำงานโดยที่ไม่ต้องใช้ adapter

ซึ่งปัญหานี้**ถูกแก้แล้วใน DZ60 เวอร์ชั่นใหม่ Rev 3.0** ที่ถูกอัพเดทให้สามารถใช้งาน USB Type C to Type C ได้แล้ว อย่างไรก็ตาม มันเป็นการอัพเดทที่ hardware ทำให้ผมที่ใช้ DZ60 เวอร์ชั่น 2.0 อยู่นั้นก็ต้องทนใช้แบบมี adapter ต่อไป หรือไม่ก็ต้องซื้อ PCB เวอร์ชั่นใหม่ที่อัพเดทแล้ว

แอบเซ็งนิดๆ เหมือนกัน แต่ก็ได้บทเรียน เป็นอีกข้อที่ต้องคำนึงถึง เวลาทำ custom mechannical keyboard ว่าต้องเช็ค technical specs ให้ละเอียด โดยเฉพาะของที่ออกมาใหม่ๆครับ

### Case: KBDFans 5° Aluminum Case

เคสอลูมิเนียมที่เลือกใช้เป็นรุ่น 5° ของ KBDFans สีดำ ออกแบบมาเหลี่ยมๆ

ผมตัดแผ่นโฟมกันกระแทกที่มากับกล่อง keycaps รองลงไปในเคสก่อนวางแผ่น PCB เพื่อซับแรงและลดเสียงจากการพิมพ์
เทคนิคนี้ลอกมาจาก [TaeKeyboards](https://youtu.be/A5BiQ-QgYDY?t=309)

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/foam-pad.jpg" alt="รองด้วยแผ่นโฟมกันกระแทก ในเคส ใต้ PCB" >}}

น้ำหนักเฉพาะเคสก็ 800 กว่ากรัมแล้ว ประกอบเสร็จแล้วคีย์บอร์ดเล็กๆ นี่หนักตั้ง 1.2kg

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/keyboard-weight.jpg" alt="น้ำหนักรวมของ mark 4 อยู่ที่ประมาณ 1.2kg" >}}

เทียบกับเคสพลาสติกแล้ว
เคสอลูมิเนียมทำให้คีย์บอร์ดดูแพงกว่า หนักกว่า เสียงจากการพิมพ์ก็เปลี่ยนไปนิดหน่อยด้วย
รูปทรงดูเทอะทะไปนิด แต่ก็พอรับได้

### Switches: Kailh Box Red

ใช้ Kailh Box Red เป็นหลัก แต่เนื่องจากผมซื้อมาแค่ 30 ตัวกะว่าเอามาลองเล่นๆ ส่วนที่ขาดก็เลยต้องใช้ Gateron ที่มีเหลืออยู่ที่บ้าน ก็เลยดูมั่วๆ ไปหน่อย 😅

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark4-switches.jpg" alt="switch ที่ใช้ใน mark 4" >}}

ตอนแรกใส่ Gateron Yellows ในแถวบนด้วย แต่พอลองใช้ไปแล้วรู้สึกว่าต้องใช้แรงกดมากกว่าปกติ
เพราะนิ้วต้องเอื้อมไกล + keycaps แถวบนสุดจะสูงกว่าเพื่อน พิมพ์ไม่ติดอยู่บ่อยๆ ก็เลยเปลี่ยนเป็น Gateron Browns ที่เบากว่า Yellows แทน

ส่วน Stabilizers นั้น ตอนแรกก็ใช้ของที่เป็นชุดมากับ plate ซึ่งเป็นของจีนถูกๆ
ภายหลังได้เปลี่ยนเป็น Cherry stab แบบ plate mount ของแท้

เทียบกันแล้วของแท้ดีกว่าเยอะ
มั่นคงแข็งแรงกว่า เสียงเงียบและหนักแน่นกว่าด้วย ถ้าเป็นไปได้ซื้อ Cherry stab ของแท้ดีกว่าครับ
ซื้อของปลอมเสียดายเงินเปล่า

ผมซื้อจาก KPRepublic (ไม่แนะนำ) กับ [CandyKeys](https://candykeys.com/category:stabilizers) แล้วเอาจริงๆ ถ้าดูด้วยตาเปล่า ผมแยกแทบไม่ออกว่าอันไหนของแท้หรือของก๊อป
พอลองใส่กับ keycap แล้วฟังจากเสียงมันจะรู้ได้เอง

### Keycaps: MAXKEYS Foundation

ส่วนที่ผมชอบที่สุดของเจ้า Mark 4 ก็คือ keycaps ชุดนี้แหละครับ: [MAXKEYS Foundation](https://kbdfans.cn/collections/maxkey/products/in-stockmaxkey-foundation-sa-keycaps-set?variant=12912749674554) วัสดุ ABS Doubleshot, SA profile

profile หรือ รูปทรงของ keycaps ที่ต่างกัน ก็ให้ความรู้สึกในการพิมพ์ที่ต่างกันออกไป ก่อนหน้านี้ได้ผมลองใช้ keycaps ทั้ง Cherry profile, OEM profile, กับ DSA profile มาบ้างแล้ว

ส่วน SA profile นั้นชั่งใจอยู่นาน เพราะความสูงของ keycaps ที่มากกว่าทุกแบบที่เคยใช้มา กลัวว่านิ้วจะล้าตอนพิมพ์
กับราคาที่แพงเอาเรื่องเหมือนกัน ทั้งเซ็ตอยู่ที่ $99 เป็นเซ็ตใหญ่

แค่ราคา keycaps ก็แพงกว่า keyboard อันแรกที่ทำทั้งอันแล้ว (แต่โลกนี้ก็ยังมีชุด keycaps ที่แพงกว่านี้อีกเยอะะะครับ)

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/keycaps-profile.jpg" alt="SA profile จะสูงกว่าเพื่อนหน่อยๆ" >}}

แต่สุดท้ายก็ยอมให้กับความสวยแบบคลาสสิคของ SA profile keycap ที่ดูแล้วเหมือน keyboard สมัยก่อน
ส่วน MAXKEYS นั้นก็มีหลายคนรีวิวว่าเป็นเจ้าที่ทำ keycaps ออกมาได้เนี้ยบดี ก็เลยขอลองดู

{{< picture-lazy wrapper-class="semi-full" src="images/foundation-keycaps.jpg" alt="MAXKEYS Foundation SA profile Keycaps" >}}

พอได้มาลองใช้งานจริง รู้สึกชอบมาก วัสดุคุณภาพดีกว่า blank PBT keycaps ที่เคยใช้มา สัมผัสเนียนมือ อักษรคมกริบ ส่วนความสูงนั้นไม่เป็นปัญหาเลย รู้สึกพิมพ์สนุกดีครับ ไม่เสียดายเงินเลย

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark4-on-desk.jpg" alt="custom mechanical keyboard mark 4 บนโต๊ะทำงาน" >}}

ส่วน key mapping นั้นก็เหมือนเดิมกับ mark 1 ครับ

`LAYER 0`:

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-layer-0.png" alt="keymap layer 0 ของ mark 4" >}}

`LAYER 1`: เพิ่มปุ่มเพิ่ม/ลดแสงหน้าจอลงไป (ตรงเลข 1 กับ 2) เป็นปุ่มที่ผมใช้บ่อย

{{< picture-lazy wrapper-class="semi-full" src="images/mark4-layer-1.png" alt="keymap layer 1 ของ mark 4" >}}

-----

## Mark 5 (มาร์กไฟฟ์) {#mark-5}

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark5.jpg" alt="custom mechanical keyboard mark 5 ของนีโม่" >}}

ไม่รู้โดนเพื่อนป้ายยามารึเปล่า วันหนึ่ง[ภรรยา](https://nemo.in.th)ผมก็บอกว่า อยากได้ mechanical keyboard ไว้ทำงานบ้าง ทำให้หน่อยอันนึง เอาเล็กๆ แบบของผมนี่แหละ

สเป็คที่เธอขอมา คือ ขอปุ่มลูกศรด้วย (บนล่างซ้ายขวา) แล้วก็ขอแบบปุ่มมีตัวอักษร ไม่เอาโล่งๆ แบบ blank keycaps ที่ผมเคยใช้

ผมยังไม่เคยทำ custom mechanical keyboard ขนาด 60% ที่มีปุ่มลูกศรมาก่อน เลยถือโอกาสทำเป็นโปรเจ็คทดลองด้วยเลย

ดูจาก layout ที่ support ของ DZ60 บวกกับลองหาในเน็ตดูแล้ว สามารถทำคีย์บอดที่มีลูกศรครบทั้งบน, ล่าง, ซ้าย, และขวาได้
โดยที่ยังคงขนาด 60% ไว้ได้อยู่ แลกกับปุ่มด้านขวาล่างที่ต้องเปลี่ยนแปลง layout นิดหน่อย

สเป็คของเจ้า Mark 5 คือ

- PCB: **DZ60 Rev 3.0** เวอร์ชั่น USB Type-C: เป็นเวอร์ชั่น 3.0 ที่ซัพพอร์ต USB Type C to Type C แล้ว แผงวงจรเป็นสีดำ
- Case: [**Aluminum Low Profile**](https://www.aliexpress.com/item/32678424526.html?storeId=2230037&spm=2114.12010612.8148356.4.770718f6Hz0tbf): เป็นอลูมิเนียมเหมือนกัน แต่เป็นแบบ low profile ที่ขนาดเล็กกะทัดรัดกว่าและเตี้ยกว่า เวลาวาง plate ลงไปจะสูงเท่ากันพอดี ปุ่มของคีย์บอร์ดมันเลยดูลอยๆ ขึ้นมา

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/mark5-case.jpg" alt="case low profile ของ mark 5" >}}

- Plate: [**Stainless Steel** (plate B)](https://www.aliexpress.com/item/32827595666.html?storeId=2230037&spm=2114.12010612.8148356.4.515f7df4yO1wOo): plate ทีเป็น stainless steel เป็นแบบขัดผิวมาแต่ไม่ได้ทำสี **น้ำหนักหนักกว่า alu เยอะพอสมควร**
- Switches: **Gateron Browns, Yellows** หรือเรียกอีกอย่างว่า switch เหลือที่บ้าน นั่นเอง 😅 (แอบเอา Kailh Box Red มาใส่ 1 อัน)

{{< picture-lazy wrapper-class="semi-full" ratio="16-9" src="images/mark5-switches.jpg" alt="switch แบบต่างๆที่ใช้ใน mark 5" >}}

- Keycaps: Black PBT, DSA Profile: เธอบอกว่าไม่ค่อยชอบเท่าไหร่ ชอบแบบของ MAXKEYS มากกว่า

{{< picture-lazy wrapper-class="semi-full" ratio="3-2" src="images/mark5-with-sa-keycaps.jpg" alt="ลองเอา foundation keycaps ใส่กับ mark 5 ดู" >}}

### Layout

เปรียบเทียบ layout กันระหว่างเจ้า Mark 5 (บน) กับ poker layout ทั่วไป (ล่าง)

poker layout แถวล่างสุด (กรอบสีชมพู) มี 4 ปุ่มขนาด 1.25U แถวที่ 2 ถัดขึ้นมา (กรอบสีฟ้า) เป็นปุ่ม Shift ขวา ยาว 2.75U _(1U เป็นหน่วยความกว้างของ keycap เท่ากับ 1 ตัวอักษร)_

{{< picture-lazy wrapper-class="semi-full" src="images/mark5-layout-compare.jpg" alt="เทียบ layout กันระหว่าง mark 4 กับ mark 5" >}}

ส่วนรูปบนคือของ Mark 5 ที่พอต้องมีปุ่มลูกศร ก็เลยต้องแบ่งแถวล่างสุดออกเป็น 5 ปุ่มขนาด 1U ก็จะได้ความยาวเท่ากันพอดี

แถวที่ 2 นั้นเนื่องจากไม่สามารถแบ่งปุ่ม shift ขวาให้เป็น 1U ทั้งหมดแบบลงตัวได้ (ปุ่ม shift กว้าง 2.75U) ก็เลยต้องเอาพื้นที่ของปุ่ม <kbd>/</kbd> ไปรวมกับปุ่ม ​<kbd>shift</kbd> ขวาเป็นขนาด 3.75U แล้วแบ่งเป็น 1.75U, 1U, 1U ตามลำดับ

และต้องใช้ keycap ของปุ่ม shift ที่เล็กกว่า คือขนาดแค่ 1.75U ไว้ตรง <kbd>/</kbd> แทน เพราะไม่งั้นถ้าเอาปุ่ม 1U ไปใส่ มันจะเหลือที่ว่างข้างๆ ระหว่างปุ่มนิดนึง
พูดง่ายๆ ก็คือ เอา keycap ของปุ่มขนาด 1.75U ไปวางไว้บน switch ของปุ่ม <kbd>/</kbd> นั่นเอง แต่ตัวปุ่มมันเองยังทำงานเป็น <kbd>/</kbd> เหมือนเดิม

อาจจะดูแปลกไปหน่อย แต่ก็ใช้งานได้เหมือนกัน การจะให้ปุ่มไหนกดออกมาเป็นอะไรนั้น เซ็ตได้ที่ firmware ของ keyboard และไม่ได้ขึ้นอยู่กับ keycap ครับ และสำหรับคนที่พิมพ์ได้โดยที่ไม่ต้องมองแป้น ก็ไม่น่าจะเป็นปัญหาเท่าไหร่

### Keymap

คีย์บอร์ดตัวนี้ทำมาเพื่อใช้กับ Windows เป็นหลัก keymap ของ Mark 5 เลยต่างไปจากของผมนิดหน่อย

`LAYER 0`:

{{< picture-lazy wrapper-class="semi-full" src="images/mark5-layer-0.png" alt="layer 0 ของ Mark 5" >}}

`LAYER 1`: ใส่ปุ่ม function keys: <kbd>F1</kbd> ถึง <kbd>F12</kbd> กับปุ่ม <kbd>printscreen</kbd> ที่เธอต้องใช้บ่อยๆ เข้าไปด้วย

{{< picture-lazy wrapper-class="semi-full" src="images/mark5-layer-1.png" alt="layer 1 ของ Mark 5" >}}

ภรรยาบอกว่าคีย์บอร์ดตัวนี้ใช้งานได้ดี .. แต่เวลาเล่น DotA จะลำบากหน่อยเพราะกดสกิลยาก (ต้องกด 2 ปุ่ม)

ถือเป็นโปรเจ็คทดลองที่สนุกดีเหมือนกันครับ

-----

## Mark 6?

ตอนนี้ยังไม่มีแผนจริงจัง อยากลองทำตามแบบ [68keys.io](https://68keys.io/) ดูบ้าง หรือไม่ก็คีย์บอร์ดเล็กๆ อย่าง 40% หรือ 20% numpad น่าสนใจดีเหมือนกัน :)

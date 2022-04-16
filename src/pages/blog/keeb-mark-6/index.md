---
title: "Mechanical Keyboard จาก DZ60RGB"
date: 2019-07-19T11:31:05+07:00
url: /2019/07/19/dz60rgb-pcb-reviews
description: ทำ mechanical keyboard จาก DZ60RGB PCB ที่เป็น Hot-swappable ด้วย
thumbnail: images/build.jpg
tags:
- mechanical keyboard
- build
- hardware
categories:
- hobby
---

ได้ Mechanical Keyboard มาเพิ่มอีก 1 ตัว จาก PCB DZ60RGB จากร้าน KBDFans
รวมกับชิ้นส่วนที่ถอดมาจากคีย์บอร์ด [Mark 5 ที่ทำให้ภรรยา](https://armno.in.th/2019/05/01/custom-mechanical-keyboard-build-2/#mark-5)
เพราะเธอได้ยึด[คีย์บอร์ดของผม](https://armno.in.th/2019/05/01/custom-mechanical-keyboard-build-2/#mark-4)ไปใช้เป็นที่เรียบร้อยแล้ว...

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/build.jpg"
  alt="mechanical keyboard mark 6"
  ratio="3-2"
  caption="Mark 6"
>}}

[DZ60RGB](https://kbdfans.com/collections/60/products/dz60rgb-ansi-mechanical-keyboard-pcb) รุ่นที่ผมได้มาเป็น layout แบบ ANSI ก็คือมาตรฐาน 60% ทั่วไป
และก็เป็นแบบ hot-swappable slot ด้วย ก็คือไม่ต้องบัดกรีเพื่อติด switch เข้าไปกับแผ่น PCB แต่จะมีช่องเพื่อให้เสียบขา switch เข้าไปแทน

## สเป็ค

- PCB: DZ60RGB - ANSI Layout, USB Type-C, QMK Firmware
- Case: Aluminum Low Profile
- Switches: Gateron Yellow, Kailh Box Red
- Stabilizers: Cherry PCB-mounted
- Plate: Aluminum (Black)
- Keycaps: PBT, DSA Profile

ตอนแรกผมลองทำแบบไม่ใช้ plate ก็คือเสียบ switch กับ keycaps ลองไปบน PCB เลย
ซึ่งมันก็ทำได้นะครับ ช่อง Kailh hot-swap ล็อกขา switch ได้ดีในระดับหนึ่ง
คือไม่ได้ล็อก switch อย่างแน่นหนึบ แต่ก็ไม่ถึงกับ<del>หลุดติดมือออกมาตอนพิมพ์</del>
หลุดครับ บ่อยด้วย

แต่ก็เจอปัญหาเดิมคือ [วางปุ่มไม่ตรง](https://armno.in.th/2019/06/08/60-percent-mechanical-keyboard-with-arrows/#%E0%B8%9F-%E0%B8%99%E0%B9%80%E0%B8%9A-%E0%B8%A2%E0%B8%A7)
แบบตัวก่อนหน้าที่เคยทำ
switch Gateron Yellow ที่ใช้เป็นแบบ 5-pin ก็ยังโยกได้อยู่บ้าง
แต่ถ้าใช้แบบ 3-pin ก็จะโยกเยอะกว่า
ยิ่งไม่ได้บัดกรีแบบนี้ด้วย ถึงตอนแรกจะวางไปตรงๆ แล้ว ใช้ไปๆ อาจจะบิดเบี้ยวได้อยู่

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/top-view.jpg"
  alt="รูปตอนวาง switch ลงไปบนบอร์ด"
  ratio="3-2"
  caption="สังเกตว่าตัว E, D และเกือบทุกปุ่มในแถวบนนั้นไม่ตรงกันเท่าไหร่ เพราะกดลงไปไม่สุด"
>}}

ก็เลยลองทำใหม่ ใส่ plate เข้าไปด้วย ก็จะช่วยล็อก switch ให้เข้าที่เข้าทางได้มากขึ้น
plate แบบ ANSI layout มีเหลือที่บ้านตัวสุดท้ายพอดี

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/with-plate.jpg"
  alt="เรียง switch ใหม่โดยใช้ plate ด้วย"
  ratio="3-2"
  caption="เรียง switch ใหม่โดยใช้ plate ด้วย"
>}}

### Gateron Yellows กับ DSA Keycaps

Gateron Yellows เป็น linear switch ที่มี actuation force ที่ 50g
ผมซื้อมาลองใช้ แต่เก็บไว้นานแล้วเพราะตอนนั้นรู้สึกว่ามันหนักไป ชอบเบาๆ แบบ red (45g) มากกว่า

แต่ได้เอามาลองใช้กับคีย์บอร์ดตัวนี้แล้วก็ทำให้เปลี่ยนความคิด จากเดิมที่ไม่ค่อยชอบทั้ง Gateron Yellows หรือ DSA Keycaps แต่พอเอามาใช้คู่กับกลับรู้สึกว่าพิมพ์สนุกขึ้นมาก

ผมเดาว่าอาจจะเป็นเพราะความสูงของ DSA keycaps ที่เตี้ยกว่า SA หรือ OEM profile ที่เคยใช้
ทำให้ไม่รู้สึกว่าต้องออกแรงมากในการกดพิมพ์ปกติ (และ bottom out ด้วย)
ส่วน feedback ของ Gateron Yellows ก็หนึบๆ สำหรับผมแล้วใช้คู่กับ DSA keycaps เข้ากันดีเลยครับ

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/leds.jpg"
  alt="ไฟ LED ที่ติดมากับ PCB เลย"
  ratio="16-9"
  caption="ไฟ LED ที่ติดมากับ PCB เลย แต่ละปุ่มมีไฟ LED ของตัวเอง ปกติจะปิดไว้เพราะไฟมันแยงตา"
>}}

## ไม่ต้องบัดกรี แล้วดีไหม?

การใช้ PCB แบบ hot-swappable มีข้อดีคือ ไม่ต้องบัดกรี switch ลงไปกับแผ่น PCB
แค่เสียบลงไปก็ใช้งานได้เลย จะเปลี่ยน switch ก็ง่าย ดึงออกมาได้เลย

แต่ที่ต้องระวังก็คือ ตอนเสียบลงไปใน slot ต้องเล็งดีๆ ให้ขา switch ลงไปในช่องจริงๆ
ไม่งั้นขา switch อาจจะพับงอได้ แก้ไม่ยาก ก็คือดึงออกมาแล้วดัดขา แล้วเสียบลงไปใหม่

อีกอย่าง เวลากด switch ลงไปก็ต้องกดลงไปให้สุดๆ ด้วย ไม่งั้นพอใส่ keycap แล้วปุ่มอาจจะสูงไม่เท่ากัน
ของผมเกิดจากการใช้ switch ที่เคยบัดกรีมาแล้ว แล้วมีเศษตะกั่วบัดกรีติดที่ขา switch
ก็ต้องเอาออกก่อน

จากที่ลองใช้มาสักพัก ผมว่า PCB แบบนี้เหมาะกับ switch แบบ 5-pin
เพราะล็อกได้แน่นกว่า แต่ก็ควรจะมี [switch puller](https://www.google.com/search?tbm=isch&source=hp&biw=1440&bih=803&ei=hUCUXpDNKNi7rQH84ZPgBA&q=keyboard+switch+puller&oq=keyboard+switch+puller&gs_lcp=CgNpbWcQAzICCAAyBggAEAUQHjoFCAAQgwE6BggAEAgQHkorCBcSJzBnODlnMTAyZzg3Zzg2ZzgzZzgzZzg1ZzgyZzgyZzExNGc4N2c4NEodCBgSGTBnMWcxZzFnMWcxZzFnMWcxZzFnNWc1ZzNQlwlYhB1giiFoAHAAeACAAfIBiAGAD5IBBjIxLjAuMZgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ved=0ahUKEwjQo56smuXoAhXYXSsKHfzwBEwQ4dUDCAY&uact=5) ติดบ้านไว้ด้วยครับ ไม่งั้นดึงออกมายาก

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/side.jpg"
  alt="ถ่ายจากด้านข้าง"
  ratio="3-2"
>}}

## ปัญหากับ Aluminium Low-Profile case

case ที่ผมใช้กับ PCB ตัวนี้คือ aluminium low-profile 60%
เจอปัญหาคือ hot-swap socket ของตัว `H` ใต้ PCB
มันไปชนกันรูใส่สกรูตรงกลาง case

และด้วยความที่ case มันเป็นโลหะนำไฟฟ้า เลยทำให้เกิด short-circuit
กดปุ่มเดียวออกมาหลาย key เช่นผมกด `y` ก็จะเป็น `6yh6yh6yh6yh6yh6yh6yh6yh6yh`

วิธีแก้แบบบ้านๆ ของผมก็คือ **เอาเทปกาวมาแปะ**ตรงที่มัน short
ทั้งหลัง PCB กับใน case เวลาขันสกรูติด PCB ลงบน case
ก็ขันแค่พอให้อยู่ ไม่ให้ตึง &ndash; ถ้าขันแน่น hot-swap socket ตรงนั้น
จะไปบี้กับ case จนหัก

แต่ยังไงแรงกดจากการพิมพ์ ก็อาจจะทำให้เกิดการสัมผัสกัน จนเทปขาดได้อยู่ดีนะ
วิธีนี้จึงอาจไม่เหมาะกับคนที่รักและต้องการดูแล PCB ดีๆ สักเท่าไหร่ 😅

{{< image
  src="images/back.jpg"
  alt="แก้ short-circuit ด้วยเทปกาว"
  ratio="3-2"
  caption="แก้ short-circuit ด้วยเทปกาว"
  width="1200"
>}}

-----

โดยรวมๆ แล้วข้อดีข้อเสียก็น้ำหนักพอๆ กัน ดีตรงที่สะดวก แต่ความแข็งแรงคงไม่เท่ากับแบบที่ต้องบัดกรี
สำหรับผมแล้วมันเหมาะเอาไว้มาลอง switch แบบต่างๆ มากกว่าเอามาใช้งานเป็นตัวหลัก
พอถููกใจแล้วค่อยเอา switch ไปใช้กับบอร์ดจริงครับ

หรือเอาไว้เป็นข้ออ้างกับตัวเองเพื่อที่จะซื้อ switch แบบอื่นๆ มาเพิ่มนั่นเอง 😅

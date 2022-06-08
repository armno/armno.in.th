---
title: "ลองทำ mechanical keyboard แบบไม่ใช้ plate"
pubDate: 2019-06-08T15:51:22+07:00
url: /2019/06/08/60-percent-mechanical-keyboard-with-arrows
cover-image: /images/60-percent-mechanical-keyboard-with-arrows/cover.jpg
thumbnail: /images/60-percent-mechanical-keyboard-with-arrows/after-fixes.jpg
description: ลองแก้ layout ของ mechanical keyboard ขนาด 60% ที่ใช้อยู่ ให้มีปุ่มลูกศร (arrows keys) พร้อมกับ split spacebar
tags:
- Mechanical Keyboard
- Build
- Hardware
categories:
- hobby
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

หลังจากได้ลองทำ [custom mechanical keyboard ขนาด 60% แบบมี arrow keys](https://armno.in.th/2019/05/01/custom-mechanical-keyboard-build-2/#mark-5) ให้ภรรยาใช้
ได้ปริศนามาคิดต่อว่า สามารทำ keyboard ขนาด 60% ที่มี arrow keys แบบไม่ต้องเสียสละปุ่ม <kbd>/</kbd> ให้ทับกับปุ่ม <kbd>right shift</kbd> ได้ไหม

![ปุ่ม shift ขวาของ Mark 5](/images/60-percent-mechanical-keyboard-with-arrows/mark5-shift.jpg)

คำตอบก็คือ สามารถทำได้ แต่ต้องลดขนาดของปุ่ม <kbd>left shift</kbd> จาก 2.25U ให้เหลือ 2U
สั้นลงนิดนึง แล้วจะทำให้พื้นที่ของปุ่ม <kbd>right shift</kbd> เพิ่มขึ้นและใส่ปุ่ม 1U จำนวน 2 ปุ่มได้

(นึกภาพไม่ออก ลองดู layout ของ [CoolerMaster SK621](https://www.coolermaster.com/catalog/peripheral/keyboards/sk621/) ดูก็ได้ครับ)

ก็เลยจะใช้ keyboard ที่มีอยู่แล้ว คือ [Mark 4](https://armno.in.th/2019/05/01/custom-mechanical-keyboard-build-2/#mark-4) มาโมฯ ดู

ข้อจำกัดก็คือ แผ่น plate ที่ผมใช้นั้น มี layout ตายตัวเพราะมันถูกเจาะรูมาพอดีแล้ว ไม่สามารถเอาปุ่ม arrow keys ไปยัดตรงที่กรอบไว้ในรูปข้างล่างได้ ส่วนปุ่ม <kbd>left shift</kbd>
ก็ถูกจำกัดไว้ที่ 2.25U เท่านั้น

<Picture  ratio="3-2" src="/images/60-percent-mechanical-keyboard-with-arrows/plate-layout.jpg" alt="ANSI Layout ของ plate ที่ใช้" />

> plate คือแผ่นที่อยู่ตรงกลางระหว่าง switch กับแผงวงจร (PCB) ของ keyboard ถูกเจาะรูมาเพื่อให้วาง switch ได้พอดี ช่วยเพิ่มความแข็งแรงให้ keyboard แล้วก็ยังเป็นตัวกำหนด layout ของ keyboard ด้วย

<Picture  ratio="3-2" src="/images/60-percent-mechanical-keyboard-with-arrows/mark4-layers.jpg" alt="ส่วนประกอบแต่ละชั้นของ Mark 4" />

เมื่อมันเป็นข้อจำกัด ก็เลยจะลองเอา plate ออก แล้วทำ keyboard แบบไม่ใช้ plate ดู ลองหาข้อมูลดูแล้ว พบว่าก็มีคนทำอยู่เหมือนกัน แต่อาจไม่เป็นที่นิยมเท่าไหร่

ว่าแล้วก็ลงมือเลย

## รื้อ switch ออก

เริ่มจากการ desolder ถอด switch ทั้งหมดออกจาก PCB ก่อน (ไม่ชอบเท่าไหร่แต่ก็ต้องทำครับ)

<Picture  ratio="3-2" src="/images/60-percent-mechanical-keyboard-with-arrows/remove-all-switches.jpg" alt="ถอด switch ทั้งหมดออกจาก PCB" />

หลังจากเอา switch ออกหมดแล้ว ก็ลอง test PCB กับเว็บ [keyboardchecker.com](http://keyboardchecker.com/) ดูอีกทีว่าพังไหม โชคดีที่ไม่พัง ก็ใส่ stabilizer ลงไปได้เลย

<Picture  ratio="3-2" src="/images/60-percent-mechanical-keyboard-with-arrows/test-pcb.jpg" alt="ทดสอบ PCB หลังจากเอา switch ออก" />

จากนั้นก็บัดกรี switch ลงไปบน PCB ทีละตัว

<Picture  ratio="16-9" src="/images/60-percent-mechanical-keyboard-with-arrows/put-switches-on.jpg" alt="บัดกรี switch ลงไปบน PCB" />

ถึงแม้ว่า switch ที่ผมมีเป็นแบบ PCB-mount (5-pin) แต่ก็พบกว่าการที่ไม่มี plate มาคอยพยุง switch ทำให้บัดกรียากกว่าเดิมเยอะเลย เพราะระหว่างที่ถืออุปกรณ์บัดกรีอยู่ ก็ต้องใช้อีกมือพยายามกด switch ให้แนบชิดกับแผ่น PCB ก่อนตะกั่วจะแข็ง ค่อนข้างทุลักทุเลครับ

## Split Spacebar

ในระหว่างทำไปอยู่ก็นึกได้ว่า อยากลองทำ split spacebar ด้วย ก็เลยลองด้วยเลย DZ60 ก็ support split spacebar อยู่แล้ว

ตรง spacebar จากปกติที่มี switch ตัวเดียวก็ต้องแยกเป็น 3 ตัว
แล้วก็ต้องเพิ่ม 2U stabilizer อีก 2 ตัวด้วย รวมเป็นทั้งหมด 5 ตัว (แต่จะไม่ได้ใช้ stabilizer ตัวยาว 6.25U ของ spacebar)

<Picture  ratio="16-9" src="/images/60-percent-mechanical-keyboard-with-arrows/all-switches.jpg" alt="บัดกรี switch ครบแล้ว" />

## ฟันเบี้ยว

ถึงตรงนี้ ถ้าสังเกตดีๆ ก็จะเริ่มเห็นความผิดปกติแล้ว และเห็นชัดมากตอนใส่ keycaps ลงไป
นั่นก็คือ ปุ่มมันไม่ตรงอยู่หลายปุ่มมาก เหมือนฟันเด็กที่ยังไม่ได้จัดฟัน

<Picture  ratio="3-2" src="/images/60-percent-mechanical-keyboard-with-arrows/bent-rows.jpg" alt="ปุ่มบน keyboard ที่บิดๆ เบี้ยวๆ" />

ก็คิดว่าน่าจะเกิดจากที่ไม่มี plate นั่นแหละครับ มันเลยมีโอกาสที่วาง switch ลงไปบน PCB แล้วมันไม่ตรงเป๊ะ ก็ต้องเอากลับมาแก้อีกที ด้วยการเอาหัวแร้งจิ้มให้ตะกั่วที่ขา switch ละลายแล้วรีบจัดให้มันตรง ทีละอันๆ ไปครับ

สุดท้ายแล้วก็ดีขึ้น แต่ไม่ตรงเป๊ะเท่ากับแบบใช้ plate

<Picture  ratio="3-2" src="/images/60-percent-mechanical-keyboard-with-arrows/after-fixes.jpg" alt="ปุ่มบน keyboard ที่แก้แล้ว" />

-----

## Mark 4.1

เจ้า Mark 4 ของผมจากที่มี layout ANSI ธรรมดา ก็กลายเป็นเวอร์ชั่น Mark 4.1
ที่มี arrow keys, มีปุ่ม <kbd>/</kbd> กับปุ่ม <kbd>right shift</kbd> แยกกัน (แลกกับการหดปุ่ม <kbd>left shift</kbd> ให้สั้นลง)

พร้อมกับ split spacebar ให้เป็น gimmick เล็กๆ ให้ดูแปลกตา แต่จริงๆ การมี spacebar เล็กๆ 2 อันแยกกัน ไม่ได้ดีกว่าการมี spacebar ยาวๆ 1 อันเลย ใช้งานได้ไม่ต่างกัน
อีกสักพักคงเปลี่ยนกลับไปเป็น spacebar ธรรมดา

<Picture  ratio="16-10" src="/images/60-percent-mechanical-keyboard-with-arrows/mark4-1.jpg" alt="mark 4.1: custom 60% mechanical keyboard with arrows" />

(แต่การใส่ keycaps แบบกลับหัวเนี่ยช่วยให้พิมพ์แถวล่างได้ง่ายขึ้นจริง แนะนำให้ลอง)

## สรุป

การทำ custom mechanical keyboard แบบไม่ใช้ plate นั้นสามารถทำได้

#### ข้อดี

1. ไม่มี plate มาเป็นตัวกำหนด layout ของ keyboard อีกต่อไป ทำให้สามารถวาง switch ไว้ตรงไหนก็ได้เท่าที่แผ่น PCB จะรองรับ
2. การแก้ไข หรือการถอดเอา stabilizer มา lube ก็ทำได้ง่ายขึ้น ถอด switch แค่ตัวเดียว
3. ตัวคีย์บอร์ดจะให้ตัวได้อีกนิดหน่อย กระด้างน้อยลง เสียงก็อาจจะเปลี่ยนไป - ข้อนี้แล้วแต่คนชอบด้วยครับ อาจไม่นับว่าเป็นข้อดีก็ได้

#### ข้อเสีย

1. ต้องใช้ switch แบบ PCB mount ที่มี 5 pin - จริงๆ แบบ 3 pin ก็ใช้ได้ครับ แต่แบบ 5 pin จะสะดวกกว่าเยอะ
2. ทำงานยาก บัดกรียาก มีโอกาสที่จะวาง switch ไม่ตรง - ถึงแม้จะใช้ switch แบบ 5 pin ก็ยังมีโอกาสที่จะวางไม่ตรงอยู่ดี
3. ถ้าทำ layout แปลกๆ มาก ก็อาจจะหา keycaps ใส่ยากหน่อยครับ
4. มองดูไม่สวยถ้าใช้ case แบบเตี้ย (low-profile) จะมองเห็นช่องว่างใต้ keycap เยอะ มันดูลอยๆ

ถ้าถามผมว่าคุ้มไหม ผมว่าไม่คุ้มครับ 😅 ถ้าเลือกได้ผมว่าหา plate ใส่ให้ตรงกับ layout ที่อยากได้ดีกว่า ทำงานง่ายกว่าเยอะเลย

<Picture  ratio="16-10" src="/images/60-percent-mechanical-keyboard-with-arrows/bottom-row.jpg" alt="ปุ่ม MENU ที่อยู่ตรงกลางระหว่าง split spacebar" />

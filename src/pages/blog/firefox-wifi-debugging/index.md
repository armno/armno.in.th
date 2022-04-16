---
cover-image: images/cover.png
date: 2016-10-25T00:00:00Z
description: Developer Tools ใน Firefox มี feature WebIDE ที่เราสามารถใช้ debug web
  app จาก Firefox บน Android ได้ผ่าน WiFi ถือว่าสะดวกดี มีขั้นตอนการ setup เพียงเล็กน้อยครับ
published: true
tags:
  - firefox
  - devtools
  - mobileweb
thumbnail: images/desktop-devtools-enabled.png
title: Debug Firefox บน Android ผ่าน Wi-Fi
url: /2016/10/25/debugging-over-wifi-firefox-for-android/
---

Developer Tools ของ Firefox นั้นได้รับการพัฒนามาอย่างต่อเนื่อง ไม่ได้น้อยหน้า DevTools ของ Google Chrome เลย
(ถ้าดูจาก [home page ของ Developer Tools](https://developer.mozilla.org/en-US/docs/Tools) จะมี feature เยอะมาก)
วันนี้เราจะมาดูวิธีการใช้ feature WebIDE ของ Firefox เพื่อ debug web app ที่อยู่บน Firefox บน Android ผ่าน WiFi กัน

## สิ่งที่ต้องมี

- Firefox Desktop จะเป็นตัวธรรมดา หรือ [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) ก็ได้ครับ
- Android device ที่มี
  - [Firefox for Android](https://play.google.com/store/apps/details?id=org.mozilla.firefox) (v. 42 ขึ้นไป)
  - แอพ [Barcode Scanner (ZXing Team)](https://play.google.com/store/apps/details?id=com.google.zxing.client.android)

<div class="text-center">
  <img src="images/mobile-download-app.png" alt="download app Barcode Scanner จาก Play Store">
</div>

## Firefox for Android

กดปุ่ม menu แล้วเลือก **Settings** > **Advanced**

<div class="text-center">
  <img src="images/mobile-firefox-menu.png" alt="กดปุ่ม menu แล้วเลือก Settings">
</div>

<div class="text-center">
  <img src="images/mobile-firefox-settings.png" alt="จากเมนู Settings เลือก Advanced">
</div>

เปิด **Remote debugging via Wi-Fi**

<div class="text-center">
  <img src="images/mobile-firefox-dev-settings.png" alt="เปิดใช้งานตัวเลือก Remote debugging via Wi-Fi">
</div>

## Firefox Desktop

เปิด WebIDE จากเมนู **Tools** > **Web Developer** > **WebIDE**

<div class="text-center">
  <img src="images/desktop-webide.png" alt="เปิด WebIDE จากเมนู Tools > Web Developer > WebIDE">
</div>

ชื่อ device ที่เปิดตัวเลือก **Remote debugging via Wi-Fi** ไว้ ก็จะขึ้นมาอยู่ด้านขวามือของหน้าต่าง WebIDE

<div class="text-center">
  <img src="images/desktop-devices-list.png" alt="ชื่อ device ที่เปิดตัวเลือก **Remote debugging via Wi-Fi** ไว้ ก็จะขึ้นมาอยู่ด้านขวามือของหน้าต่าง WebIDE">
</div>

พอคลิกเลือกที่ชื่อ device ในครั้งแรก WebIDE จะแสดงรูป QR Code ขึ้นมา

<div class="text-center">
  <img src="images/desktop-scan-qr-code.png" alt="คลิกเลือกที่ชื่อ device ในครั้งแรก WebIDE จะแสดงรูป QR Code ขึ้นมา">
</div>

ส่วนใน Firefox for Android ก็จะมี dialog ขึ้นมาถามว่า
มีเครื่องอื่นใน network ต้องการเชื่อมต่อเข้ามา เราต้องการ scan QR code เพื่ออนุญาตหรือไม่
ก็เลือก Scan หรือ Scan and Remember ได้เลย จะได้ไม่ต้อง scan หลายรอบ

<div class="text-center">
  <img src="images/mobile-permission-requests.png" alt="เลือก Scan หรือ Scan and Remember ได้เลย จะได้ไม่ต้อง scan หลายรอบ จาก dialog ใน Firefox for Android">
</div>

พอ scan QR code แล้ว Developer Tools ของ WebIDE ก็จะใช้งาน debug web app ที่ Firefox for Android ได้ทันที
ตรงซ้ายมือด้านล่าง จะแสดงชื่อ tab ที่เปิดทั้งหมดของ Firefox for Android ก็เลือกจิ้ม debug ได้ตามต้องการครับ

<div class="text-center">
  <img src="images/desktop-devtools-enabled.png" alt="เลือก Scan หรือ Scan and Remember ได้เลย จะได้ไม่ต้อง scan หลายรอบ จาก dialog ใน Firefox for Android">
</div>

Happy debugging ครับ

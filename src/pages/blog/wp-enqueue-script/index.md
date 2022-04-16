---
categories:
- Web Development
comments: true
date: 2012-04-19T21:50:26Z
description: WordPress นั้นมีฟังก์ชั่น wp_enqueue_script สำหรับแทรกไฟล์ JavaScript
  ใน theme อย่างถูกหลักอนามัย ดีกว่าการใช้แท็ก script ธรรมดาอยู่นะ
slug: wp-enqueue-script-wordpress
tags:
- JavaScript
- WordPress
- WordPress Theme
- wp_enqueue_script
title: การใช้ฟังก์ชั่น wp_enqueue_script แทรก JavaScript ใน WordPress
url: /2012/04/19/wp-enqueue-script-wordpress/
---

ปกติเราจะโหลดไฟล์ JavaScript เข้ามาในเพจโดยใช้แท็ก `<script>`

{{< highlight html >}}
<script src="js/script.js"></script>
{{< / highlight >}}

ซึ่งพอมาทำธีม WordPress ผมก็จะมักง่ายโดยการใช้แท็ก `<script>` อย่างเดิมนี่แหละ

{{< highlight html >}}
<script src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
{{< / highlight >}}

จริงๆ แล้ว WordPress มีฟังก์ชั่นสำหรับโหลด JavaScript อยู่แล้วนั่นก็คือ `wp_enqueue_script` ที่ผลลัพธ์ก็เหมือนกัน คือได้แท็ก `<script>` ออกมา แต่ฟังก์ชั่นนี้มีประสิทธิภาพมากกว่า ซึ่งก็คือ

1. จะโหลด JavaScript ก็ต่อเมื่อมันยังไม่ถูกโหลดเท่านั้น ตัวอย่างเช่นเวลาเรามึนๆ ใช้แท็ก `<script>` โหลดไฟล์ .js เข้ามาในเพจหลายรอบ ก็จะทำให้ทั้งเสียเวลาโหลดหน้าเพจเพิ่มขึ้น เสียเวลารันไฟล์ .js ตัวนั้นอีกโดยที่ไม่จำเป็น แต่ฟังก์ชั่น `wp_enqueue_script` จะช่วยเช็คให้ว่าไฟล์ที่เราจะใช้นั้นถูกโหลดเข้ามาในหน้าเพจหรือยัง ถ้ามีแล้วก็ไม่ต้องโหลดเข้ามาอีก
2. เราสามารถระบุไฟล์ .js ที่จำเป็นต้องโหลดก่อนไฟล์นี้ได้ เช่นพวก jQuery Plugin ต่างๆ ต้องโหลดเข้ามาหลังจาก jQuery

### ตัวอย่างการใช้งาน

ผมต้องการโหลด jQuery Colorbox ซึ่งเป็น plugin ของ jQuery เข้ามาใช้งานกับธีม [Sera](https://github.com/armno/Sera-WordPress-Theme) นี้

1. โหลด jquery.colorbox.min เข้ามาเก็บที่ `/wp-content/themes/sera/js/jquery.colorbox.min.js`
2. ในไฟล์ `functions.php` ของธีม เรียกใช้ฟังก์ชั่น `wp_enqueue_script`

{{< highlight php >}}
<?php
wp_enqueue_script(
    'colorbox',
    get_template_directory_uri() . '/js/jquery.colorbox.min.js',
    'jquery',
    '1.3.19'
);
{{< / highlight >}}

เพียงเท่านี้ เจ้าไฟล์ jquery.colorbox.min.js ก็จะถูกโหลดเข้ามาอย่างถูกหลักอนามัย (ซึ่งก็คือหลังจากที่ jQuery ถูกโหลดเข้ามาแล้วนั่นเอง)

### Parameters ของฟังก์ชั่น wp_enqueue_script

* `$handle` (string) ชื่อของ script ที่จะโหลดเข้ามา (lowercase เท่านั้น) WordPress จะเอาตัวนี้แหละไปเช็คว่ามันถูกโหลดเข้ามาในเพจหรือยัง อย่างของผมข้างบนก็เป็นชื่อ colorbox
* `$src` (string) ก็คือ path ที่เก็บไฟล์ .js ที่จะโหลดเข้ามา
* `$deps` (array) ไฟล์ที่จำเป็นก่อนโหลดไฟล์นี้ (dependencies) โค้ดข้างบนบอกว่าเป็น jquery ก็คือต้องโหลด jquery เข้ามาก่อน ถึงค่อยโหลดตัวนี้
* `$ver` (string) เวอร์ชั่นของไฟล์ .js เพื่อให้มั่นใจได้ว่าเครื่องของผู้ใช้จะได้ไฟล์เวอร์ชั่นเดียวกับบนเซิฟเวอร์ โดย WordPress จะเอาไปต่อเป็น query string ให้หลัง path ของไฟล์
* `$in_footer` (boolean) ถ้าต้องการใช้ script นี้โหลดที่ footer แทนที่จะเป็นในแท็ก `<head>` ก็เซ็ตให้เป็น true ไปครับ (การโหลด .js ไว้ท้ายๆ จะช่วยทำให้เว็บเราโหลดไวขึ้นนิดหน่อย)

ฟังก์ชั่นนี้ไม่ return ค่าอะไรออกมานะครับ ข้อมูลเพิ่มเติมดูได้ที่ [WordPress Codex/wp_enqueue_script](http://codex.wordpress.org/Function_Reference/wp_enqueue_script) ได้เลยครับ

สำหรับผมเคยคิดว่าฟังก์ชั่นของ WordPress บางอันก็ดูใช้งานยุ่งยากเกินความจำเป็น และเคยละเลยไป แต่พอลองได้ทำเยอะๆ ก็พยายามจะใช้ตามที่ WordPress ให้มา ซึ่งบางทีก็ต้องไปอ่านเอาที่ [Codex](http://codex.wordpress.org/) ถึงได้พบว่ามีดีกว่าเขียนแบบธรรมดา อย่างเช่นฟังก์ชั่นนี้เป็นต้นครับ

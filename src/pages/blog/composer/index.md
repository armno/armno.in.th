---
categories:
  - Web Development
pubDate: 2013-06-18T00:00:00Z
description:
  Composer นั้นเป็น dependency management tool สำหรับ PHP บ่อยครั้งที่เราจำเป็นต้องใช้
  library อื่นๆ ในโปรเจ็คของเรา Composer นั้นช่วย install library ที่จำเป็นเหล่านั้นในโปรเจ็คให้ครับ
  Composer นั้นกำลังได้รับความนิยมเพิ่มขึ้นเรื่อยๆ สำหรับ PHP developer สมัยใหม่ครับผม
pygment: true
tags:
  - php
  - composer
title: ติดตั้ง Composer บน OSX
url: /2013/06/18/installing-composer-osx-lion
thumbnail: /images/composer/9075336190_a56f25d621_o.png
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

Composer นั้นเป็น dependency management tool สำหรับ PHP บ่อยครั้งที่เราจำเป็นต้องใช้ library อื่นๆ ในโปรเจ็คของเรา Composer นั้นช่วย install library ที่จำเป็นเหล่านั้นในโปรเจ็คให้ครับ Composer นั้นกำลังได้รับความนิยมเพิ่มขึ้นเรื่อยๆ สำหรับ PHP developer สมัยใหม่ครับผม

Composer นั้นใช้งานผ่าน command line ดังนั้นวันนี้เราจะมาทำให้ Mac OSX นั้นรู้จัก command <code>composer</code> กันครับ และต้องมี PHP 5.3.2+ และ <code>curl</code> ในเครื่องก่อนนะ

### ติดตั้ง Composer

<em>[updated 2014.01.16]</em> ติดตั้งผ่าน [homebrew](http://brew.sh) นั้นดูเหมือนจะง่ายที่สุดครับ โดยก่อนอื่นเราต้อง tap composer ให้ homebrew รู้จักก่อน

```sh
\$ brew tap josegonzalez/homebrew-php
```

จากนั้นก็ติดตั้ง composer

```sh
\$ brew install josegonzalez/php/composer
```

#### ติดตั้งแบบ manual

ผมเลือก install แบบ global เพื่อที่จะให้เรียกใช้ <code>composer</code> command ได้จาก directory ไหนก็ได้ในเครื่องครับ (สะดวกกว่าเวลาต้องใช้บ่อยๆ)

เปิด terminal ขึ้นมาแล้วก็พิมพ์ command สองบรรทัดนี้เลย

```sh
\$ curl -sS https://getcomposer.org/installer | php
```

ตามด้วย

```sh
\$ mv composer.phar /usr/local/bin/composer
```

เสร็จแล้วเราก็จะสามารถเรียกใช้ <code>composer</code> command ได้จาก terminal แล้วครับ ทดสอบโดย

```sh
\$ which composer
```

ก็จะได้ path ที่เราติดตั้ง Composer ไว้ครับ

```sh
/usr/local/bin/composer
```

### ใช้งาน Composer

ผมจะลองติดตั้ง SwiftMailer เป็น library สำหรับส่ง email ใน PHP ด้วย Composer ขั้นตอนแรกก็สร้าง directory เปล่าๆ ขึ้นมาก่อน

```sh
$ mkdir swift
$ cd swift
```

จากนั้นสร้างไฟล์ชื่อ <code>composer.json</code> ขึ้นมา ไฟล์นี้จะเป็นตัวบอกว่าโปรเจ็คของเราต้องใช้ dependency ตัวไหนบ้าง สำหรับ library ต่างๆ หาได้จาก [packagist.org](https://packagist.org/) ครับ

![image](/images/composer/9075282740_9b46af0d7d_z.jpg)

ไฟล์ <code>composer.json</code> ก็จะประมาณนี้ครับ

```json
{
"require" : {
"swiftmailer/swiftmailer": "5.1.\*@dev"
}
}
```

แล้วก็รัน

```sh
\$ composer install
```

![image](/images/composer/9075336190_a56f25d621_o.png)

รอจน install เสร็จ ก็จะได้ library SwiftMailer อยู่ใน directory <code>vendor</code> ในโปรเจ็คของเราครับ

![image](/images/composer/9073106529_f552a63379_o.png)

ใน directory <code>vendor</code> จะมีไฟล์ <code>autoload.php</code> ให้พร้อมให้เราใช้งาน ในโปรเจ็คของเราก็แค่เพิ่ม

```sh
require 'vendor/autoload.php';
```

ก็จะทำให้สามารถใช้ SwiftMailer ในโปรเจ็คได้ครับ

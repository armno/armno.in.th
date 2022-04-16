---
categeory: Web Development
date: 2013-06-28T00:00:00Z
description:
  MAMP (รวมถึง MAMP Pro) นั้นเป็นเครื่องมือที่ดีสำหรับติดตั้ง local web
  server บน OSX แต่ปัญหาที่ผมพบกับ MAMP คือกินแรมเยอะมาก ซึ่งจริงๆ แล้วเราไม่ต้องมี
  MAMP ก็รัน web server ในเครื่องได้ Homebrew คือพระเอกของเราครับ
tags:
  - tooling
  - development
title: ติดตั้ง Apache, PHP, MySQL บน OSX แบบไม่ง้อ MAMP
url: /2013/06/28/set-up-apache-php-mysql-without-mamp/
---

[MAMP](https://www.mamp.info/en) (รวมถึง MAMP Pro) นั้นเป็นเครื่องมือที่ดีสำหรับติดตั้ง local web server บน OSX แต่ปัญหาที่ผมพบกับ MAMP คือกินแรมเยอะ (และใช้งานยุ่งยากด้วย) ซึ่งจริงๆ แล้วเราไม่ต้องมี MAMP ก็รัน web server ในเครื่องได้

จริงๆ แล้ว OSX มี Apache กับ PHP ติดมาด้วยอยู่แล้ว แต่สำหรับ PHP นั้นยังเป็นเวอร์ชั่นเก่าอยู่ ซึ่งเราสามารถลง PHP เวอร์ชั่นล่าสุดได้จาก Homebrew ครับ

[Homebrew](https://brew.sh) คือพระเอกของเราครับ ช่วยให้เราลง package สารพัดได้ใน OSX ได้อย่างไม่ยากเย็นนัก (สำหรับผมที่มาจากโลก Ubuntu Homebrew คือเปรียบเสมือนคำสั่ง `apt-get` นั่นเอง)

- โพสต์นี้ทดสอบบน OSX 10.8+ นะครับ

<blockquote>
  Update 27/07/2014 &ndash; ทดสอบทั้งบน OSX Mavericks กับ Yosemite Beta แล้ว ได้เหมือนกันครับ
</blockquote>

### ติดตั้ง Homebrew

รัน command ใน terminal

{{< highlight bash >}}
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
{{< / highlight >}}

### ใช้งาน Apache

ตั้งแต่ OSX 10.8 เป็นต้นมานั้น ไม่มีตัวเลือก Web Sharing ให้เลือกใน System Preferences > Sharing แล้ว ซึ่งเราสามารถรัน Apache ได้จาก terminal ครับ

{{< highlight bash >}}
\$ sudo apachectl start
{{< / highlight >}}

### ติดตั้ง PHP 5.4

<blockquote>
  Update 27/07/2014 &ndash; ใน homebrew นั้นมี PHP เวอร์ชั่นใหม่ๆ มาตลอด รวมถึง rc ด้วย ลองเช็คผ่าน <code>brew search php</code> ดูก่อน สำหรับผมจะเลือกเวอร์ชั่น stable ล่าสุดเสมอครับ
</blockquote>

ต่อไปก็ต้องลง PHP ผ่าน Homebrew ครับ สำหรับการลง package ด้วย homebrew นั้นใช้ command <code>brew install &lt;package name&gt;</code> แต่ถ้าไม่แน่ใจว่า <code>package name</code> นั้นมีอะไรบ้าง ใช้ command <code>brew search</code> หาดูก่อนได้ครับ

![brew search](images/9160240552_c55243a996_o.png)

สำหรับ PHP 5.4 นั้นชื่อ package <code>php54</code> (ณ วันที่เขียนยังไม่มี PHP 5.5 ใน homebrew ครับ)

> เลขเวอร์ชั่นของ PHP อาจจะต่างออกไป ตามเวอร์ชั่นที่เลือกลง โพสต์นี้เขียนตอน PHP 5.4 ครับ

{{< highlight bash >}}
\$ brew install php54
{{< / highlight >}}

รอสักพักจนเสร็จ PHP 5.4 ก็จะถูกติดตั้งไว้ที่

{{< highlight bash >}}
/usr/local/Cellar/php54/5.4.15
{{< / highlight >}}

![installed php 5.4](images/9158088329_903636e415_z.jpg)

> Package ที่ติดตั้งผ่าน Homebrew จะอยู่ที่ <code>/usr/local/Cellar</code> ครับ

### ติดตั้ง MySQL

ใช้คำสั่ง <code>brew install</code> เหมือนเดิม

{{< highlight bash >}}
\$ brew install mysql
{{< / highlight >}}

หลังจาก install เสร็จก็เซ็ต root password ด้วย command

{{< highlight bash >}}
\$ mysql_secure_installation
{{< / highlight >}}

ทำตามขั้นตอนไปเรื่อยๆ จนจบได้เลย

### แก้ path ของ PHP สำหรับ Apache

หลังจากลง PHP ด้วย homebrew แล้ว เราก็ต้องบอก Apache ให้โหลด module php5 จากที่ลงใหม่ ไม่ใช่จากของเดิมที่ติดมากับเครื่องครับ

ซึ่งก็คือ เราต้องไปแก้ path ในไฟล์ <code>httpd.conf</code> ครับ

{{< highlight bash >}}
\$ sudo vim /etc/apache2/httpd.conf
{{< / highlight >}}

หาบรรทัดนี้

{{< highlight text >}}
LoadModule php5_module libexec/apache2/libphp5.so
{{< / highlight >}}

แล้วแก้เป็น

{{< highlight text >}}
LoadModule php5_module /usr/local/Cellar/php54/5.4.15/libexec/apache2/libphp5.so
{{< / highlight >}}

จากนั้น restart Apache

{{< highlight text >}}
\$ sudo apachectl restart
{{< / highlight >}}

### เซ็ต DocumentRoot

ปกติผมจะเซ็ตให้ directory <code>~/code</code> เป็น root directory ของ localhost ครับ (เปรียบเสมือน <code>/var/www/</code> ใน Ubuntu) ซึ่งก็ต้องไปแก้ path ในไฟล์ <code>httpd.conf</code> เหมือนเดิม

{{< highlight bash >}}
\$ sudo vim /etc/apache2/httpd.conf
{{< / highlight >}}

หา

{{< highlight bash >}}
DocumentRoot "/Library/WebServer/Documents"
{{< / highlight >}}

เปลี่ยนเป็น

{{< highlight text >}}
DocumentRoot "/Users/armno/code" # อย่าลืมเปลี่ยน username เป็นของคุณ
{{< / highlight >}}

และตรง <code>&lt;Directory&gt;</code> ก็ต้องเปลี่ยนเป็น path เดียวกันด้วยครับ

{{< highlight text >}}
<Directory "/Users/armno/code">
{{< / highlight >}}

สุดท้าย ค้นหา

{{< highlight text >}}
<IfModule dir_module>
DirectoryIndex index.html
</IfModule>
{{< / highlight >}}

เพิ่ม <code>index.php</code> เข้าไปก่อน <code>index.html</code>

{{< highlight text >}}
<IfModule dir_module>
DirectoryIndex index.php index.html
</IfModule>
{{< / highlight >}}

จากนั้น save file แล้วก็ restart Apache อีกครั้งครับ (command เดียวกับข้างบน) พอรัน `http://locahost` Apache ก็จะชี้ไปที่ `~/code` เป็น root directory

### ทดสอบ

{{< highlight bash >}}
\$ echo "<?php phpinfo();" > ~/code/info.php
{{< / highlight >}}

แล้วเปิด <code>http://localhost/info.php</code> ใน browser ก็จะเจอข้อมูล <code>phpinfo</code> ครับ

![phpinfo](images/9158338115_1a9c7169eb_o.png)

เสร็จแล้ว :D

### Update - OSX Yosemite

ล่าสุดทดสอบบน OSX Yosemite beta ด้วยการอัพเกรดจาก Mavericks พบว่าต้องเซ็ตค่าในไฟล์ `httpd.conf` ใหม่ ส่วน php นั้นต้องลบแล้วก็ลงใหม่ ถึงจะใช้งานได้ ส่วนวิธีการก็เหมือนเดิมทุกอย่างครับ

{{< highlight bash >}}
$ brew uninstall php55
$ brew install php55
{{< / highlight >}}

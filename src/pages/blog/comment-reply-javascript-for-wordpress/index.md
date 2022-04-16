---
categories:
- Web Development
comments: true
date: 2010-11-03T23:16:17Z
slug: comment-reply-javascript-for-wordpress
tags:
- JavaScript
- Notte
- Threaded Comments
- WordPress Theme
title: โค้ดสำคัญสำหรับ WordPress Theme หากเปิดใช้งาน Threaded Comments
url: /2010/11/03/comment-reply-javascript-for-wordpress/
---

ประสบการณ์อย่างหนึ่งจากการทำธีม [**Notte**](https://armno.in.th/my-first-wordpress-theme) ก็คือ เวลาทำธีมเสร็จ และเปิดใช้งาน **Threaded Comments** (ฟีเจอร์พื้นฐานของ WordPress) พบว่า หากดปุ่ม Reply ของแต่ละคอมเม้นต์ ต้องรอเพจโหลดสักครู่ (รีโหลดหน้าใหม่) ต่างจากธีมอื่นๆที่พอกด reply ปุ๊บ ฟอร์มคอมเม้นต์ก็จะมาอยู่ใต้คอมเม้นนั้นปั๊บ ไม่ต้องรอโหลดหน้าเพจใหม่ .. ด้วยความสงสัย จึงไปหาคำตอบมาครับ

เปิด Console ใน **[Firebug](http://www.getfirebug.com)** ดู ถึงได้รู้ว่าพอกด reply จะมี error ของ JavaScript เกิดขึ้น แสดงว่า มันน่าจะหาฟังก์ชั่น addComment ไม่เจอ .. ฟังก์ชั่นนี้ผมไม่ได้เขียนเองครับ จึงพอเดาได้ว่า น่าจะเป็นของ WordPress .. และสาเหตุที่น่าจะทำให้เกิด error นี้ก็คือ น่าจะลืม include ไฟล์ JavaScript ที่มีฟังก์ชั่นนี้อยู่ เข้าในในเพจของเราครับ

[![image](https://files.armno.in.th/uploads/2010/11/image_thumb.png)](https://files.armno.in.th/uploads/2010/11/image.png)

ก็เลยไปแงะโค้ดของ **Twenty Ten** ดู พบว่า ผมลืมใส่โค้ดนี้ลงไปในแท็ก `<head>`

[![image](https://files.armno.in.th/uploads/2010/11/image_thumb1.png)](https://files.armno.in.th/uploads/2010/11/image1.png)

ใน if block นะครับ เป็นการบอกว่า หากเพจนี้เป็น single page และบล็อกเราได้เปิดใช้งาน threaded comments ไว้ ให้โหลด JavaScript ชื่อว่า** comment-reply** เข้ามาด้วย ซึ่งไฟล์นี้แหละครับที่มีฟังก์ชั่น addComment ที่หายไป ![Open-mouthed smile](https://files.armno.in.th/uploads/2010/11/wlEmoticon-openmouthedsmile.png)

ทีนี้พอกด reply ฟอร์มคอมเม้นต์จะเด้งไปใต้คอมเม้นท์ที่เรากด reply ให้ทันที รวมถึงกด cancel ฟอร์มก็จะเด้งกลับไปที่เดิมให้ด้วย .. ไม่ต้องรอโหลดให้เสียเวลา ![Winking smile](https://files.armno.in.th/uploads/2010/11/wlEmoticon-winkingsmile.png)

[![image](https://files.armno.in.th/uploads/2010/11/image_thumb2.png)](https://files.armno.in.th/uploads/2010/11/image2.png)

อย่าลืมนะครับ ใส่โค้ดนี้ในแท็ก `<head>` ในธีมด้วย หากเปิดใช้งาน Threaded Comments ครับ

    if (is_singular() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

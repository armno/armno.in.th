---
categories:
- Web Development
comments: true
date: 2011-09-29T23:38:43Z
description: บันทึกตอนที่สองจากงาน Google DevFest Chiang Mai 2011 เรื่อง HTML5 Offline
  Application กับ Creating Modern Web Applications ครับ
slug: google-devfest-chiang-mai-2011-part-2
tags:
- DevFest 2011
- Google
- HTML5
- JavaScript
- Offline Application
title: บันทึก Google DevFest Chiang Mai 2011 ตอนที่ 2
url: /2011/09/29/google-devfest-chiang-mai-2011-part-2/
wordpress_id: 1856
---

![DevFest 2011 unofficial logo](https://files.armno.in.th/uploads/2011/09/devfest_custom_logo.png)

## HTML5 Offline Applications

ตอนแรกคิดว่า Session นี้คงไม่ต่างอะไรกับเมื่อตอนเช้ามาก (Bleeding Edge HTML5) แต่พอฟังๆ ไป ผมกลับรู้สึกชอบมากกว่า เพราะมันทำให้มองเห็นภาพการใช้งานจริงดี ประโยชน์ของ Offline Application อย่างแรกเลยคือเรื่องสถานที่ เราไม่สามารถพาอินเตอร์เน็ตติดตัวไปด้วยตลอดเวลา (ถึงแม้จะอยากก็ตามที) แต่ Offline Application ก็ยังสามารถที่จะใช้งานได้ เช่น บนเครื่องบิน ระหว่างขับรถ (ฉันหมดแรง) หรือแม้กระทั่งกลางทะเลทราย (!) นอกจากนี้ เรื่องประสิทธิภาพในการใช้งาน แน่นอนว่า Offline Application ทำงานได้เร็วกว่า Online อยู่แล้ว

### Local Storage

เก็บข้อมูลในลักษณะ key-value ธรรมดาๆ วิธีใช้งานก็แสนง่าย โดยจับค่าที่ต้องการ ยัดลงใน object `localStorage` ได้เลย เช่น หากต้องการเก็บข้อมูลที่มี key เป็น browser ส่วน value เป็น `chrome` ก็

<pre><code class="language-javascript">window.localStorage.browser= 'chrome';</code></pre>

หรือเรียกใช้ผ่าน API เหล่านี้ก็ได้นะ

<pre><code class="language-javascript">localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();</code></pre>

ข้อควรระวังคือ เรียกใช้ `clear()` จะลบค่าใน localStorage ออกหมดเลย


### Session Storage


เหมือนกัน Local Storage แทบทุกประการ ยกเว้นมันจะถูกลบค่าทิ้งทุกครั้งที่เราปิด browser

ในการใช้งาน Web Storage นั้น รองรับเฉพาะการเก็บข้อมูลที่เป็น String ดังนั้น หากเราต้องการเก็บ Object ทั้งก้อนลงใน Local Storage หรือ Session Storage ก็ต้องทำการแปลงข้อมูลจาก Object ให้เป็น String เสียก่อน

<pre><code class="language-javascript">var userStr = JSON.stringify(object);</code></pre>

เมื่อนำออกมาใช้ ก็ต้องแปลงกลับจาก String ให้เป็น Object เช่นกัน

<pre><code class="language-javascript">var user = JSON.parse(userStr);</code></pre>

### IndexedDB

(จดไม่ค่อยทันแล้ว) เหมือนเราจำลอง database server มาไว้ใน browser เก็บข้อมูลเป็น structure มากกว่าเป็นแค่ key-value แบบ Local Storage .. (นั่นแหละ database ก็คือ database จะพยายามอธิบายให้ยากอีกทำไม -*-) หลักการทำงานคร่าวๆ คือ query เอา index ขึ้นมา เก็บเอา cursor ของ index ในแต่ละ record แล้วก็วนลูป (iterate) ทำงานแต่ละ cursor จนครบ .. มึนไหมครับ ถ้ามึนลองอ่าน [บทความนี้ที่ hack.mozilla.com](http://hacks.mozilla.org/2010/06/comparing-indexeddb-and-webdatabase/) ดู เปรียบเทียบ **IndexedDB** กับ **WebDatabase** (ซึ่งปัจจุบันเหมือนจะเลิกพัฒนาไปแล้ว ([อ้างอิง](http://www.w3.org/TR/webdatabase/))) .. ลองดูตัวอย่างการใช้งานง่ายๆ ได้ครับ

### AppCache

"cache แม่งทั้ง app เลย" คงดูเป็นคำที่ไม่เกินจริงเท่าไหร่ โดยเราจะต้องสร้าง cache manifest file บนเซิฟเวอร์เราเพื่อบอกรายละเอียดเกี่ยวกับการ cache application ไว้ใช้ยาม offline .. ไอ้เจ้า manifest file เนี่ยจริงๆ แล้วเป็นไฟล์ text ธรรมดาเนี่ยแหละครับ แต่ [html5doctor แนะนำว่าให้ตั้งนามสกุลเป็น .appcache](http://html5doctor.com/go-offline-with-application-cache/) เพื่อความเป็นสากลทัดเทียมกับนานาอารยประเทศ

วิธีใช้งาน AppCache คือ เพิ่ม attribute manifest ในแท็ก html ของเรา

<pre><code class="language-markup">&lt;html manifest="example.appcache"&gt;</code></pre>

โดยที่ไฟล์ manifest มีส่วนประกอบหลักๆ คือ

<pre><code class="language-bash">CACHE MANIFEST
# vesion number</code></pre>

บรรทัดแรก ต้องเป็นคำว่า `CACHE MANIFEST` เพื่อเป็นการบอก browser ว่า นี่เป็นไฟล์ manifest ของฉันนะ ส่วน `version number` เอาไว้เช็คอัพเดทจากเซิฟเวอร์ ตัวอย่างเช่น เมื่อเซิฟเวอร์มีการอัพเดทไฟล์ CSS หรือ JS เราก็ต้องเปลี่ยน version number ในไฟล์ manifest (ซึ่งอยู่บนเซิฟเวอร์) เพื่อให้ offline application ทราบว่ามีการเปลี่ยนแปลง และจะได้อัพเดทไฟล์ cache เป็นเวอร์ชั่นใหม่ ตรงตามเซิฟเวอร์

<pre><code class="language-bash">CACHE: // cache what
FALLBACK: // use when offline
NETWORK: // require to be online</code></pre>

เนื้อหาหลักของไฟล์ manifest คือเจ้า 3 ส่วนนี้ครับ

1. `CACHE:` เอาไว้บอกว่า เราต้องการให้เครื่อง local ทำการ cache ไฟล์อะไรบ้าง
2. `FALLBACK:` เป็นการบอกว่า ถ้าอยู่ใน offline mode ให้เรียกไฟล์ไหน แทนไฟล์ไหน ([ดูตัวอย่างการเขียน FALLBACK](http://html5doctor.com/go-offline-with-application-cache/#fallback))
3. `NETWORK:` เจาะจงว่าไฟล์พวกนี้จะใช้ได้ก็ต่อเมื่อ online อยู่เท่านั้น

AppCache มีข้อน่าสังเกตหลายข้อด้วยกันครับ

* html ที่มีการระบุ cache manifest จะถูก cache เสมอ
* ต้องเซ็ต MIME-type ของไฟล์ manifest (.appcache) ให้เป็น `text/cache-manifest` ไม่งั้น AppCache จะไม่ทำงาน (web server ที่ไม่ได้เซ็ตค่า มักจะมองเป็นไฟล์ text ธรรมดา)
* ห้ามมี path ผิด, syntax error ในไฟล์ manifest ไม่งั้น AppCache จะไม่ทำงาน

ข้อมูลเพิ่มเติมเกี่ยวกับ AppCache ดูได้ที่ [appcachefacts.info](http://appcachefacts.info) ครับ


### Files API


เป็นการใช้ JavaScript เข้าถึงไฟล์บนเครื่องเราโดยตรง โดยให้มาครบๆ ครับทั้งอ่าน เขียน ย้าย หรือลบไฟล์ ทำให้เราสามารถทำอะไร (ต่อมิอะไร) กับไฟล์เหล่านั้นได้ก่อนถึงมือเซิฟเวอร์ เช่น เราสามารถเช็คขนาดไฟล์, ชนิดไฟล์ที่ user เลือกได้โดยที่ยังไม่ต้องอัพโหลดไปยังเซิฟเวอร์ ช่วยทำให้ประหยัดเวลาไปได้เยอะเลย

อ่านต่อเพิ่มเติมเกี่ยวกับ Files API [http://www.html5rocks.com/en/tutorials/file/dndfiles/](http://www.html5rocks.com/en/tutorials/file/dndfiles/)

### Data Synchronization

* ระบุไฟล์ในส่วน `FALLBACK:` เป็นไฟล์ที่สามารถทำงานได้เช่นเดียวกับเวอร์ชั่น online <i>(use fallback for files that duplicate functionality of online app)</i>
* ใช้ template ที่สามารถทำงานกับข้อมูลด้วย JavaScript ได้ <i>(use templates that can be parsed and filled by JS)</i>
* เก็บข้อมูลที่ได้รับจาก XHR ตั้งแต่เริ่มโหลดเพจ <i>(store all information retrieved by XHR at page load time (to be used offline))</i>
* อัพเดท `version number` ในไฟล์ manifest
* ใช้งาน [Web Worker](http://www.html5rocks.com/en/tutorials/workers/basics/) และ [Shared Web Worker](http://www.sitepoint.com/javascript-shared-web-workers-html5/) แปลเป็นภาษาเราคงประมาณ เปิดบอท

### เพิ่ม Application Performance

* ใช้ web storage แทน cookie
* ทำงานในฝั่ง client แทนที่การส่งข้อมูลไป-กลับ กับเซิฟเวอร์
* ใช้งาน AppCache
* ใช้งาน Files API
* อย่าลืมเรื่อง quota ของ offline storage ต่างๆ (ส่วนมากอยู่ที่ประมาณ 5MB) (ง่ะ!)

## Creating a Modern Web Application

* ทำ app ให้ใช้ง่ายๆ ล็อกอินง่ายๆ (ด้วย [OpenID](https://openid.org/home) หรือ [Google Identity Toolkit](http://code.google.com/apis/identitytoolkit/))
* ใช้งาน [responsive layout](http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/)
* ทำ app ให้อยู่ในหน้าเดียว (single page application) แล้วใช้งาน **History API** เช่น

<pre><code class="language-javascript">window.history.pushState(slideNo, 'Slide ' + slideNo, hash);</code></pre>

* ทำ web app ให้มีลักษณะการใช้งานคล้ายกับ desktop app
* เช่น การเลือกไฟล์ทั้ง directory ด้วย `<input type=file webkitdirectory />`
* หรือ การใช้ drag & drop สำหรับการอัพโหลดไฟล์ (`drag`, `drop` event listener)
* ใช้งาน clip board

<pre><code class="language-javascript">document.body.onpaste = function(e) {
  var items = e.clipboardData.items;
}</code></pre>

* ใช้งาน drag ไฟล์จาก web app ลงสู่เครื่อง เพื่อดาวน์โหลดไฟล์

<pre><code class="language-markup">// file drag out - download file by dragging out of the window
// HTML
&lt;input type=file data-downloadurl="MIMETYPE:FILENAME:ABSOLUTE_URI_TO_FILE" /&gt;</code></pre>

<pre><code class="language-javascript">// JavaScript
window.addEventListener('dragstart',function(e) {
    e.dataTransfer; // start transfering file to user's machine
});</code></pre>

* เพิ่มความสามารถให้ text input field รองรับฟีเจอร์ speech (ฟังจากเสียงพูด) `<input type=text x-wekit-speech>`
* ใช้งาน notification แจ้ง user (อันนี้น่าเล่นมากครับ)

<pre><code class="language-javascript">// keep users informed - create notifications
window.notifications; // notification object
var note = notifications.createNotification(picture, title, text);
note.show();</code></pre>

* ใส่ใจ performance ของ app ประหนึ่งว่าเป็นอีก feature ที่สำคัญ .. <i>("ประหนึ่งว่า" ???)</i>

หมดละครับ เย่! (เหนื่อยจังฮู้ว)

#### สรุปงาน Google DevFest Chiang Mai 2011

* สนุกดีครับ ได้เห็น + ได้ความรู้เยอะดี
* คนเยอะ ดูคึกคัก
* ขนมอร่อย
* สงสารคนที่โน้ตบุ๊กหล่นจากโต๊ะ (ที่ผมได้ยินก็ 3 คนแล้ว)
* ขอบคุณ Google ขอบคุณคณะวิศวะ ขอบคุณอาจารย์และน้อง CPE ทุกคนด้วยครับ

แถม CSS ที่ใช้ทำ Logo รูปข้างบนครับ


<pre><code class="language-css">h1 {
  font: bold 150px/100% 'RadleyRegular', serif;
  color: #A42536;
  text-align: center;
  text-shadow:
    -1px 0 0 rgba(255,255,255,0.2),
    0 1px 0 rgba(0,0,0,0.2),
    1px 1px 0 #242424,
    2px 2px 0 #282828,
    3px 3px 0 #2a2a2a,
    4px 4px 0 #2d2d2d,
    5px 5px 0 #313131,
    6px 6px 0 #343434,
    6px 6px 10px black;
}</code></pre>

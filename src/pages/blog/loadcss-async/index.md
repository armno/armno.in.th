---
date: 2015-05-04T00:00:00Z
description: บางครั้งการใช้ tag <link> เพื่อโหลดไฟล์ CSS เข้ามาในเพจ ก็อาจทำให้เว็บแสดงผลช้ากว่าที่ควรจะเป็นได้
  โพสต์นี้ผมจับ blog ของตัวเองมาทดลองเรื่องการ optimize วิธีการโหลด CSS เพื่อให้หน้าเว็บโหลดไวขึ้น
  โดยใช้ tool ต่างๆ เข้ามาช่วยครับ
published: true
tags:
  - css
  - rendering
  - performance
  - loadcss
thumbnail: images/pagespeed-after-optimize.png
title: 'Case study: เปลี่ยนวิธีโหลด CSS เพื่อให้เว็บ render ไวขึ้น'
url: /2015/05/04/use-loadcss-to-improve-rendering-performance/
---

ผมเพิ่งเปลี่ยนธีมของ blog จาก [Hyde][hyde-link] มาเป็น [Type][type-link] (บังเอิญชื่อคล้ายกันด้วย) หลังจากปรับแต่งเก็บรายละเอียดแล้ว
ก็ลองเช็ค performance ของ blog ดูผ่าน [PageSpeed Insights][pagespeed] ก่อน optimize score จะอยู่ที่ 73 ในหน้าแรก

![PageSpeed score ก่อน optimize](images/before-optimize.png)

ส่วนผลจาก [webpagetest.org][webpagetest] สังเกตตรง first byte อยู่ที่ 0.8 วินาที และ start render ที่ประมาณ 2 วินาที

![ทดสอบกับ webpagetest.org ก่อน optimize](images/webpagetest-before.png)

ซึ่งยังมีส่วนให้ปรับปรุงได้อยู่ ก็เลยจับมาเป็นหนูทดลองซะเลย

สิ่งที่ PageSpeed แนะนำว่าควรปรับปรุงก็คือ มี render-blocking resources อยู่ 3 ไฟล์ ที่ถูกโหลดใน `<head>`

- ฟอนต์ Source Sans Pro จาก Google Fonts (ผ่าน tag `<link>`)
- FontAwesome จาก MaxCDN เพื่อใช้งาน icon font
- `main.css` CSS หลักของธีม

## Render-blocking resources?

Render-block resources คือไฟล์ JavaScript หรือ CSS ที่ browser จะต้องรอให้โหลดเสร็จก่อน
ถึงจะเริ่ม render ได้ ที่เป็นแบบนี้ก็เพราะว่า ก่อนที่ browser จะสามารถ render หน้าเพจได้นั้น
ก็ต่อเมื่อมันรู้ว่า

- ในหน้าเพจประกอบด้วย element อะไรบ้าง (HTML, DOM construction)
- และแต่ละ element มีลักษณะหน้าตายังไง วางอยู่ตรงไหนของหน้าเพจ (CSS, CSSOM construction)

> อ่านเรื่อง ["วิธีการทำงานของ browser"](https://armno.in.th/2016/01/28/how-web-browsers-work) ได้จ้า

browser ทำทั้ง 2 ขั้นตอนไปพร้อมๆ กัน แต่ทั้ง 2 ขั้นตอนต้องเสร็จสมบูรณ์ก่อน ถึงจะเริ่ม render เพจได้
นั่นหมายความว่า ยิ่ง HTML หรือ CSS มีความซับซ้อนมากขึ้นเท่าไหร่ (หรือมีขนาดใหญ่ขึ้น)
ก็จะทำให้เริ่ม render ได้ช้าลงไปตามนั้น

### ทำไมต้องเริ่ม render เร็วๆ?

การเริ่ม render หมายถึงการที่ user เริ่มเห็นอะไรบนหน้าเพจหลังจากหน้าจอขาวๆ ธรรมดา
user เห็น content ได้เร็วขึ้น ซึ่งอาจจะไม่สมบูรณ์ก็ตาม แต่อย่างน้อยการได้เห็น "อะไรบางอย่าง"
บนหน้าเพจ ย่อมทำให้ user รู้สึกดีกว่าการเห็นหน้าจอขาวๆ โล่งๆ .. ไม่มีใครชอบเว็บที่โหลดช้าๆ จริงไหม

Render-blocking resource ในเคสของผมก็คือ ไฟล์ CSS ทั้ง 3 ไฟล์นั้น (ไม่มี JavaScript เพราะ
ใน tag `<head>` ไม่มี tag `<script>` อยู่เลย)

## 1. จัดการ FontAwesome

[FontAwesome][fontawesome] เป็นชุด icon font ที่มี icon เยอะมากๆ (ณ ตอนที่เขียนนี้มี 519 icon) ธีม Type นี้ดึง
FontAwesome มาจาก CDN ทั้ง set ทำให้ไฟล์มีขนาดใหญ่เกินตัว (6.5KB CSS + 55KB font) ซึ่งจริงๆ แล้ว
ผมใช้แค่ประมาณ 10 icon เอง ดังนั้นผมเลยเลือกใช้ custom icon font แทนชุดเต็ม

[IcoMoon][icomoon] เป็นเว็บแอพที่ทำให้เราสามารถ generate custom icon font ได้ ด้วยการเลือกเฉพาะ icon ที่
ต้องการ แล้วมันจะสร้าง font ที่มีเฉพาะ icon ที่เราต้องการ ทำให้ font ที่ได้มีขนาดเล็กลงมากครับ
ที่สำคัญ เรายังสามารถเลือกสร้าง font จากชุด icon หลายๆ ชุดมาปนๆ กันได้ เจ๋งดี

![icomoon app](images/icomoon-app.png)

ซึ่งแทนที่จะโหลดไฟล์ CSS ของ FontAwesome ผ่าน CDN ก็เปลี่ยนเป็นรวมไฟล์ CSS ของ icon font
ไว้ในไฟล์ `main.css` ได้เลย (เปลี่ยนไฟล์ `.css` เป็น `.scss` แล้วไป `import` ในไฟล์ `main.scss`
ของธีม)

![รวม CSS ของ icon font ในไฟล์ main.css](images/include-icon-font-css.png)

- ☺ จำนวน http request ลดลง 1 request
- ☺ ขนาดไฟล์ของ icon font ลดลงจาก 55KB เหลือ 4.2KB (woff)

## 2. โหลด Google Fonts แบบ asynchronous

แทนที่การใช้ tag `<link>` เพื่อโหลดไฟล์ CSS จาก Google Fonts ด้วยการใช้ [Web Font Loader][webfontloader]
ซึ่งใช้ JavaScript แทน ข้อดีก็คือไฟล์จะถูกโหลดเข้ามาแบบ asynchronous ทำให้ไม่ไป block การ
render ของเพจ (non-blocking) ส่วนข้อเสียก็คือ ต้องมี request `webfont.js` เพิ่มเข้ามา
อีกประมาณ 6.3KB ครับ

แทนที่ (ใน tag `<head>`)

{{< highlight html >}}
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
{{< / highlight >}}

ด้วย

{{< highlight html >}}
<script>
  WebFontConfig = {
    google: {
      families: [
        'Source+Sans+Pro:400,700,400italic,700italic:latin'
      ]
    }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
</script>
{{< / highlight >}}

(ในหน้า quick use ของ Google Fonts มี code ข้างบนให้ครับ)

- ☺ CSS ของ web font ถูกโหลดเข้ามาแบบ non-blocking
- ☹ ต้องใช้ JavaScript

## 3. ใช้ `loadCss` เพื่อโหลด CSS แบบ asynchronous

หลักการเดียวกันกับ web font load คือใช้ JavaScript เพื่อดึงไฟล์ CSS เข้ามาในเพจแทนการใช้
tag `<link>` ด้วยการใช้ [loadCss][loadcss] ซึ่งเป็น function ในการโหลดไฟล์ CSS แบบ asynchronous ครับ

วิธีการใช้งานก็แค่ copy &amp; paste function loadCss ไว้ใน tag `<head>` ของเราเลย
ขนาดของ function loadCss เล็กมากจนใส่แบบ inline ไปในเพจเลยก็ยังได้ (minify แล้วเหลือประมาณ 0.5KB)

{{< highlight html >}}
<!-- ใน <head> -->
<script>
  function loadCSS(e,n,o,t){"use strict";var d=window.document.createElement("link"),i=n||window.document.getElementsByTagName("script")[0],s=window.document.styleSheets;return d.rel="stylesheet",d.href=e,d.media="only x",t&&(d.onload=t),i.parentNode.insertBefore(d,i),d.onloadcssdefined=function(n){for(var o,t=0;t<s.length;t++)s[t].href&&s[t].href.indexOf(e)>-1&&(o=!0);o?n():setTimeout(function(){d.onloadcssdefined(n)})},d.onloadcssdefined(function(){d.media=o||"all"}),d}
</script>
{{< / highlight >}}

แล้วเรียก function loadCss กับไฟล์ CSS ของเรา ซึ่งก็ควรมี tag `<noscript>` เป็น fallback สำหรับ
user ที่ไม่มี JavaScript (หรือปิดไว้) เพื่อโหลดไฟล์ CSS ด้วย tag `<link>` ตามปกติครับ

{{< highlight html >}}
<!-- ใน <head> -->
<script>
  loadCSS('/css/main.css');
</script>
<noscript>
  <link rel="stylesheet" href="/css/main.css" media="all">
</noscript>
{{< / highlight >}}

- ☺ CSS ถูกโหลดเข้ามาแบบ non-blocking (asynchronous)
- ☹ ต้องใช้ JavaScript

เท่ากับว่า ถึงตอนนี้ในเพจไม่มี render-block resource เหลืออยู่เลย เพราะทุกอย่างถูกโหลดแบบ
asynchronous ซะหมด

**แต่เดี๋ยวก่อน!**

เนื่องจากไฟล์ `main.css` ถูกโหลดเข้ามาด้วย JavaScript ดังนั้นจะมีเวลาเสี้ยววินาทีที่ function loadCss ยัง
ไม่ทำงาน แต่ browser เริ่ม render ไปแล้ว ทำให้เพจดูเละๆ (เพราะ ณ ตอนนั้นยังไม่มี CSS เลย)
เพียงชั่วครู่ ก่อนจะถูก paint ทับด้วย CSS เมื่อ loadCss ทำงานเสร็จ เรียกเหตุการณ์นี้ว่า FOUC
หรือ Flash of Unstyled Content แม้จะเพียงเสี้ยววินาที แต่ก็สังเกตเห็นได้ และดูไม่ค่อยดีต่อ user ครับ

![fouc](images/unstyled-content.png)

แก้ไขได้โดยการแยกเอา CSS เฉพาะส่วนที่จำเป็นจริงๆ กับการ render ออกจากไฟล์ CSS หลัก
แล้ว inline เข้าไปในเพจครับ ซึ่ง CSS ส่วนนี้เราเรียกว่าเป็น CSS ใน Critical Rendering Path จ้า

## Critical Rendering Path ?

โดยปกติแล้ว content ส่วนแรกที่ user จะมองเห็นเป็นสิ่งแรกก็คือ content ที่อยู่เหนือขอบล่างของ browser
เป็น content ที่มองเห็นได้โดยไม่ต้อง scroll ลงมา เราเรียก content ส่วนนี้ว่า initial view หรือ
above the fold content ครับ หรือพูดง่ายๆ ก็คือ content ที่อยู่ใน viewport แรกนั่นเอง

Critial Rendering Path ตามความหมายแล้วคือ ส่วนประกอบต่างๆ ที่จำเป็นที่สุดสำหรับการ render initial view

- ถ้าเป็น HTML ก็นับเฉพาะ element ที่อยู่ใน initial view
- ถ้าเป็น CSS ก็นับเฉพาะ property ของ element ที่อยู่ใน initial view
- ส่วน JavaScript ก็เหมือนกัน เฉพาะที่เกี่ยวข้องกับ content ใน initial view

ขนาดของ initial view นั้นก็แปรไปตามขนาดของ browser หรือ viewport ดังนั้น critical rendering path
ของแต่ละ browser/viewport/device ก็ต่างกันออกไปครับ

แล้วเราจะรู้ได้ยังไงว่า CSS ส่วนไหนบ้างที่จำเป็นสำหรับ render initial view? คำตอบก็คือ ใช้ tool ช่วย
generate critical CSS ออกมาจากไฟล์ CSS เต็มครับ มีตัวเลือกมากมายหลายตัวเลย

- [Penthouse][penthouse] ใช้ง่านผ่าน node module/Grunt/Gulp สามารถระบุขนาดของ viewport ที่ต้องการเอา Critical CSS ออกมาได้
- [Devtools Snippet][critical-css-snippet] รันใน Chrome Devtools ระบุขนาด viewport ไม่ได้ จะใช้ขนาด viewport ปัจจุบัน
- [Critical Path CSS Generator][generator] ใช้บนเว็บได้เลย ผมเลือกใช้ตัวนี้เพราะง่ายที่สุดครับ แต่ก็ระบุขนาด viewport ไม่ได้นะ

วิธีการใช้งานก็ตามที่บอกในเว็บเลย ใส่ URL ของหน้าเพจที่ต้องการ generate critical CSS พร้อมกับใส่
content ของ CSS ฉบับเต็มๆ ลงไป เจ้าเว็บนั้นก็จะดึงเอามาเฉพาะ critical CSS ให้ครับ (อย่าง CSS ของผม 9KB generate critical CSS แล้วได้ออกมา 3KB)

![generated css](images/generated-critical-css.png)

Critical CSS ที่ได้ออกมานั้น ก็จับใส่ tag `<style>` ใส่ไว้ใน `<head>` ของเพจเลยครับ นั่นหมายความว่า **ไฟล์ HTML จะมีขนาดใหญ่ขึ้น
และ CSS ที่เราใส่ไว้ใน `<head>` ก็จะไม่ถูก cache ไว้โดย browser** เพราะฉะนั้นต้องระวังไม่ให้ critical CSS มีขนาดใหญ่เกินไปด้วยครับ

> ไม่มี tool ตัวไหนที่แม่นยำ 100% ต้องลองดูหลายตัว/หลายครั้ง แล้วเปรียบเทียบผลลัพธ์ดูครับ

## ผลลัพธ์

PageSpeed score เพิ่มขึ้นมาจาก 73 เป็น 94

![PageSpeed score หลัง optimize](images/pagespeed-after-optimize.png)

ทดสอบกับ webpagetest.org: ถึงแม้เวลา first byte จะช้ากว่า (1 วินาที) แต่เวลาที่ start render นั้นไวกว่าก่อน optimize อยู่ที่ประมาณ 1.5 วินาที

![ผลทดสอบกับ webpagetest.org](images/webpagetest-results.png)

ทดสอบกับ YSlow

![ผลทดสอบกับ YSlow](images/yslow-results.png)

ที่สำคัญคือลองโหลดเพจแล้วรู้สึกว่าเร็วขึ้นอย่างสัมผัสได้! (ถ้าไม่ได้คิดไปเองนะ) .. ถ้าใช้งานกับเว็บที่ scale ใหญ่กว่านี้ น่าจะเห็นความแตกต่างได้มากกว่านี้ด้วยครับ ลองเล่นกันดูได้ ทำง่ายๆ ได้ที่บ้าน ไม่เสียเวลาเยอะอย่างที่คิด :P

#### อ่านเพิ่มเติม

- [Critical Rendering Path: Google Developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en)
- [Critical Rendering Path: feedthebot.com](https://www.feedthebot.com/pagespeed/critical-render-path.html)
- [Website Performance Optimization: The Critical Rendering Path (Udacity)](https://www.udacity.com/course/website-performance-optimization--ud884)

[hyde-link]: http://hyde.getpoole.com/ "Hyde"
[type-link]: https://rohanchandra.github.io/project/type/
[pagespeed]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Farmno.github.io%2F
[webpagetest]: http://www.webpagetest.org/
[fontawesome]: http://fontawesome.io/
[icomoon]: https://icomoon.io/
[webfontloader]: https://github.com/typekit/webfontloader
[loadcss]: https://github.com/filamentgroup/loadCSS

[penthouse]: https://github.com/pocketjoso/penthouse
[critical-css-snippet]: https://gist.github.com/PaulKinlan/6284142
[generator]: http://jonassebastianohlsson.com/criticalpathcssgenerator/

---
title: "ลองใช้ IntersectionObserver โหลด Disqus Comments"
date: 2019-06-26T20:25:44+07:00
url: /2019/06/26/lazy-load-disqus
description: ใช้ IntersectionObserver เพื่อ lazy load Disqus comment เมื่อ scroll ลงไปถึงด้านล่างของโพสต์
thumbnail: images/before.jpg
tags:
- JavaScript
- performance
- Disqus
- blog
- IntersectionObserver
---

[Disqus](https://disqus.com/) เป็น service ที่ทำให้เราสามารถ embed comments ในบล็อกหรือเว็บไซต์ที่เป็น static HTML ได้

หลักการก็คือเราแปะ universal embed code ของ Disqus ที่สร้าง `<script>` element แค่อันเดียวลงไปใน template
แล้ว script ตัวนั้นมันก็จะ generate ทั้ง comment form
รวมถึง comment list ให้เสร็จ

แต่จริงๆ ไฟล์ที่ถูกโหลดมันไม่ได้มีแค่ไฟล์นี้ไฟล์เดียว เพราะไฟล์นี้มันก็ไปโหลดไฟล์อื่นๆ มาอีก

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/before.jpg"
  alt="before"
  ratio="16-10"
>}}

<p class="message--warning">
  <a href="https://css-tricks.com/lazy-loading-disqus-comments/#comment-1605581">ผู้พัฒนา Disqus ชี้แจงใน css-tricks.com</a>ว่า
  ไฟล์อื่นๆ ที่โหลดเพิ่มเข้ามา จะไม่ทำให้การ render ช้าลง (ถูกโหลดแบบ async อยู่หลัง event <code>DOMContentLoaded</code>)
และไฟล์ส่วนมากก็อยู่บน CDN ของ Disqus ซึ่งก็อาจจะถูก browser cache ไว้อยู่แล้ว กรณีที่เราเคยเปิดเว็บอื่นที่มี Disqus comment เหมือนกัน
</p>

ถึงแม้อาจจะมีผลกระทบเรื่อง performance ไม่มากนัก แต่ผมก็ยังคิดว่ามันคงจะดีกว่า ถ้าเราให้ user โหลดมันเมื่อจำเป็นต้องใช้เท่านั้น

นั่นก็คือ เมื่อ user scroll ลงไปถึงกล่อง comment ด้านล่าง ถึงค่อยโหลด Disqus นั่นเอง

## IntersectionObserver

เราสามารถใช้ [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) เพื่อบอกว่า ให้จับตามอง (observe) กล่อง comment ไว้
ถ้าแกถูกเลื่อนขึ้นมาอยู่ใน viewport เมื่อไหร่ ให้ไปเรียก callback function ที่เตรียมไว้นะ

callback zfunction ที่เตรียมไว้จะเป็นอะไรก็ได้ ในกรณีของผมก็คือ function สำหรับการโหลด Disqus comment

> ถ้าเป็นเมื่อก่อน เราอาจต้องใช้ scroll event ร่วมกับ event handler function
โดยการเทียบค่า scroll offset ของทั้งตัว element เอง และ `window` object
เพื่อเช็คว่า มันเข้ามาอยู่ใน viewport แล้วหรือยัง วุ่นวายพอสมควร (ตัวอย่าง [jQuery](https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2),
[Vanilla JS](https://medium.com/@LewisCowles1/i-also-used-the-concept-but-abandoned-jquery-for-vanilla-js-b55f638586fe))

### 1. เลือก target element ที่ต้องการ observe

การใช้ IntersectionObserver จะมี element ที่เกี่ยวข้อง 2 ตัวคือ

- `root`: element อ้างอิง หรือมองว่าเป็น "กรอบ" ก็ได้ จะเป็น element ที่เป็น scroll container หรือ viewport ก็ได้ครับ
- `target`: element ที่ต้องการ observe ว่ามันเลื่อนเข้าไปอยู่ในกรอบแล้วหรือยัง

ขั้นแรกเลือก target ก่อนเพื่อบอกว่า เราต้องการ observe เจ้ากล่อง comment นะ

```js
const target = document.querySelector('#comments');
```

กล่อง comment ก็เป็น `<div>` element ที่มี `page-url` กับ `identifier` ที่ Disqus จำเป็นต้องใช้

```html
<div id="comments"
  class="comments"
  data-page-url="{{ .Permalink }}"
  data-identifier="{{ .File.UniqueID }}">
  <div id="disqus_thread"></div>
</div>
```

### 2. สร้าง `observerOptions` object

เป็นตัวกำหนด behavior ของการ scroll

```js
const observerOptions = {
  root: null,
  rootMargin: '250px 0px 0px',
  threshold: 0
};
```

- `root: null`: element ที่เราต้องการมองเป็น "กรอบ" ใช้เป็นตัวอ้างอิงตำแหน่งการ scroll ส่วนการที่ให้ root เป็น `null` เพื่อบอกว่า ให้ document viewport ทำหน้าที่เป็นกรอบที่เราต้องการเช็ค
- `rootMargin: '250px 0px'`: เป็นการขยายขนาของกรอบ `root` เพื่อเผื่อระยะด้านบนและล่างไว้ 250px ทำให้ callback เริ่มทำงานก่อน scroll จะถึงตัว element จริงๆ (syntax เหมือน CSS margins/paddings แต่ว่าจำเป็นต้องใส่หน่วยให้กับ `0px`)
- `threshold: 0`: ให้ callback ทำงานเมื่อ element เริ่มโผล่เข้ามาใน viewport หรือ 0%

`threshold` มีค่าตั้งแต่ 0 ถึง 1

- ถ้าให้เป็น 0 หมายถึง ให้เรียก callback เมื่อ element เข้ามาในกรอบ 0%
- ถ้าให้เป็น 1 หมายถึง ให้เรียก callback เมื่อ element เข้ามาในกรอบ 100%

### 3. สร้าง observer จาก ​`IntersectionObserver`

จากนั้นก็สร้าง object `observer` จาก `IntersectionObserver` โดยส่ง parameter เข้าไป 2 ตัว

```js
const observer = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // load disqus
    }
  });
}, observerOptions);
```

1. `callback function`: function ที่จะถูกเรียกเมื่อ element เข้ามาอยู่ใน viewport
2. `observerOptions`: object ที่เราสร้างไว้ในขั้นตอนก่อนหน้านี้

ข้อสังเกตก็คือ `entries` ซึ่งเป็น argument แรก ของ callback function นั้นเป็น array
ส่วน argument ที่สอง `self` ก็คือตัว observer object เอง

ใน callback function ก็วนลูปทุกๆ entries อีกที แล้วเช็ค property `isIntersecting` (boolean)
ที่จะมีค่าเป็น `true` เมื่อ element เข้ามาใน viewport ตามเงื่อนไขต่างๆ ที่เรากำหนดไว้ใน `observableOptions`

### 4. Observer.observe()

สุดท้ายแล้วก็ต้องบอก `observer` ว่าต้องไปจับ element ที่เลือกไว้ในขั้นตอน 1. ด้วย method `observe()`

```js
observer.observe(target);
```

### 5. loadDisqus()

ย้าย embed code ของ Disqus มาไว้ใน function (ส่วน `pageURL` กับ `id` ก็เก็บมาจาก data attribute ของกล่อง comment ข้างบน)

```js
function loadDisqus(pageURL, id) {
  window.disqus_config = function() {
    this.page.url = pageURL;
    this.page.identifier = id;
  };

  (function() {
    // DON'T EDIT BELOW THIS LINE - ¯\_(ツ)_/¯
    var d = document,
      s = d.createElement('script');
    s.src = 'https://armnointh.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
```

### code ทั้งหมดรวมกัน

เนื่องจาก IntersectionObserver จะทำงานทั้งเลื่อนขึ้นและเลื่อนลง และทำงานไปเรื่อยๆ ถ้า element นั้นผ่านไปผ่านมาใน viewport

แต่เราจำเป็นต้องเรียก `loadDisqus()` แค่ครั้งเดียว ถ้าโหลดแล้วเราก็ไม่จำเป็นต้อง observe อีกต่อไปให้สิ้นเปลือง

เรียก method `self.unobserve()` เพื่อหยุดการทำงานของ observer

{{< highlight javascript "hl_lines=16 21" >}}
const commentsElement = document.querySelector('#comments');
if (!commentsElement) {
  return;
}

const observerOptions = {
  root: null,
  rootMargin: '250px 0px 0px',
  threshold: 0
};

const pageURL = commentsElement.getAttribute('data-page-url');
const identifier = commentsElement.getAttribute('data-identifier');

const observer = new IntersectionObserver(
  (entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.info('loading comments');
        loadDisqus(pageURL, identifier);
        self.unobserve(commentsElement);
      }
    });
  },
  observerOptions
);

observer.observe(commentsElement);

function loadDisqus(pageURL, id) {
  window.disqus_config = function() {
    this.page.url = pageURL;
    this.page.identifier = id;
  };

  (function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document,
      s = d.createElement('script');
    s.src = 'https://armnointh.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
{{< /highlight >}}

(หรือดู [main.js](https://github.com/armno/blog/blob/master/themes/lazy/static/js/main.js#L30) ใน repo ก็ได้ครับ)

## ผลลัพธ์

resource ของ Disqus จะถูกโหลดเมื่อ scroll ลงไปถึงกล่อง comment ข้างล่าง
มี delay นิดหน่อยในระหว่างที่ Disqus กำลังโหลด (เพิ่ม `rootMargin` ด้านบนอีกได้ callback function จะได้เริ่มทำงานไวกว่าเดิม)

<video controls width="100%" autoplay controls>
  <source src="images/scroll.webm" type="video/webm">
  <source src="images/scroll.mp4" type="video/mp4">
  Sorry, your browser doesn't support embedded videos.
</video>

ลองใช้ Lighthouse audit ดู (Mobile, 4G, 4x CPU slowdown) ผลออกมาไม่ห่างกันมาก แต่ที่น่าสนใจคือตรงที่ล้อมกรอบไว้
การไม่โหลด Disqus ตั้งแต่แรก ลดเวลา [Time to Interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive) กับ Max Potential [First Input Delay](https://developers.google.com/web/updates/2018/05/first-input-delay) ได้นิดหน่อย
เพราะ CPU ทำงานน้อยลงกว่าเดิม

{{< picture-lazy
  wrapper-class="semi-full"
  src="images/compare.png"
  alt="รูปเปรียบเทียบระหว่างก่อนและหลัง lazy load disqus"
  ratio="16-9"
>}}


## ⚠️ ข้อควรระวัง

มีข้อดีแล้วก็มีข้อที่ควรต้องระวังบ้าง

<div class="message--warning">
  <ul>
    <li>direct link ไปยัง ID ของ comment จะหยุดทำงาน เช่น <code>https://url.com/#comment-8374</code> เวลาเพจโหลดเสร็จ มันจะไม่เลื่อนลงไปหา comment ให้เอง เนื่องจากมันยังไม่ได้โหลด</li>
    <li>SEO: <a href="https://www.quora.com/Does-Disqus-help-SEO-for-a-website">comment ของ Disqus นั้นถูก googlebot index ได้</a> และถึงแม้ว่า <a href="https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html">googlebot เข้าใจ IntersectionObserver แล้ว</a> แต่ผมไม่ใจว่ามัน scroll เป็นด้วยไหม จึงมีโอกาสทำให้ googlebot พลาดการ index content ของ comment ใน Disqus ได้</li>
    <li>IE11 <a href="https://caniuse.com/#search=intersectionobserver">ไม่ support</a> IntersectionObserver แต่ผมลองเทสต์ใน Edge  ดูแล้วไม่มีปัญหาอะไร</li>
  </ul>
</div>

ดังนั้นถ้าอยากเอา IntersectionObserver ไปใช้งานจริงจัง ก็ต้องหาทาง support ส่วนที่หายไปอีกทีครับ

สำหรับบล็อกโนเนมแบบบล็อกนี้ ทั้ง 3 ข้อถือว่าไม่เป็นปัญหาเลย เพราะปกติไม่ค่อยมีคน comment อยู่แล้ว 😅

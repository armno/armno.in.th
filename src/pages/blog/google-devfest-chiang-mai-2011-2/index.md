---
categories:
- Web Development
comments: true
date: 2011-09-26T23:32:08Z
description: ไปงาน Google DevFest 2011 มาเหมือนกันครับ ต้องขอจดบันทึกไว้ (ไม่งั้นลืมแน่นอน)
  เอาเท่าที่จดทันนะครับ ผิดถูกตรงไหน รบกวนบอกด้วยครับ .. อ้อ ไม่ได้ถ่ายรูปมา เพราะว่าไม่ได้ติดกล้องไปด้วยในวันงานครับผม
slug: google-devfest-chiang-mai-2011-2
tags:
- DevFest 2011
- Google
- Google Analytics
- HTML5
- JavaScript
title: บันทึก Google DevFest Chiang Mai 2011 ตอนที่ 1
url: /2011/09/26/google-devfest-chiang-mai-2011-2/
---

ไปงาน Google DevFest 2011 มาเหมือนกันครับ ต้องขอจดบันทึกไว้ (ไม่งั้นลืมแน่นอน) เอาเท่าที่จดทันนะครับ ผิดถูกตรงไหน รบกวนบอกด้วยครับ .. อ้อ ไม่ได้ถ่ายรูปมา เพราะว่าไม่ได้ติดกล้องไปด้วยในวันงานครับผม

## Bleeding Edge HTML5

### requestAnimationFrame API

เดิมทีเรามักใช้ฟังก์ชั่น `setTimeout` ในการทำงานกับ animation ให้เป็นลูปไปเรื่อยๆ แต่สำหรับ HTML5 มี API ใหม่เรียกว่า `requestAnimationFrame` สำหรับใช้ทำ animation โดยเฉพาะ ซึ่ง output ที่ได้นั้น ไม่ต่างกับการใช้ `setTimeout` แต่สิ่งที่พัฒนาจากเดิมคือ performance ที่เพิ่มขึ้นหลายเท่าตัว (ในงานโชว์ด้วย frame rate)

การใช้งาน เรียกใช้ผ่าน window object ได้เลย

<pre><code class="language-javascript">window.requestAnimationFrame(time, callbackFunction, boundingElement);</code></pre>


ดูเพิ่มเติมที่ Paul Irish blog ครับ [requestAnimationFrame for smart animating
](http://paulirish.com/2011/requestanimationframe-for-smart-animating/)

### Page Visibility API

เป็นตัว detect visibility ของแต่ละ page (tab) ว่าถูก user ใช้งานอยู่หรือเปล่า ประโยชน์หลักๆ ของมันก็คือ เราสามารถกำหนดการทำงานของ script บางอย่าง ให้ทำงานเฉพาะเวลาที่มี user กำลังใช้งานหน้านั้นอยู่ [คำอธิบายที่ Google Code](http://code.google.com/chrome/whitepapers/pagevisibility.html) ยกตัวอย่างไว้เช่น การทำงานของ slide show javascript ซึ่งหาก user ไม่ได้ใช้งานหน้านั้นอยู่ (เปิดทิ้งไว้ แต่ดู tab อื่น) ตัว slide show ก็ไม่จำเป็นต้องทำงาน .. ประโยชน์อย่างนึงก็น่าจะเป็นการลดภาระของเครื่องลงได้ครับ

การใช้งานก็โดยการใส่ event listener ให้กับ document object ครับ

<pre><code class="language-javascript">document.addEventListener('webkitvisibilitychange', callbackFunction, false);</code></pre>

ซึ่งสถานะของ page visibility ก็มี 3 สถานะคือ `visible`, `hidden`, แล้วก็ `prerender` ครับผม

### Prerender API

มันเป็น API เมพช่วยให้เพจหนึ่ง (เหมือน) โหลดไวขึ้น ด้วยการระบุ URL ให้เพจของเราไปดูดข้อมูลของ URL นั้นๆ มาเตรียมไว้ก่อน (ในงานโชว์ด้วยว่าเมื่อใช้ API นี้ จะมี process เพิ่มขึ้นมาอีก 1 อัน แต่มองไม่เห็นใน browser) .. ซึ่งพอเราลิงก์ไปยัง URL ที่ดูดมาแล้ว เพจมันก็จะโหลดเสร็จใน (เกือบ) ทันที ซึ่งแน่นอนว่าตอนที่ prerender นั้น มีการใช้ทรัพยากรเครื่องเพิ่มขึ้นด้วย .. (แต่ก็คุ้มนะ ว่ามั้ย)

วิธีใช้ก็โคตรจะง่าย แค่ใส่ URL ของหน้าที่ต้องการ prerender ไว้ตรง tag head ครับ

<pre><code class="language-markup">&lt;link rel="prerender" href="https://armno.in.th/"&gt;</code></pre>

ลองไปเล่น API นี้ได้ที่ [http://prerender-test.appspot.com/](http://prerender-test.appspot.com/)

### onLine/offLine API

เป็นอีกหนึ่ง API เมพขิงจิงเจอร์เบรด ที่สามารถเช็คว่าเครื่องที่ใช้งานอยู่ เชื่อมต่ออินเตอร์เน็ตอยู่หรือไม่ วิธีใช้งานนั้นไม่ยาก เพียงแค่คุณมีคอมพิวเตอร์ คุณก็สามารถเรียกใช้ API นี้ได้ง่ายๆ ที่บ้านได้แล้ว (พูดพร้อมคลี่แบงค์พัน)

เช็คว่า user นั้น online หรือ offline จาก `window.navigator` object ซึ่งจะ return เป็น boolean กลับมาให้

<pre><code class="language-javascript">var online = window.navigator.onLine;
if (online) {
    alert('user is online');
} else {
    alert('user is offline');
}</code></pre>

ตัวอย่างการใช้งานอีกแบบ คือการเพิ่ม event listener ให้กับ `window` object เลย หน้าที่ของเราก็แค่เขียน callback function ขึ้นมาเมื่อ event `online` หรือ `offline` ถูก trigger ให้ทำงาน

<pre><code class="language-javascript">window.addEventListener('online', syncWithServer);
window.addEventListener('offline', turnOnLocalStorage);</code></pre>

ใช้งานร่วมกับ local storage ได้เป็นอย่างดี ทำให้สามารถใช้งาน web app ได้อย่างต่อเนื่อง แม้เน็ตจะล่มระหว่างทาง

### Web Intents

เป็นตัวเชื่อมต่อกับ web services ต่างๆ สำหรับงานที่ต้องทำบ่อยๆ อย่างเช่น การ log in, การค้นหา หรือการอัพโหลด/ปรับแต่งรูปภาพออนไลน์ ตรงนี้ผมไม่แน่ใจนะครับว่าการใช้งานจริงต้องทำยังไงบ้าง ยังไม่มี browser ตัวไหนรองรับ ต้องใช้ JavaScript polyfill หาได้จาก [http://webintents.org/](http://webintents.org/) ครับผม

ถ้าให้เดา น่าจะต้องสร้าง intent object ใน document ของเราก่อน

<pre><code class="language-markup">&lt;intent
  action="http://webintents.org/share"
  type="image/*"
  href="share.html"
 /&gt;</code></pre>

แล้วถึงค่อยใช้ JavaScript ในการเรียกให้ intent object นั้นทำงาน

<pre><code class="language-javascript">var intent = new Intent("http://webintents.org/share",
  "text/uri-list",
  "http://news.bbc.co.uk");
window.navigator.startActivity(intent);</code></pre>

งงมั้ยครับ ถ้าคุณงง ผมก็งง .. ลองโค้ดดูแล้ว ยังไม่มีอะไรเกิดขึ้น นอกจาก log ที่ console

### Fullscreen API

(ใหม่มาก หาข้อมูลแทบไม่เจอเลย จดไม่ทันด้วย) น่าจะเอาไว้ทำงาน presentation ซึ่งเราสามารถเรียกใช้งาน fulllscreen mode ของแต่ละ element ใน browser เช่นพวก video ทั้งหลาย เมื่อกดเข้าสู่ fullscreen mode ก็จะขยาย video ให้เต็มกับกรอบ browser (ไม่เหมือนกับกด fullscreen ของ Youtube ที่เต็มจอไปเลย) ลองดูตัวอย่างที่ [Sublimevideo](http://sublimevideo.net/demo) ดู ไม่รู้เหมือนกันว่า API นี้จะรวมไปถึงขอบเขตของคำว่า fullscreen ไปถึงการใช้งานรูปแบบอื่นด้วยหรือเปล่า

### Web Audio API

API นี้สามารถแตกไฟล์ audio ออกมาในระดับ bit เพื่อนำข้อมูลแต่ละ bit นั้นไปใช้งานต่อ เช่น งานวิเคราะห์เสียงแบบ real-time การจำลอง effect ของคลื่นเสียง โดยใช้ความสามารถของ HTML5 + CSS3 transformation & animation ก็สามารถใช้ข้อมูลแต่ละ bit ของไฟล์เสียงนั้น ไป manipulate เป็น information รูปแบบอื่นๆ ได้ .. ในงานโชว์ Social DJ ก็น่าสนใจดี

ต่อไป เป็นส่วนของ [Google Analytics](http://www.google.com/analytics) API ครับผม

## Google Analytics API

### Event Tracking

เก็บข้อมูลในระดับ user action ตัวอย่างในงาน ใช้เก็บข้อมูลการคลิกลิงก์ออกไปยังเว็บไซต์อื่นของ user หรือสำหรับหน้าเพจที่ URL ไม่เปลี่ยน หากเราต้องการรู้ว่า user นั้นทำอะไรกับหน้านั้นบ้าง ทำได้โดยการเขียน observer ให้กับ element พร้อมกับ callback function ที่บันทึกข้อมูลไปที่ Google Analytics

<pre><code class="language-javascript">// add event tracking on any links going to another sites
link.observe('click', trackEventFunction);
function trackEventFunction() {
    _gaq.push(['_trackEvent', 'Outbound Links', 'click', this.href);
}</code></pre>

สามารถนำไปประยุกต์ใช้อย่างอื่นเช่น HTML5 video player เพื่อดูว่าแต่ละปุ่มใน control (เช่น play, pause, replay) มีปุ่มไหนที่ถูกใช้งานบ่อยๆ บ้าง ซึ่งเราก็อาจจะนำข้อมูลตัวนี้ไปตัดสินใจว่า ควรให้ความสำคัญกับปุ่มใดมากกว่ากัน

### Custom Variables

ฟังไม่ค่อยรู้เรื่องครับ แต่เหมือนจะเป็นการ tag user อะไรซักอย่างเนี่ยแหละ ใครอ่าน code เข้าใจบอกผมด้วยนะครับ

<pre><code class="language-javascript">// adding additional tags to users
_setCustomVar(
    index, // 1-5, block to store data
    name,
    value,
    opt_scope // scope/level of tracking
);</code></pre>

### TrackSocial

เอาไว้เก็บข้อมูลการใช้งาน Social Widgets (ปุ่ม share ยอดฮิตทั้งหลาย) ว่ามีการใช้งานอย่างไรบ้าง

<pre><code class="language-javascript">// how social plugins are used
_trackSocial(
    network, //facebook, g+, email
    action, // like, +1, share
    target_url // url of the acition
);</code></pre>

### Campaign Variables

ตัวแปรยึดๆ ยาวๆ ที่เห็นต่อท้ายตาม url ต่างๆ ไม่ว่าจะเป็น `utm_source`, `utm_medium`, `utm_campaign`, `utm_keyword` และก็ `utm_content` ผมก็เพิ่งรู้นี่แหละว่ามันเอาไว้ track ว่า traffic ที่เข้ามาที่เว็บไซต์เรานั้น มาจากทางไหน campaign อะไรที่เราทำ อย่างเช่นผมจัด campaign โปรโมตบล็อกจากหน้า fan page อาจจะใส่ `utm_campaign` เป็น fanpage ซึ่งตัวนี้สำคัญกับการวิเคราะห์ผล campaign ของทาง marketing มากๆ

### Page Load Time

ทำไปได้ ง่ายๆเลย ตามชื่อครับ เก็บข้อมูลเวลาการโหลดเพจของเรา .. โหลดไว ได้เปรียบ

<pre><code class="language-javascript">_gaq.push(['_trackPageLoadTime']);</code></pre>

ตั้งใจว่าจะเขียนทั้งหมดในตอนเดียวเลย พบว่า ไม่สามารถทำได้ครับ แม่งจะโคตรยาว ขอจบตอนนี้ไว้แค่นี้ก่อน ไว้พบกันใหม่ตอนต่อไป สำหรับวันนี้ ขอลาไปก่อน สวัสดีครับ

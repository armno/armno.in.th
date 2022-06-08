---
title: "VSCode: Tree Indent Settings"
pubDate: 2019-10-29T10:21:53+07:00
url: /2019/10/29/vscode-indent-settings
description: ทำให้ File Explorer (Sidebar) ของ VSCode ดูง่ายขึ้นอีกนิด ด้วยการเพิ่มค่า indent size หรือจะเอาไว้แกล้งเพื่อนก็ได้ครับ
thumbnail: /images/vscode-indent-settings/indent-guide-on.png
tags:
- coding
- vscode
- editor
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

ปกติ File Explorer (sidebar) ของ VSCode จะแสดง tree view ประมาณรูปข้างล่างนี้
(ขึ้นอยู่กับ theme ที่ใช้ด้วย ผมใช้ Material Theme Darker High Contrast)

<Picture
  src="/images/vscode-indent-settings/default.png"
  width="354"
  alt="default tree view ของ vscode"
  caption="Default Tree View ของ VSCode"
/>

เวลามีไฟล์เยอะๆ หรือโปรเจ็คที่เป็น CMS หรือ Framework ที่มีโฟลเดอร์ซ้อนกันเยอะๆ อาจจะดูยากไปนิด
เราสามารถทำให้มันดูง่ายกว่าเดิม ด้วยการเพิ่มระยะ indent ของ tree view

1. เปิด Settings ด้วย <kbd>Cmd/Ctrl</kbd> + <kbd>,</kbd>
2. Search หาคำว่า `tree indent` จะเจอ option `Workbench › Tree: Indent` อยู่
3. ค่า default เป็น `8` (px) ลองปรับเพิ่มขึ้นดูตามชอบ

<Picture
  src="/images/vscode-indent-settings/tree-indent.png"
  width="403"
  alt="เปิด settings หาคำว่า tree indent"
  caption="เปิด Settings ของ VSCode แล้วหาคำว่า tree indent"
/>

ผมชอบที่ `20` pixel ดูกว้างไปหน่อยแต่ก็เห็นชัดดี

<Picture
  width="355"
  src="/images/vscode-indent-settings/indent-adjusted.png"
  alt="หลังจากปรับ indent เป็น 20 แล้ว ดูง่ายสบายตา"
  caption="Tree View หลังจากปรับ indent เป็น 20 แล้ว ดูง่ายสบายตา"
/>

จริงๆ เราสามารถเปิด Indent Guide ร่วมด้วยได้ ก็จะเห็นเส้นโยงแต่ละ folder level ได้ด้วย
ก็จะเห็นชัดกว่าเดิม (แต่ปกติผมจะปิดเส้นนี้ไว้เพราะมันดูรกหูรกตา  )

<Picture
  width="825"
  src="/images/vscode-indent-settings/indent-guide-on.png"
  alt="indent 20 พร้อมกับเปิด indent guide"
  caption="Indent 20 พร้อมกับเปิด indent guide"
/>

## แกล้งเพื่อน

เราสามารถแกล้งเพื่อนที่ใช้ VSCode ได้ด้วยการย่องที่คอมฯ ของเพื่อน แล้วเข้าไปแอบเปลี่ยน indent size เป็น **0**

แล้วทุกไฟล์/โฟลเดอร์ก็จะดูเหมือนอยู่ level เดียวกันหมด

<Picture
  width="350"
  src="/images/vscode-indent-settings/zero-indent.png"
  alt="ปรับ indent เป็น 0"
  caption="ปรับ indent เป็น 0 เพื่อแกล้งเพื่อน"
/>

ไม่รับประกันว่าเพื่อนจะฮาด้วยรึเปล่านะ 🤞🏼

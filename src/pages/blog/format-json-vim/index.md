---
cover-image: images/format-json-in-vim.png
date: 2016-01-25T00:00:00Z
description: การ format file JSON (จัดให้เป็นระเบียบ, uncompressed, prettify) ปกติเป็นงานที่ผมไม่ได้ทำใน
  Vim ต้องพึ่ง editor ตัวอื่น แต่ด้วยความสงสัยก็เลยลองค้นหาวิธีในเน็ตดู ก็พบว่ามีหลายทางให้เลือก
  และก็ไม่อยากเลย
published: true
tags:
 - JSON
 - Vim
 - Editor
 - Code Formatting
thumbnail: images/format-json-in-vim.png
title: จัดโค้ด JSON ใน Vim
url: /2016/01/25/format-json-in-vim/
---

การ format file JSON (จัดให้เป็นระเบียบ, uncompressed, prettify) ปกติเป็นงานที่ผมไม่ได้ทำใน Vim
ต้องพึ่ง editor ตัวอื่น (เพราะไม่เคยรู้วิธีการ) แต่ด้วยความสงสัยก็เลยลองค้นหาวิธีในเน็ตดู ก็พบว่ามีหลายทางให้เลือก

สมมุติว่าผมมีไฟล์ JSON ที่ถูก compressed มาไว้แบบนี้

{{< highlight json >}}
[{"model":"x-e1","brand":"fuji","type":"mirrorless"},{"model":"d60","brand":"nikon","type":"dslr"}]
{{< / highlight >}}

ต้องการจะ expand/prettify มันออกด้วย Vim จะต้องทำยังไง

## วิธีที่ 1: ใช้ `json.tool` ใน Python

ในเครื่องถ้าลง Python ไว้ก็จะมี module ที่ชื่อว่า [`json.tool`](https://docs.python.org/2/library/json.html) ใช้ format JSON ผ่าน command line ได้

{{< highlight bash >}}
$ python -m json.tool <FILENAME>

# หรือ
$ cat <FILENAME> | pythone -m json.tool
{{< / highlight >}}

ซึ่งใน Vim เราสามารถ execute command line ได้จาก Ex mode (กด `:` หรือ `Q` ใน Normal mode) ดูรายละเอียดของ command นี้ได้ที่ [Pretty printing JSON in Vim](https://pascalprecht.github.io/2014/07/10/pretty-print-json-in-vim/) ได้เลยจ้า

{{< highlight vim >}}
:%!python -m json.tool
{{< / highlight >}}

ก็จะได้ JSON ที่ format แล้ว

{{< highlight json >}}
[
    {
        "brand": "fuji",
        "model": "x-e1",
        "type": "mirrorless"
    },
    {
        "brand": "nikon",
        "model": "d60",
        "type": "dslr"
    }
]
{{< / highlight >}}

แต่มีข้อสังเกตก็คือ

1. แต่ละ property ของ object ถูกเรียงใหม่ตามตัวอักษร ในไฟล์ตัวอย่างคือ property `brand` ถูกเลื่อนขึ้นมาอยู่ก่อน `model`
2. ไม่สามารถกำหนดจำนวน space ได้ จะเป็น 4 space ตลอด

ผมก็เลยลองหาวิธีอื่นดู เจอ Node module ที่ชื่อว่า `json`

## วิธีที่ 2: ใช้ `json` Node module

ขั้นแรกต้องลง [`json`](https://github.com/trentm/json) Node module แบบ global ก่อน เพื่อให้เราสามารถใช้ command `json` ได้

{{< highlight sh >}}
$ npm install -g json
{{< / highlight >}}

ใช้งานใน Vim จาก Ex mode เหมือนเดิม

{{< highlight vim >}}
:%!json
{{< / highlight >}}

ก็ได้ JSON ที่ format แล้วแบบนี้

{{< highlight json >}}
[
  {
    "model": "x-e1",
    "brand": "fuji",
    "type": "mirrorless"
  },
  {
    "model": "d60",
    "brand": "nikon",
    "type": "dslr"
  }
]
{{< / highlight >}}

สังเกตว่าลำดับของแต่ละ property ยังเหมือนเดิม ส่วนจำนวน space เป็นค่า default คือ 2 space ในการ indent
เราสามารถทำหนดได้ด้วยการส่ง argument ให้ `json` command

{{< highlight vim >}}
:%!json -2         # 2 spaces
:%!json -4         # 4 spaces
:%!json -o json-7  # 7 spaces, กรณีที่ไม่ใช่ 2 หรือ 4
{{< / highlight >}}

## 3. ใช้ `sourcebeautify.vim`

[sourcebeautify.vim](https://github.com/michalliu/sourcebeautify.vim) เป็น plugin ของ Vim ใช้ format code อย่างอื่นนอกจาก JSON ได้ด้วย
(HTML, JavaScript, CSS, JSON, XML, MySQL) แต่ผมยังไม่ได้ใช้เยอะขนาดนั้น เลยยังไม่ได้ลอง
แต่ก็เป็นอีกทางเลือกนึงที่น่าจะใช้ได้ครับ

ใครมีวิธี format JSON ใน Vim วิธีอื่นๆ แนะนำกันได้นะ

### Sources

- [Pretty printing JSON in Vim](https://pascalprecht.github.io/2014/07/10/pretty-print-json-in-vim/)
- [Comparing Command-Line JSON Pretty Printers](http://blog.jpalardy.com/posts/comparing-command-line-json-pretty-printers/)

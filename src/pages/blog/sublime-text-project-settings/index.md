---
cover-image: images/cover.png
date: 2016-09-28T00:00:00Z
description:
  Sublime Text ดูเผินๆ แล้วเป็น text editor ธรรมดา แต่จริงๆ แล้ว ก็มาพร้อมกับฟีเจอร์ในการจัดการโปรเจ็คอยู่อย่างพอเหมาะ
  อาจไม่ครบครันเท่ากับ IDE ทั่วๆ ไป แต่ก็ถือว่าใช้ทำงานได้ดีเลย
published: true
tags:
  - editor
  - sublimetext
  - tools
thumbnail: images/thumbnail.png
title: ใช้ประโยชน์จาก Project Settings ใน Sublime Text
url: /2016/09/28/sublime-text-project-settings/
---

Sublime Text ดูเผินๆ แล้วเป็น text editor ธรรมดา แต่จริงๆ แล้ว ก็มาพร้อมกับฟีเจอร์ในการจัดการโปรเจ็คอยู่อย่างพอเหมาะ
อาจไม่ครบครันเท่ากับ IDE ทั่วๆ ไป แต่ก็ถือว่าใช้ทำงานได้ดีเลย ลองมาดูกัน

ปกติเราจะใช้ Sublime Text เปิด folder หนึ่งขึ้นมา แล้วก็ทำงานกับโปรเจ็คนั้น แต่จริงๆ แล้ว เราสามารถ save folder นั้น
เป็น "project" เหมือนกับ IDE ตัวอื่นๆ ได้

## Save Project As ...

เริ่มจากการเปิด folder ของ project เราขึ้นมาใน Sublime Text ก่อน โดยไปที่เมนู `File` > `Open ...` (`⌘` + `O`)
แล้วเลือก **folder** ของ project ขึ้นมา

จากนั้นไปที่เมนู `Project` > `Save Project As ...` แล้วเซฟไฟล์ไปนามสกุล `.sublime-project`

![save project ใน sublime text](images/01-save-project-as.png)

การสร้าง project ใน Sublime Text จะมีประโยชน์คือ เวลาเราจะสลับไปทำ project อื่น
แทนที่จะต้องเปิด folder ของ project ใหม่ทุกครั้งจาก `⌘` + `O` เราสามารถ "กระโดด" หรือ switch ไปอีก project หนึ่งได้เลย
โดยกด `control` + `⌘` + `p` Sublime Text จะแสดงรายชื่อทุก project ที่เราเคยบันทึกไว้
พอเราจิ้ม project ที่ต้องการ (หรือใช้ arrow key เลื่อนขึ้น-ลง แล้วกด `Enter`)
Sublime Text ก็จะโดดไปอีก project หนึ่งเลย **โดยที่เราไม่ต้องไปจำว่า project นั้นอยู่ path ไหนในเครื่องเรา**
(ตรงนี้สามารถพิมพ์เพื่อ search หา project จากชื่อได้ด้วยนะ)

![เปิด project ใน sublime text](images/02-switch-project.png)

## Project Settings

การสร้าง project ใน Sublime Text นั้นก็เหมือนการ "เลื่อนตำแหน่ง" ให้ folder ธรรมดา นั้นมีความสามารถมากกว่าเดิม
เพราะเมื่อมันเป็น project แล้ว เราสามารถตั้งค่าของ Sublime Text ในแต่ project ให้แตกต่างกันออกไป ตามการใช้งานแต่ละ project ได้

เราสามารถเข้าไปแก้ไข project settings ได้จาก `⌘` + `shift` + `p` แล้วค้นหาคำว่า `Project: Edit Project` แล้วกด `Enter` ครับ
(หรือจากเมนู `Project` > `Edit Project`

![edit project ใน sublime text](images/03-edit-project.png)

ตอนที่เพิ่งสร้าง project ใหม่ ใน project settings จะยังไม่มีอะไร มาดูกันว่าเราสามารถตั้งค่าอะไรให้ project ของเราได้บ้าง

### `folders`

`folders` เป็นการระบุ path ของแต่ละ folder ใน project ซึ่งใน 1 project เราสามารถมีมากกว่า 1 folder ได้
แต่ละ folder นั้นก็มี settings ย่อยไปอีกคือ

- `path` - path ของ folder นั้นในเครื่องของเรา
- `name` - ชื่อของ folder นี้ที่จะไปปรากฏอยู่ในบน sidebar ถ้าไม่ได้ตั้งค่านี้ ตรง sidebar ก็จะแสดงชื่อของ folder
- `folder_exclude_patterns` - รายชื่อของ folder ที่ต้องการซ่อนไว้ไม่ให้แสดงขึ้นมาใน project นอกจากทำให้ไม่รกตรง sidebar แล้ว ยังช่วยให้ Sublime Text ค้นหา file จาก `⌘` + `p` ได้ไวขึ้นด้วย เพราะต้อง index file น้อยลง
- `folder_include_patterns` - ตรงกันข้ามกับ `folder_exclude_patterns` คือจะระุ folder เฉพาะที่ต้องการให้อยู่ใน project แทน folder ที่ไม่ได้มีรายชื่อในนี้ ก็จะถูกซ่อนไว้หมด
- `file_exclude_patterns` - เช่นเดียวกับ `folder_exclude_patterns` แต่เป็นชื่อ file แทน
- `file_include_patterns` - ก็ตรงข้ามกับ `file_exclude_patterns` ครับ โดยที่จะระบุเฉพาะไฟล์ที่อยู่ใน project แทน
- `follow_symlinks` - สำหรับ project ที่มี symlink ไปยัง folder อื่น หากตั้งค่าตัวนี้เป็น `true` ก็จะทำให้ folder ปลายทางของ symlink นั้น เข้ามาอยู่ใน project ด้วยครับ

```json
{
  "folders": [
    {
      "path": "",
      "name": "",
      "folder_exclude_patterns": [],
      "file_exclude_patterns": [],
      "folder_include_patterns": [],
      "file_include_patterns": [],
      "follow_symlink": true
    }
  ]
}
```

### `settings`

ส่วนนี้ทำให้เราสามารถ override global settings ของ Sublime Text สำหรับเฉพาะ project นี้ได้
เราสามารถเอา settings จาก global (`⌘` + `,` หรือจากเมนู `Sublime Text` > `Preferences` > `Settings`)
มาเขียนใหม่ใน settings ของ project ได้ เช่นอาจจะใช้ font หรือ color scheme ที่แตกต่างกันออกไปในแต่ละ project
ก็สามารถทำได้ผ่าน `settings` ของ project ตรงนี้ครับ

### `build_systems`

เป็นการตั้งค่า build script ของ project อย่างเช่น `ant`, `make` หรือแม้กระทั่งฝั่ง frontend อย่าง TypeScript หรือ Gulp ก็ได้
แต่ผมไม่ได้ใช้งานส่วน build tool ของ Sublime Text เลย จึงขอข้ามไปนะครับ
หากสนใจ อ่านเพิ่มเติมได้จากบล็อก [Addy Osmani: Custom Sublime Text Build Systems For Popular Tools And Languages](https://addyosmani.com/blog/custom-sublime-text-build-systems-for-popular-tools-and-languages/) ครับ

## ใช้งาน Project ใน Sublime Text ให้คุ้มค่า

1. **สร้าง project ทุกครั้งเมื่อเริ่มต้น** การสร้าง folder ให้เป็น project นอกจากจะได้ทำให้ตั้งค่าต่างๆ ได้ตามใจชอบมากขึ้นแล้ว ก็ยังทำให้เปลี่ยนไป-มา ระหว่าง folder ทำได้ง่ายขึ้นด้วย
2. **สลับไป-มาระหว่าง project `⌘` + `ctrl` + `p` แทนการเปิด folder จาก finder** เพราะนอกจากจะไม่ต้องจำ path เองแล้ว ยังเร็วกว่าไปจิ้มจาก finder เยอะ
3. **ใช้ `folder_exclude_patterns` กับ vendors** อย่างพวก `node_modules` หรือ file ต่างๆ ของ framework ที่เราไม่จำเป็นต้องแก้ไข รวมไปถึง output folder อย่าง `dist` หรือ `_site`
   จะทำให้ Sublime Text index file จำนวนน้อยลง การเปิด file จาก `⌘` + `p` แล้วค้นหาจะเร็วขึ้นเยอะเลย
4. **ใช้ `file_exclude_patterns` เพื่อซ่อนไฟล์ที่ไม่จำเป็นด้วย** เช่น ไฟล์ที่เป็น output จาก build tool อย่าง `.css` หรือ `.js`
   (ในกรณีทำงานกับ TypeScript)
5. **ใช้ `name` ใน settings เพื่อตั้งชื่อให้ folder** `name` จะมีประโยชน์กับ project ขนาดใหญ่ที่อาจจะมีหลายๆ framework ซ้อนๆ กันอยู่
   เราสามารถสร้าง "folder จำลอง" โดยระบุ `name` กับ `path` ให้กับแต่ละส่วนย่อยของ project ใน sidebar ก็จะแยกกัน ตามดูง่ายดี
6. เรียง folder ใน sidebar ตามลำดับใน `folders` ใน project settings ได้ ซึ่งปกติจะเรียงตามตัวอักษรครับ แต่ถ้าไม่ชอบก็ย้ายลำดับจากใน settings ได้

![ตัวอย่าง project settings](images/04-settings.png)

สำหรับผมแล้ว ฟีเจอร์ Project ของ Sublime Text นั้นถือว่าเป็นฟีเจอร์ที่ได้ใช้บ่อยมาก ช่วยให้ทำงานได้เร็วขึ้นอยู่พอสมควร
ใครมีเทคนิคการใช้ฟีเจอร์ Project เพิ่มเติม มาแนะนำกันได้นะครับ :)

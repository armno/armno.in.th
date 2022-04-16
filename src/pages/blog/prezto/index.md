---
date: 2015-03-24T00:00:00Z
description: ปกติผมใช้ zsh คู่กับ oh-my-zsh เพื่อสร้างความบันเทิงในการใช้งาน terminal
  ก็ใช้งานได้ดีปกติ ไม่มีปัญหาอะไร แต่แล้ววันหนึ่งอากาศแจ่มใส ไม่รู้มีอะไรดลให้ Prezto
  ผ่านมาให้พบเจอ เลยต้องลองเสียหน่อย
published: true
tags:
  - zsh
  - prezto
  - terminal
  - nerd
thumbnail: images/substring-search.png
title: ลองใช้ Prezto กับ zsh
url: /2015/03/24/oh-my-zsh-to-prezto/
---

สวัสดีชาวเนิร์ด

ปกติผมใช้ [zsh คู่กับ oh-my-zsh](https://armno.in.th/2013/09/11/setting-up-the-terminal) เพื่อสร้างความบันเทิงในการใช้งาน terminal ก็ใช้งานได้ดีปกติ ไม่มีปัญหาอะไร
แต่แล้ววันหนึ่งอากาศแจ่มใส ไม่รู้มีอะไรดลให้ [Prezto](https://github.com/sorin-ionescu/prezto) ผ่านมาให้พบเจอ

เลยต้องลองเสียหน่อย

[Prezto](https://github.com/sorin-ionescu/prezto) เป็น configuration framework ของ zsh เช่นเดียวกับ
[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) ครับ ทำให้เราเพิ่มความสามารถ/ลูกเล่นให้กับ zsh ได้มาก
ไม่ว่าจะเป็น theme ของ prompt หรือ plugin (ใน Prezto จะเรียกว่า module) ซึ่งดูแล้วมากจะเป็นพวก alias มากกว่า
แรกเริ่มเดิมทีนั้น Prezto นั้นเป็น fork ของ oh-my-zsh แต่เนื่องจากแนวคิดไปคนละทางกับ oh-my-zsh เลยถูก rewrite ใหม่ซะเลย
(อ่านเรื่องต้นทางได้ที่ [oh-my-zsh#377](https://github.com/robbyrussell/oh-my-zsh/issues/377) ยาวมาก)

![Pull Request ต้นกำเนิด Prezto](images/prezto-original-pr.png)

พอสรุปได้ว่า oh-my-zsh นั้นเน้นที่ความง่ายในการใช้งาน ไม่ต้อง config มากมาย เซ็ตมาให้ก่อนแล้ว
ส่วน Prezto มีฟีเจอร์คล้ายๆ กับ oh-my-zsh แต่ส่วนมากจะถูก disable ไว้แล้วให้ user ไป enable เอาเองตามที่ต้องการ
เรื่องความเร็วผมรู้สึกว่า Prezto เร็วกว่านิดหน่อย ทั้งตอน startup และตอนที่ autocomplete ขึ้นมาจากการกด tab

## เปลี่ยนจาก oh-my-zsh ไปหา Prezto

Jerome Dalbert เขียนโพสต์ [Migrate From Oh-my-zsh to Prezto](http://jeromedalbert.com/migrate-from-oh-my-zsh-to-prezto/)
ลองตามไปอ่านกันได้ครับ สำหรับผมต้องลบไฟล์ `~/.zshrc` ก่อนลง Prezto ด้วย ไม่งั้น Prezto ไม่ยอมทำ symlink ให้ครับ
ส่วนใครที่ยังไม่เคยลง oh-my-zsh ก็ข้ามไปลง Prezto ได้เลยครับ [Installation Guide](https://github.com/sorin-ionescu/prezto#installation)

ในขั้นตอนการลบ oh-my-zsh ออกนั้น ไม่มีอะไรพังเลย (แปลกใจอยู่เหมือนกัน) แต่ทางที่ดี backup ไว้ก่อนดีกว่าครับ
(อุตส่าห์ทำใจไว้แล้วเชียวว่ามันต้องมีอะไรสักอย่างพัง และต้องซ่อมแน่ๆ แต่ไม่มีเลย)

## เกี่ยวกับ Prezto

- มีโครงสร้างและหลักการทำงานคล้ายๆ oh-my-zsh คือมี theme/module เก็บไว้ที่ directory `~/.zprezto`
- ไฟล์ config หลักของ Prezto คือ `~/.zpreztorc` ลองเปิดอ่านดูได้ครับ มี comment กำกับไว้ค่อนข้างดี
- Prezto ตัวมันเองก็ถูกเรียกผ่าน `~/.zshrc` อีกที ในไฟล์ `~/.zshrc` ก็จะเจอ code ประมาณนี้

{{< highlight bash >}}
# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi
{{< / highlight >}}

![file ต่างๆ ของ Prezto](images/prezto-files.png)

## theme/module

เราสามารถใช้ command `$ prompt -l` เพื่อดูรายชื่อ shell theme ทั้งหมดที่ Prezto มีอยู่ได้

![output จาก prompt -l](images/prompt-l.png)

และยัง preview ก่อนได้ด้วย `$ promt -p <theme name>` ตรงนี้เจ๋งดี

![preview theme paradox](images/prompt-paradox.png)

เมื่อเลือก theme ได้แล้ว ก็ไปเซ็ตที่ไฟล์ `~/.zpreztorc` หาคำว่า theme แล้วใส่ชื่อ theme ที่จะใช้ลงไป

{{< highlight bash >}}
# Set the prompt theme to load.
# Setting it to 'random' loads a random theme.
# Auto set to 'off' on dumb terminals.
zstyle ':prezto:module:prompt' theme 'cloud'
{{< / highlight >}}

ส่วน module (plugin) นั้น มี default มาให้บ้างแล้ว (ในไฟล์ `~/.zpreztorc` อีกเช่นกัน)
ซึ่งลำดับในการเรียก module นั้นสำคัญ ถ้าเรียงผิด module นั้นก็อาจจะไม่ทำงานได้
module ที่ผมเพิ่มเข้าไปมีอีก 2 อันคือ `syntax-highlighting` กับ `history-substring-search`

### `syntax-highlighting`

ตามภาพเลยครับ ทำให้มี shell command เป็นสีๆ คล้าย fish shell

![ปิด module syntax highlighting](images/syntax-highlight-disabled.png)

![เปิด module syntax highlighting](images/syntax-highlight-enabled.png)

### `history-substring-search`

ใน terminal เราใช้ลูกศรขึ้น-ลงเพื่อเลื่อนหา command ใน history ที่เคยพิมพ์ไว้ได้
แต่ module ตัวนี้ทำให้ scope ของ history ของ command เหลือเฉพาะ keyword ที่เราพิมพ์ได้

อย่างเช่น ผมพิมพ์ `vi` แล้วกด ขึ้น ไปเรื่อยๆ ก็จะมี history ขึ้นมาเฉพาะ command ที่มี `vi` อยู่ข้างใน
พร้อมกับ highlight ให้ด้วย ดีครับดี

![substring history search ใน Prezto](images/substring-search.png)

จากที่ใช้ Prezto แทน oh-my-zsh มา ก็ยังไม่พบปัญหาอะไร และก็คงจะใช้เรื่อยๆ ไปก่อน ลองเล่นกันดูได้ครับ

_ปล. zsh framework อีกตัวนึงที่น่าสนใจคือ [Antigen](https://github.com/zsh-users/antigen) ครับผม_

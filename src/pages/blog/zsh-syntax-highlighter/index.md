---
date: 2016-04-12T00:00:00Z
description: zsh-syntax-highlighting เป็น plugin ของ zsh ที่จะทำให้ command ที่เราพิมพ์ใน
  terminal มีสีสันขึ้นมาได้ และช่วยป้องกันไม่ให้เราพิมพ์ command ผิดได้อีกด้วย
published: true
tags:
  - terminal
  - zsh
  - oh-my-zsh
thumbnail: images/after.png
title: zsh syntax highlighter
url: /2016/04/12/zsh-syntax-highlighter/
---

`zsh-syntax-highlighting` เป็น plugin ของ zsh ที่จะทำให้ command ที่เราพิมพ์ใน terminal มีสีสันขึ้นมาได้
เช่น จากแบบนี้

<div class="text-center">
  <img src="images/before.png" alt="ก่อน" width="375" height="74">
</div>

เป็นแบบนี้

<div class="text-center">
  <img src="images/after.png" alt="หลัง" width="370" height="81">
</div>

หรือถ้าพิมพ์ command ไม่ถูก (ไม่มีใน `$PATH`) ก็จะเป็นตัวแดงๆ แบบนี้ (จริงๆ จะเป็นสีอะไรนั้นแล้วแต่ theme ของ iTerm อีกที)

<div class="text-center">
  <img src="images/invalid-command.png" alt="เวลาพิมพ์ผิด" width="304" height="76">
</div>

ประโยชน์คือนอกจากจะสวยดีแล้ว ยังป้องกันการพิมพ์ command ผิดได้ดีมาก เพราะเราจะเห็นได้ทันทีตอนพิมพ์ถ้าหากเราพิมพ์ผิด จะได้แก้ก่อนกด enter ได้ทัน
ส่วน subcommand จะไม่มี highlight ให้นะครับ

### ใช้งานกับ `oh-my-zsh`

`zsh-syntax-highlighter` นั้น ผมใช้งานร่วมกับ [`oh-my-zsh`](https://armno.in.th/2013/09/11/setting-up-the-terminal) โดยวิธีการติดตั้งนั้นก็ตาม [install.md ใน repo](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md#with-oh-my-zsh)
ส่วนใครที่ไม่ได้ใช้ `oh-my-zsh` ก็ใช้งานได้เหมือนกันจ้า

ขั้นแรกก็ต้อง clone repo ของ `zsh-syntax-highlighting` มาไว้ใน `oh-my-zsh` ในเครื่องเราก่อน

{{< highlight sh >}}
$ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
{{< / highlight >}}

จากนั้นเพิ่มชื่อ `zsh-syntax-highlighting` ใน `plugins` ในไฟล์ `~/.zshrc`

{{< highlight text >}}
plugins=(git colorize sublime vi-mode zsh-syntax-highlighting)
{{< / highlight >}}

สุดท้ายก็ source ไฟล์ `~/.zshrc` ให้ config ใหม่นี้ทำงาน เป็นอันเสร็จพิธี

{{< highlight sh >}}
$ source ~/.zshrc
{{< / highlight >}}

Happy Songkran จ้า

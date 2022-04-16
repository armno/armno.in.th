---
date: 2013-09-11T00:00:00Z
description:
  Terminal นั้นก็เป็นอีก tool สำคัญที่ต้องใช้บ่อยๆ ถือว่าเป็นหนึ่งในเครื่องมือทำมาหากินของ
  web developer ยุคนี้เลยก็ว่าได้ ผมเองมีปรับแต่ง terminal บ้าง หลักๆ ก็เพื่อให้ใช้งานได้สะดวกขึ้นครับ
published: true
tags:
  - terminal
  - iterm
  - zsh
  - z
title: Setting up the Terminal
url: /2013/09/11/setting-up-the-terminal/
---

สวัสดีเว็บเนิร์ด

Terminal นั้นก็เป็นอีก tool สำคัญที่ต้องใช้บ่อยๆ ถือว่าเป็นหนึ่งในเครื่องมือทำมาหากินของ web developer ยุคนี้เลยก็ว่าได้ ผมเองมีปรับแต่ง terminal บ้าง หลักๆ ก็เพื่อให้ใช้งานได้สะดวกขึ้น (เน้นความบันเทิงมากกว่า) การใช้งานก็ Unix basic command ทั่วๆ ไปไม่ได้พิเศษอะไร

> อ้างอิงกับ Mac OSX 10.8 เป็นหลัก ส่วน Ubuntu ใช้ด้วยกันได้เป็นส่วนมากครับ

### 1. iTerm2

[iTerm2](https://www.iterm2.com/#/section/home) นั้นช่วยทำให้ terminal ของเราทำอะไรได้หลายอย่างมากขึ้น ผมใช้แทนแอพ Terminal ที่ติดมากับ OSX ไปเลย ฟีเจอร์ที่ผมใช้บ่อยๆ ก็คงเป็น Split pane แบบนี้ hotkey ก็คือ `cmd+d` เพื่อ split pane ในแนวตั้ง และ `cmd+shift+d` สำหรับแนวนอน (คล้าย [tmux](https://tmux.sourceforge.net/))

![iTerm2 split pane](images/9719235200_d0540d6249_c.jpg)

สลับ cursor ไประหว่าง pane ก็แค่กด `option+cmd+ลูกศร` (บนล่างซ้ายขวา แล้วแต่ทิศทางที่จะไป)

ก่อนอื่นตั้งค่า hotkey เพื่อให้เปิด terminal ได้ง่ายๆ จากเมนู Preferences ของ iTerm2 ครับ ผมตั้งให้เป็น `control+enter`

![iTerm2 hotkey settings](images/9719260254_f84804a49c_c.jpg)

ส่วน Window profile นั้นก็เซ็ตให้เป็น Fullscreen ทีนี้ไม่ว่าจะใช้งานโปรแกรมไหนอยู่ แค่กด `control+enter` ก็จะมี terminal งอกออกมา

![iTerm2 window settings](images/9719260560_075a6205b1_c.jpg)

### 2. Tomorrow Night theme

theme ของ iTerm2 นั้นยังไม่ถูกใจเท่าไหร่ ผมชอบ [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme) มากกว่า วิธีติดตั้งก็แค่ download zip file มา เข้าไปที่ directory `iTerm2` แล้วก็ double click ไฟล์ที่ชอบ มันก็จะไปโผล่ใน color setting ของ iTerm2 ให้เลือกครับ

![iTerm2 with Tomorrow Night](images/9719460240_708db74989_c.jpg)

หรือใครชอบสีอีกโทนหนึ่ง ลองดู [Solarized](https://ethanschoonover.com/solarized) ก็ได้ครับ มีสองสไตล์ให้เลือก

### 3. Zsh & Oh-my-Zsh!

ปกติ Mac หรือ Linux ก็จะมี `bash` เป็น default [shell](https://en.wikipedia.org/wiki/Unix_shell) ติดมาให้ ผมก็ใช้ตามที่มีเรื่อยมา จนวันนึงผมเห็นฝรั่งสักคนนี่แหละ เขาใช้ [Zsh](https://www.zsh.org/) (z shell) ผมก็เลยลองเล่นดู .. จนถึงทุกวันนี้ก็ไม่กลับไปใช้ bash อีกเลย ไม่รู้เหมือนกันว่าทำไม

#### วิธีติดตั้ง zsh (OSX)

ทำผ่าน Homebrew น่าจะง่ายที่สุด หลังจากติดตั้งแล้ว ก็ต้องเซ็ต default shell เป็น zsh ด้วยครับ

{{< highlight bash >}}
$ brew install zsh
$ chsh -s /usr/local/bin/zsh
{{< / highlight >}}

ส่วน Oh-my-zsh นั้น เป็น open source project ที่เพิ่มความสามารถให้กับ zsh ได้อีกมากมาย ทั้ง theme ทั้ง plugin

ที่ผมชอบก็คงเป็น theme ที่มีให้เลือกเยอะมาก (หรือจะทำเองก็ได้) กับที่มันกด tab แล้วเลื่อนๆ ไปแบบนี้ได้

![zsh](images/9719380336_b6b4bd6049_c.jpg)

วิธีการติดตั้ง oh-my-zsh ดูได้จาก [Github repo](https://github.com/robbyrussell/oh-my-zsh) เลยครับผม

### 4. Pure

เนื่องจาก theme แต่ละอันของ oh-my-zsh นั้นดูรกรุงรังและสีสันแสบตาเหลือเกิน pure ของ [@sindresorhus](https://github.com/sindresorhus) จึงเป็น theme ที่ผมเลือกใช้แทนครับ (สไตล์มินิมอล) แถมยังบอก execution time ของ command ล่าสุด้วย

![pure.zsh execution time](images/9719528696_f847205d08_o.png)

<del>วีธีติดตั้งก็คือ clone [Pure Github repo](https://github.com/sindresorhus/pure) มาไว้ตรงไหนก็ได้ แล้วก็เพิ่ม path ของไฟล์ `pure.zsh` เข้าไปในไฟล์ `~/.zshrc` (ไฟล์เก็บค่า config ของ zsh)</del>

<em>update 2014/01/03</em> &ndash; ตอนนี้ theme Pure นั้นถูกรวมเข้าไปอยู่ใน repository ของ oh-my-zsh แล้ว (อยู่ใน `~/.oh-my-zsh/themes/pure.zsh-theme`) ซึ่งทำให้สามารถใช้ theme Pure ได้การจากการตั้งค่าในไฟล์ `.zshrc` ได้เลยครับ

![activate pure theme from .zshrc file](images/11728257223_fcf9bac89f_o.png)

### z

`cd` เป็น unix command ที่ผมใช้บ่อยมากๆ [z](https://github.com/rupa/z) นั้นทำให้การ `cd` สะดวกและสนุกขึ้นเยอะเลยครับ โดยที่ z จะจำ directory ที่เรา `cd` ไปบ่อยๆ และทำให้ "กระโดด" ไปหามันได้ง่ายขึ้น

ปกติจะ cd เข้ามาใน repo ของบล็อกนี้ ก็ต้อง

{{< highlight bash >}}
\$ cd ~/Sites/armno.github.io
{{< / highlight >}}

หากใช้ z สามารถพิมพ์แค่บางส่วนของชื่อได้ เช่น

{{< highlight bash >}}
$ z armno # กระโดดไป ~/Sites/armno.github.io
$ z des # กระโดดไป ~/Desktop
{{< / highlight >}}

z จะเรียง ranking ของแต่ละ directory ที่เราเคย `cd` เข้าไปตาม "frecency" (น่าจะเป็น frequency + recent) ถ้าไปที่ไหนบ่อย ranking ก็จะเยอะ เวลาต้องเลือก (ในกรณีที่ keyword นั้นตรงกับหลายๆ directory) z ก็จะเลือกตาม ranking ครับ

#### ติดตั้ง z

clone [https://github.com/rupa/z](https://github.com/rupa/z) มาไว้ที่ไหนก็ได้ในเครื่อง แล้วก็เพิ่ม z เข้าไปใน `.zshrc` ครับ เช่น

{{< highlight bash >}}

# ~/.zshrc

. /User/armno/code/z/z.sh
{{< / highlight >}}

ในตอนแรก z จะยังไม่รู้จัก directory ที่เราไปบ่อยๆ เราก็ `cd` ธรรมดาไปก่อนครับ z จะค่อยๆ จดจำและคำนวณ ranking ไปเรื่อยๆ

![z](images/11832355484_d8d46e42a4.jpg)

สนุกตรงที่ สอนให้มันจำก่อน แล้วหลังจากนั้นก็ให้มันทำงานให้เรา จนพบว่า z นั้นเก่งกว่า cd ของเราเยอะเลยครับ

#### Bonus

ทำให้ unstaged file ของคำสั่ง `git status` เป็นสีเหลือง จะได้มาครบทั้ง เขียว เหลือง แดง (ความจริงให้มันดูไม่เหมือนกับ staged file แค่นั้นเอง)

![multicolor git](images/9716342435_e5441038d4_c.jpg)

ตั้งค่าโดยการรัน command นี้ใน terminal ครับ (เปลี่ยนเป็นสีอื่นก็ได้นะ)

{{< highlight bash >}}
\$ git config --global color.status.changed "yellow"
{{< / highlight >}}

รายชื่อ status ทั้งหมดที่สามารถเปลี่ยนสีได้ ดูได้จาก [how to colorize output of git](https://unix.stackexchange.com/questions/44266/how-to-colorize-output-of-git) ได้เลยครับ

ส่วนฟอนต์ที่ใช้คือ [Inconsolata](https://levien.com/type/myfonts/inconsolata.html) ครับผม

หมดแล้ว ใครมีของเล่นเอามาแนะนำกันมั่งนะครับ

---
date: 2015-02-26T00:00:00Z
description: เคยเขียนวิธีการ setup Vim ของผมตอนแรกเมื่อประมาณปีที่แล้ว พอใช้งานไปเรื่อยๆ
  ก็พบว่าได้ปรับเปลี่ยนอีกบางส่วนตามการใช้งาน เลยเอา plugin/setup ที่เปลี่ยนไปจากตอนแรกมารวมกันไว้ในโพสต์นี้ครับ
published: true
tags:
  - vim
  - terminal
  - vundle
thumbnail: images/vim-airline.png
title: 'Setting up Vim : Part II'
url: /2015/02/26/setting-up-vim-part-2/
---

เคยเขียน [Setting up Vim][setting-up-vim-part-1] ตอนแรกไปแล้ว พอใช้งานไปเรื่อยๆ ผมว่ามีอะไรหลายๆ อย่างที่ปรับเปลี่ยนไปตามการใช้งาน
เลยขอรวมรวม plugin/setup ที่เปลี่ยนไปจากตอนแรกมาดูครับ

> ใช้งานบน OSX 10.10 เป็นหลัก เวอร์ชั่นอื่นอาจทำงานได้เหมือนกัน แต่ไม่รับประกันนะ

## Pathogen → Vundle

ก่อนหน้านี้ผมใช้ [Pathogen][pathogen-website] เป็นตัวจัดการ plugin ของ Vim ซึ่งปัญหาที่ผมตามมาก็คือ ตอนย้ายเครื่องไปทำงานที่เครื่องอื่น
ย้าย plugin ที่ติดตั้งผ่าน Pathogen ไปด้วยยาก (Pathogen ใช้ git submodules ซึ่งไม่ค่อยสะดวกเท่าไหร่)
(ความจริงคือผมไม่ค่อยเข้าใจ git submodule) ส่วนการจะ update plugin ก็ต้อง update
ผ่าน submodules เช่นกัน .. เอาเป็นว่าผมแพ้ git submodules

เลยลองเปลี่ยนมาใช้ [Vundle][vundle-website] แทน Vundle ทำให้สามารถเก็บรายชื่อ plugin ไว้ในไฟล์ `.vimrc` ได้เลย
จะเพิ่ม/ลบ/update plugin นั้นจะง่ายกว่า Pathogen มาก ทำได้ใน vim เลย

{{< highlight bash >}}
:PluginInstall
:PluginUpdate
:PluginClean
{{< / highlight >}}

วิธีติดตั้งแบบละเอียด ดูได้จาก [Quick start guide][vundle-quickstart] ของ Vundle ได้เลยครับ

## link Vim config กับ dotfiles

ผมมี repo [dotfiles][my-dotfiles] ไว้เก็บ configuration ของโปรแกรมต่างๆ รวมถึง Vim ด้วย มีไฟล์ `.vimrc` กับโฟลเดอร์ `.vim` ทำให้แชร์ config ของ Vim ได้จากการทำ symlink มาที่ repo dotfiles

{{< highlight bash >}}
$ git clone https://github.com/armno/dotfiles.git ~/dotfiles
$ ln -s ~/dotfiles/.vimrc ~/.vimrc
$ ln -s ~/dotfiles/.vim ~/.vim
{{< / highlight >}}

เวลาอัพเดท config ใน `.vimrc` ก็สามารถ push ไปที่ repo dotfiles เพื่ออัพเดท vim config ในเครื่องอื่นๆ ได้ด้วย

## CtrlP + The Silver Searcher

[CtrlP][vim-ctrlp] เป็น plugin ของ vim ที่ทำงานได้คล้ายกับ `cmd+p` (หรือ `cmd+t`) ใน Sublime Text ใช้เพื่อเปิดไฟล์ในโปรเจ็ค หรือจาก buffer ที่กำลังใช้อยู่ ผ่าน fuzzy search จาก path ได้ (พิมพ์แค่บางส่วนของ path) ใช้ CtrlP นั้นทำให้หา และเปิดไฟล์ได้เร็วกว่า file explorer (NERDTree) ได้เยอะเลย

![vim ctrlp](images/vim-ctrlp.png)

แต่ fuzzy search ที่ติดมากับ CtrlP นั้น บางทีก็ช้าอยู่บ้างกับโปรเจ็คใหญ่ๆ โชคดีที่ CtrlP เราสามารถใช้ "custom command" ในการ search หาไฟล์ได้ ผมใช้ [The Silver Searcher](https://github.com/ggreer/the_silver_searcher) ซึ่งเร็วกว่าพอสมควร

{{< highlight vim >}}
# ในไฟล์ .vimrc
let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
{{< / highlight >}}

## แทนที่ Powerline ด้วย Vim-airline

[vim-airline][vim-airline] เป็น plugin ที่เราเซ็ต status bar แบบฉูดฉาดเหมือน powerline ได้ แต่โหลดเร็วกว่า (และไม่ต้องลง python ด้วย) แถมยังทำงานร่วมกับ plugin ตัวอื่นๆ ของ vim ได้ดีอีกด้วย

![vim airline](images/vim-airline.png)

นอกจากนี้ก็เป็น plugin อื่นๆ ที่เกี่ยวกับแต่ละภาษาที่เขียน list เต็มๆ ของผมอยู่ในไฟล์ [.vimrc][my-vim-plugins] ครับ

ปล. ทุกวันนี้ก็ยังใช้ vim กับ sublime text สลับกันไปมา แล้วแต่ลักษณะงานครับ

[setting-up-vim-part-1]: https://armno.in.th/2013/09/05/setting-up-vim/ "Setting up Vim part I"
[pathogen-website]: https://github.com/tpope/vim-pathogen "Pathogen.vim"
[vundle-website]: https://github.com/gmarik/Vundle.vim "Vundle.vim"
[vundle-quickstart]: https://github.com/gmarik/Vundle.vim#quick-start
[my-dotfiles]: https://github.com/armno/dotfiles
[vim-ctrlp]: https://github.com/kien/ctrlp.vim
[vim-airline]: https://github.com/bling/vim-airline
[my-vim-plugins]: https://github.com/armno/dotfiles/blob/master/.vimrc#L33-L59

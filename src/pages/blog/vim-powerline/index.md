---
date: 2014-03-22T00:00:00Z
description: Vim Powerline เป็น plugin ที่ทำให้ status bar ของ Vim จากที่จืดๆ ดูดีขึ้น
  ปรับแต่งได้มากมายตามต้องการ ส่วนผมลงไว้เพราะเน้นความบันเทิงตา
published: true
tags:
  - vim
  - terminal
  - powerline
thumbnail: images/13330998783_0ff3958050_z.jpg
title: ติดตั้ง Vim Powerline ใน OSX 10.9
url: /2014/03/22/install-vim-powerline-osx-mavericks/
---

[**Vim Powerline**](https://github.com/Lokaltog/powerline) นั้นทำให้ status bar ของ Vim จากจืดๆ ดูดีขึ้น .. จริงๆ แล้วปรับแต่งได้อีกมากมาย ดูได้จาก [document](https://powerline.readthedocs.org/en/latest/configuration.html) ได้เลยจ้า (ส่วนผมลงไว้เพื่อความบันเทิง)

ก่อน

![vim before powerline](images/13331020193_c7f01bf4e2_z.jpg)

หลัง

![vim after powerline](images/13330998783_0ff3958050_z.jpg)

อันดับแรกเช็คเวอร์ชั่นของ Python ในเครื่องก่อน ซึ่งใน document ของ Powerline แนะนำให้ใช้เวอร์ชั่น 2.7 ครับ

{{< highlight bash >}}
$ python --version
# ของผมเป็น python 2.7.5
{{< / highlight >}}

จากนั้นก็พบว่า ในเครื่องยังไม่มี `pip` ซึ่งจำเป็นสำหรับลง Powerline ก็ต้องลง `pip` ซะก่อน

{{< highlight bash >}}
$ sudo easy_install pip
{{< / highlight >}}

แล้วก็ลง Powerline ผ่าน `pip`

{{< highlight bash >}}
$ pip install --user git+git://github.com/Lokaltog/powerline
{{< / highlight >}}

เพื่อให้ Powerline ทำงาน ก็ต้องเพิ่ม path ของ Powerline ในไฟล์ `~/.vimrc`

{{< highlight vim >}}
if has('statusline')
  " Always show status line
  set laststatus=2

  " Vim Powerline
  set rtp+=~/Library/Python/2.7/lib/python/site-packages/powerline/bindings/vim
endif
{{< / highlight >}}

สุดท้ายเลือกใช้ font ที่ support Powerline (ซึ่งมักจะมีตัวอักษรแปลกๆ) ได้จาก [Lokaltog/powerline-fonts](https://github.com/Lokaltog/powerline-fonts)

เป็นอันเสร็จพิธี

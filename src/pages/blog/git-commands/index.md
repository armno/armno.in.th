---
title: "Git Commands ที่ใช้บ่อยๆ"
date: 2019-07-29T21:10:42+07:00
url: /2019/07/29/frequently-used-git-commands
description: รวม Git Commands ที่ผมต้องใช้ทำงานอยู่เป็นประจำ
thumbnail: images/normal-status-graphic.png
tags:
- git
- terminal
- web development
- version control
- software
- terminal
---

Git เป็นโปรแกรมที่ผมต้องใช้ทำงานเกือบทุกวัน โปรเจ็คของที่บริษัทอยู่บน GitLab ส่วนโปรเจ็คหมาแมวของตัวเองอยู่บน GitHub

ที่บริษัทใช้ flow ที่อยู่ตรงกลางระหว่าง Gitflow กับ GitHub flow
ไม่ได้มีระบบ branch อะไรซับซ้อนมาก (แล้วแต่แต่ละโปรเจ็คอีกที)
pattern การใช้ Git ของผมมันก็จะเหมือนๆ เดิม วนไปวนมาอยู่แถวๆ นี้ครับ

<p class="message--warning">
  โพสต์นี้<u>ไม่ใช่</u>การสอนวิธีการใช้งาน Git จึงจะไม่ได้ลงรายละเอียดแต่ละ command เยอะนะครับ
</p>

---

### Config

```sh
$ git config <key> <value>
$ git config --get <key>
```

- `git config` เอาไว้ override ค่า config ของ repo ให้ต่างไปจาก global config
- `git config --get` ดูค่า config ที่ตั้งไว้ ถ้าใน repo มีค่าที่ override มาจาก global config มันก็จะไปต่อข้างล่างเวลาออกมาเป็น list


### Status

```sh
$ git status
```

ใช้บ่อยที่สุด เพื่อเช็คว่า status ของ repo เป็นแบบที่คิดไว้หรือไม่ ผมมักจะรัน `git status` ก่อน command อื่นเสมอ

สิ่งที่ผมดูจาก `git status` ไม่ได้เป็นข้อความ แต่เป็น "ภาพ" ครับ
สมมุติว่า output ออกมาเป็นแบบนี้

{{< picture
  wrapper-class="semi-full"
  src="images/normal-status.png"
  alt="รูป output จาก git status แบบปกติ"
  caption="รูป output จาก git status แบบปกติ"
>}}

สิ่งที่ผมเห็นคือ: ก้อนสีเหลือง ก้อนสีเขียว และก้อนสีแดง ในขนาดที่ต่างกัน

{{< picture
  wrapper-class="semi-full"
  src="images/normal-status-graphic.png"
  alt="รูป output จาก git status แบบก้อนๆ"
  caption="รูป output จาก git status แบบก้อนๆ"
>}}

- ถ้าผมแค่ edit ไฟล์อย่างเดียว ก็เดาได้ว่าจะต้องมีแต่ก้อนสีเหลือง
- ถ้าสร้างไฟล์ใหม่ด้วย ก็อาจจะมีทั้งก้อนสีเหลืองและก้อนสีแดง
- แต่ถ้า commit ไปแล้ว รัน `git status` แล้วยังเจอก้อนๆ สีๆ อยู่ แสดงว่าต้องทำอะไรผิดแล้วล่ะ (ที่เจอบ่อยๆ คือ commit ไปแล้วแต่ลืม add file ที่ยังเป็น untracked เข้าไปด้วย)

### Diff

```sh
$ git diff
$ git diff --staged
```

มักจะมาแพ็คคู่กับ `git status` เพื่อรีวิวไฟล์ที่แก้ไปแล้ว (สถานะ `modified`) ผ่าน diff view อีกที

ใส่ `--staged` ไปเพื่อ diff ไฟล์ที่ add แล้ว (สถานะ `staged`) แต่ยังไม่ได้ commit

และจะดู diff view ก่อน commit ทุกครั้งเพื่อเช็คอีกทีว่าทุกอย่างที่แก้ไป ใช่สิ่งที่ต้องการหรือไม่

{{< picture
  wrapper-class="semi-full"
  src="images/git-diff-output.png"
  alt="รูป output จาก git diff"
  caption="รูป output จาก git diff"
>}}

(ผมใช้ [`diff-so-fancy`](https://github.com/so-fancy/diff-so-fancy) กับ diff view
ทำให้อ่านง่าย สบายตา)

พักหลังมานี้ได้ลองเล่นคอมโบ git diff คู่กับ fzf เพื่อดู diff ทีละไฟล์
ดูได้จากโพสต์นี้ครับ: [fzf - The Fuzzy Finder](https://armno.in.th/2019/08/21/fzf/#example-use-case-git-diff)

### Add

```sh
$ git add .
$ git add :/
```

- `$ git add .` add ทุกไฟล์ในโฟลเดอร์ เข้าสู่ staged status
- `$ git add :/` ใช้ตอนอยู่ใน sub-folder แล้วต้องการ add ทุกไฟล์รวมถึงที่อยู่ข้างนอกโฟลเดอร์ที่เราอยู่ แต่ยังอยู่ใน repo เดียวกัน เข้าสู่ staged status

### Commit

```sh
$ git commit
$ git commit -am "message"
$ git commit --amend
```

สองอันแรกก็คือ commit command ธรรมดา แต่บางครั้งใช้ `commit -am` ไปแล้ว แต่มาเจอทีหลังว่าดันลืม add ไฟล์ที่สร้างใหม่เข้าไปด้วย

(เพราะลืมบ่อยแบบนี้ ผมจะพยายามหลีกเลี่ยงไม่ใช้ `git commit -am` แต่จะแยก `git add` กับ `git commit` กันไปเลย
ช้ากว่า แต่ป้องกันการลืม add ไฟล์ก่อน commit ได้ดี)

แทนที่จะต้องสร้าง commit **เพิ่มอีกอัน**เพื่อบอกว่าลืม add ไฟล์ ผมจะรัน `git add` ไปเลย แล้วใช้ `git commit --amend` เพื่อสร้าง commit ใหม่**แทนที่ของเดิม**
เหตุการณ์คร่าวๆ ประมาณนี้

```sh
# ทำฟีเจอร์เสร็จ มีทั้งแก้ไฟล์เดิมและสร้างไฟล์ใหม่
$ git commit -am "blah blah"
$ git status
# อ้าว ลืม add ไฟล์ที่สร้างใหม่ไปด้วย!
$ git add .
$ git commit --amend
```

เพราะฉะนั้นจะใช้ก็ต่อเมื่อยังไม่ได้ push branch ไปที่ remote repo เท่านั้น


### Reset

```sh
$ git reset
```

ใช้เอาไฟล์ที่ add ไปแล้วออกมาจาก `staged` ให้กลับมาเป็น `modified`

ส่วนมากใช้เพื่อที่จะ checkout ทิ้งไฟล์ที่ add ไปแล้ว (revert) เพราะถ้า add ไปแล้วก่อนมันจะ checkout ไม่ออกครับ

### Push

```sh
$ git push origin HEAD
```

เอาไว้ push feature branch ปัจจุบันที่ได้สร้างใหม่ในเครื่อง
พร้อมกับไปสร้าง branch ใหม่ในชื่อเดียวกันบน remote repo

### Pull

```sh
$ git pull

$ git fetch origin
$ git merge origin/<branch_name>
```

ถึงแม้ว่า `pull` จะเป็น shorthand command ของ `fetch+merge`
แต่ผมกลับชอบ `fetch+merge` มากกว่า เพราะ fetch มันจะยังไม่ทำอะไรกับไฟล์ในเครื่องเราจะกว่าเราจะ merge เอง
รู้สึกปลอดภัยดี

(แต่ก็มีบ้างเหมือนกันที่มึนๆ fetch มาอย่างเดียวแต่ลืม merge
ก็มโนไปเองว่า local repo เราอัพเดทล่าสุดแล้ว)

### Log

```sh
$ git log -p
```

ต่างจาก `git log` ธรรมดาตรงที่จะแสดงผลทั้ง commit message
และส่วนของไฟล์ที่ถูกแก้ไขใน commit นั้น

### Checkout

```sh
$ git checkout .

$ git checkout -
$ git checkout <commit_hash>

$ git checkout -b feature/xxx origin/feature/xxx
```

- `checkout .` revert ทุกไฟล์ที่ได้แก้ไปแล้วแต่ยังไม่ได้ commit (สถานะ modified -> clean) ใช้บ่อยเวลาทำไปสักพักแล้วพัง หรือไปผิดทางแล้วต้องกลับไปเริ่มใหม่
- `checkout -` สลับ branch ไปยัง branch ก่อนหน้า ใช้บ่อยเวลาสลับระหว่าง main branch กับ feature branch
- `checkout <commit_hash>` ย้อนเวลาหาอดีต กลับไปยัง commit อันใดอันหนึ่ง ได้ใช้เวลาต้องหาว่า bug ที่กำลังเจอมันเริ่มพังตั้งแต่จาก commit ไหน ทำไมมันถึงพัง
- สุดท้าย `checkout <branch_name> <remote_branch_name>` สร้าง branch ใหม่ในเครื่องเรา
จาก remote branch ที่มีอยู่แล้ว

### Clean

```sh
$ git clean -df
```

ใช้ลบไฟล์ที่ยังไม่ได้ add ทิ้งไป (ไฟล์ที่สร้างใหม่ยังเป็น untracked อยู่)
ใช้คู่กับ `$ git checkout .` บ่อยๆ เวลาทำพังแล้วหัวร้อน ทิ้งหมดแล้วเอาใหม่

### Stash

```sh
$ git stash
$ git stash pop
```

(อ่าน[วิธีการทำงานของ git stash](https://armno.in.th/2014/10/14/git-stash-patched-commit/) ได้จากโพสต์นู้นจ้า)

นอกจากใช้รับมือกับงานด่วนแล้ว git stash ยังมีประโยชน์เวลาต้องการทดสอบไอเดียแบบรีบๆ

เช่น เวลาทำฟีเจอร์นึงโดย solution A ไปได้ครึ่งทางแต่ยังไม่เสร็จ ดันนึกหาวิธีทำอีกแบบโดยใช้ solution B ได้ แต่ก็ไม่แน่ใจว่ามันจะใช่รึเปล่า
ผมมักจะใช้ git stash เก็บ solution A ไว้ แล้วลอง solution B ดู

ถ้ามันไม่เวิร์กจริงๆ ก็ยังเอา solution A ที่เก็บไว้ใน stash ออกมาทำต่อได้อยู่

### Remote

```sh
$ git remote -v
$ git remote prune origin
```

- `remote -v` เพื่อดูว่า remote repo อยู่ที่ URL ไหน
- `remote prune origin` เอาไว้ลบ feature branch ในเครื่องของเราออก หาก branch นั้นถูกลบไปจาก origin แล้ว

### Branch

```sh
$ git branch -D feature/xxx
```

ลบ feature branch ในเครื่องเรา

### Help

สุดท้ายคือ command ที่มีประโยชน์ที่สุด ก็หน้า help นั่นเอง

```sh
$ git help <sub-command>
$ man git-<sub_command>
```

สำหรับผมแล้ว git เป็นโปรแกรมที่ทำหน้า help (man page) ดีมากถึงมากที่สุด
คำอธิบายละเอียดยิบพร้อมตัวอย่าง

{{< picture
  wrapper-class="semi-full"
  src="images/git-man.png"
  alt="รูป ตัวอย่าง man page ของ git merge"
  caption="ตัวอย่าง man page ของ git merge"
>}}

---

## Alias

นอกจาก sub-command ที่ใช้บ่อยๆ แล้ว ก็มี alias ที่ตั้งไว้ (หรือไปลอกชาวบ้านมา)
และได้ใช้บ่อยๆ

```sh
[alias]
  co = checkout
  poh = push origin HEAD
  pom = push orign master
  undo = reset HEAD~1
```

(alias ทั้งหมดที่ผมมีอยู่ที่ [dotfiles:`.gitconfig`](https://github.com/armno/dotfiles/blob/master/.gitconfig#L12))

- `$ git cleanup` - เอาไว้ลบ branch ใน local repo ที่ถูก merge ไปแล้ว พร้อมๆ กันทีละหลายๆ branch
- `$ git ldm` ดูว่าเมื่อวาน หรือวันล่าสุดที่ทำงาน ทำอะไรไปบ้าง มีประโยชน์มาก ก่อน daily standup meeting 😅


{{< picture
  wrapper-class="semi-full"
  src="images/git-ldm.png"
  alt="รูป output จาก git ldm"
  caption="รูป output จาก `git ldm`"
>}}

ใครมีเทคนิคการใช้ git ที่ชื่นชอบ มาแนะนำกันได้นะ ✌️

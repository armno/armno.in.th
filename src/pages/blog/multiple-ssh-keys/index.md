---
language: en
title: "TIL: Using Multiple SSH Keys"
date: 2019-08-14T21:50:35+07:00
url: /2019/08/14/multiple-ssh-keys
description: Today I learned how to use multiple SSH keys on the same computer
thumbnail: images/thumbnail.png
tags:
- shell
- ssh
- security
- command line
---

Today I learned how to use multiple SSH keys on one computer.

At work, all projects are hosted on our company's internal git server running GitLab CE.
while I put all my personal projects on [GitHub](https://github.com/armno).

I wanted to use different keys for GitLab and GitHub.
So that I can have different passphrases for each SSH key, making it a bit more secure.

Or even different SSH key type on GitHub and GitLab. From the docs, [GitHub uses RSA key](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) while GitLab [recommends ED25519](https://docs.gitlab.com/ee/ssh/README.html#types-of-ssh-keys-and-which-to-choose) over RSA.

I use RSA key for both services for now.

## Generating SSH Keys

I generated 2 SSH key pairs. The default one is for company's work at GitLab.

```sh
$ ssh-keygen -t rsa -b 4096 -C "work-email@company.com"
```

and another pair for GitHub stored at `~/.ssh/github`.

```sh
$ ssh-key -t rsa -b 4096 -C "personal@email.com" -f ~/.ssh/github
```

In my `~/.ssh/` folder, I have 2 pairs of SSH keys.

```sh
$ ls -1 ~/.ssh
id_rsa
id_rsa.pub
github
github.pub
```

## Update SSH Config File

Now I have to tell SSH client to use the different private key for GitHub.

In `~/.ssh/config` file, add a new configuration for GitHub.com:

```sh
host github.com
  identityfile ~/.ssh/github
```

This means every time it has to make a connection to `github.com`,
use another private key at `~/.ssh/github` instead of the default one.
This includes git as well.

I added the public key `~/.ssh/github.pub` to my GitHub [account settings page](https://github.com/settings/ssh/new).

![Adding a new SSH Key in GitHub](images/github-settings.png)

and make a test connection to verify that it works.

```sh
$ ssh -T git@github.com
Hi armno! You've successfully authenticated, but GitHub does not provide shell access.
```

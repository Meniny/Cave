---
titke: "Manjaro Newbie Q&A"
---
# Manjaro Newbie Q&A

![Manjaro](https://manjaro.org/img/bg10.jpg)

## 安装软件

### 怎么用pacman安装软件包？

安装软件：

```sh
$ sudo pacman -S <软件包名称>
```

卸载软件：

```sh
$ sudo pacman -R <软件包名称>
```

另外，很多同学是看上庞大的 AU R软件数量入坑 Manjaro 的，但是 `pacman 安装的不是 AUR 包。

### 如何安装AUR包？

安装软件：

```sh
$ sudo yaourt -S <软件包名称>
```

卸载软件：

```sh
$ sudo yaourt -R <软件包名称>
```

如果你认为 yaourt 太适合你，可以使用yay:

```sh
$ sudo pacman -S yay
```

安装软件：

```sh
$ sudo yay -S <软件包名称>
```

卸载软件：

```sh
$ sudo yay -R <软件包名称>
```

### 如何配置中国软件源？

执行：

```sh
$ kate /etc/pacman.conf
```

在显示出来的文本文档后面加上：

```sh
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

再执行：

```sh
$ sudo pacman -Sy archlinuxcn-keyring
```

### 如何安装 `deb` 包？

首先需要安装 `debtap`：

```sh
$ yaourt -S debtap
$ sudo debtap -u
```

然后下载 `deb` 包后，在 `deb` 的目录下执行：

```sh
$ sudo debtap xxxx.deb
```

这时会提示输入包名，以及 `license`。包名随意，`license` 就填 `GPL` 吧，完成后会在deb包同级目录生成 `xxxx.tar.xz` 文件，直接用 `pacman` 安装即可。

```sh
$ sudo pacman -U xxxx.tar.xz
```

## 用户目录中文改英文

```sh
$ sudo pacman -S xdg-user-dirs-gtk
$ export LANG=en_US
$ xdg-user-dirs-gtk-update
```

然后会有个窗口提示语言更改，更新名称即可。

```sh
$ export LANG=zh_CN.UTF-8
```

然后重启电脑，如果提示语言更改，保留旧的名称即可。

## 输入法安装

首先需要安装输入法，这里我们安装谷歌拼音:

```sh
$ sudo pacman -S fcitx
$ sudo pacman -S fcitx-gtk2 fcitx-gtk3
$ sudo pacman -S fcitx-qt4 fcitx-qt5
$ sudo pacman -S fcitx-im
$ sudo pacman -S fcitx-configtool # 配置工具
$ sudo pacman -S fcitx-cloudpinyin # 云输入
$ sudo pacman -S fcitx-skin-material # 皮肤
$ sudo pacman -S fcitx-googlepinyin # Google 拼音
```

当然你也可以安装其他输入法，比如很受欢迎的rime：

```sh
$ sudo pacman -S fcitx-rime
```

安装之后需要在 `～/.xprofile` 文件中加入如下内容:

```sh
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

## VNC

首先安装 `x11vnc`:

```sh
$ sudo pacman -S x11vnc
```

设置密码：

```sh
$ x11vnc -storepasswd
```

启动：

```sh
$ x11vnc -nap -wait 50 -noxdamage -rfbauth /home/你的用户名/.vnc/passwd -display :0 -nocursor -forever -o /home/你的用户名/.vnc/x11vnc.log -bg
```

## Firefox Sync

### 原因

因为 Manjaro 自带的是国际版，使用的全球服务， 而在其他平台使用的可能是中国版，所以两者同步不了。

### 解决方案

将原来下自带的 Firefox 卸载，安装官网版本，然后在账号界面的 `更改服务` 将其更改为 `本地服务`，再登录，就可以同步了。

* 卸载原来 Firefox

* 官网下载 Firefox 并解压：

```sh
$ tar -xjvf **
```

* 将解压后的文件夹 `firefox` 移动到 `/opt` 下

* 创建链接：

```sh
$ sudo ln -s /opt/firefox/firefox /usr/bin/firefox
```

* 创建桌面快捷方式：

```sh
$ sudo nano /usr/share/applications/firefox.desktop
```

添加内容：


```sh
[Desktop Entry]
Name=firefox
Comment=firefox
Exec=/opt/firefox/firefox
Icon=/opt/firefox/browser/chrome/icons/default/default128.png
Terminal=false
Type=Application
Categories=Application;
Encoding=UTF-8
StartupNotify=true
```

## Yakuake 皮肤

Yakuake 是一款优秀的下拉式终端模拟器，为了防止误点击关闭导致的尴尬，可以安装这款皮肤：[Breeze Minimal](https://store.kde.org/p/1106236)。

## 系统迁移

如果需要将整个系统迁移到新的硬盘，可以参考 [ArchLinux 关于这个问题的 Wiki 页面](https://wiki.archlinux.org/index.php/Rsync#Full_system_backup)。

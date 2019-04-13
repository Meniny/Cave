---
layout: default
title: "Bookify"
description: "A product description for Bookify."
date: 2017-05-13
hero: "/portfolio/bookify/assets/Banner.jpg"
prototype:
  mobile:
    - desc: "流程"
      image: "Bookify-Mobile"
  web:
    - desc: "聊天界面"
      image: "Chatting"
    - desc: "编辑器界面"
      image: "Editor"
    - desc: "登录注册"
      image: "Login"
    - desc: "订单确认"
      image: "Order"
    - desc: "书城"
      image: "Store"
design:
  mobile:
    - image: "activity.png"
      desc: "Activity"
    - image: "book_detail.png"
      desc: "Book Detail"
    - image: "books.png"
      desc: "Books"
    - image: "categories.png"
      desc: "Categories"
    - image: "main.png"
      desc: "Main"
    - image: "notes.png"
      desc: "Notes"
    - image: "profile_me.png"
      desc: "Profile (Me)"
    - image: "profile_reader.png"
      desc: "Profile (Reader)"
    - image: "slide_menu.png"
      desc: "Slide Menu"
---
## Introduction 概述 {% assign cb = '<input disabled="disabled" type="checkbox" checked="checked" />' %}{% assign ucb = '<input disabled="disabled" type="checkbox" />' %}

Bookify 是一个自出版平台, 由用户发布内容, 并可以选择以电子书的形式发布和出售, 每个人都可以是作者。

Bookify 主要包含 在线商城、自出版流程、读者社区、即时通讯等模块。

## Names 名称

* 非书不可
* 约书
* 不服书
* Bookify

## Tips 说明

> 在后面的文档中:
> * {{ cb }} 代表筹备范围内的内容
> * {{ ucb }} ~~代表计划中或待定的内容~~

## Platforms 平台

- {{ cb }} Server 服务器端 ([BitBucket](https://bitbucket.org/Meniny/bookify-server))
- {{ cb }} iOS 客户端 ([BitBucket](https://bitbucket.org/Meniny/bookify-ios))
- {{ cb }} Web 网页端
- {{ ucb }} ~~macOS 客户端~~
- {{ ucb }} ~~Android 客户端~~

## Wireframe, Prototype and Mockup 原型图与设计稿

#### Mobile 移动端

<ul class="th-grid">
{% for pt in page.prototype.mobile %}{% assign img = (site.url | append: '/portfolio/bookify/assets/prototype/images/Bookify-Mobile/' | append: pt.image) %}
  <li>
    <a href="{{ img }}.png" class="cover-link">
      <noscript>&lt;img src="{{ img }}.jpg" data-src="{{ img }}.jpg" alt=""></noscript>
      <img class="fade-in lazyloaded" src="{{ img }}.jpg" data-src="{{ img }}.jpg" alt="{{ pt.desc }}">
    </a>
  </li>
  {% endfor %}
</ul>

<button class="btn btn--large" type="submit" onclick="javascript:window.location.href='{{ site.url }}/portfolio/bookify/assets/prototype/images/Bookify-Mobile/Bookify-Mobile.pdf'">Download PDF</button>

<ul class="th-grid">
{% for pt in page.design.mobile %}{% assign img = (site.url | append: '/portfolio/bookify/assets/design/' | append: pt.image) %}
  <li>
    <a href="{{ img }}" class="cover-link">
      <noscript>&lt;img src="{{ img }}" data-src="{{ img }}" alt=""></noscript>
      <img class="fade-in lazyloaded" src="{{ img }}" data-src="{{ img }}" alt="{{ pt.desc }}">
    </a>
  </li>
  {% endfor %}
</ul>

#### Web 网页端

<ul class="th-grid">
{% for pt in page.prototype.web %}{% assign img = (site.url | append: '/portfolio/bookify/assets/prototype/images/Bookify-Web/' | append: pt.image) %}
  <li>
    <a href="{{ img }}.png" class="cover-link">
      <noscript>&lt;img src="{{ img }}.jpg" data-src="{{ img }}.jpg" alt=""></noscript>
      <img class="fade-in lazyloaded" src="{{ img }}.jpg" data-src="{{ img }}.jpg" alt="{{ pt.desc }}">
    </a>
  </li>
  {% endfor %}
</ul>

<button class="btn btn--large" type="submit" onclick="javascript:window.location.href='{{ site.url }}/portfolio/bookify/assets/prototype/images/Bookify-Web/Bookify-Web.pdf'">Download PDF</button>

## Features 特性

#### 通用

- 编辑器
  - {{ cb }} Markdown 编辑器
  - {{ ucb }} ~~Asciidoc 编辑器~~
  - {{ ucb }} ~~rST 编辑器~~
  - {{ ucb }} ~~多人协作: git~~
  - {{ ucb }} ~~生成 PDF, 需要加密~~
  - {{ ucb }} ~~生成 ePub, 需要加密~~
  - {{ cb }} 生成 HTML
  - {{ ucb }} ~~OCR 光学字符识别~~
  - {{ ucb }} ~~语音专辑/视频专辑~~
- 摘要
  - {{ cb }} 摘要 (类似 gist) 功能
  - {{ cb }} 收录到我的摘要
  - {{ cb }} 我的摘要
- 商店
  - {{ cb }} 预览、试读
  - {{ cb }} 支付宝支付, 微信支付
  - {{ cb }} 整本购买
  - {{ ucb }} ~~按章节购买~~
  - {{ cb }} 书籍修订记录
  - {{ cb }} 读者评价
  - {{ cb }} 书籍分类/标签
  - {{ cb }} 按分类/标签筛选
  - {{ cb }} 搜索
- 阅读
  - {{ ucb }} ~~字体调节~~
  - {{ ucb }} ~~夜间模式~~
  - {{ cb }} 标签/分类订阅
  - {{ cb }} 作者订阅/关注
  - {{ cb }} 书籍更新订阅
  - {{ ucb }} ~~书籍对应书友群~~
  - {{ ucb }} ~~缓存/下载书籍~~
  - {{ cb }} 允许自动更新书籍
  - {{ cb }} 书签
- 用户
  - {{ cb }} 用户搜索
  - {{ cb }} 第三方登录
  - {{ cb }} 第三方分享
  - {{ cb }} 游客
  - {{ ucb }} ~~我的账户~~
  - {{ ucb }} ~~交易记录~~
  - {{ cb }} 举报、拉黑、关注
  - {{ cb }} 我关注的、关注我的人列表
  - {{ cb }} 系统消息、私信消息、群消息
- 作者
  - {{ cb }} 整本定价
  - {{ ucb }} ~~独立章节定价、自动均分~~
  - {{ cb }} 下架书籍
  - {{ cb }} 草稿箱
  - {{ cb }} 更新书籍
  - {{ ucb }} ~~设定是否允许读者缓存/下载~~
  - {{ cb }} 发布书籍等待审核
  - {{ ucb }} ~~发布时申请创建自定义分类~~
  - {{ cb }} 自定义标签
- 帖子/社区/问答
  - {{ ucb }} ~~发布帖子~~
  - {{ ucb }} ~~回答问题~~
  - {{ ucb }} ~~提出问题~~
  - {{ ucb }} ~~帖子分类~~
  - {{ ucb }} ~~问题分类~~
  - {{ ucb }} ~~按分类筛选~~
  - {{ ucb }} ~~搜索~~
- 百科
  - {{ ucb }} ~~百科分类/标签~~
  - {{ ucb }} ~~按分类/标签筛选~~
  - {{ ucb }} ~~搜索~~
  - {{ ucb }} ~~官方百科~~
  - {{ ucb }} ~~用户创建百科~~
  - {{ ucb }} ~~用户修订百科~~
  - {{ ucb }} ~~用户百科审核机制~~
- 活动
  - {{ ucb }} ~~线上/线下活动~~
  - {{ ucb }} ~~官方活动~~
  - {{ ucb }} ~~用户发起活动~~
  - {{ ucb }} ~~活动报名~~
- 租借
  - {{ ucb }} ~~租借书籍，书店、个人~~
  - {{ ucb }} ~~旧书交易、恭喜~~

## 客户端

- 阅读
  - {{ cb }} 阅读时屏幕常亮

## Web

- 阅读
  - {{ cb }} 内容保护，如禁止复制等措施

## Memo 备忘

soon ...

{% include comment.html %}

---
title: "NSImage: Get size in pixels"
category: "OS X"
copy: true
tags: [OS X, NSImage]
img: "macintosh.jpg"
---
Just simple:
```swift
let rep = originImage.representations.first
let pixelSize = CGSize(width: (rep?.pixelsWide)!, height: (rep?.pixelsHigh)!)
```

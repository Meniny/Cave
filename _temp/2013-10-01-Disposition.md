---
quote: true
category: "iOS"
img: "iOS.jpg"
tags: [iOS, Quote]
title: Disposition, easier setters for CGRects
---

CGRects are widely used in iOS and OSX development, but some useful setters (particularly CGRectSetSize and CGRectSetOrigin) are definetively missing.
So, I've programmed [Disposition](https://github.com/Hecktorzr/Disposition), a set of functions that can help avoid some unnecessary code when setting up CGRect's properties.

The header file, currently defines the following fancy functions (which I hope increases over time and with the help of collaborations):


```objc
void CGRectSetSize(CGRect *rect, CGSize size);
void CGRectSetWidth(CGRect *rect, CGFloat width);
void CGRectSetHeight(CGRect *rect, CGFloat height);

void CGRectSetOrigin(CGRect *rect, CGPoint originPoint);
void CGRectSetX(CGRect *rect, CGFloat x);
void CGRectSetY(CGRect *rect, CGFloat y);
```

As usual, distributed under a MIT License.

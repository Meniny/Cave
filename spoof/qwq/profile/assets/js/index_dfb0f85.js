---
---
nie.define("index", function() {
  var e = decodeURIComponent(ca.fn.queryString("uname")),
    n = (decodeURIComponent(ca.fn.queryString("uid")), ca.fn.queryString("icode")),
    t = ca.fn.queryString("channel");
  e && $(".username i").text(e), n && ($(".code span").text(n), $("#copy").attr("data-clipboard-text", n)), "app_store" != t && "netease" != t && "oppo" != t && "huawei" != t && "nearme_vivo" != t && "yixin" != t && "taptap" != t && "bilibili_sdk" != t && $(".download").remove(), "huawei" == t && $(".download").attr("href", "https://adl.netease.com/d/g/qwq/c/huawei"), "nearme_vivo" == t && $(".download").attr("href", "https://adl.netease.com/d/g/qwq/c/vivo"), "bilibili_sdk" == t && $(".download").attr("href", "https://adl.netease.com/d/g/qwq/c/bilibili"), $(".ewm img").attr("src", "{{ site.url }}/spoof/qwq/profile/assets/imgs/qrcode.png");
  // "https://qrcode2.webapp.163.com/l?d=" + encodeURIComponent(window.location.href));
  var o = new Clipboard("#copy");
  o.on("success", function() {
    alert("\u590d\u5236\u6210\u529f")
  }), o.on("error", function() {
    alert("\u590d\u5236\u5931\u8d25<br/>\u8bf7\u957f\u6309\u9009\u62e9\u624b\u5de5\u590d\u5236")
  })
});

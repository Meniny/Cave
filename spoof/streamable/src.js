function getQueryString(key, decode) {
  var reg = new RegExp('(^|&)'+key+'=([^&]*)(&|$)');
  var result = window.location.search.substr(1).match(reg);
  if (decode) {
    return result?decodeURIComponent(result[2]):null;
  }
  return result?result[2]:null;
}

function go() {
  var f = getQueryString('f', false)
  // var l = getQueryString('l')
  let src = 'https://streamable.com/s/' + f// + '/' + v
  document.getElementById('video').src = src

  var t = getQueryString('t', false)
  document.title = t
  document.getElementById('top_title').innerHTML = t
}

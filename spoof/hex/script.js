// # global variables

const minH = 0; // minimum hue, between 0 and 360
const maxH = 360; // maximum hue, between 0 and 360
const minS = 18; // minimum saturation, between 0 and 100
const maxS = 100; // maximum saturation, between 0 and 100
const minL = 16; // minimum lightness, between 0 and 100
const maxL = 80; // maximum lightness, between 0 and 100

const hex = document.getElementById('hex');
const button = document.getElementById('button');

// # functions

function generateColor() {
  let H = null;
  let S = null;
  let L = null;
  do {
    H = Math.floor(Math.random() * 3600) / 10;
  } while (H < minH || H > maxH);
  do {
    S = Math.floor(Math.random() * 1000) / 10;
  } while (S < minS || S > maxS);
  do {
    L = Math.floor(Math.random() * 1000) / 10;
  } while (L < minL || L > maxL);
  return tinycolor({
    h: H,
    s: S,
    l: L
  }).toHexString();
}

function applyColor() {
  document.body.style.background = location.hash;
  hex.innerHTML = location.hash;
  if (location.hash === '#ff3700') {
    button.textContent = 'Twixes';
  } else {
    if (button.textContent != 'Inspire') {
      button.textContent = 'Inspire';
    }
  }
}

function styleButton() {
  button.style.background = '#fff';
  button.style.color = location.hash;
}

function clearButton() {
  setTimeout(() => button.style = '', 25);
}

// # events

onload = () => {
  if (!tinycolor(location.hash).isValid()) {
    history.replaceState({}, null, generateColor());
  }
  applyColor();
};

onhashchange = onload;

button.onclick = () => {
  location.hash = generateColor();
  styleButton();
};

button.onmouseover = styleButton;
button.onmouseout = clearButton;
button.ontouchstart = styleButton;
button.ontouchend = clearButton;

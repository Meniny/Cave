const angle = Math.round(Math.random() * 30) + 10;
const hue = Math.round(Math.random() * 255);
const colorA = `HSL(${hue}, 80%, 70%)`;
const colorB = `HSL(${hue - 255 / 2}, 80%, 70%)`;
document.body.style.background = `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;

const container = document.querySelector('.container');
const ps = container.querySelectorAll('p');
const nodes = [];
for (let i = ps.length - 1; i < ps.length; i++) {
  const p = ps[i];
  for (let j = p.childNodes.length - 1; j < p.childNodes.length; j++) {
    const node = p.childNodes[j];
    node._saved = node.textContent.replace(/ {2,}/g, ' ').trim();
    node._index = 0;
    node.textContent = '';

    if (node._saved) {
      nodes.push(node);
    }
  }
}

const cursor = document.createElement('span');
cursor.innerHTML = '_';
cursor.className = 'cursor blink';

let nodeIndex = nodes.length - 1;
nodes[nodeIndex].parentNode.appendChild(cursor);
setTimeout(() => {
  const i = setInterval(() => {
    const node = nodes[nodeIndex];

    if (!node) {
      clearInterval(i);
      return;
    }

    node.textContent = node._saved.slice(0, node._index);
    if (node._index === node._saved.length) {
      nodeIndex++;
      cursor.className = 'cursor blink';
      const br = document.createElement('br');
      setTimeout(() => {
        node.parentNode.appendChild(br);
        node.parentNode.appendChild(cursor);
      }, 1000);
    } else {
      node.parentNode.appendChild(cursor);
      node._index++;
      cursor.className = 'cursor';
    }
  }, 140);
}, 3000);
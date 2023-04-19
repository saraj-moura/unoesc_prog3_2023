const fs = require('fs');
const input = fs.readFileSync('entrada.txt', 'utf-8').trim().split(',');

const a = parseFloat(input[0]);
const b = parseFloat(input[1]);
const c = parseFloat(input[2]);

function sqrt(x) {
  return Math.sqrt(Math.abs(x));
}

function Main(a, b, c) {
  const delta = 18 * a * b * c - 4 * Math.pow(b, 3) * c + Math.pow(b, 2) * Math.pow(a, 2) - 4 * a * Math.pow(c, 2) - 27 * Math.pow(a, 4);
  const A = -sqrt(delta) / (2 * Math.pow(a, 2));
  const B = (3 * b * Math.pow(a, 2) - 2 * Math.pow(b, 3) - 9 * a * b * c + 27 * Math.pow(a, 3) * c) / (2 * Math.pow(a, 3));
  const C = delta / (4 * Math.pow(a, 3));

  const u1 = -A - Math.cbrt(A * A - C);
  const u2 = -A + Math.cbrt(A * A - C);

  const v1 = -(b + u1 * a) / (3 * a);
  const v2 = -(b + u2 * a) / (3 * a);

  return [v1, v2];
}

const roots = cubicRoots(a, b, c);
console.log(`Raízes da equação ${a}x^3 + ${b}x^2 + ${c}x = 0:`);
console.log(`x1 = ${roots[0]}`);
console.log(`x2 = ${roots[1]}`);

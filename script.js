const qr = document.getElementById('fakeQr');
const pattern = [
  1,1,1,1,1,0,1,0,1,1,0,
  1,0,0,0,1,1,0,1,0,0,1,
  1,0,1,0,1,0,1,1,1,0,1,
  1,0,0,0,1,1,0,0,1,1,0,
  1,1,1,1,1,0,1,0,1,0,1,
  0,1,0,1,0,1,0,1,0,1,0,
  1,0,1,1,1,0,1,1,0,0,1,
  0,1,0,0,1,1,0,1,1,1,0,
  1,1,0,1,0,0,1,0,1,0,1,
  0,0,1,0,1,1,0,1,0,1,0,
  1,0,1,1,0,1,1,0,1,0,1
];

pattern.forEach(on => {
  const cell = document.createElement('i');
  if (!on) cell.style.background = '#fff';
  qr.appendChild(cell);
});

document.getElementById('saveDemo').addEventListener('click', () => {
  alert('Demo only. No Apple Wallet pass is created.');
});

document.getElementById('quickScan').addEventListener('click', () => {
  alert('Decorative demo: there is no verification or scanning function.');
});

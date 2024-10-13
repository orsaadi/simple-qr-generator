const qrCode = document.getElementById('qr-code');
const qrInput = document.getElementById('qr-input');
const generateBtn = document.getElementById('generate-btn');

const generateQRCode = (text) => {
  while (qrCode.firstChild) {
    qrCode.removeChild(qrCode.firstChild);
  }

  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    text
  )}&size=150x150`;
  const img = document.createElement('img');
  img.src = url;
  qrCode.appendChild(img);
};

generateBtn.onclick = () => {
  generateQRCode(qrInput.value);
};

function generateQRCode() {
    const textInput = document.getElementById('text-input').value;
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    // Generate new QR code
    const qrcode = new QRCode(qrcodeContainer, {
        text: textInput,
        width: 200,
        height: 200,
    });
}

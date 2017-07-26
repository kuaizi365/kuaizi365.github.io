/**
 * 创建二维码
 * @param {Object} id
 * @param {Object} content
 */
function createQRCode(id, content) {
	new QRCode(id, {
		text: content,
		width: 256,
		height: 256,
		colorDark: '#000000',
		colorLight: '#ffffff',
		correctLevel: QRCode.CorrectLevel.H
	});
}
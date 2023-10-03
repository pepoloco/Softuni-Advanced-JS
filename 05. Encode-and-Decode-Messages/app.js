function encodeAndDecodeMessages() {
    //buttons
    let btns = Array.from(document.querySelectorAll('div button'));
    const [encode, decode] = btns
    //textareas
    let textAreas = document.querySelectorAll('div textarea');
    const [textArea1, textArea2] = textAreas;

    function transformText(text, cb) {
        return text.split('').map(cb).join('')
    }

    function prevChr(char) {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }
    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }

    //attach events
    encode.addEventListener('click', encodeAndSend);
    decode.addEventListener('click', decodeAndRead);

    function encodeAndSend(e) {
        textArea2.value = transformText(textArea1.value, nextChar);
        textArea1.value = '';
    }

    function decodeAndRead(e) {
        textArea2.value = transformText(textArea2.value, prevChr);
    }
}

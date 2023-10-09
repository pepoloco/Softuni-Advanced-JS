function solve() {
    let inputs = document.querySelectorAll('input');
    for (const el of inputs) {
        if (el.placeholder === null && el.placeholder === '') {
            return
        }
    }
}
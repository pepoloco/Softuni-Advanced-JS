function lockedProfile() {
    const showMoreBtn = Array.from(document.querySelectorAll('div button'));
    showMoreBtn.forEach(btn => {
        btn.addEventListener('click', onClick);
    })

    function onClick(e) {
        const divChildren = Array.from(e.target.parentElement.children)
        const lockRadio = divChildren[2].checked;
        const hiddenElements = e.target.previousElementSibling;
        if (lockRadio) {
            return;
        }
        if (e.target.textContent === "Show more"){
            hiddenElements.style.display = "inline"
            e.target.textContent = "Hide It";
            return;
        }
        hiddenElements.style.display = "";
        e.target.textContent = "Show more"
    }
} 
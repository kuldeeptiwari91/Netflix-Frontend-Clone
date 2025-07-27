const faqBoxes = document.querySelectorAll('.faqbox');
faqBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        faqBoxes.forEach(b => {
            if (b !== box) {
                b.classList.remove('open');
                b.nextElementSibling.classList.remove('show');
            }
        });
        box.classList.toggle('open');
        box.nextElementSibling.classList.toggle('show');
    });
});

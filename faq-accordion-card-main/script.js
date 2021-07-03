let buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clicked')
        button.classList.toggle('active')
        let panel = button.nextElementSibling;
        panel.classList.toggle('show')
    })
    
});
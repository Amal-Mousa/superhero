const searcInput = document.querySelector('.search-hero');

searcInput.addEventListener('input', () => {
    const { value } = searcInput;
    fetch(`/search/${value}`)
        .then(res => res.json())
        // .then(console.log)
        .then(data => createCard(data))
})
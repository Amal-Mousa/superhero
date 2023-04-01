let cardsContainer = document.querySelector('.cards-container');

const createCard = (data) => {
    cardsContainer.innerHTML = '';
    
    for (let i = 0; i < 12; i++){
        const card = document.createElement('div');
        card.classList.add('card');

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img');
        cardImg.setAttribute('src', data[i].image.url);
        card.append(cardImg);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = data[i].name;
        cardBody.append(cardTitle);

        const publisher = document.createElement('h5');
        publisher.textContent = data[i].biography.publisher;
        cardBody.append(publisher);

        const strengthList = document.createElement('ul');
        strengthList.classList.add('powers');

        const li = document.createElement('li');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-shield-halved');
        const span = document.createElement('span');
        span.textContent = data[i].powerstats.intelligence;
        const intelligence = document.createElement('span');
        intelligence.textContent = 'INTELLIGENC';
        li.append(icon, intelligence, span);

        const li2 = document.createElement('li');
        const icon2 = document.createElement('i');
        icon2.classList.add('fa-solid', 'fa-shield-halved');
        const strength = document.createElement('span');
        strength.textContent = 'STRENGTH';
        const span2 = document.createElement('span');
        span2.textContent = data[i].powerstats.strength;
        li2.append(icon2, strength, span2);

        const li3 = document.createElement('li');
        const icon3 = document.createElement('i');
        icon3.classList.add('fa-solid', 'fa-shield-halved');
        const combact = document.createElement('span');
        combact.textContent = 'COMBACT ';
        const span3 = document.createElement('span');
        span3.textContent = data[i].powerstats.combat;
        li3.append(icon3, combact, span3);
        strengthList.append(li, li2, li3);
        cardBody.append(strengthList);

        card.append(cardBody);
        cardsContainer.append(card);
    }
}
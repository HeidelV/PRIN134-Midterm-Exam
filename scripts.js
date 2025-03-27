// ====== NUMBER 1
const iconButtons = document.querySelectorAll('.card .btn');

iconButtons.forEach(button => {
    button.addEventListener('click', () => {
        let iconElement = button.querySelector('.fa-heart'); 
        if (iconElement) {
            iconElement.classList.toggle('fa-solid');
            iconElement.classList.toggle('fa-regular');
        }
    });
});

// ====== NUMBER 2
const petAllButton = document.querySelector('#btn-select-all');

petAllButton.addEventListener('click', () => {
    iconButtons.forEach(button => {
        let iconElement = button.querySelector('.fa-regular');
        if (iconElement) {
            iconElement.classList.add('fa-solid'); 
            iconElement.classList.remove('fa-regular'); 
            iconElement.classList.add('fa-heart'); 
        }
    });
});

// ====== NUMBER 3
const unpetAllButton = document.querySelector('#btn-unselect-all');

unpetAllButton.addEventListener('click', () => {
    iconButtons.forEach(button => {
        let iconElement = button.querySelector('.fa-solid');
        if (iconElement) {
            iconElement.classList.add('fa-heart');
            iconElement.classList.remove('fa-solid'); 
            iconElement.classList.add('fa-regular'); 
        }
    });
});

// ====== NUMBER 4
const lastButton = document.querySelector('#btn-select-last');
const cards = document.querySelectorAll('.gallery .card');

lastButton.addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.remove('active');
        card.classList.remove('card-selected');
    });

    const lastCard = cards[cards.length - 1];

    if (lastCard) {
        lastCard.classList.add('active');
        lastCard.classList.add('card-selected');
    }
});

// ====== NUMBER 5
const firstButton = document.querySelector('#btn-select-first');
const cards2 = document.querySelectorAll('.gallery .card');

firstButton.addEventListener('click', () => {
    cards2.forEach(card => {
        card.classList.remove('active');
        card.classList.remove('card-selected');
    });

    const firstCard = cards2[0]; 

    if (firstCard) {
        firstCard.classList.add('active');
        firstCard.classList.add('card-selected');
    }
});

// ====== NUMBER 6
const nextButton = document.querySelector('#btn-select-next');
const cards3 = document.querySelectorAll('.gallery .card');

nextButton.addEventListener('click', () => {
    const activeCard = document.querySelector('.gallery .card.active');
    
    if (activeCard) {

        activeCard.classList.remove('active');
        activeCard.classList.remove('card-selected');

        let nextCard;

        let foundActive = false;
        for (let i = 0; i < cards3.length; i++) {
            if (foundActive) {
                nextCard = cards3[i];
                break;
            }
            if (cards3[i] === activeCard) {
                foundActive = true;
            }
        }

        if (!nextCard) {
            nextCard = cards3[0];
        }

        nextCard.classList.add('active');
        nextCard.classList.add('card-selected');
    }
});

// ====== NUMBER 7
const prevButton = document.querySelector('#btn-select-previous');

prevButton.addEventListener('click', () => {
    const activeCard = document.querySelector('.gallery .card.active');
    
    if (activeCard) {

        activeCard.classList.remove('active');
        activeCard.classList.remove('card-selected');

        let prevCard;

        let foundActive = false;
        for (let i = cards3.length - 1; i >= 0; i--) {
            if (foundActive) {
                prevCard = cards3[i];
                break;
            }
            if (cards3[i] === activeCard) {
                foundActive = true;
            }
        }

        if (!prevCard) {
            prevCard = cards3[cards3.length - 1];
        }

        prevCard.classList.add('active');
        prevCard.classList.add('card-selected');
    }
});

// ====== NUMBER 8
const animation = document.querySelector('.banner-content');
animation.style.animationDuration = "3s";
animation.addEventListener('click', () => {
    animation.classList.toggle('animate__pulse');
});






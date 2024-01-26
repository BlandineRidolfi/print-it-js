const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Je récupère les éléments des flèches droites et gauches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Je récupère l'élément du carrousel (bannière)
const banner = document.getElementById('banner');

// Je récupère l'élément contenant les points
const dotsContainer = document.getElementById('dots-container');

// J'initialise un index à 0 pour la future incrémentation
let currentIndex = 0;

// Fonction pour mettre à jour le contenu du carrousel
function updateSlide(index) {
    const currentSlide = slides[index];
    const bannerImage = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');

    bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;
    tagLine.innerHTML = currentSlide.tagLine;

    // Met à jour la classe 'dot_selected' pour le point correspondant à la diapositive actuelle
    document.querySelectorAll('.dot').forEach((dot, dotIndex) => {
        dot.classList.toggle('dot_selected', dotIndex === index);
    });
}

// J'ajoute un Event Listener sur la flèche gauche
arrowLeft.addEventListener('click', (event) => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
    console.log('Clic sur la flèche gauche');
});

// J'ajoute un Event Listener sur la flèche droite
arrowRight.addEventListener('click', (event) => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
    console.log('Clic sur la flèche droite');
});

// J'ajoute les points sur le carrousel
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    // J'ajoute la class "dot_selected" pour la première diapo
    if (index === 0) {
        dot.classList.add('dot_selected');
    }

    dot.addEventListener('click', function () {
        currentIndex = index;
        updateSlide(currentIndex);
        console.log('Clic sur le point ' + (index + 1));
    });

    dotsContainer.appendChild(dot);
});




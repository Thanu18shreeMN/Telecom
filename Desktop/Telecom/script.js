// script.js
document.addEventListener("DOMContentLoaded", function () {
    const selectButtons = document.querySelectorAll('.select-plan');
    const selectedPlans = [];

    selectButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
                selectedPlans.splice(selectedPlans.indexOf(index), 1);
            } else {
                button.classList.add('selected');
                selectedPlans.push(index);
            }
        });
    });

    
    const compareButton = document.getElementById('compare-button');
    compareButton.addEventListener('click', () => {
        const comparisonContainer = document.querySelector('#comparison-container');
        comparisonContainer.innerHTML = ''; 

        selectedPlans.forEach((planIndex) => {
            const card = document.querySelector(`.col-md-4:nth-child(${planIndex + 1})`);
            const clonedCard = card.cloneNode(true);
            clonedCard.classList.add('col-md-4'); 
            comparisonContainer.appendChild(clonedCard);
        });
    });
});

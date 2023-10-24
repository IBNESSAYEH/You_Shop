let plus = document.getElementsByClassName('plus');
let minus = document.getElementsByClassName('minus');
let total = document.getElementsByClassName('total');
let quantite = document.getElementsByClassName('quantite');
let supprimer = document.getElementsByClassName('delete');
let card = document.getElementsByClassName('card');
let totalPayement = document.getElementsByClassName('totalPayement')[0];

// Convertir la collection en tableau
plus = Array.from(plus);

plus.forEach((plus, index) => {
    plus.addEventListener('click', function total_produit_plus() {
        quantite[index].innerHTML = 1 + +quantite[index].innerHTML;
        total[index].innerHTML = 20 * +quantite[index].innerHTML;
        calculateGlobalTotal();
    });
});

// Convertir la collection en tableau
minus = Array.from(minus);

minus.forEach((minus, index) => {
    minus.addEventListener('click', function total_produit_minus() {
        quantite[index].innerHTML = +quantite[index].innerHTML - 1;
        total[index].innerHTML = 20 * +quantite[index].innerHTML;
        calculateGlobalTotal();
    });
});

// Convertir la collection en tableau
supprimer = Array.from(supprimer);

supprimer.forEach((supprimer, index) => {
    supprimer.addEventListener('click', function delete_produit() {
        card[index].style.display = 'none';
        calculateGlobalTotal();
    });
});

function calculateGlobalTotal() {
    let global_total = 0;
    for (let i = 0; i < total.length; i++) {
      if (card[i].style.display !== 'none') {
        global_total += parseInt(total[i].innerHTML);
      }
    }
    totalPayement.innerHTML = global_total;
  }



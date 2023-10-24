// Sélectionner le formulaire
const form = document.querySelector('form');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêcher le comportement par défaut du formulaire

  // Valider les champs du formulaire
  const nom = document.querySelector('input[name="Nom"]').value.trim();
  const prenom = document.querySelector('input[name="Prenom"]').value.trim();
  const telephone = document.querySelector('input[name="Numero_du_telephone"]').value.trim();
  const cin = document.querySelector('input[name="CIN"]').value.trim();
  const adresse = document.querySelector('input[name="Addresse"]').value.trim();
  const email = document.querySelector('input[name="Email"]').value.trim();
  const pays = document.querySelector('input[name="Pays"]').value.trim();
  const ville = document.querySelector('input[name="Ville"]').value.trim();

  // Vérifier si tous les champs sont remplis
  if (nom === '' || prenom === '' || telephone === '' || cin === '' || adresse === '' || email === '' || pays === '' || ville === '') {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // Valider la longueur minimale des champs
  if (nom.length < 3 || prenom.length < 3 || adresse.length < 3 || pays.length < 3 || ville.length < 3) {
    alert('Les champs doivent contenir au moins 3 caractères.');
    return;
  }

  // Valider le format de l'email avec une expression régulière
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Veuillez entrer une adresse email valide.');
    return;
  }

  // Si toutes les validations sont réussies, soumettre le formulaire
  form.submit();
});

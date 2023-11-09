//l'esercizio chiede di chiedere all'utente il suo nome,cognome e il suo colore preferito.
//Per prima cosa procedo per chiedere all'utente il nome, quindi const InputUtente = prompt(..)


const FirstName = parseInt(prompt('FirstName'));
const LastName = parseInt(prompt('LastName'));
const Color = parseInt(prompt('WhatIsYourFavoriteColor'));

document.getElementById('output').innerHTML = 'Le credenziali' + FirstName + LastName + Color;
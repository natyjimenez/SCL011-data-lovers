//Linkear con data Pokemon
const pokeData = POKEMON.pokemon;
//Variable para la búsqueda de pokemon
let orderValue;
//Variables cards pokemones
let cardGallery = ""; 
const pokeResult = document.getElementById("pokeList");
const pokeStatsResult = document.getElementById("pokeStats");
//Imprimir Elementos de la Galería Pokemones
const showGallery = (pokeData) => {
    for (let i = 0; i < pokeData.length; i++){
    cardGallery +=
//Tarjeta
    `<div class="card" style="width: 210px;" data-toggle="modal">
     <h3 class="card-title">${pokeData[i].num} ${pokeData[i].name}</h3>
     <img class="card-img-top" src=${pokeData[i].img} alt="Card image cap">
     <div class="card-body">
     <p class="card-text">Hora en que aparece: ${pokeData[i].spawn_time}hrs</p>
     <p class="card-text">Eclosiona en huevos de: ${pokeData[i].egg}hrs</p>
     </div>
     </div>`
     } pokeResult.innerHTML = cardGallery;
     };
//Mostrar Tarjetas en orden aleatorio
const randomData = (pokeData)=>{
     return pokeData.sort(() => Math.random() - 0.5)
     };
     showGallery(randomData(pokeData));
//Orden Horario
document.getElementById("slctFilterOrder").addEventListener ("input", ( ) => {
     cardGallery ="";
     pokeStatsResult.innerHTML = "";
//Guardar la selección del usuario
     orderValue = document.getElementById("slctFilterOrder").value;
     if (orderValue == "00") {
     showGallery(window.dataPokemon.sortData(pokeData, "spawn_time", "ascendente"));
     } else if (orderValue == "24") {
     showGallery(window.dataPokemon.sortData(pokeData, "spawn_time", "descendente"));
     }

});

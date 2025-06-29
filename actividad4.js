let frutas = ["Manzana", "Banana", "Pera", "Uva"];
let lista = document.getElementById("lista-frutas");

frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`);

  let item = document.createElement("li");
  item.textContent = `Fruta ${index + 1}: ${fruta}`;
  lista.appendChild(item);
});

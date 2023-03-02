const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

// Leer datos del localStorage
const savedItems = JSON.parse(localStorage.getItem("items"));
if (savedItems) {
  savedItems.forEach((itemText) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = itemText;
    
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
  });
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    // Agregar elemento al localStorage
    const items = Array.from(document.querySelectorAll("li p")).map(p => p.textContent);
    localStorage.setItem("items", JSON.stringify(items));

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    // Eliminar elemento del localStorage
    const items = Array.from(document.querySelectorAll("li p")).map(p => p.textContent);
    localStorage.setItem("items", JSON.stringify(items));
    
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
const newFileBtn = document.getElementById("new-file-btn");
const openFileBtn = document.getElementById("open-file-btn");
const saveFileBtn = document.getElementById("save-file-btn");
const saveAsBtn = document.getElementById("save-as-btn");
const fontSelect = document.getElementById("font-select");
const fontSizeInput = document.getElementById("font-size");
const textArea = document.getElementById("text-area");

let currentFile = null;

// Funciones de botón
newFileBtn.addEventListener("click", () => {
  currentFile = null;
  textArea.value = "";
});

openFileBtn.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt";
  input.addEventListener("change", () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      currentFile = file;
      textArea.value = reader.result;
    });
    reader.readAsText(file);
  });
  input.click();
});

saveFileBtn.addEventListener("click", () => {
  if (currentFile) {
    const data = new Blob([textArea.value], { type: "text/plain" });
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.download = currentFile.name;
    link.click();
  }
});

saveAsBtn.addEventListener("click", () => {
  const data = new Blob([textArea.value], { type: "text/plain" });
  const url = URL.createObjectURL(data);
  const link = document.createElement("a");
  link.href = url;
  link.download = "untitled.txt";
  link.click();
});

// Funciones de selección de fuente y tamaño
fontSelect.addEventListener("change", () => {
  textArea.style.fontFamily = fontSelect.value;
});

fontSizeInput.addEventListener("input", () => {
  textArea.style.fontSize = fontSizeInput.value + "px";
});

// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops
let countWord = 1;
let countET = 0;
let longText =
  "Lorem Ipsum is simply dummy et text et of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    countWord++;
  }
}
for (let j = 0; j < longText.length; j++) {
  if (
    longText[j] === " " &&
    longText[j + 1] === "e" &&
    longText[j + 2] === "t" &&
    longText[j + 3] === " "
  ) {
    countET++;
  }
}

console.log(countET);

const buttonOpen = document.querySelector(".open");
const buttonClose = document.querySelector(".close");
const triangleTop = document.querySelector(".triangulo-2");
const cart = document.querySelector(".carta");
const title = document.querySelector("#title");
const square = document.querySelector("#quadrado");
const buttons = document.querySelector("#botoes");
let count = 0;

const mesage = ["Tem certeza?",
    "Absoluta?",
    "Cuidado pra não se arrepender",
    "Pensa mais um pouquinho",
    "Pensa no futuro",
    "Não aperta aqui 😢",
    "Não fique confusa",
    "Pensa no futuro!!!",
];


console.log(triangleTop);

console.log(buttonOpen);

buttonOpen.addEventListener("click", () => {
    triangleTop.classList.add("open");
    cart.classList.add("on");
    buttonOpen.innerText = "Sim";
    buttonClose.innerText = "Não";
    title.style.opacity = 1;

    buttonClose.addEventListener("click", () => {
        buttonClose.innerText = mesage[count];
        count++;
        buttonOpen.style.padding = `${(2*count)}rem`;
        buttonOpen.style.fontSize = `${(1.5*count)}rem`;

        if (mesage[count] == "Pensa no futuro") {
            square.style.display = "none";
            title.style.display = "none";
            buttons.classList.add("column");
        }
    })

    buttonOpen.addEventListener("click", () => {
        window.location.href = "yes.html";
    })
})
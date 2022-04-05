/* DOCUMENTAÇÃO

CÓDIGO
- Para formar os dígitos foi utilizado SVGs alterando o atributo "fill" de acordo com cada número desejado.
- Foram tratados os seguintes possíveis erros:
    + Erro na requisição via API, capturando o código do erro e mostrando no display
    + Ausencia de parâmetros
    + Inserção de caracteres não númericos
    + Inserção de mais de 3 caracteres
    + Quantidade de caracteres no display
    + Bloqueio do input em erro ou jogo ganho
- Foi utilizado classes CSS mostrar ou ocultar o botão de "Novo Jogo".

- Fluxograma auxiliar
+ https://www.figma.com/file/o2dOZ3pEQPfAqzaGlayBHZ/Qual-o-n%C3%BAmero%3F---SOL?node-id=0%3A1
+ Obs.: Utilizado apenas como referência!

Obs.: Demais detalhes ficam a cargo dos comentários no próprio código.

*/


// Referenciando os elementos necessários
const message = document.getElementById("message");
const display = document.getElementById("display");

const newGameBtn = document.getElementById("new-game-bt");
const inputGuess = document.getElementById("input-guess");
const sendBtn = document.getElementById("send-bt");

const displayItem1 = document.getElementById("displayItem-1");
const displayItem2 = document.getElementById("displayItem-2");
const displayItem3 = document.getElementById("displayItem-3");

// Declarando as váriáveis necessárias
let targetNumber = "";
let guessNumber = "";
let isError = false;

// Limpa as configurações montrando todos os dígidos
function cleanDisplay() {
    displayItem1.classList.remove("display-off");
    displayItem2.classList.remove("display-off");
    displayItem3.classList.remove("display-off");

    setDisplayItem(displayItem1, 0, "clean");
    setDisplayItem(displayItem2, 0, "clean");
    setDisplayItem(displayItem3, 0, "clean");
}

// Configura os leds de cada dígito individualmente
// Recebe por parâmetro o item a ser configurado, seu valor e o tipo (normal, error, hit, clean)
function setDisplayItem(item, value, type) {

    // Cor padrão
    let color = "#262A34";

    // Verifica o tipo de dado a ser configurado
    // e determina sua cor correspondente
    if (type === "normal") {
        color = "#262A34";
    } else if (type === "error") {
        color = "#CC3300";
    } else if (type === "hit") {
        color = "#32BF00";
    } else if (type === "clean") {
        color = "#DDDDDD";
    }

    // Garante que o valor seja um número
    value = Number(value);

    // "Acende" os leds necessários para formar o numero desejado
    if (value === 0) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', color);
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', color);
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', '#DDDDDD');
    } else if (value === 1) {
        item.children[0].setAttribute('fill', '#DDDDDD');
        item.children[1].setAttribute('fill', '#DDDDDD');
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', '#DDDDDD');
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', '#DDDDDD');
    } else if (value === 2) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', '#DDDDDD');
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', color);
        item.children[5].setAttribute('fill', '#DDDDDD');
        item.children[6].setAttribute('fill', color);
    } else if (value === 3) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', '#DDDDDD');
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', color);
    } else if (value === 4) {
        item.children[0].setAttribute('fill', '#DDDDDD');
        item.children[1].setAttribute('fill', color);
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', '#DDDDDD');
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', color);
    } else if (value === 5) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', color);
        item.children[2].setAttribute('fill', '#DDDDDD');
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', color);
    } else if (value === 6) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', color);
        item.children[2].setAttribute('fill', '#DDDDDD');
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', color);
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', color);
    } else if (value === 7) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', '#DDDDDD');
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', '#DDDDDD');
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', '#DDDDDD');
    } else if (value === 8) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', color);
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', color);
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', color);
    } else if (value === 9) {
        item.children[0].setAttribute('fill', color);
        item.children[1].setAttribute('fill', color);
        item.children[2].setAttribute('fill', color);
        item.children[3].setAttribute('fill', color);
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', color);
        item.children[6].setAttribute('fill', color);
    } else {
        item.children[0].setAttribute('fill', '#DDDDDD');
        item.children[1].setAttribute('fill', '#DDDDDD');
        item.children[2].setAttribute('fill', '#DDDDDD');
        item.children[3].setAttribute('fill', '#DDDDDD');
        item.children[4].setAttribute('fill', '#DDDDDD');
        item.children[5].setAttribute('fill', '#DDDDDD');
        item.children[6].setAttribute('fill', '#DDDDDD');
    }
}

// Recebe por parâmetro o número e tipo de dado (error, hit, normal, clean)
// Usa o número pra saber a quantidade de dígitos necessários
// Usa o tipo pra saber qual a cor do mesmo
// Chama a função que confugura cada led de acordo com o numero recebido
function setDisplay(num, type) {

    // Limpa o display antes de atualizar
    cleanDisplay();

    const numArray = Array.from(num.toString());
    const size = numArray.length;

    if (size === 1) {
        displayItem2.classList.add("display-off");
        displayItem3.classList.add("display-off");
        setDisplayItem(displayItem1, numArray[0], type);

    } else if (size === 2) {
        displayItem3.classList.add("display-off");
        setDisplayItem(displayItem1, numArray[0], type);
        setDisplayItem(displayItem2, numArray[1], type);

    } else if (size === 3) {
        setDisplayItem(displayItem1, numArray[0], type);
        setDisplayItem(displayItem2, numArray[1], type);
        setDisplayItem(displayItem3, numArray[2], type);
    }
}

// Faz requisição a API do número a ser adivinhado
function newTargetNumber() {

    isError = false;
    const api = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";

    fetch(api).then(response => response.json()).then(result => {

        const status = result.StatusCode;

        if (status > 300) {
            isError = true;
            setDisplay(status, "error")
            setMessage(status);
            inputBlock(true);
        } else {
            targetNumber = result.value;
        }
    });
}

// Atualiza a mensagem a ser mostrada
function setMessage(num) {

    // Limpa classes de erro e acerto caso existam
    message.classList.remove("message-hit");
    message.classList.remove("message-error");

    if (num === 0) {
        message.innerHTML = "";
    } else if (num > targetNumber && isError !== true) {
        message.innerHTML = "É menor";
    } else if (num < targetNumber && isError !== true) {
        message.innerHTML = "É maior";
    } else if (num == targetNumber) {
        message.innerHTML = "Você acertou!!!";
        message.classList.add("message-hit");
    } else if (num > 300 && isError === true) {
        message.innerHTML = "ERRO";
        message.classList.add("message-error");
    }

    // Usado para testes
    // console.log(targetNumber);
}

// Caputura os dados do input
// Chama a função que configura o display passando a cor por parâmetro
function setGuessNumber() {

    guessNumber = inputGuess.value;

    if (guessNumber == targetNumber) {
        setDisplay(guessNumber, "hit");
        inputBlock(true);
    } else {
        setDisplay(guessNumber, "normal");
    }

    setMessage(guessNumber);
}

// Tem a função de bloquear ou desbloquear o input e botão
function inputBlock(block) {
    if (block) {
        inputGuess.disabled = true;
        sendBtn.disabled = true;
        newGameBtn.classList.remove("new-game-bt-hidden");
    } else {
        inputGuess.disabled = false;
        sendBtn.disabled = false;
        newGameBtn.classList.add("new-game-bt-hidden");
    }
}

// Chama a função que captura os dados do input com click no botão
sendBtn.addEventListener('click', function () {
    // se o input não estiver vazio
    if (inputGuess.value != "") {
        setGuessNumber();
        inputGuess.value = "";
        inputGuess.focus();
    }
})

// Chama a função que captura os dados do input com ENTER
inputGuess.addEventListener("keyup", event => {

    // se o usuario pressionar Enter e o input não estiver vazio
    if (event.key == "Enter" && inputGuess.value != "") {
        setGuessNumber();
        inputGuess.value = "";

    } else if (inputGuess.value != "" && (inputGuess.value < 1 || inputGuess.value > 300)) {
        inputGuess.value = 300;
    }
})

// Botão de Nova Partida
newGameBtn.addEventListener('click', function () {
    // desbloqueia o input e botão
    inputBlock(false);
    // novo jogo
    startGame();
})

// Configurações iniciais do jogo
function startGame() {
    newTargetNumber();
    setMessage(0);
    setDisplay(0, "normal")
    guessNumber = "";
}

// Inicia a aplicação
startGame();
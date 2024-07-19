
const initialPassword = "1234"; // Senha inicial
let canspin = false; // Define a condição inicial como falsa

function promptPassword() {
    const passwordPrompt = document.getElementById("passwordPrompt");
    passwordPrompt.style.display = "block";
}

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const storedPassword = localStorage.getItem("currentPassword");

    if (passwordInput === storedPassword) {
        alert("Senha correta!");
        document.getElementById("passwordPrompt").style.display = "none";
        canspin = true;
    } else {
        alert("Senha incorreta.");
    }

    // Gere uma nova senha
    const newPassword = generateNewPassword();

    // Atualizar o valor da nova senha no formulário
    const newPasswordField = document.getElementById("newPasswordField");
    newPasswordField.value = newPassword;

    // Salvar a nova senha no localStorage
    localStorage.setItem("currentPassword", newPassword);

    // Enviar o formulário usando fetch para evitar o recarregamento da página
    submitForm();
}

function generateNewPassword() {
    // Gere uma nova senha aleatória
    return Math.random().toString(36).substr(2, 8);
}

function submitForm() {
    const form = document.getElementById('myForm');
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    // .catch(error => {
    //     document.getElementById('message').textContent = 'Houve um erro ao enviar o formulário.';
    // });
}

window.onload = function() {
    if (!localStorage.getItem("currentPassword")) {
        localStorage.setItem("currentPassword", initialPassword);
    }
    promptPassword();
}

const weightedNumbers = [
    21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21,

    13, 13, 13, 13,
    14,
    15, 15, 15, 15, 15, 15, 15, 15,
    16, 16, 16,
    17, 17, 17, 17,
    18,
    19, 19, 19, 19, 19, 19, 19, 19,
    20, 20, 20,
    21, 21, 21, 21, 21, 21, 21, 21,
    22,
    23, 23, 23, 23,
    24, 24, 24,
    25,
    26, 26, 26, 26, 26, 26, 26, 26,
    27, 27, 27, 27,
    28,
    29, 29, 29, 29, 29, 29, 29, 29,
    30, 30, 30
];

function getRandomWeightedNumber(weightedArray) {
    const randomIndex = Math.floor(Math.random() * weightedArray.length);
    return weightedArray[randomIndex];
}

let rngNumber = getRandomWeightedNumber(weightedNumbers);
let raceName = document.querySelector('.raceName');
let spincounter = document.querySelector('.spincounterNumber');
let contador = 0;
let raceID = document.querySelector('.raceIDtext');
let IDnumber = getRandomWeightedNumber(weightedNumbers);

const buttonImg = document.querySelector('.button-img');
const slider = document.querySelector('.banner .slider');

buttonImg.addEventListener('mousedown', () => {
    if (!canspin) {
        alert("Você precisa inserir a senha correta primeiro!");
        return;
    }

    // Desabilitar o botão
    buttonImg.disabled = true;
    let randomNumber = getRandomWeightedNumber(weightedNumbers);
    let randomNumber2 = getRandomWeightedNumber(weightedNumbers);

    contador++;
    spincounter.textContent = contador;

    // Remove a animação anterior definindo um valor temporário
    slider.style.animation = 'none';

    rngNumber = getRandomWeightedNumber(weightedNumbers);
    document.documentElement.style.setProperty('--rng', rngNumber);

    // Força uma re-renderização removendo e re-aplicando a classe de animação
    void slider.offsetWidth; // Força a reflow

    // Define a animação 'SPIN' novamente
    slider.style.animation = 'SPIN 10s forwards cubic-bezier(0.2, 0, 0.5, 1)';

    // Reabilitar o botão após 10 segundos
    setTimeout(() => {
        buttonImg.disabled = false;
    }, 10000); // 10000 milissegundos = 10 segundos

    // Obter a data atual
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0'); // Adiciona um zero à esquerda se necessário
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Janeiro é 0, por isso adicionamos 1
    const year = currentDate.getFullYear();

    // Criar a string da data no formato desejado
    const dateString = `${day}${month}`;

    // Atualizar o conteúdo do elemento raceID
    raceID.textContent = randomNumber + dateString + IDnumber + year + contador + rngNumber + randomNumber2;

    switch (rngNumber) {
        case 13:
            setTimeout(() => { raceName.textContent = 'Skypiean'; raceName.style.color = '#0ff' }, 10000);
            break;
        case 14:
            setTimeout(() => { raceName.textContent = 'Vampire'; raceName.style.color = '#ff0' }, 10000);
            break;
        case 15:
            setTimeout(() => { raceName.textContent = 'Long arm'; raceName.style.color = '#fff' }, 10000);
            break;
        case 16:
            setTimeout(() => { raceName.textContent = 'Birkan'; raceName.style.color = '#f0f' }, 10000);
            break;
        case 17:
            setTimeout(() => { raceName.textContent = 'Merfolk'; raceName.style.color = '#0ff' }, 10000);
            break;
        case 18:
            setTimeout(() => { raceName.textContent = 'Lunarian'; raceName.style.color = '#f00' }, 10000);
            break;
        case 19:
            setTimeout(() => { raceName.textContent = 'Snakeneck'; raceName.style.color = '#fff' }, 10000);
            break;
        case 20:
            setTimeout(() => { raceName.textContent = 'Kuja'; raceName.style.color = '#f0f' }, 10000);
            break;
    case 21: setTimeout(() => {raceName.textContent = 'Human'     ; raceName.style.color = '#fff'}, 10000);break;
            case 22: setTimeout(() => {raceName.textContent = 'Oni'       ; raceName.style.color = '#ff0'}, 10000);break;
            case 23: setTimeout(() => {raceName.textContent = 'Fishman'   ; raceName.style.color = '#0ff'}, 10000);break;
            case 24: setTimeout(() => {raceName.textContent = 'Mink'      ; raceName.style.color = '#f0f'}, 10000);break;
            case 25: setTimeout(() => {raceName.textContent = 'Giant'     ; raceName.style.color = '#ff0'}, 10000);break;
            case 26: setTimeout(() => {raceName.textContent = 'Long leg'  ; raceName.style.color = '#fff'}, 10000);break;
            case 27: setTimeout(() => {raceName.textContent = 'Shandia'   ; raceName.style.color = '#0ff'}, 10000);break;
            case 28: setTimeout(() => {raceName.textContent = 'Bucaneiro' ; raceName.style.color = '#f00'}, 10000);break;
            case 29: setTimeout(() => {raceName.textContent = '3 eyes'    ; raceName.style.color = '#fff'}, 10000);break;
            case 30: setTimeout(() => {raceName.textContent = 'Tenryubitu'; raceName.style.color = '#f0f'}, 10000);break;
        }
    });


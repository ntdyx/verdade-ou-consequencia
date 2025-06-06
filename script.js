// --- DADOS DO JOGO ---
const ORIGINAL_VERDADES_HARD = [];
const ORIGINAL_CONSEQUENCIAS_HARD = [];
// (COLE SUAS PERGUNTAS E CONSEQUÊNCIAS AQUI)
ORIGINAL_VERDADES_HARD.push(
    "Das pessoas aqui, com quem você mais gostaria de ficar?", "Qual a maior mentira que já contou a um(a) ex e nunca foi descoberta?", "Qual foi a coisa mais embaraçosa que seus pais já pegaram você fazendo?", "Qual foi a coisa mais cruel que já fez num relacionamento?", "Qual o lugar mais estranho onde já ficou com alguém?", "Já mandou foto comprometedora pra pessoa errada?", "Já teve sonho “sugestivo” com alguém desta roda?", "Quando foi seu último fora amoroso e como lidou?", "O que você nunca toparia fazer pelo(a) parceiro(a)?", "Quem você gostaria muito de ficar de novo?", "Já nadou pelado(a)? Onde?", "Já teve que esconder marcas de beijo ou chupão?", "Tem tatuagem/piercing escondido? Onde?", "Já ficou com alguém comprometido(a)?", "Já terminou só pra se envolver com outra pessoa?", "Já ficou com pai/mãe de amigo(a)?", "Qual site do seu histórico te deixaria com vergonha se virem?", "Já foi pego(a) “no ato”? Por quem?", "Qual fetiche você tem vergonha de admitir?", "Já fingiu prazer? Quando e por quê?", "Qual foi a maior loucura que já fez só pra impressionar alguém na cama?", "Já teve um caso de uma noite só?", "Qual é a sua fantasia secreta que nunca contou a ninguém?", "Já pensou em outra pessoa enquanto beijava/ficava?", "Qual é o lugar mais audacioso onde transou?", "Qual a mensagem mais picante que já enviou?", "Já fez nudez em público ou correu pelado(a)?", "Já sonhou com o(a) parceiro(a) de um amigo(a)?", "Qual foi o beijo mais inesquecível da sua vida?", "Que “kink” você nunca toparia experimentar?", "Já participou de ménage ou topa?", "Qual brinquedo erótico você mais curte?", "Já usou comida durante o sexo?", "Já teve romance no trabalho?", "Já mandou nudes em app de namoro?", "Já flertou com professor(a) ou chefe?", "Qual é seu “guilty pleasure” sexual?", "Já gravou vídeo íntimo?", "Qual é sua opinião sobre relações abertas?", "Já fantasiou com um/uma famoso(a) específico(a)? Qual?", "Qual a coisa mais estranha que já te excitou?", "Qual foi a pior experiência íntima que já teve?", "Qual posição sexual você acha superestimada?", "Qual é o maior tempo que ficou sem sexo?", "Já pagou ou receberia dinheiro por sexo?", "Já teve curiosidade sobre BDSM?", "Qual é a parte do corpo que mais te atrai em alguém?", "Já fez sexting hardcore? Com quem?", "Qual foi o “walk of shame” mais constrangedor?", "Já usou algemas, vendas ou amarras?"
);
ORIGINAL_CONSEQUENCIAS_HARD.push(
    "Mande mensagem ousada “sem querer” para um contato aleatório.", "Ligue para alguém e diga que está grávido(a) / vai ser pai/mãe.", "Faça striptease caprichado de 30 s.", "Lamba o pescoço de quem o grupo apontar (se houver consentimento).", "Coloque um cubo de gelo dentro da blusa e espere derreter.", "Curta os 5 posts mais antigos do primeiro perfil que aparecer no seu feed.", "Faça dancinha viral do TikTok escolhida pelo grupo.", "Cheire as axilas da pessoa à sua direita.", "Tire as meias com a boca.", "Fique 5 rodadas numa pose escolhida pelo grupo.", "Deixe a pessoa à esquerda te desenhar o rosto inteiro com caneta.", "Envie um áudio gemendo como se estivesse espreguiçando para um amigo.", "Diga “sim” para tudo até seu próximo turno.", "Beije quem está à sua esquerda (na bochecha ou boca— grupo decide).", "Poste nos stories “Pensando em abrir um OnlyFans… opiniões?” e deixe 15 min.", "Dê um beijo no pescoço da pessoa que você escolher.", "Assista a um vídeo pornô (fora da câmera) e imite a primeira cena por 10 s.", "Lamba os mamilos do parceiro(a) ou da própria mão simulando.", "Faça massagem sensual usando só uma mão por 1 min em alguém.", "Seduza alguém para tomar banho de roupa juntos (pode ser ficção encenada).", "Permita que alguém faça uma foto sensual sua (sem nude explícito).", "Sussurre no ouvido do alvo a frase mais safada que imaginar.", "Tire a blusa ou camisa pelo resto da rodada.", "Posicione-se na “pose mais sexy” por 1 min.", "Narrar uma página da Wikipédia no tom mais sensual possível.", "Gemer como se tivesse o melhor orgasmo enquanto come algo.", "Desafiar-se a abrir bombom com a boca somente.", "Simular fazer amor com o chão por 30 s.", "Mostrar a “cara de orgasmo”", "Fazer body shot (beber líquido no corpo de alguém) consensualmente.", "Beijar suas próprias mãos como se fossem outra pessoa.", "Encenar a cena mais sexy de um filme que você lembrar.", "Colocar no status do WhatsApp para “Estou gozando…” depois “Acabei de gozar”.", "Fazer twerk por 1 min; se não souber, aprender na hora.", "Colocar chantilly em parte do corpo e deixar alguém lamber (se toparem).", "Desenhar o corpo nu de alguém (ou descrição verbal se preferirem).", "Fazer massagem nas costas de alguém sem usar as mãos.", "Simular sexo oral em uma fruta por 15 s.", "Fazer lap dance completo de 30 s na pessoa a sua esquerda.", "Usar voz de bebê até o próximo turno.", "Deixar um(a) amigo(a) postar qualquer frase no seu X."
);

let verdadesAtuais = [];
let consequenciasAtuais = [];

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let players = [];
let currentPlayer;
let playerTurnOrder = [];
const PLAYER_EMOJIS = ["🍆", "🍑", "💦", "🫦", "🥵", "🔥", "💋", "🤤", "🌶️", "🔞", "😈", "🍒", "🌝", "🍩", "👅", "♋", "✂️"];
let availableEmojis = [];
const MAX_PLAYERS = 10;
const MAX_DRINKS = 3;
const GIF_DURATION = 4000;

// --- ELEMENTOS DO DOM ---
const playerNameInput = document.getElementById('player-name-input');
const addPlayerBtn = document.getElementById('add-player-btn');
const playerListUI = document.getElementById('player-list');
const startGameBtn = document.getElementById('start-game-btn');
const resetQuestionsBtn = document.getElementById('reset-questions-btn'); // Botão de reset
const setupArea = document.getElementById('setup-area');
//... (resto dos elementos do DOM como antes)
const loadingNextPlayerArea = document.getElementById('loading-next-player');
const gameArea = document.getElementById('game-area');
const gameOverArea = document.getElementById('game-over-area');
const currentPlayerDisplay = document.getElementById('current-player-display');
const choiceButtonsDiv = document.getElementById('choice-buttons');
const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const questionDareDisplayDiv = document.getElementById('question-dare-display');
const textDisplay = document.getElementById('text-display');
const doneBtn = document.getElementById('done-btn');
const drinkBtn = document.getElementById('drink-btn');
const playerStatusArea = document.getElementById('player-status-area');
const winnerDisplay = document.getElementById('winner-display');
const restartGameBtn = document.getElementById('restart-game-btn');
const clickSound = document.getElementById('click-sound');


// --- FUNÇÕES DO JOGO ---
function playClickSound() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(error => console.log("Erro ao tocar som de clique:", error));
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ATUALIZADO: para usar o Local Storage
function loadQuestions() {
    // Carrega as perguntas já usadas do Local Storage
    const usedTruths = JSON.parse(localStorage.getItem('truthOrDare_usedTruths')) || [];
    const usedDares = JSON.parse(localStorage.getItem('truthOrDare_usedDares')) || [];

    // Filtra as perguntas originais para obter apenas as que não foram usadas
    verdadesAtuais = ORIGINAL_VERDADES_HARD.filter(q => !usedTruths.includes(q));
    consequenciasAtuais = ORIGINAL_CONSEQUENCIAS_HARD.filter(q => !usedDares.includes(q));

    // Se todas as verdades já foram usadas, reseta o histórico de verdades e recarrega
    if (verdadesAtuais.length === 0 && ORIGINAL_VERDADES_HARD.length > 0) {
        alert("Todas as VERDADES foram usadas! O ciclo será reiniciado.");
        localStorage.removeItem('truthOrDare_usedTruths');
        verdadesAtuais = [...ORIGINAL_VERDADES_HARD];
    }
    
    // Se todas as consequências já foram usadas, reseta o histórico de consequências e recarrega
    if (consequenciasAtuais.length === 0 && ORIGINAL_CONSEQUENCIAS_HARD.length > 0) {
        alert("Todas as CONSEQUÊNCIAS foram usadas! O ciclo será reiniciado.");
        localStorage.removeItem('truthOrDare_usedDares');
        consequenciasAtuais = [...ORIGINAL_CONSEQUENCIAS_HARD];
    }
    
    // Embaralha as listas atuais
    shuffleArray(verdadesAtuais);
    shuffleArray(consequenciasAtuais);
}

function updatePlayerListUI() {
    playerListUI.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${player.emoji} ${player.name}</span><button class="remove-player-btn" data-player-id="${player.id}">X</button>`;
        playerListUI.appendChild(li);
    });
    startGameBtn.disabled = players.length < 2;
    const maxReached = players.length >= MAX_PLAYERS;
    addPlayerBtn.disabled = maxReached;
    playerNameInput.disabled = maxReached;
    playerNameInput.placeholder = maxReached ? "Máximo de jogadores atingido" : "Nome do Jogador";
}

function addPlayer() {
    playClickSound();
    const name = playerNameInput.value.trim();
    if (name && players.length < MAX_PLAYERS) {
        const isDuplicate = players.some(player => player.name.toLowerCase() === name.toLowerCase());
        if (isDuplicate) {
            alert("Este nome já foi adicionado. Por favor, escolha outro.");
            return;
        }
        const emojiIndex = Math.floor(Math.random() * availableEmojis.length);
        const selectedEmoji = availableEmojis.splice(emojiIndex, 1)[0];
        players.push({ name, drinks: 0, eliminated: false, id: Date.now() + name, emoji: selectedEmoji });
        playerNameInput.value = '';
        updatePlayerListUI();
    } else if (players.length >= MAX_PLAYERS) {
        alert(`Máximo de ${MAX_PLAYERS} jogadores atingido.`);
    } else if (!name) {
        alert("Por favor, insira um nome para o jogador.");
    }
    playerNameInput.focus();
}

function removePlayer(playerIdToRemove) {
    playClickSound();
    const playerIndex = players.findIndex(p => p.id == playerIdToRemove);
    if(playerIndex > -1){
        const removedPlayer = players[playerIndex];
        if (removedPlayer.emoji) {
            availableEmojis.push(removedPlayer.emoji);
        }
        players.splice(playerIndex, 1);
        updatePlayerListUI();
    }
}

// ATUALIZADO: para salvar a pergunta usada
function showTruth() {
    playClickSound();
    if (verdadesAtuais.length === 0) {
        loadQuestions(); // Tenta recarregar (caso o ciclo tenha se completado)
        if(verdadesAtuais.length === 0) { // Se ainda estiver vazio
             textDisplay.textContent = "Nenhuma verdade disponível no momento.";
             return;
        }
    }
    const truth = verdadesAtuais.shift();
    textDisplay.textContent = `VERDADE: ${truth}`;
    
    // Salva no Local Storage
    const usedTruths = JSON.parse(localStorage.getItem('truthOrDare_usedTruths')) || [];
    usedTruths.push(truth);
    localStorage.setItem('truthOrDare_usedTruths', JSON.stringify(usedTruths));
    
    choiceButtonsDiv.style.display = 'none';
    questionDareDisplayDiv.style.display = 'block';
}

// ATUALIZADO: para salvar a consequência usada
function showDare() {
    playClickSound();
    if (consequenciasAtuais.length === 0) {
        loadQuestions();
        if(consequenciasAtuais.length === 0) {
            textDisplay.textContent = "Nenhuma consequência disponível no momento.";
            return;
        }
    }
    const dare = consequenciasAtuais.shift();
    textDisplay.textContent = `CONSEQUÊNCIA: ${dare}`;

    // Salva no Local Storage
    const usedDares = JSON.parse(localStorage.getItem('truthOrDare_usedDares')) || [];
    usedDares.push(dare);
    localStorage.setItem('truthOrDare_usedDares', JSON.stringify(usedDares));
    
    choiceButtonsDiv.style.display = 'none';
    questionDareDisplayDiv.style.display = 'block';
}


function resetGame() {
    playClickSound();
    players = [];
    currentPlayer = null;
    playerTurnOrder = [];
    availableEmojis = [...PLAYER_EMOJIS];
    // A função loadQuestions agora vai lidar com o Local Storage, não precisa resetar aqui
    updatePlayerListUI();
    playerStatusArea.innerHTML = '';
    setupArea.style.display = 'block';
    gameArea.style.display = 'none';
    gameOverArea.style.display = 'none';
    loadingNextPlayerArea.style.display = 'none';
}


// --- EVENT LISTENERS ---
// ... (todos os outros event listeners permanecem os mesmos)
addPlayerBtn.addEventListener('click', addPlayer);
playerNameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter' && !addPlayerBtn.disabled) addPlayer(); });
playerListUI.addEventListener('click', (e) => { if (e.target.classList.contains('remove-player-btn')) removePlayer(e.target.dataset.playerId); });
startGameBtn.addEventListener('click', startGame);
truthBtn.addEventListener('click', showTruth);
dareBtn.addEventListener('click', showDare);
doneBtn.addEventListener('click', handleDone);
drinkBtn.addEventListener('click', handleDrink);
restartGameBtn.addEventListener('click', resetGame);


// NOVO Event Listener para o botão de resetar perguntas
resetQuestionsBtn.addEventListener('click', () => {
    playClickSound();
    if (confirm("Você tem certeza que deseja apagar o histórico de perguntas já usadas?")) {
        localStorage.removeItem('truthOrDare_usedTruths');
        localStorage.removeItem('truthOrDare_usedDares');
        alert("Histórico de perguntas apagado com sucesso!");
    }
});

// --- INICIALIZAÇÃO ---
resetGame(); // A chamada inicial do jogo

// --- FUNÇÕES NÃO MODIFICADAS (COPIADAS PARA COMPLETUDE) ---
function updatePlayerStatusDisplay(){playerStatusArea.innerHTML="";players.forEach(e=>{const t=document.createElement("div");t.textContent=`${e.emoji} ${e.name}: ${e.drinks} bebida(s)${e.eliminated?" - ELIMINADO(A)!":""}`,e.eliminated&&t.classList.add("eliminated"),playerStatusArea.appendChild(t)})}
function selectNextPlayer(){const e=players.filter(e=>!e.eliminated);return 0===e.length?(endGame("Ninguém sobrou! Empate ou todos desistiram."),null):1===e.length&&players.length>1?(endGame(`${e[0].emoji} ${e[0].name} é o(a) vencedor(a)!`),null):0===playerTurnOrder.length&&(e.length>0?playerTurnOrder=shuffleArray([...e]):(endGame("Erro: Não há jogadores ativos para formar uma rodada."),null)),playerTurnOrder.length>0?(currentPlayer=playerTurnOrder.shift(),currentPlayer):(endGame("Não foi possível determinar o próximo jogador."),null)}
function startGame(){playClickSound();if(players.length<2)return void alert("Adicione pelo menos 2 jogadores para começar!");loadQuestions(),playerTurnOrder=[],setupArea.style.display="none",gameArea.style.display="none",loadingNextPlayerArea.style.display="block",gameOverArea.style.display="none",setTimeout(()=>{loadingNextPlayerArea.style.display="none",gameArea.style.display="block",nextTurnFlow()},GIF_DURATION)}
function nextTurnFlow(){if(selectNextPlayer()){currentPlayerDisplay.textContent=`Vez de: ${currentPlayer.emoji} ${currentPlayer.name}`,choiceButtonsDiv.style.display="block",questionDareDisplayDiv.style.display="none",updatePlayerStatusDisplay()}}
function prepareNextTurn(){questionDareDisplayDiv.style.display="none",choiceButtonsDiv.style.display="none",gameArea.style.display="none",loadingNextPlayerArea.style.display="block",setTimeout(()=>{loadingNextPlayerArea.style.display="none",gameArea.style.display="block",nextTurnFlow()},GIF_DURATION)}
function handleDone(){playClickSound(),prepareNextTurn()}
function handleDrink(){playClickSound();if(currentPlayer){const e=players.find(e=>e.id===currentPlayer.id);if(!e)return console.error("Erro: Jogador atual não encontrado na lista principal."),void prepareNextTurn();e.drinks++,e.drinks>=MAX_DRINKS&&(e.eliminated=!0,alert(`${e.emoji} ${e.name} bebeu ${MAX_DRINKS} vezes e foi eliminado(a)!`)),updatePlayerStatusDisplay();const t=players.filter(e=>!e.eliminated);players.length>1&&t.length<=1?1===t.length?endGame(`${t[0].emoji} ${t[0].name} é o(a) vencedor(a)!`):endGame("Todos foram eliminados!"):1===players.length&&e.eliminated?endGame(`${e.name} foi eliminado(a)! Fim de jogo.`):prepareNextTurn()}}
function endGame(e){gameArea.style.display="none",loadingNextPlayerArea.style.display="none",gameOverArea.style.display="block",winnerDisplay.textContent=e}

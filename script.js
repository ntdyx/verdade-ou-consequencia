// --- DADOS DO JOGO (PERGUNTAS E CONSEQUÊNCIAS) ---
const ORIGINAL_VERDADES_HARD = [];
const ORIGINAL_CONSEQUENCIAS_HARD = [];
// ... (COLE SUAS PERGUNTAS E CONSEQUÊNCIAS AQUI COMO ANTES)
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
const setupArea = document.getElementById('setup-area');
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

function loadQuestions() {
    verdadesAtuais = [...ORIGINAL_VERDADES_HARD];
    consequenciasAtuais = [...ORIGINAL_CONSEQUENCIAS_HARD];
    shuffleArray(verdadesAtuais);
    shuffleArray(consequenciasAtuais);
}

function updatePlayerListUI() {
    playerListUI.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${player.emoji} ${player.name}</span>
            <button class="remove-player-btn" data-player-id="${player.id}">X</button>
        `;
        playerListUI.appendChild(li);
    });

    startGameBtn.disabled = players.length < 2;
    
    const maxReached = players.length >= MAX_PLAYERS;
    addPlayerBtn.disabled = maxReached;
    playerNameInput.disabled = maxReached;
    if(maxReached){
        playerNameInput.placeholder = "Máximo de jogadores atingido";
    } else {
        playerNameInput.placeholder = "Nome do Jogador";
    }
}

// ### FUNÇÃO MODIFICADA ###
function addPlayer() {
    playClickSound();
    const name = playerNameInput.value.trim();

    // Condição principal para adicionar: nome existe e não atingiu o limite
    if (name && players.length < MAX_PLAYERS) {
        
        // ALTERAÇÃO: Adicionada verificação de nome duplicado (case-insensitive)
        const isDuplicate = players.some(player => player.name.toLowerCase() === name.toLowerCase());
        if (isDuplicate) {
            alert("Este nome já foi adicionado. Por favor, escolha outro.");
            return; // Interrompe a função se o nome for duplicado
        }
        
        // Se passou na verificação, continua para adicionar o jogador
        const emojiIndex = Math.floor(Math.random() * availableEmojis.length);
        const selectedEmoji = availableEmojis.splice(emojiIndex, 1)[0];

        players.push({
            name: name,
            drinks: 0,
            eliminated: false,
            id: Date.now() + name,
            emoji: selectedEmoji
        });
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

function updatePlayerStatusDisplay() {
    playerStatusArea.innerHTML = '';
    players.forEach(player => {
        const div = document.createElement('div');
        div.textContent = `${player.emoji} ${player.name}: ${player.drinks} bebida(s)${player.eliminated ? ' - ELIMINADO(A)!' : ''}`;
        if (player.eliminated) {
            div.classList.add('eliminated');
        }
        playerStatusArea.appendChild(div);
    });
}

function selectNextPlayer() {
    const activePlayers = players.filter(p => !p.eliminated);
    if (activePlayers.length === 0) {
        endGame("Ninguém sobrou! Empate ou todos desistiram.");
        return null;
    }
    if (activePlayers.length === 1 && players.length > 1) {
        endGame(`${activePlayers[0].emoji} ${activePlayers[0].name} é o(a) vencedor(a)!`);
        return null;
    }
   
    if (playerTurnOrder.length === 0) {
        if (activePlayers.length > 0) {
            playerTurnOrder = shuffleArray([...activePlayers]);
        } else {
            endGame("Erro: Não há jogadores ativos para formar uma rodada.");
            return null;
        }
    }

    if (playerTurnOrder.length > 0) {
        currentPlayer = playerTurnOrder.shift();
        return currentPlayer;
    } else {
        endGame("Não foi possível determinar o próximo jogador.");
        return null;
    }
}

function startGame() {
    playClickSound();
    if (players.length < 2) {
        alert("Adicione pelo menos 2 jogadores para começar!");
        return;
    }
    loadQuestions();
    playerTurnOrder = [];
    
    setupArea.style.display = 'none';
    gameArea.style.display = 'none';
    loadingNextPlayerArea.style.display = 'block';
    gameOverArea.style.display = 'none';

    setTimeout(() => {
        loadingNextPlayerArea.style.display = 'none';
        gameArea.style.display = 'block';
        nextTurnFlow();
    }, GIF_DURATION);
}

function nextTurnFlow() {
    const activePlayer = selectNextPlayer();
    if (!activePlayer) {
        return;
    }
    currentPlayerDisplay.textContent = `Vez de: ${currentPlayer.emoji} ${currentPlayer.name}`;
    choiceButtonsDiv.style.display = 'block';
    questionDareDisplayDiv.style.display = 'none';
    updatePlayerStatusDisplay();
}

function showTruth() {
    playClickSound();
    if (verdadesAtuais.length === 0) {
        alert("Todas as verdades foram usadas! Recarregando...");
        loadQuestions();
        if (verdadesAtuais.length === 0) {
            textDisplay.textContent = "Nenhuma verdade disponível.";
            return;
        }
    }
    const truth = verdadesAtuais.shift();
    textDisplay.textContent = `VERDADE: ${truth}`;
    choiceButtonsDiv.style.display = 'none';
    questionDareDisplayDiv.style.display = 'block';
}

function showDare() {
    playClickSound();
    if (consequenciasAtuais.length === 0) {
        alert("Todas as consequências foram usadas! Recarregando...");
        loadQuestions();
        if (consequenciasAtuais.length === 0) {
            textDisplay.textContent = "Nenhuma consequência disponível.";
            return;
        }
    }
    const dare = consequenciasAtuais.shift();
    textDisplay.textContent = `CONSEQUÊNCIA: ${dare}`;
    choiceButtonsDiv.style.display = 'none';
    questionDareDisplayDiv.style.display = 'block';
}

function prepareNextTurn() {
    questionDareDisplayDiv.style.display = 'none';
    choiceButtonsDiv.style.display = 'none';
    gameArea.style.display = 'none';
    loadingNextPlayerArea.style.display = 'block';

    setTimeout(() => {
        loadingNextPlayerArea.style.display = 'none';
        gameArea.style.display = 'block';
        nextTurnFlow();
    }, GIF_DURATION);
}

function handleDone() {
    playClickSound();
    prepareNextTurn();
}

function handleDrink() {
    playClickSound();
    if (currentPlayer) {
        const playerInMainList = players.find(p => p.id === currentPlayer.id);
        if (!playerInMainList) {
            console.error("Erro: Jogador atual não encontrado na lista principal.");
            prepareNextTurn();
            return;
        }
        playerInMainList.drinks++;
        if (playerInMainList.drinks >= MAX_DRINKS) {
            playerInMainList.eliminated = true;
            alert(`${playerInMainList.emoji} ${playerInMainList.name} bebeu ${MAX_DRINKS} vezes e foi eliminado(a)!`);
        }
        updatePlayerStatusDisplay();

        const activePlayersAfterDrink = players.filter(p => !p.eliminated);
        if (players.length > 1 && activePlayersAfterDrink.length <= 1) {
            if (activePlayersAfterDrink.length === 1) {
                endGame(`${activePlayersAfterDrink[0].emoji} ${activePlayersAfterDrink[0].name} é o(a) vencedor(a)!`);
            } else {
                endGame("Todos foram eliminados!");
            }
        } else if (players.length === 1 && playerInMainList.eliminated) {
            endGame(`${playerInMainList.name} foi eliminado(a)! Fim de jogo.`);
        } else {
            prepareNextTurn();
        }
    }
}

function endGame(message) {
    gameArea.style.display = 'none';
    loadingNextPlayerArea.style.display = 'none';
    gameOverArea.style.display = 'block';
    winnerDisplay.textContent = message;
}

function resetGame() {
    playClickSound();
    players = [];
    currentPlayer = null;
    playerTurnOrder = [];
    availableEmojis = [...PLAYER_EMOJIS];
    loadQuestions();
    updatePlayerListUI();
    playerStatusArea.innerHTML = '';
    setupArea.style.display = 'block';
    gameArea.style.display = 'none';
    gameOverArea.style.display = 'none';
    loadingNextPlayerArea.style.display = 'none';
}

// --- EVENT LISTENERS ---
addPlayerBtn.addEventListener('click', addPlayer);
playerNameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (!addPlayerBtn.disabled) {
            addPlayer();
        }
    }
});

playerListUI.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('remove-player-btn')) {
        const playerId = event.target.getAttribute('data-player-id');
        removePlayer(playerId);
    }
});

startGameBtn.addEventListener('click', startGame);
truthBtn.addEventListener('click', showTruth);
dareBtn.addEventListener('click', showDare);
doneBtn.addEventListener('click', handleDone);
drinkBtn.addEventListener('click', handleDrink);
restartGameBtn.addEventListener('click', resetGame);

// --- Inicialização ---
resetGame();

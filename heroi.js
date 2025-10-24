/*
Desafio: Escrevendo as classes de um Jogo
Crie uma classe genérica que represente um herói de uma aventura.
*/

// 1. Definição da Classe 'Hero'
class Hero {
    // 2. Propriedades da classe
    name;
    age;
    type; // (guerreiro, mago, monge, ninja)

    // 3. Construtor para inicializar as propriedades
    // (Utiliza Funções e Variáveis)
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    // 4. Método 'atacar'
    // (Utiliza Funções, Estruturas de Decisões e Operadores)
    attack() {
        // Variável para armazenar o tipo de ataque
        let attackType = "";

        // Estrutura de Decisão (switch) para definir o ataque com base no tipo
        switch (this.type) {
            case 'mago':
                attackType = 'magia';
                break;
            case 'guerreiro':
                attackType = 'espada';
                break;
            case 'monge':
                attackType = 'artes marciais';
                break;
            case 'ninja':
                attackType = 'shuriken';
                break;
            default:
                attackType = 'um ataque indefinido'; // Caso o tipo não seja um dos esperados
        }

        // 5. Saída formatada (usando template literals e operadores de concatenação)
        console.log(`o ${this.type} atacou usando ${attackType}`);
    }
}

// --- Demonstração de Uso ---

console.log("--- Criando Heróis (Objetos) ---");

// 6. Criando Objetos (instâncias da classe Hero)
// (Utiliza Variáveis e Operadores)
let mago = new Hero("Merlin", 150, "mago");
let guerreiro = new Hero("Arthur", 32, "guerreiro");
let monge = new Hero("Aang", 112, "monge");
let ninja = new Hero("Hattori", 28, "ninja");

// 7. Chamando o método 'attack' de cada objeto individualmente
mago.attack();
guerreiro.attack();
monge.attack();
ninja.attack();


// 8. Demonstração extra usando Laços de Repetição
console.log("\n--- Batalha em Equipe (Usando Laço de Repetição) ---");

// Criamos um array (lista) com todos os nossos heróis
const allHeroes = [mago, guerreiro, monge, ninja];

// Usamos um Laço de Repetição (for...of) para fazer cada herói atacar
for (let hero of allHeroes) {
    // Chamando a função (método) dentro do laço
    hero.attack();
}
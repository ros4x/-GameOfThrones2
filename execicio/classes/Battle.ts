// Importação das classes definidas anteriormente
import { NobleHouse} from "./NobleHouse";
import { Heir } from "./Heir";
// Função para simular a batalha entre as casas nobres
function BattleOfTheHouses(house1: NobleHouse, soldiers1: number, house2: NobleHouse, soldiers2: number): string {
    let winner: string;

    if (soldiers1 > soldiers2) {
        winner = house1.name;
    } else if (soldiers2 > soldiers1) {
        winner = house2.name;
    } else {
        winner = "Empate"; // Em caso de empate no número de soldados
    }

    return winner;
}

// Criação das instâncias das casas nobres
let stark = new NobleHouse("Stark", "Winter is Coming", "The North", "The North Remembers");
let lannister = new NobleHouse("Lannister", "Hear Me Roar!", "The Westerlands", "A Lannister Always Pays His Debts");

// Criação de herdeiros para cada casa nobre
let jonSnow = new Heir("Jon Snow", 25, 1);
let aryaStark = new Heir("Arya Stark", 23, 2);
let tyrionLannister = new Heir("Tyrion Lannister", 35, 1);

// Adição dos herdeiros às suas respectivas casas nobres
stark.addHeir(jonSnow);
stark.addHeir(aryaStark);
lannister.addHeir(tyrionLannister);

// Simulação da batalha e exibição do resultado
let winner = BattleOfTheHouses(stark, 1000, lannister, 1200);
console.log(`A casa vencedora da batalha é: ${winner}`);
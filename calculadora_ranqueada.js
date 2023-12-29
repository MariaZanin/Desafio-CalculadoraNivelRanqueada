// # DESAFIO - CALCULADORA DE PARTIDA RANQUEADA #

/* 
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

*/ 

function saldoPartidas(vitoria, derrota){
    let saldo = vitoria - derrota
    return saldo
}

function nivelRank(saldo){
    if(saldo <= 10){
        return "Ferro"
    }
    else if(saldo > 10 && saldo <= 20){
        return "Bronze"
    }
    else if(saldo > 20 && saldo <= 50){
        return "Prata"
    }
    else if(saldo > 50 && saldo <= 80){
        return "Ouro"
    }
    else if(saldo > 80 && saldo <= 90){
        return "Diamante"
    }
    else if(saldo > 90 && saldo <= 100){
        return "Lendário"
    }
    else if(saldo > 100){
        return "Imortal"
    }
}

let  retornoSaldoPartidas = saldoPartidas(563, 1);

let retornoNivelRank = nivelRank(retornoSaldoPartidas);

function retornaSaldoRank(saldoPartidas, nivelRank){

    console.log(`O Herói tem de saldo de '${saldoPartidas}' vitórias e  está no Rank:'${nivelRank}'.`)

}

retornaSaldoRank(retornoSaldoPartidas, retornoNivelRank );


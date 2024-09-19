/*
var m = 'U_M_Y_RSRanger_03'

_get(m)

*/


function gerarNomesMulher_Velha() {
    var velinha = [
        'Maria', 'Janete', 'Madalena', 'Salete', 'Helena', 'Antonia', 'Francisca',
        'Renata', 'Adriana', 'Bruna', 'Paula', 'Jussara'
    ]
    return velinha[aleatoriooossss(velinha.length)]
}
function gerarNomesMulher_Nova() {
    var novinha = [
        'Ana', 'July', 'Carla', 'Isabela', 'Fernanda', 'Camila', 'Milena', 'Patricia',
        'Bianca', 'Larissa', 'Carolina', 'Vanessa', 'Renata', 'Adriana', 'Bruna', 'Paula'
    ]
    return novinha[aleatoriooossss(novinha.length)]
}
function gerarNomesHomem_Velho() {
    var velinho = [
        'Francisco', 'Arlindo', 'Antonio', 'Juarez', 'Toninho', 'Jorge', 'Alberto', 'Renato', 'Agostinho', 'Pedro', 'Joao'
    ]
    return velinho[aleatoriooossss(velinho.length)]
}
function gerarNomesHomem_Novo() {
    var novinho = [
        'Eduardo', 'Pedro', 'Carlos', 'Lucas', 'Felipe', 'Ricardo', 'Bruno', 'Diego',
        'Andre', 'Marcelo', 'Fernando', 'Tiago', 'Rafael', 'Rodrigo', 'Gustavo',
        'Matheus', 'Gabriel', 'Renato',
    ]
    return novinho[aleatoriooossss(novinho.length)]
}
function gerarSobrenomes() {
    var abacate = [
        'da Silva', 'Santos', 'Oliveira', 'Pereira', 'Lima', 'Gomes',
        'Ferreira', 'Rodrigues', 'Martins', 'Carvalho', 'Ribeiro', 'Melo', 'Barbosa',
        'Figueiredo', 'Borges', 'Siqueira', 'Duarte', 'Macedo', 'Azevedo', 'Teixeira'
    ]
    return abacate[aleatoriooossss(abacate.length)]
}
function gerarJobHomem() {
    var banana = [
        'motorista', 'entregador', 'desempregado', 'politico', 'vendedor ambulante',
        'professor', 'eletrecista', 'mecanico', 'musico', 'programador', 'vendedor', 'designer',
        'pedreiro',
        'ator', 'bibliotecario'
    ]
    return banana[aleatoriooossss(banana.length)]
}
function gerarJobMulher() {
    var bolagato = [
        'secretaria', 'cabelereira', 'veterinaria', 'desempregada', 'professora', 'vendedora',
        'artista', 'atriz', 'motorista', 'designer'
    ]
    return bolagato[aleatoriooossss(bolagato.length)]
}
function gerarHobbie(mininoOuMinina) {
    var hobbyesHomem = [
        'jogar futebol', 'ir a praia', 'acampar', 'pescar', 'praticar tiro ao alvo',
        'andar de bicicleta', 'jogar golf', 'jogar videogame', 'lutar boxe', 'jogar poker', 'tocar guitarra'
    ]
    var hobbyesMulher = [
        'ir a praia', 'acampar', 'andar de barco', 'visitar lojas', 'ir ao cabelereiro', 'ir ao cinema',
        'praticar yoga', 'tocar violao', 'fazer artezanato', 'desenhar', 'caminhar na beira da praia',
        'cozinhar', 'ler livros'
    ]
    if (mininoOuMinina == 'H') {
        return hobbyesHomem[flooooor(rdn() * hobbyesHomem.length)]
    }
    if (mininoOuMinina == 'M') {
        return hobbyesMulher[flooooor(rdn() * hobbyesMulher.length)]
    }
}
function gerarRua() {
    var rua = [
        'R. General Barros', 'Alameda das Flores', 'Av. Principal', 'R. Horizonte',
        'Av. Liberdade', 'R. das Flores', 'R. Campo Verde', 'R. Jacaranda', 'Av. Beira Rio',
        'Av, Rio Branco', 'R. 4 de Maio', 'Travessa Por do Sol'
    ]
    var bairro = [
        'Sandy Shores', 'East Los Santos', 'Centro', 'Bairro Verde', 'Bairro dos Pinhais',
        'Residencial Bela Vista', 'Bairro Planalto', 'Bairro dos Lagos'
    ]
    return rua[aleatoriooossss(rua.length)] + ', ' + numAleatorio(1000, 5000) + ', ' + bairro[aleatoriooossss(bairro.length)]
}
function numAleatorio(min, max) {
    return flooooor(rdn() * (max - min + 1) + min)
}
function aleatoriooossss(max) {
    return flooooor(rdn() * max)
}
function gerarCPF() {
    return numAleatorio(100, 999) + '.' + numAleatorio(100, 999) + '.' + numAleatorio(100, 999) + '-' + numAleatorio(10, 99)
}
function rdn() {
    return Math.random()
}
function flooooor(i) {
    return Math.floor(i)
}
function gerarRG() {
    var s = ''
    for (let u = 0; u < 11; u++) {
        s += numAleatorio(1, 9)
    }
    return s
}
function gerarEmail(n, s) {
    var nome = n.toLowerCase()
    var sobrenome = s.toLowerCase().replace(' ', '')
    var v = [
        nome + '_' + sobrenome + '@gmail.com',
        nome + '.' + sobrenome + '@gmail.com',
        sobrenome + '.' + numAleatorio(10, 54) + '@gmail.com',
        sobrenome + '_' + numAleatorio(10, 54) + '@gmail.com',
        numAleatorio(10, 54) + '_' + sobrenome + '@hotmail.com',
        numAleatorio(10, 54) + '.' + sobrenome + '@hotmail.com',
    ]
    return v[aleatoriooossss(v.length)]
}
function gerarTelefone() {
    return '(' + numAleatorio(10, 54) + ') 9' + numAleatorio(88888888, 99999999)
}
function _get(modelo) {
    var model = modelo.toUpperCase()
    if (localGet(model + '_name')) {
        return JSON.stringify({

            primeiroNome: localGet(model + '_primeiroNome'),
            name: localGet(model + '_name'),
            intimidade: localGet(model + '_intimidade'),
            job: localGet(model + '_job'),
            age: localGet(model + '_age'),
            hobby: localGet(model + '_hobby'),
            rg: localGet(model + '_rg'),
            cpf: localGet(model + '_cpf'),
            address: localGet(model + '_address'),
            email: localGet(model + '_email'),
            telefone: localGet(model + '_telefone'),
            ja_interagiu_com_player: localGet(model + '_ja_interagiu_com_player'),
            ja_falou_hobbies: localGet(model + '_ja_falou_hobbies'),
            ja_falou_nome: localGet(model + '_ja_falou_nome'),
            ja_falou_endereco: localGet(model + '_ja_falou_endereco'),
            ja_falou_idade: localGet(model + '_ja_falou_idade'),
            ja_falou_telefone: localGet(model + '_ja_falou_telefone'),
            ja_falou_email: localGet(model + '_ja_falou_email'),

        })
    }
    else {
        createIdentity(modelo)
    }
}
function localGet(i) {
    return localStorage.getItem(i)
}
function localSet(i, j) {
    return localStorage.setItem(i, j)
}
function createIdentity(modelo) {
    var model = modelo.toUpperCase()
    if (localGet(model + '_name')) {
        _get(modelo)
    }
    else {
        if (model.toUpperCase().includes('A_C')) {
            //console.log('animal')
        }
        else if (model.toUpperCase().includes('A_F_M')) {
            //console.log('mulher madura mais de 30 anos')
            var nome = gerarNomesMulher_Nova()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobMulher())
            localSet(model + '_age', numAleatorio(30, 50))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else if (model.toUpperCase().includes('A_F_O')) {
            //console.log('mulher velha mais de 60 anos')
            var nome = gerarNomesMulher_Velha()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobMulher())
            localSet(model + '_age', numAleatorio(60, 70))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else if (model.toUpperCase().includes('A_F_Y')) {
            //console.log('mulher nova entre 20 anos')
            var nome = gerarNomesMulher_Nova()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobMulher())
            localSet(model + '_age', numAleatorio(20, 30))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else if (model.toUpperCase().includes('A_M_M')) {
            //console.log('homem maduro mais de 30 anos')
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobHomem())
            localSet(model + '_age', numAleatorio(30, 50))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('A_M_O')) {
            // console.log('homem velho mais de 60 anos')
            var nome = gerarNomesHomem_Velho()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobHomem())
            localSet(model + '_age', numAleatorio(60, 70))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('A_M_Y')) {
            //console.log('homem novo entre 20 anos')
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobHomem())
            localSet(model + '_age', numAleatorio(20, 30))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('G_F_Y')) {
            //console.log('mulher nova entre 20 anos de gang')
            var nome = gerarNomesMulher_Nova()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', 'Desempregada')
            localSet(model + '_age', numAleatorio(20, 30))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else if (model.toUpperCase().includes('G_M_Y')) {
            //console.log('homem novo entre 20 anos de gang')
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', 'Desempregado')
            localSet(model + '_age', numAleatorio(20, 30))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('G_M_M')) {
            //console.log('homem maduro entre 30 anos de gang')
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', 'Desempregado')
            localSet(model + '_age', numAleatorio(30, 50))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('S_F_M') || model.toUpperCase().includes('U_F_M') || model.toUpperCase().includes('MP_F_')) {
            //console.log('mulher unica madura entre 30 anos')
            var nome = gerarNomesMulher_Nova()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', 'Desempregado')
            localSet(model + '_age', numAleatorio(30, 50))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else if (model.toUpperCase().includes('S_F_Y') || model.toUpperCase().includes('U_F_Y')) {
            //console.log('mulher unica nova entre 20 anos')
            var nome = gerarNomesMulher_Nova()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobMulher())
            localSet(model + '_age', numAleatorio(20, 30))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else if (model.toUpperCase().includes('S_M_M') || model.toUpperCase().includes('U_M_M')) {
            //console.log('homem unico maduro entre 30 anos')
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobHomem())
            localSet(model + '_age', numAleatorio(30, 50))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('S_M_O') || model.toUpperCase().includes('U_M_O')) {
            //console.log('homem unico velho entre 60 anos')
            var nome = gerarNomesHomem_Velho()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobHomem())
            localSet(model + '_age', numAleatorio(50, 70))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('S_M_Y') || model.toUpperCase().includes('U_M_Y') || model.toUpperCase().includes('MP_M')) {
            //console.log('homem unico novo entre 20 anos')
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobHomem())
            localSet(model + '_age', numAleatorio(20, 30))
            localSet(model + '_hobby', gerarHobbie('H'))
        }
        else if (model.toUpperCase().includes('U_F_O')) {
            //console.log('mulher unico velha entre 60 anos')
            var nome = gerarNomesMulher_Velha()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', gerarJobMulher())
            localSet(model + '_age', numAleatorio(50, 70))
            localSet(model + '_hobby', gerarHobbie('M'))
        }
        else {
            var nome = gerarNomesHomem_Novo()
            var sobrenome = gerarSobrenomes()
            localSet(model + '_job', '--')
            localSet(model + '_age', '--')
            localSet(model + '_hobby', '--')
        }
        localSet(model + '_primeiroNome', nome)
        localSet(model + '_name', nome + ' ' + sobrenome)
        localSet(model + '_rg', gerarRG())
        localSet(model + '_cpf', gerarCPF())
        localSet(model + '_ja_interagiu_com_player', '0')//------
        localSet(model + '_ja_falou_hobbies', '0')//-----
        localSet(model + '_ja_falou_nome', '0')//-------
        localSet(model + '_ja_falou_endereco', '0')//---------
        localSet(model + '_ja_falou_idade', '0')//-------
        localSet(model + '_ja_falou_telefone', '0')//--------
        localSet(model + '_ja_falou_email', '0')//-------
        localSet(model + '_address', gerarRua())
        localSet(model + '_email', gerarEmail(nome, sobrenome))
        localSet(model + '_telefone', gerarTelefone())
        localSet(model + '_intimidade', '0')
    }
    _get(modelo)
}
function falarEmail(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_falou_email') === '0') {
        localSet(modelo + '_ja_falou_email', '1')
        var v = [
            'Tenho email sim, anota ai ' + localGet(modelo + '_email'),
            'E ' + localGet(modelo + '_email') + '. Me manda um alo depois la',
            'Anota ai ' + localGet(modelo + '_email'),
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Nao anotou? anota ai entao ' + localGet(modelo + '_email') + ', mas nao manda spam, por favor haha',
            'Esqueceu de anotar? anota ai ' + localGet(modelo + '_email'),
            'Como ja falei,meu email e ' + localGet(modelo + '_email'),
            'Como falei, e ' + localGet(modelo + '_email') + ', mas nao manda virus haha',
            'Como ja te falei, o email e ' + localGet(modelo + '_email'),
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function falarTelefone(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_falou_telefone') === '0') {
        localSet(modelo + '_ja_falou_telefone', '1')
        var v = [
            'Tenho celular sim, ' + localGet(modelo + '_telefone') + '. Anota ai',
            'E ' + localGet(modelo + '_telefone') + '. Me adiciona ai',
            'Anota ai ' + localGet(modelo + '_telefone'),
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Nao anotou? anota ai entao ' + localGet(modelo + '_telefone') + ', mas nao me liga, por favor haha',
            'Esqueceu de anotar? anota ai ' + localGet(modelo + '_telefone'),
            'Como ja falei,meu numero e ' + localGet(modelo + '_telefone'),
            'Como falei, e ' + localGet(modelo + '_telefone') + ', mas nao me liga haha',
            'Como ja te falei, numero e ' + localGet(modelo + '_telefone'),
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function falarIdade(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_falou_idade') === '0') {
        localSet(modelo + '_ja_falou_idade', '1')
        var v = [
            'Tenho ' + localGet(modelo + '_age') + ' anos',
            'Ja tenho ' + localGet(modelo + '_age') + ' anos de idade',
            'Fiz ' + localGet(modelo + '_age') + ' anos esse ano',
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Ja esqueceu? tenho ' + localGet(modelo + '_age') + ' anos',
            'Esqueceu ja? tenho ' + localGet(modelo + '_age') + ' anos de idade',
            'Como ja falei, tenho ' + localGet(modelo + '_age') + ' anos de idade',
            'Como falei, tenho ' + localGet(modelo + '_age') + ' anos, fiz esse ano',
            'Como ja te falei, ja tenho ' + localGet(modelo + '_age') + ' anos de idade',
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function falarEndereco(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_falou_endereco') === '0') {
        localSet(modelo + '_ja_falou_endereco', '1')
        var v = [
            'Meu endereco e ' + localGet(modelo + '_address'),
            'Meu endereco e ' + localGet(modelo + '_address') + ', pertinho',
            'Moro na ' + localGet(modelo + '_address'),
            'Moro na ' + localGet(modelo + '_address') + ', pertinho',
            'Minha casa fica na ' + localGet(modelo + '_address') + ', pertinho',
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Ja esqueceu? meu endereco e ' + localGet(modelo + '_address'),
            'Ja te falei, meu endereco fica na ' + localGet(modelo + '_address'),
            'Esqueceu? moro na ' + localGet(modelo + '_address'),
            'Ja esqueceu? meu endereco e ' + localGet(modelo + '_address') + ', nao esquece agora!!',
            'Ja te falei, meu endereco fica na ' + localGet(modelo + '_address') + ', nao esquece viu?!',
            'Esqueceu? moro na ' + localGet(modelo + '_address') + ', pertinho',
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function falarNome(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_falou_nome') === '0') {
        localSet(modelo + '_ja_falou_nome', '1')
        var v = [
            'Meu nome e ' + localGet(modelo + '_name'),
            'Me chamo ' + localGet(modelo + '_name'),
            'Bom, meu nome e ' + localGet(modelo + '_name') + ', mas nao gosto, queria outro hehe',
            'Prazer, meu nome e ' + localGet(modelo + '_name'),
            'Prazer, me chamo ' + localGet(modelo + '_name'),
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Ja esqueceu? meu nome e ' + localGet(modelo + '_name'),
            'Nao lembra? me chamo ' + localGet(modelo + '_name'),
            'Esqueceu?, meu nome e ' + localGet(modelo + '_name') + '. Ve se nao esquece agora!',
            'Esqueceu de mim ja?, meu nome e ' + localGet(modelo + '_name'),
            'Ja esqueceu? me chamo ' + localGet(modelo + '_name'),
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function falarHobbies(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_falou_hobbies') === '0') {
        localSet(modelo + '_ja_falou_hobbies', '1')
        var v = [
            'Bom, eu gosto muito de ' + localGet(modelo + '_hobby'),
            'Gosto muito de ' + localGet(modelo + '_hobby') + ', mas nao tem sobrado tempo',
            'Nas horas vagas, costumo ' + localGet(modelo + '_hobby') + ' com meus amigos',
            'Nas horas vagas, curto ' + localGet(modelo + '_hobby') + ', relaxante hahaha',
            'Costumo ' + localGet(modelo + '_hobby') + ' aos fins de semana',
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Como falei antes, eu gosto muito de ' + localGet(modelo + '_hobby'),
            'Como falei da outra vez, gosto muito de ' + localGet(modelo + '_hobby') + ', mas nao tem sobrado tempo',
            'Como falei anteriormente, nas horas vagas, costumo ' + localGet(modelo + '_hobby') + ' com meus amigos',
            'Como falei da outra vez, nas horas vagas, curto ' + localGet(modelo + '_hobby') + ', relaxante hahaha',
            'Esqueceu? Te falei da outra vez, costumo ' + localGet(modelo + '_hobby') + ' aos fins de semana',
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function ola(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_job') === '--') {
        return NaoFaloComEstranhos(modelo)
    }
    if (localGet(modelo + '_ja_interagiu_com_player') === '0') {
        localSet(modelo + '_ja_interagiu_com_player', '1')
        var v = [
            'Hey, ola. Precisa de algo?',
            'Ola. Como posso te ajudar?',
            'Ola. Posso te ajudar?',
            'Ola. Posso te ajudar com alguma coisa?',
            'Oi, precisa de algo?',
            'Oi, nao costumo falar com estranhos, mas, precisa de algo?',
            'Oi estranho haha, precisa de algo?',
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Hey, voce novamente. Precisa de algo?',
            'Ola, lembro de voce. Posso te ajudar?',
            'Mundo pequeno nao? haha oque manda pra hoje?',
            'Olha voce denovo! Precisa de algo?',
            'Voce denovo! Precisa de ajuda?',
            'Hey! Como está? Precisa de ajuda?',
        ]
        return v[aleatoriooossss(v.length)]
    }
}
function NaoFaloComEstranhos(model) {
    var modelo = model.toUpperCase()
    if (localGet(modelo + '_ja_interagiu_com_player') === '0') {
        localSet(modelo + '_ja_interagiu_com_player', '1')
        var v = [
            'Nao falo com estranhos, desculpa...',
            'Nao falo com quem nao conheco!',
            'Nao quero papo!',
            'Sai daqui, estranho',
        ]
        return v[aleatoriooossss(v.length)]
    }
    else {
        var v = [
            'Ja falei, nao falo com estranhos!',
            'Ja falei, nao falo com quem nao conheco!',
            'Ja falei, nao quero papo!',
            'Ja falei, Sai daqui!!',
            'Me deixa em paz, senao vou chamar a policia',
            'Me deixa em paz, vou chamar a policia',
        ]
        return v[aleatoriooossss(v.length)]
    }
}


/*

 
createIdentity('hc_driver')
createIdentity('HC_Hacker')
createIdentity('IG_BRAD')
createIdentity("A_M_M_ACult_01")//A_M_M_ACult_01</option)//
createIdentity("A_M_M_AfriAmer_01")//A_M_M_AfriAmer_01</option)//
createIdentity("A_M_M_Beach_01")//A_M_M_Beach_01</option)//
createIdentity("A_M_M_Beach_02")//A_M_M_Beach_02</option)//
createIdentity("A_M_M_BevHills_01")//A_M_M_BevHills_01</option)//
createIdentity("A_M_M_BevHills_02")//A_M_M_BevHills_02</option)//
createIdentity("A_M_M_Business_01")//A_M_M_Business_01</option)//
createIdentity("A_M_M_EastSA_01")//A_M_M_EastSA_01</option)//
createIdentity("A_M_M_EastSA_02")//A_M_M_EastSA_02</option)//
createIdentity("A_M_M_Farmer_01")//A_M_M_Farmer_01</option)//
createIdentity("A_M_M_FatLatin_01")//A_M_M_FatLatin_01</option)//
createIdentity("A_M_M_GenFat_01")//A_M_M_GenFat_01</option)//
createIdentity("A_M_M_GenFat_02")//A_M_M_GenFat_02</option)//
createIdentity("A_M_M_Golfer_01")//A_M_M_Golfer_01</option)//
createIdentity("A_M_M_HasJew_01")//A_M_M_HasJew_01</option)//
createIdentity("A_M_M_Hillbilly_01")//A_M_M_Hillbilly_01</option)//
createIdentity("A_M_M_Hillbilly_02")//A_M_M_Hillbilly_02</option)//
createIdentity("A_M_M_Indian_01")//A_M_M_Indian_01</option)//
createIdentity("A_M_M_KTown_01")//A_M_M_KTown_01</option)//
createIdentity("A_M_M_Malibu_01")//A_M_M_Malibu_01</option)//
createIdentity("A_M_M_MexCntry_01")//A_M_M_MexCntry_01</option)//
createIdentity("A_M_M_MexLabor_01")//A_M_M_MexLabor_01</option)//
createIdentity("A_M_M_OG_Boss_01")//A_M_M_OG_Boss_01</option)//
createIdentity("A_M_M_Paparazzi_01")//A_M_M_Paparazzi_01</option)//
createIdentity("A_M_M_Polynesian_01")//A_M_M_Polynesian_01</option)//
createIdentity("A_M_M_ProlHost_01")//A_M_M_ProlHost_01</option)//
createIdentity("A_M_M_RurMeth_01")//A_M_M_RurMeth_01</option)//
createIdentity("A_M_M_Salton_01")//A_M_M_Salton_01</option)//
createIdentity("A_M_M_Salton_02")//A_M_M_Salton_02</option)//
createIdentity("A_M_M_Salton_03")//A_M_M_Salton_03</option)//
createIdentity("A_M_M_Salton_04")//A_M_M_Salton_04</option)//
createIdentity("A_M_M_Skater_01")//A_M_M_Skater_01</option)//
createIdentity("A_M_M_Skidrow_01")//A_M_M_Skidrow_01</option)//
createIdentity("A_M_M_SoCenLat_01")//A_M_M_SoCenLat_01</option)//
createIdentity("A_M_M_SouCent_01")//A_M_M_SouCent_01</option)//
createIdentity("A_M_M_SouCent_02")//A_M_M_SouCent_02</option)//
createIdentity("A_M_M_SouCent_03")//A_M_M_SouCent_03</option)//
createIdentity("A_M_M_SouCent_04")//A_M_M_SouCent_04</option)//
createIdentity("A_M_M_StLat_02")//A_M_M_StLat_02</option)//
createIdentity("A_M_M_Tennis_01")//A_M_M_Tennis_01</option)//
createIdentity("A_M_M_Tourist_01")//A_M_M_Tourist_01</option)//
createIdentity("A_M_M_TrampBeac_01")//A_M_M_TrampBeac_01</option)//
createIdentity("A_M_M_Tramp_01")//A_M_M_Tramp_01</option)//
createIdentity("A_M_M_TranVest_01")//A_M_M_TranVest_01</option)//
createIdentity("A_M_M_TranVest_02")//A_M_M_TranVest_02</option)//



createIdentity("A_F_M_Beach_01")//A_F_M_Beach_01</option)//
createIdentity("A_F_M_BevHills_01")//A_F_M_BevHills_01</option)//
createIdentity("A_F_M_BevHills_02")//A_F_M_BevHills_02</option)//
createIdentity("A_F_M_BodyBuild_01")//A_F_M_BodyBuild_01</option)//
createIdentity("A_F_M_Business_02")//A_F_M_Business_02</option)//
createIdentity("A_F_M_Downtown_01")//A_F_M_Downtown_01</option)//
createIdentity("A_F_M_EastSA_01")//A_F_M_EastSA_01</option)//
createIdentity("A_F_M_EastSA_02")//A_F_M_EastSA_02</option)//
createIdentity("A_F_M_FatBla_01")//A_F_M_FatBla_01</option)//
createIdentity("A_F_M_FatCult_01")//A_F_M_FatCult_01</option)//
createIdentity("A_F_M_FatWhite_01")//A_F_M_FatWhite_01</option)//
createIdentity("A_F_M_KTown_01")//A_F_M_KTown_01</option)//
createIdentity("A_F_M_KTown_02")//A_F_M_KTown_02</option)//
createIdentity("A_F_M_ProlHost_01")//A_F_M_ProlHost_01</option)//
createIdentity("A_F_M_Salton_01")//A_F_M_Salton_01</option)//
createIdentity("A_F_M_SkidRow_01")//A_F_M_SkidRow_01</option)//
createIdentity("A_F_M_SouCentMC_01")//A_F_M_SouCentMC_01</option)//
createIdentity("A_F_M_SouCent_01")//A_F_M_SouCent_01</option)//
createIdentity("A_F_M_SouCent_02")//A_F_M_SouCent_02</option)//
createIdentity("A_F_M_Tourist_01")//A_F_M_Tourist_01</option)//
createIdentity("A_F_M_TrampBeac_01")//A_F_M_TrampBeac_01</option)//
createIdentity("A_F_M_Tramp_01")//A_F_M_Tramp_01</option)//

createIdentity("A_F_O_GenStreet_01")//A_F_O_GenStreet_01</option)//
createIdentity("A_F_O_Indian_01")//A_F_O_Indian_01</option)//
createIdentity("A_F_O_KTown_01")//A_F_O_KTown_01</option)//
createIdentity("A_F_O_Salton_01")//A_F_O_Salton_01</option)//
createIdentity("A_F_O_SouCent_01")//A_F_O_SouCent_01</option)//
createIdentity("A_F_O_SouCent_02")//A_F_O_SouCent_02</option)//

createIdentity("A_F_Y_Beach_01")//A_F_Y_Beach_01</option)//
createIdentity("A_F_Y_BevHills_01")//A_F_Y_BevHills_01</option)//
createIdentity("A_F_Y_BevHills_02")//A_F_Y_BevHills_02</option)//
createIdentity("A_F_Y_BevHills_03")//A_F_Y_BevHills_03</option)//
createIdentity("A_F_Y_BevHills_04")//A_F_Y_BevHills_04</option)//
createIdentity("A_F_Y_Business_01")//A_F_Y_Business_01</option)//
createIdentity("A_F_Y_Business_02")//A_F_Y_Business_02</option)//
createIdentity("A_F_Y_Business_03")//A_F_Y_Business_03</option)//
createIdentity("A_F_Y_Business_04")//A_F_Y_Business_04</option)//
createIdentity("A_F_Y_EastSA_01")//A_F_Y_EastSA_01</option)//
createIdentity("A_F_Y_EastSA_02")//A_F_Y_EastSA_02</option)//
createIdentity("A_F_Y_EastSA_03")//A_F_Y_EastSA_03</option)//
createIdentity("A_F_Y_Epsilon_01")//A_F_Y_Epsilon_01</option)//
createIdentity("A_F_Y_Fitness_01")//A_F_Y_Fitness_01</option)//
createIdentity("A_F_Y_Fitness_02")//A_F_Y_Fitness_02</option)//
createIdentity("A_F_Y_GenHot_01")//A_F_Y_GenHot_01</option)//
createIdentity("A_F_Y_Golfer_01")//A_F_Y_Golfer_01</option)//
createIdentity("A_F_Y_Hiker_01")//A_F_Y_Hiker_01</option)//
createIdentity("A_F_Y_Hippie_01")//A_F_Y_Hippie_01</option)//
createIdentity("A_F_Y_Hipster_01")//A_F_Y_Hipster_01</option)//
createIdentity("A_F_Y_Hipster_02")//A_F_Y_Hipster_02</option)//
createIdentity("A_F_Y_Hipster_03")//A_F_Y_Hipster_03</option)//
createIdentity("A_F_Y_Hipster_04")//A_F_Y_Hipster_04</option)//
createIdentity("A_F_Y_Indian_01")//A_F_Y_Indian_01</option)//
createIdentity("A_F_Y_Juggalo_01")//A_F_Y_Juggalo_01</option)//
createIdentity("A_F_Y_Runner_01")//A_F_Y_Runner_01</option)//
createIdentity("A_F_Y_RurMeth_01")//A_F_Y_RurMeth_01</option)//
createIdentity("A_F_Y_SCDressy_01")//A_F_Y_SCDressy_01</option)//
createIdentity("A_F_Y_Skater_01")//A_F_Y_Skater_01</option)//
createIdentity("A_F_Y_SouCent_01")//A_F_Y_SouCent_01</option)//
createIdentity("A_F_Y_SouCent_02")//A_F_Y_SouCent_02</option)//
createIdentity("A_F_Y_SouCent_03")//A_F_Y_SouCent_03</option)//
createIdentity("A_F_Y_Tennis_01")//A_F_Y_Tennis_01</option)//
createIdentity("A_F_Y_Topless_01")//A_F_Y_Topless_01</option)//
createIdentity("A_F_Y_Tourist_01")//A_F_Y_Tourist_01</option)//
createIdentity("A_F_Y_Tourist_02")//A_F_Y_Tourist_02</option)//
createIdentity("A_F_Y_Vinewood_01")//A_F_Y_Vinewood_01</option)//
createIdentity("A_F_Y_Vinewood_02")//A_F_Y_Vinewood_02</option)//
createIdentity("A_F_Y_Vinewood_03")//A_F_Y_Vinewood_03</option)//
createIdentity("A_F_Y_Vinewood_04")//A_F_Y_Vinewood_04</option)//
createIdentity("A_F_Y_Yoga_01")//A_F_Y_Yoga_01</option)//

createIdentity("A_M_O_ACult_01")//A_M_O_ACult_01</option)//
createIdentity("A_M_O_ACult_02")//A_M_O_ACult_02</option)//
createIdentity("A_M_O_Beach_01")//A_M_O_Beach_01</option)//
createIdentity("A_M_O_GenStreet_01")//A_M_O_GenStreet_01</option)//
createIdentity("A_M_O_KTown_01")//A_M_O_KTown_01</option)//
createIdentity("A_M_O_Salton_01")//A_M_O_Salton_01</option)//
createIdentity("A_M_O_SouCent_01")//A_M_O_SouCent_01</option)//
createIdentity("A_M_O_SouCent_02")//A_M_O_SouCent_02</option)//
createIdentity("A_M_O_SouCent_03")//A_M_O_SouCent_03</option)//
createIdentity("A_M_O_Tramp_01")//A_M_O_Tramp_01</option)//

createIdentity("A_M_Y_ACult_01")//A_M_Y_ACult_01</option)//
createIdentity("A_M_Y_ACult_02")//A_M_Y_ACult_02</option)//
createIdentity("A_M_Y_BeachVesp_01")//A_M_Y_BeachVesp_01</option)//
createIdentity("A_M_Y_BeachVesp_02")//A_M_Y_BeachVesp_02</option)//
createIdentity("A_M_Y_Beach_01")//A_M_Y_Beach_01</option)//
createIdentity("A_M_Y_Beach_02")//A_M_Y_Beach_02</option)//
createIdentity("A_M_Y_Beach_03")//A_M_Y_Beach_03</option)//
createIdentity("A_M_Y_BevHills_01")//A_M_Y_BevHills_01</option)//
createIdentity("A_M_Y_BevHills_02")//A_M_Y_BevHills_02</option)//
createIdentity("A_M_Y_BreakDance_01")//A_M_Y_BreakDance_01</option)//
createIdentity("A_M_Y_BusiCas_01")//A_M_Y_BusiCas_01</option)//
createIdentity("A_M_Y_Business_01")//A_M_Y_Business_01</option)//
createIdentity("A_M_Y_Business_02")//A_M_Y_Business_02</option)//
createIdentity("A_M_Y_Business_03")//A_M_Y_Business_03</option)//
createIdentity("A_M_Y_Cyclist_01")//A_M_Y_Cyclist_01</option)//
createIdentity("A_M_Y_DHill_01")//A_M_Y_DHill_01</option)//
createIdentity("A_M_Y_Downtown_01")//A_M_Y_Downtown_01</option)//
createIdentity("A_M_Y_EastSA_01")//A_M_Y_EastSA_01</option)//
createIdentity("A_M_Y_EastSA_02")//A_M_Y_EastSA_02</option)//
createIdentity("A_M_Y_Epsilon_01")//A_M_Y_Epsilon_01</option)//
createIdentity("A_M_Y_Epsilon_02")//A_M_Y_Epsilon_02</option)//
createIdentity("A_M_Y_Gay_01")//A_M_Y_Gay_01</option)//
createIdentity("A_M_Y_Gay_02")//A_M_Y_Gay_02</option)//
createIdentity("A_M_Y_GenStreet_01")//A_M_Y_GenStreet_01</option)//
createIdentity("A_M_Y_GenStreet_02")//A_M_Y_GenStreet_02</option)//
createIdentity("A_M_Y_Golfer_01")//A_M_Y_Golfer_01</option)//
createIdentity("A_M_Y_HasJew_01")//A_M_Y_HasJew_01</option)//
createIdentity("A_M_Y_Hiker_01")//A_M_Y_Hiker_01</option)//
createIdentity("A_M_Y_Hippy_01")//A_M_Y_Hippy_01</option)//
createIdentity("A_M_Y_Hipster_01")//A_M_Y_Hipster_01</option)//
createIdentity("A_M_Y_Hipster_02")//A_M_Y_Hipster_02</option)//
createIdentity("A_M_Y_Hipster_03")//A_M_Y_Hipster_03</option)//
createIdentity("A_M_Y_Indian_01")//A_M_Y_Indian_01</option)//
createIdentity("A_M_Y_Jetski_01")//A_M_Y_Jetski_01</option)//
createIdentity("A_M_Y_Juggalo_01")//A_M_Y_Juggalo_01</option)//
createIdentity("A_M_Y_KTown_01")//A_M_Y_KTown_01</option)//
createIdentity("A_M_Y_KTown_02")//A_M_Y_KTown_02</option)//
createIdentity("A_M_Y_Latino_01")//A_M_Y_Latino_01</option)//
createIdentity("A_M_Y_MethHead_01")//A_M_Y_MethHead_01</option)//
createIdentity("A_M_Y_MexThug_01")//A_M_Y_MexThug_01</option)//
createIdentity("A_M_Y_MotoX_01")//A_M_Y_MotoX_01</option)//
createIdentity("A_M_Y_MotoX_02")//A_M_Y_MotoX_02</option)//
createIdentity("A_M_Y_MusclBeac_01")//A_M_Y_MusclBeac_01</option)//
createIdentity("A_M_Y_MusclBeac_02")//A_M_Y_MusclBeac_02</option)//
createIdentity("A_M_Y_Polynesian_01")//A_M_Y_Polynesian_01</option)//
createIdentity("A_M_Y_RoadCyc_01")//A_M_Y_RoadCyc_01</option)//
createIdentity("A_M_Y_Runner_01")//A_M_Y_Runner_01</option)//
createIdentity("A_M_Y_Runner_02")//A_M_Y_Runner_02</option)//
createIdentity("A_M_Y_Salton_01")//A_M_Y_Salton_01</option)//
createIdentity("A_M_Y_Skater_01")//A_M_Y_Skater_01</option)//
createIdentity("A_M_Y_Skater_02")//A_M_Y_Skater_02</option)//
createIdentity("A_M_Y_SouCent_01")//A_M_Y_SouCent_01</option)//
createIdentity("A_M_Y_SouCent_02")//A_M_Y_SouCent_02</option)//
createIdentity("A_M_Y_SouCent_03")//A_M_Y_SouCent_03</option)//
createIdentity("A_M_Y_SouCent_04")//A_M_Y_SouCent_04</option)//
createIdentity("A_M_Y_StBla_01")//A_M_Y_StBla_01</option)//
createIdentity("A_M_Y_StBla_02")//A_M_Y_StBla_02</option)//
createIdentity("A_M_Y_StLat_01")//A_M_Y_StLat_01</option)//
createIdentity("A_M_Y_StWhi_01")//A_M_Y_StWhi_01</option)//
createIdentity("A_M_Y_StWhi_02")//A_M_Y_StWhi_02</option)//
createIdentity("A_M_Y_Sunbathe_01")//A_M_Y_Sunbathe_01</option)//
createIdentity("A_M_Y_Surfer_01")//A_M_Y_Surfer_01</option)//
createIdentity("A_M_Y_VinDouche_01")//A_M_Y_VinDouche_01</option)//
createIdentity("A_M_Y_Vinewood_01")//A_M_Y_Vinewood_01</option)//
createIdentity("A_M_Y_Vinewood_02")//A_M_Y_Vinewood_02</option)//
createIdentity("A_M_Y_Vinewood_03")//A_M_Y_Vinewood_03</option)//
createIdentity("A_M_Y_Vinewood_04")//A_M_Y_Vinewood_04</option)//
createIdentity("A_M_Y_Yoga_01")//A_M_Y_Yoga_01</option)//

createIdentity("G_F_Y_Families_01")//G_F_Y_Families_01</option)//
createIdentity("G_F_Y_Lost_01")//G_F_Y_Lost_01</option)//
createIdentity("G_F_Y_Vagos_01")//G_F_Y_Vagos_01</option)//
createIdentity("G_F_Y_ballas_01")//G_F_Y_ballas_01</option)//

createIdentity("G_M_M_ArmBoss_01")//G_M_M_ArmBoss_01</option)//
createIdentity("G_M_M_ArmGoon_01")//G_M_M_ArmGoon_01</option)//
createIdentity("G_M_M_ArmLieut_01")//G_M_M_ArmLieut_01</option)//
createIdentity("G_M_M_ChemWork_01")//G_M_M_ChemWork_01</option)//
createIdentity("G_M_M_ChiBoss_01")//G_M_M_ChiBoss_01</option)//
createIdentity("G_M_M_ChiCold_01")//G_M_M_ChiCold_01</option)//
createIdentity("G_M_M_ChiGoon_01")//G_M_M_ChiGoon_01</option)//
createIdentity("G_M_M_ChiGoon_02")//G_M_M_ChiGoon_02</option)//
createIdentity("G_M_M_KorBoss_01")//G_M_M_KorBoss_01</option)//
createIdentity("G_M_M_MexBoss_01")//G_M_M_MexBoss_01</option)//
createIdentity("G_M_M_MexBoss_02")//G_M_M_MexBoss_02</option)//

createIdentity("G_M_Y_ArmGoon_02")//G_M_Y_ArmGoon_02</option)//
createIdentity("G_M_Y_Azteca_01")//G_M_Y_Azteca_01</option)//
createIdentity("G_M_Y_BallaEast_01")//G_M_Y_BallaEast_01</option)//
createIdentity("G_M_Y_BallaOrig_01")//G_M_Y_BallaOrig_01</option)//
createIdentity("G_M_Y_BallaSout_01")//G_M_Y_BallaSout_01</option)//
createIdentity("G_M_Y_FamCA_01")//G_M_Y_FamCA_01</option)//
createIdentity("G_M_Y_FamDNF_01")//G_M_Y_FamDNF_01</option)//
createIdentity("G_M_Y_FamFor_01")//G_M_Y_FamFor_01</option)//
createIdentity("G_M_Y_KorLieut_01")//G_M_Y_KorLieut_01</option)//
createIdentity("G_M_Y_Korean_01")//G_M_Y_Korean_01</option)//
createIdentity("G_M_Y_Korean_02")//G_M_Y_Korean_02</option)//
createIdentity("G_M_Y_Lost_01")//G_M_Y_Lost_01</option)//
createIdentity("G_M_Y_Lost_02")//G_M_Y_Lost_02</option)//
createIdentity("G_M_Y_Lost_03")//G_M_Y_Lost_03</option)//
createIdentity("G_M_Y_MexGang_01")//G_M_Y_MexGang_01</option)//
createIdentity("G_M_Y_MexGoon_01")//G_M_Y_MexGoon_01</option)//
createIdentity("G_M_Y_MexGoon_02")//G_M_Y_MexGoon_02</option)//
createIdentity("G_M_Y_MexGoon_03")//G_M_Y_MexGoon_03</option)//
createIdentity("G_M_Y_PoloGoon_01")//G_M_Y_PoloGoon_01</option)//
createIdentity("G_M_Y_PoloGoon_02")//G_M_Y_PoloGoon_02</option)//
createIdentity("G_M_Y_SalvaBoss_01")//G_M_Y_SalvaBoss_01</option)//
createIdentity("G_M_Y_SalvaGoon_01")//G_M_Y_SalvaGoon_01</option)//
createIdentity("G_M_Y_SalvaGoon_02")//G_M_Y_SalvaGoon_02</option)//
createIdentity("G_M_Y_SalvaGoon_03")//G_M_Y_SalvaGoon_03</option)//
createIdentity("G_M_Y_StrPunk_01")//G_M_Y_StrPunk_01</option)//
createIdentity("G_M_Y_StrPunk_02")//G_M_Y_StrPunk_02</option)//

createIdentity("MP_F_BennyMech_01")//MP_F_BennyMech_01</option)//
createIdentity("MP_F_DeadHooker")//MP_F_DeadHooker</option)//
createIdentity("MP_F_Freemode_01")//MP_F_Freemode_01</option)//
createIdentity("MP_F_Misty_01")//MP_F_Misty_01</option)//
createIdentity("MP_F_StripperLite")//MP_F_StripperLite</option)//

createIdentity("S_F_M_Fembarber")//S_F_M_Fembarber</option)//
createIdentity("S_F_M_Maid_01")//S_F_M_Maid_01</option)//
createIdentity("S_F_M_Shop_HIGH")//S_F_M_Shop_HIGH</option)//
createIdentity("S_F_M_SweatShop_01")//S_F_M_SweatShop_01</option)//

createIdentity("S_F_Y_AirHostess_01")//S_F_Y_AirHostess_01</option)//
createIdentity("S_F_Y_Bartender_01")//S_F_Y_Bartender_01</option)//
createIdentity("S_F_Y_Baywatch_01")//S_F_Y_Baywatch_01</option)//
createIdentity("S_F_Y_Cop_01")//S_F_Y_Cop_01</option)//
createIdentity("S_F_Y_Factory_01")//S_F_Y_Factory_01</option)//
createIdentity("S_F_Y_Hooker_01")//S_F_Y_Hooker_01</option)//
createIdentity("S_F_Y_Hooker_02")//S_F_Y_Hooker_02</option)//
createIdentity("S_F_Y_Hooker_03")//S_F_Y_Hooker_03</option)//
createIdentity("S_F_Y_Migrant_01")//S_F_Y_Migrant_01</option)//
createIdentity("S_F_Y_MovPrem_01")//S_F_Y_MovPrem_01</option)//
createIdentity("S_F_Y_Ranger_01")//S_F_Y_Ranger_01</option)//
createIdentity("S_F_Y_Scrubs_01")//S_F_Y_Scrubs_01</option)//
createIdentity("S_F_Y_Sheriff_01")//S_F_Y_Sheriff_01</option)//
createIdentity("S_F_Y_Shop_LOW")//S_F_Y_Shop_LOW</option)//
createIdentity("S_F_Y_Shop_MID")//S_F_Y_Shop_MID</option)//
createIdentity("S_F_Y_StripperLite")//S_F_Y_StripperLite</option)//
createIdentity("S_F_Y_Stripper_01")//S_F_Y_Stripper_01</option)//
createIdentity("S_F_Y_Stripper_02")//S_F_Y_Stripper_02</option)//
createIdentity("S_F_Y_SweatShop_01")//S_F_Y_SweatShop_01</option)//

createIdentity("S_M_M_AmmuCountry")//S_M_M_AmmuCountry</option)//
createIdentity("S_M_M_Armoured_01")//S_M_M_Armoured_01</option)//
createIdentity("S_M_M_Armoured_02")//S_M_M_Armoured_02</option)//
createIdentity("S_M_M_AutoShop_01")//S_M_M_AutoShop_01</option)//
createIdentity("S_M_M_AutoShop_02")//S_M_M_AutoShop_02</option)//
createIdentity("S_M_M_Bouncer_01")//S_M_M_Bouncer_01</option)//
createIdentity("S_M_M_CIASec_01")//S_M_M_CIASec_01</option)//
createIdentity("S_M_M_ChemSec_01")//S_M_M_ChemSec_01</option)//
createIdentity("S_M_M_CntryBar_01")//S_M_M_CntryBar_01</option)//
createIdentity("S_M_M_DockWork_01")//S_M_M_DockWork_01</option)//
createIdentity("S_M_M_Doctor_01")//S_M_M_Doctor_01</option)//
createIdentity("S_M_M_FIBOffice_01")//S_M_M_FIBOffice_01</option)//
createIdentity("S_M_M_FIBOffice_02")//S_M_M_FIBOffice_02</option)//
createIdentity("S_M_M_Gaffer_01")//S_M_M_Gaffer_01</option)//
createIdentity("S_M_M_Gardener_01")//S_M_M_Gardener_01</option)//
createIdentity("S_M_M_GenTransport")//S_M_M_GenTransport</option)//
createIdentity("S_M_M_HairDress_01")//S_M_M_HairDress_01</option)//
createIdentity("S_M_M_HighSec_01")//S_M_M_HighSec_01</option)//
createIdentity("S_M_M_HighSec_02")//S_M_M_HighSec_02</option)//
createIdentity("S_M_M_Janitor")//S_M_M_Janitor</option)//
createIdentity("S_M_M_LSMetro_01")//S_M_M_LSMetro_01</option)//
createIdentity("S_M_M_LatHandy_01")//S_M_M_LatHandy_01</option)//
createIdentity("S_M_M_LifeInvad_01")//S_M_M_LifeInvad_01</option)//
createIdentity("S_M_M_Linecook")//S_M_M_Linecook</option)//
createIdentity("S_M_M_Mariachi_01")//S_M_M_Mariachi_01</option)//
createIdentity("S_M_M_Marine_01")//S_M_M_Marine_01</option)//
createIdentity("S_M_M_Marine_02")//S_M_M_Marine_02</option)//
createIdentity("S_M_M_Migrant_01")//S_M_M_Migrant_01</option)//
createIdentity("S_M_M_MovAlien_01")//S_M_M_MovAlien_01</option)//
createIdentity("S_M_M_MovPrem_01")//S_M_M_MovPrem_01</option)//
createIdentity("S_M_M_MovSpace_01")//S_M_M_MovSpace_01</option)//
createIdentity("S_M_M_Paramedic_01")//S_M_M_Paramedic_01</option)//
createIdentity("S_M_M_Pilot_01")//S_M_M_Pilot_01</option)//
createIdentity("S_M_M_Pilot_02")//S_M_M_Pilot_02</option)//
createIdentity("S_M_M_Postal_01")//S_M_M_Postal_01</option)//
createIdentity("S_M_M_Postal_02")//S_M_M_Postal_02</option)//
createIdentity("S_M_M_PrisGuard_01")//S_M_M_PrisGuard_01</option)//
createIdentity("S_M_M_Scientist_01")//S_M_M_Scientist_01</option)//
createIdentity("S_M_M_Security_01")//S_M_M_Security_01</option)//
createIdentity("S_M_M_SnowCop_01")//S_M_M_SnowCop_01</option)//
createIdentity("S_M_M_StrPerf_01")//S_M_M_StrPerf_01</option)//
createIdentity("S_M_M_StrPreach_01")//S_M_M_StrPreach_01</option)//
createIdentity("S_M_M_StrVend_01")//S_M_M_StrVend_01</option)//
createIdentity("S_M_M_Trucker_01")//S_M_M_Trucker_01</option)//
createIdentity("S_M_M_UPS_01")//S_M_M_UPS_01</option)//
createIdentity("S_M_M_UPS_02")//S_M_M_UPS_02</option)//

createIdentity("S_M_O_Busker_01")//S_M_O_Busker_01</option)//
createIdentity("S_M_Y_AirWorker")//S_M_Y_AirWorker</option)//
createIdentity("S_M_Y_AmmuCity_01")//S_M_Y_AmmuCity_01</option)//
createIdentity("S_M_Y_ArmyMech_01")//S_M_Y_ArmyMech_01</option)//
createIdentity("S_M_Y_Autopsy_01")//S_M_Y_Autopsy_01</option)//
createIdentity("S_M_Y_Barman_01")//S_M_Y_Barman_01</option)//
createIdentity("S_M_Y_BayWatch_01")//S_M_Y_BayWatch_01</option)//
createIdentity("S_M_Y_BlackOps_01")//S_M_Y_BlackOps_01</option)//
createIdentity("S_M_Y_BlackOps_02")//S_M_Y_BlackOps_02</option)//
createIdentity("S_M_Y_BlackOps_03")//S_M_Y_BlackOps_03</option)//
createIdentity("S_M_Y_BusBoy_01")//S_M_Y_BusBoy_01</option)//
createIdentity("S_M_Y_Chef_01")//S_M_Y_Chef_01</option)//
createIdentity("S_M_Y_Clown_01")//S_M_Y_Clown_01</option)//
createIdentity("S_M_Y_Construct_01")//S_M_Y_Construct_01</option)//
createIdentity("S_M_Y_Construct_02")//S_M_Y_Construct_02</option)//
createIdentity("S_M_Y_Cop_01")//S_M_Y_Cop_01</option)//
createIdentity("S_M_Y_DWService_01")//S_M_Y_DWService_01</option)//
createIdentity("S_M_Y_DWService_02")//S_M_Y_DWService_02</option)//
createIdentity("S_M_Y_Dealer_01")//S_M_Y_Dealer_01</option)//
createIdentity("S_M_Y_DevinSec_01")//S_M_Y_DevinSec_01</option)//
createIdentity("S_M_Y_DockWork_01")//S_M_Y_DockWork_01</option)//
createIdentity("S_M_Y_Doorman_01")//S_M_Y_Doorman_01</option)//
createIdentity("S_M_Y_Factory_01")//S_M_Y_Factory_01</option)//
createIdentity("S_M_Y_Fireman_01")//S_M_Y_Fireman_01</option)//
createIdentity("S_M_Y_Garbage")//S_M_Y_Garbage</option)//
createIdentity("S_M_Y_Grip_01")//S_M_Y_Grip_01</option)//
createIdentity("S_M_Y_HwayCop_01")//S_M_Y_HwayCop_01</option)//
createIdentity("S_M_Y_Marine_01")//S_M_Y_Marine_01</option)//
createIdentity("S_M_Y_Marine_02")//S_M_Y_Marine_02</option)//
createIdentity("S_M_Y_Marine_03")//S_M_Y_Marine_03</option)//
createIdentity("S_M_Y_Mime")//S_M_Y_Mime</option)//
createIdentity("S_M_Y_PestCont_01")//S_M_Y_PestCont_01</option)//
createIdentity("S_M_Y_Pilot_01")//S_M_Y_Pilot_01</option)//
createIdentity("S_M_Y_PrisMuscl_01")//S_M_Y_PrisMuscl_01</option)//
createIdentity("S_M_Y_Prisoner_01")//S_M_Y_Prisoner_01</option)//
createIdentity("S_M_Y_Ranger_01")//S_M_Y_Ranger_01</option)//
createIdentity("S_M_Y_Robber_01")//S_M_Y_Robber_01</option)//
createIdentity("S_M_Y_Sheriff_01")//S_M_Y_Sheriff_01</option)//
createIdentity("S_M_Y_Shop_MASK")//S_M_Y_Shop_MASK</option)//
createIdentity("S_M_Y_StrVend_01")//S_M_Y_StrVend_01</option)//
createIdentity("S_M_Y_Swat_01")//S_M_Y_Swat_01</option)//
createIdentity("S_M_Y_USCG_01")//S_M_Y_USCG_01</option)//
createIdentity("S_M_Y_Valet_01")//S_M_Y_Valet_01</option)//
createIdentity("S_M_Y_Waiter_01")//S_M_Y_Waiter_01</option)//
createIdentity("S_M_Y_WinClean_01")//S_M_Y_WinClean_01</option)//
createIdentity("S_M_Y_XMech_01")//S_M_Y_XMech_01</option)//
createIdentity("S_M_Y_XMech_02")//S_M_Y_XMech_02</option)//

createIdentity("U_F_M_Corpse_01")//U_F_M_Corpse_01</option)//
createIdentity("U_F_M_Miranda")//U_F_M_Miranda</option)//
createIdentity("U_F_M_ProMourn_01")//U_F_M_ProMourn_01</option)//

createIdentity("U_F_O_MovieStar")//U_F_O_MovieStar</option)//
createIdentity("U_F_O_ProlHost_01")//U_F_O_ProlHost_01</option)//
createIdentity("U_F_Y_BikerChic")//U_F_Y_BikerChic</option)//
createIdentity("U_F_Y_COMJane")//U_F_Y_COMJane</option)//
createIdentity("U_F_Y_HotPosh_01")//U_F_Y_HotPosh_01</option)//
createIdentity("U_F_Y_JewelAss_01")//U_F_Y_JewelAss_01</option)//
createIdentity("U_F_Y_Mistress")//U_F_Y_Mistress</option)//
createIdentity("U_F_Y_PoppyMich")//U_F_Y_PoppyMich</option)//
createIdentity("U_F_Y_Princess")//U_F_Y_Princess</option)//
createIdentity("U_F_Y_SpyActress")//U_F_Y_SpyActress</option)//
createIdentity("U_F_Y_corpse_01")//U_F_Y_corpse_01</option)//
createIdentity("U_F_Y_corpse_02")//U_F_Y_corpse_02</option)//

createIdentity("U_M_M_Aldinapoli")//U_M_M_Aldinapoli</option)//
createIdentity("U_M_M_BankMan")//U_M_M_BankMan</option)//
createIdentity("U_M_M_BikeHire_01")//U_M_M_BikeHire_01</option)//
createIdentity("U_M_M_FIBArchitect")//U_M_M_FIBArchitect</option)//
createIdentity("U_M_M_FilmDirector")//U_M_M_FilmDirector</option)//
createIdentity("U_M_M_GlenStank_01")//U_M_M_GlenStank_01</option)//
createIdentity("U_M_M_Griff_01")//U_M_M_Griff_01</option)//
createIdentity("U_M_M_Jesus_01")//U_M_M_Jesus_01</option)//
createIdentity("U_M_M_JewelSec_01")//U_M_M_JewelSec_01</option)//
createIdentity("U_M_M_JewelThief")//U_M_M_JewelThief</option)//
createIdentity("U_M_M_MarkFost")//U_M_M_MarkFost</option)//
createIdentity("U_M_M_PartyTarget")//U_M_M_PartyTarget</option)//
createIdentity("U_M_M_ProMourn_01")//U_M_M_ProMourn_01</option)//
createIdentity("U_M_M_ProlSec_01")//U_M_M_ProlSec_01</option)//
createIdentity("U_M_M_RivalPap")//U_M_M_RivalPap</option)//
createIdentity("U_M_M_SpyActor")//U_M_M_SpyActor</option)//
createIdentity("U_M_M_WillyFist")//U_M_M_WillyFist</option)//

createIdentity("U_M_O_FinGuru_01")//U_M_O_FinGuru_01</option)//
createIdentity("U_M_O_TapHillBilly")//U_M_O_TapHillBilly</option)//
createIdentity("U_M_O_Tramp_01")//U_M_O_Tramp_01</option)//

createIdentity("U_M_Y_Abner")//U_M_Y_Abner</option)//
createIdentity("U_M_Y_AntonB")//U_M_Y_AntonB</option)//
createIdentity("U_M_Y_BabyD")//U_M_Y_BabyD</option)//
createIdentity("U_M_Y_Baygor")//U_M_Y_Baygor</option)//
createIdentity("U_M_Y_BurgerDrug_01")//U_M_Y_BurgerDrug_01</option)//
createIdentity("U_M_Y_Chip")//U_M_Y_Chip</option)//
createIdentity("U_M_Y_Cyclist_01")//U_M_Y_Cyclist_01</option)//
createIdentity("U_M_Y_FIBMugger_01")//U_M_Y_FIBMugger_01</option)//
createIdentity("U_M_Y_Guido_01")//U_M_Y_Guido_01</option)//
createIdentity("U_M_Y_GunVend_01")//U_M_Y_GunVend_01</option)//
createIdentity("U_M_Y_Hippie_01")//U_M_Y_Hippie_01</option)//
createIdentity("U_M_Y_ImpoRage")//U_M_Y_ImpoRage</option)//
createIdentity("U_M_Y_Justin")//U_M_Y_Justin</option)//
createIdentity("U_M_Y_Mani")//U_M_Y_Mani</option)//
createIdentity("U_M_Y_MilitaryBum")//U_M_Y_MilitaryBum</option)//
createIdentity("U_M_Y_Paparazzi")//U_M_Y_Paparazzi</option)//
createIdentity("U_M_Y_Party_01")//U_M_Y_Party_01</option)//
createIdentity("U_M_Y_Pogo_01")//U_M_Y_Pogo_01</option)//
createIdentity("U_M_Y_Prisoner_01")//U_M_Y_Prisoner_01</option)//
createIdentity("U_M_Y_ProlDriver_01")//U_M_Y_ProlDriver_01</option)//
createIdentity("U_M_Y_RSRanger_01")//U_M_Y_RSRanger_01</option)//
createIdentity("U_M_Y_SBike")//U_M_Y_SBike</option)//
createIdentity("U_M_Y_StagGrm_01")//U_M_Y_StagGrm_01</option)//
createIdentity("U_M_Y_Tattoo_01")//U_M_Y_Tattoo_01</option)//
createIdentity("U_M_Y_Zombie_01")//U_M_Y_Zombie_01</option)//

createIdentity("cs_ashley")//cs_ashley</option)//
createIdentity("cs_debra")//cs_debra</option)//
createIdentity("cs_denise")//cs_denise</option)//
createIdentity("cs_gurk")//cs_gurk</option)//
createIdentity("ig_JAY_Norris")//ig_JAY_Norris</option)//
createIdentity("ig_JohnnyKlebitz")//ig_JohnnyKlebitz</option)//
createIdentity("ig_TennisCoach")//ig_TennisCoach</option)//
createIdentity("ig_jimmydisanto")//ig_jimmydisanto</option)//
createIdentity("ig_johnnyklebitz")//ig_johnnyklebitz</option)//
createIdentity("ig_lamardavis")//ig_lamardavis</option)//
createIdentity("ig_tracydisanto")//ig_tracydisanto</option)//
createIdentity("ig_wade")//ig_wade</option)//
createIdentity("mp_m_freemode_01")//mp_m_freemode_01</option)//
createIdentity("player_one")//player_one</option)//
createIdentity("player_two")//player_two</option)//
createIdentity("player_zero")//player_zero</option)//
createIdentity("slod_human")//slod_human</option)//
createIdentity("slod_large_quadped")//slod_large_quadped</option)//
createIdentity("slod_small_quadped")//slod_small_quadped</option)//

createIdentity("CSB_Alan")//CSB_Alan</option)//

createIdentity("CSB_Abigail")//CSB_Abigail</option)//
createIdentity("CSB_Anita")//CSB_Anita</option)//
createIdentity("CSB_Anton")//CSB_Anton</option)//
createIdentity("CSB_BallasOG")//CSB_BallasOG</option)//
createIdentity("CSB_Bride")//CSB_Bride</option)//
createIdentity("CSB_Bryony")//CSB_Bryony</option)//
createIdentity("CSB_BurgerDrug")//CSB_BurgerDrug</option)//
createIdentity("CSB_Car3guy1")//CSB_Car3guy1</option)//
createIdentity("CSB_Car3guy2")//CSB_Car3guy2</option)//
createIdentity("CSB_Chef")//CSB_Chef</option)//
createIdentity("CSB_Chin_goon")//CSB_Chin_goon</option)//
createIdentity("CSB_Cletus")//CSB_Cletus</option)//
createIdentity("CSB_Cop")//CSB_Cop</option)//
createIdentity("CSB_Customer")//CSB_Customer</option)//
createIdentity("CSB_Denise_friend")//CSB_Denise_friend</option)//
createIdentity("CSB_FOS_rep")//CSB_FOS_rep</option)//
createIdentity("CSB_G")//CSB_G</option)//
createIdentity("CSB_Groom")//CSB_Groom</option)//
createIdentity("CSB_Grove_str_dlr")//CSB_Grove_str_dlr</option)//
createIdentity("CSB_Hao")//CSB_Hao</option)//
createIdentity("CSB_Hugh")//CSB_Hugh</option)//
createIdentity("CSB_Imran")//CSB_Imran</option)//
createIdentity("CSB_Janitor")//CSB_Janitor</option)//
createIdentity("CSB_MWeather")//CSB_MWeather</option)//
createIdentity("CSB_Maude")//CSB_Maude</option)//
createIdentity("CSB_Ortega")//CSB_Ortega</option)//
createIdentity("CSB_Oscar")//CSB_Oscar</option)//
createIdentity("CSB_PornDudes")//CSB_PornDudes</option)//
createIdentity("CSB_ProlSec")//CSB_ProlSec</option)//
createIdentity("CSB_PrologueDriver")//CSB_PrologueDriver</option)//
createIdentity("CSB_Ramp_gang")//CSB_Ramp_gang</option)//
createIdentity("CSB_Ramp_hic")//CSB_Ramp_hic</option)//
createIdentity("CSB_Ramp_hipster")//CSB_Ramp_hipster</option)//
createIdentity("CSB_Ramp_marine")//CSB_Ramp_marine</option)//
createIdentity("CSB_Ramp_mex")//CSB_Ramp_mex</option)//
createIdentity("CSB_Reporter")//CSB_Reporter</option)//
createIdentity("CSB_RoccoPelosi")//CSB_RoccoPelosi</option)//
createIdentity("CSB_Screen_Writer")//CSB_Screen_Writer</option)//
createIdentity("CSB_Stripper_01")//CSB_Stripper_01</option)//
createIdentity("CSB_Stripper_02")//CSB_Stripper_02</option)//
createIdentity("CSB_Tonya")//CSB_Tonya</option)//
createIdentity("CSB_TrafficWarden")//CSB_TrafficWarden</option)//
createIdentity("CS_AmandaTownley")//CS_AmandaTownley</option)//
createIdentity("CS_Andreas")//CS_Andreas</option)//
createIdentity("CS_Bankman")//CS_Bankman</option)//
createIdentity("CS_Barry")//CS_Barry</option)//
createIdentity("CS_Beverly")//CS_Beverly</option)//
createIdentity("CS_Brad")//CS_Brad</option)//
createIdentity("CS_BradCadaver")//CS_BradCadaver</option)//
createIdentity("CS_Carbuyer")//CS_Carbuyer</option)//
createIdentity("CS_Casey")//CS_Casey</option)//
createIdentity("CS_ChengSr")//CS_ChengSr</option)//
createIdentity("CS_ChrisFormage")//CS_ChrisFormage</option)//
createIdentity("CS_Clay")//CS_Clay</option)//
createIdentity("CS_Dale")//CS_Dale</option)//
createIdentity("CS_DaveNorton")//CS_DaveNorton</option)//
createIdentity("CS_Devin")//CS_Devin</option)//
createIdentity("CS_Dom")//CS_Dom</option)//
createIdentity("CS_DrFriedlander")//CS_DrFriedlander</option)//
createIdentity("CS_Dreyfuss")//CS_Dreyfuss</option)//
createIdentity("CS_FBISuit_01")//CS_FBISuit_01</option)//
createIdentity("CS_Fabien")//CS_Fabien</option)//
createIdentity("CS_Floyd")//CS_Floyd</option)//
createIdentity("CS_Guadalope")//CS_Guadalope</option)//
createIdentity("CS_Hunter")//CS_Hunter</option)//
createIdentity("CS_Janet")//CS_Janet</option)//
createIdentity("CS_JewelAss")//CS_JewelAss</option)//
createIdentity("CS_JimmyBoston")//CS_JimmyBoston</option)//
createIdentity("CS_JimmyDiSanto")//CS_JimmyDiSanto</option)//
createIdentity("CS_JoeMinuteMan")//CS_JoeMinuteMan</option)//
createIdentity("CS_JohnnyKlebitz")//CS_JohnnyKlebitz</option)//
createIdentity("CS_Josef")//CS_Josef</option)//
createIdentity("CS_Josh")//CS_Josh</option)//
createIdentity("CS_LamarDavis")//CS_LamarDavis</option)//
createIdentity("CS_Lazlow")//CS_Lazlow</option)//
createIdentity("CS_LesterCrest")//CS_LesterCrest</option)//
createIdentity("CS_LifeInvad_01")//CS_LifeInvad_01</option)//
createIdentity("CS_MRK")//CS_MRK</option)//
createIdentity("CS_MRS_Thornhill")//CS_MRS_Thornhill</option)//
createIdentity("CS_Magenta")//CS_Magenta</option)//
createIdentity("CS_Manuel")//CS_Manuel</option)//
createIdentity("CS_Marnie")//CS_Marnie</option)//
createIdentity("CS_MartinMadrazo")//CS_MartinMadrazo</option)//
createIdentity("CS_MaryAnn")//CS_MaryAnn</option)//
createIdentity("CS_Michelle")//CS_Michelle</option)//
createIdentity("CS_Milton")//CS_Milton</option)//
createIdentity("CS_Molly")//CS_Molly</option)//
createIdentity("CS_MovPremF_01")//CS_MovPremF_01</option)//
createIdentity("CS_MovPremMale")//CS_MovPremMale</option)//
createIdentity("CS_MrsPhillips")//CS_MrsPhillips</option)//
createIdentity("CS_Natalia")//CS_Natalia</option)//
createIdentity("CS_NervousRon")//CS_NervousRon</option)//
createIdentity("CS_Nigel")//CS_Nigel</option)//
createIdentity("CS_Old_Man1A")//CS_Old_Man1A</option)//
createIdentity("CS_Old_Man2")//CS_Old_Man2</option)//
createIdentity("CS_Omega")//CS_Omega</option)//
createIdentity("CS_Orleans")//CS_Orleans</option)//
createIdentity("CS_Paper")//CS_Paper</option)//
createIdentity("CS_Patricia")//CS_Patricia</option)//
createIdentity("CS_Priest")//CS_Priest</option)//
createIdentity("CS_ProlSec_02")//CS_ProlSec_02</option)//
createIdentity("CS_RussianDrunk")//CS_RussianDrunk</option)//
createIdentity("CS_SiemonYetarian")//CS_SiemonYetarian</option)//
createIdentity("CS_Solomon")//CS_Solomon</option)//
createIdentity("CS_SteveHains")//CS_SteveHains</option)//
createIdentity("CS_Stretch")//CS_Stretch</option)//
createIdentity("CS_Tanisha")//CS_Tanisha</option)//
createIdentity("CS_TaoCheng")//CS_TaoCheng</option)//
createIdentity("CS_TaosTranslator")//CS_TaosTranslator</option)//
createIdentity("CS_TennisCoach")//CS_TennisCoach</option)//
createIdentity("CS_Terry")//CS_Terry</option)//
createIdentity("CS_Tom")//CS_Tom</option)//
createIdentity("CS_TomEpsilon")//CS_TomEpsilon</option)//
createIdentity("CS_TracyDiSanto")//CS_TracyDiSanto</option)//
createIdentity("CS_Wade")//CS_Wade</option)//
createIdentity("CS_Zimbor")//CS_Zimbor</option)//

createIdentity("MP_G_M_Pros_01")//MP_G_M_Pros_01</option)//
createIdentity("MP_HeadTargets")//MP_HeadTargets</option)//
createIdentity("MP_M_Claude_01")//MP_M_Claude_01</option)//
createIdentity("MP_M_ExArmy_01")//MP_M_ExArmy_01</option)//
createIdentity("MP_M_FIBSec_01")//MP_M_FIBSec_01</option)//
createIdentity("MP_M_FamDD_01")//MP_M_FamDD_01</option)//
createIdentity("MP_M_Freemode_01")//MP_M_Freemode_01</option)//
createIdentity("MP_M_Marston_01")//MP_M_Marston_01</option)//
createIdentity("MP_M_Niko_01")//MP_M_Niko_01</option)//
createIdentity("MP_M_ShopKeep_01")//MP_M_ShopKeep_01</option)//
createIdentity("MP_S_M_Armoured_01")//MP_S_M_Armoured_01</option)//
createIdentity("Player_One")//Player_One</option)//
createIdentity("Player_Two")//Player_Two</option)//
createIdentity("Player_Zero")//Player_Zero</option)//

createIdentity("HC_Driver")//HC_Driver</option)//
createIdentity("HC_Gunman")//HC_Gunman</option)//
createIdentity("HC_Hacker")//HC_Hacker</option)//
createIdentity("IG_Abigail")//IG_Abigail</option)//
createIdentity("IG_AmandaTownley")//IG_AmandaTownley</option)//
createIdentity("IG_Andreas")//IG_Andreas</option)//
createIdentity("IG_Ashley")//IG_Ashley</option)//
createIdentity("IG_BallasOG")//IG_BallasOG</option)//
createIdentity("IG_Bankman")//IG_Bankman</option)//
createIdentity("IG_Barry")//IG_Barry</option)//
createIdentity("IG_BestMen")//IG_BestMen</option)//
createIdentity("IG_Beverly")//IG_Beverly</option)//
createIdentity("IG_Brad")//IG_Brad</option)//
createIdentity("IG_Bride")//IG_Bride</option)//
createIdentity("IG_Car3guy1")//IG_Car3guy1</option)//
createIdentity("IG_Car3guy2")//IG_Car3guy2</option)//
createIdentity("IG_Casey")//IG_Casey</option)//
createIdentity("IG_Chef")//IG_Chef</option)//
createIdentity("IG_ChengSr")//IG_ChengSr</option)//
createIdentity("IG_ChrisFormage")//IG_ChrisFormage</option)//
createIdentity("IG_Clay")//IG_Clay</option)//
createIdentity("IG_ClayPain")//IG_ClayPain</option)//
createIdentity("IG_Cletus")//IG_Cletus</option)//
createIdentity("IG_Dale")//IG_Dale</option)//
createIdentity("IG_DaveNorton")//IG_DaveNorton</option)//
createIdentity("IG_Denise")//IG_Denise</option)//
createIdentity("IG_Devin")//IG_Devin</option)//
createIdentity("IG_Dom")//IG_Dom</option)//
createIdentity("IG_DrFriedlander")//IG_DrFriedlander</option)//
createIdentity("IG_Dreyfuss")//IG_Dreyfuss</option)//
createIdentity("IG_FBISuit_01")//IG_FBISuit_01</option)//
createIdentity("IG_Fabien")//IG_Fabien</option)//
createIdentity("IG_Floyd")//IG_Floyd</option)//
createIdentity("IG_Groom")//IG_Groom</option)//
createIdentity("IG_Hao")//IG_Hao</option)//
createIdentity("IG_Hunter")//IG_Hunter</option)//
createIdentity("IG_Janet")//IG_Janet</option)//
createIdentity("IG_JewelAss")//IG_JewelAss</option)//
createIdentity("IG_JimmyBoston")//IG_JimmyBoston</option)//
createIdentity("IG_JimmyDiSanto")//IG_JimmyDiSanto</option)//
createIdentity("IG_JoeMinuteMan")//IG_JoeMinuteMan</option)//
createIdentity("IG_Josef")//IG_Josef</option)//
createIdentity("IG_Josh")//IG_Josh</option)//
createIdentity("IG_KerryMcIntosh")//IG_KerryMcIntosh</option)//
createIdentity("IG_LamarDavis")//IG_LamarDavis</option)//
createIdentity("IG_Lazlow")//IG_Lazlow</option)//
createIdentity("IG_LesterCrest")//IG_LesterCrest</option)//
createIdentity("IG_LifeInvad_01")//IG_LifeInvad_01</option)//
createIdentity("IG_LifeInvad_02")//IG_LifeInvad_02</option)//
createIdentity("IG_MRK")//IG_MRK</option)//
createIdentity("IG_MRS_Thornhill")//IG_MRS_Thornhill</option)//
createIdentity("IG_Magenta")//IG_Magenta</option)//
createIdentity("IG_Manuel")//IG_Manuel</option)//
createIdentity("IG_Marnie")//IG_Marnie</option)//
createIdentity("IG_MaryAnn")//IG_MaryAnn</option)//
createIdentity("IG_Maude")//IG_Maude</option)//
createIdentity("IG_Michelle")//IG_Michelle</option)//
createIdentity("IG_Milton")//IG_Milton</option)//
createIdentity("IG_Molly")//IG_Molly</option)//
createIdentity("IG_MrsPhillips")//IG_MrsPhillips</option)//
createIdentity("IG_Natalia")//IG_Natalia</option)//
createIdentity("IG_NervousRon")//IG_NervousRon</option)//
createIdentity("IG_Nigel")//IG_Nigel</option)//
createIdentity("IG_ONeil")//IG_ONeil</option)//
createIdentity("IG_Old_Man1A")//IG_Old_Man1A</option)//
createIdentity("IG_Old_Man2")//IG_Old_Man2</option)//
createIdentity("IG_Omega")//IG_Omega</option)//
createIdentity("IG_Orleans")//IG_Orleans</option)//
createIdentity("IG_Ortega")//IG_Ortega</option)//
createIdentity("IG_Paper")//IG_Paper</option)//
createIdentity("IG_Patricia")//IG_Patricia</option)//
createIdentity("IG_Priest")//IG_Priest</option)//
createIdentity("IG_ProlSec_02")//IG_ProlSec_02</option)//
createIdentity("IG_Ramp_Gang")//IG_Ramp_Gang</option)//
createIdentity("IG_Ramp_Hic")//IG_Ramp_Hic</option)//
createIdentity("IG_Ramp_Hipster")//IG_Ramp_Hipster</option)//
createIdentity("IG_Ramp_Mex")//IG_Ramp_Mex</option)//
createIdentity("IG_RoccoPelosi")//IG_RoccoPelosi</option)//
createIdentity("IG_RussianDrunk")//IG_RussianDrunk</option)//
createIdentity("IG_Sacha")//IG_Sacha</option)//
createIdentity("IG_Screen_Writer")//IG_Screen_Writer</option)//
createIdentity("IG_SiemonYetarian")//IG_SiemonYetarian</option)//
createIdentity("IG_Solomon")//IG_Solomon</option)//
createIdentity("IG_SteveHains")//IG_SteveHains</option)//
createIdentity("IG_Stretch")//IG_Stretch</option)//
createIdentity("IG_Talina")//IG_Talina</option)//
createIdentity("IG_Tanisha")//IG_Tanisha</option)//
createIdentity("IG_TaoCheng")//IG_TaoCheng</option)//
createIdentity("IG_TaosTranslator")//IG_TaosTranslator</option)//
createIdentity("IG_Terry")//IG_Terry</option)//
createIdentity("IG_TomEpsilon")//IG_TomEpsilon</option)//
createIdentity("IG_Tonya")//IG_Tonya</option)//
createIdentity("IG_TracyDiSanto")//IG_TracyDiSanto</option)//
createIdentity("IG_TrafficWarden")//IG_TrafficWarden</option)//
createIdentity("IG_TylerDix")//IG_TylerDix</option)//
createIdentity("IG_Wade")//IG_Wade</option)//
createIdentity("IG_Zimbor")//IG_Zimbor</option)//

*/
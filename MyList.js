const prompt = require ('prompt-sync')({sigint: true})
 
class MyList{
 
    constructor(){
        this.lista = []
        this.contador = 0
    }
   
    //adiciona um número no final da fila
    add(num){
        this.lista[this.contador] = num
        this.contador++
    }
 
    //adiciona um número na posição x
    addPosicao(pos = 0, num = 0){
        let buffer;
        let aux = this.lista[pos];
        this.lista[pos] = num
        for(let cont = pos+1; cont <= this.contador; cont++){
            buffer = this.lista[cont]
            this.lista[cont] = aux
            aux = buffer
        }
    }
 
    //adiciona todos os itens da lista
    addAll(lista = []){
        let cont = 0
        let tamanho = lista.length
        for(cont; cont<=tamanho; cont++){
            if(typeof lista[cont] != 'number'){
                break
            }else{
                this.add(lista[cont])
            }
        }
        return this.lista
    }
 
    //Verifica se um valor x existe na lista
    contains(numero){
        let verifica = false
        for(let cont = 0; cont<=this.contador; cont++){
           if(this.lista[cont] === numero){
                verifica = true
            }
        }
    return verifica
    }
 
    //Limpa a lista em um todo
    clear(){
        this.contador = 0
        this.lista = []
    }
 
    //retorna cópia da lista
    clone(){
        let copiaDaLista = []
 
        for(let cont = 0; cont<=this.contador; cont++){
            copiaDaLista[cont] = this.lista[cont]
        }
        return copiaDaLista
    }
 
    //retorna todos os elementos que são diferentes dos fornecidos
    dif(lista){
        let diferentes = []
        let contDif = 0
        for(let cont = 0; cont<=this.contador; cont++){
            if(contains(lista[cont]) === true){
                continue
            }else{
                diferentes[contDif] = this.lista[cont]
                contDif++
            }
        }
        return diferentes
    }
 
    //retorna o elemento na posição
    get(posicao){
        return this.lista[posicao]
    }
 
    //retorna o elemento de maior tamanho da lista
    getMaior(){
        let maior = this.lista[0]
        for(let cont = 0; cont<=this.contador; cont ++){
            if(this.lista[cont] > maior){
                maior = this.lista[cont]
            }
        }
        return maior
    }
 
    //retorna o elemento de menor tamanho da lista
    getMenor(){
        let menor = this.lista[0]
        for(let cont = 0; cont<=this.contador; cont ++){
            if(this.lista[cont] < menor){
                menor = this.lista[cont]
            }
        }
        return menor
    }
 
    //retorna todos os números divisíveis por num
    getDivs(num){
        let divisiveis = []
        let contaDiv = 0
        for(let cont = 0; cont<=this.contador; cont++){
            if(this.lista[cont]%num === 0){
                divisiveis[contaDiv] = this.lista[cont]
                contaDiv++
            }
        }
        return divisiveis
    }
 
    //retorna a posição de um número
    indexOff(num){
        for(let cont = 0; cont<=this.contador; cont++){
            if(this.lista[cont] === num){
                return cont
            }
        }
    }
 
    retorna(){
        return this.lista
    }
 
    //verifica se a lista está vazia
    isEmpty(){
        if(this.contador===0){
            return true
        }else{
            return false
        }
    }
   
    //remove o item na posição
    remove(pos){
        let novoSize = this.contador--
        this.lista[pos] = this.lista[pos+1]
        for(let cont = pos+1; cont < novoSize; cont++){
            this.lista[cont] = this.lista[cont+1]
        }
        this.lista.length = this.lista.length-1
    }
 
    //remove todos os itens que estejam na lista[]
    removeAll(list){
        this.list = list
        for(let i = 0; i<= this.contador; i++){
            for(let j = 0; j<= list.length; j++){
                if(this.lista[i] === this.list[j]){
                    this.remove(i)
                }
            }
        }  
        return this.lista
    }
 
    //remove itens entre um indice e outro
    removeRange(inicio, fim){
        let contAux = 0
        let listaAux = []
        for(let cont = 0; cont<this.contador; cont++){
            if((cont>inicio)&&(cont<fim)){
                continue
            }else{
                listaAux[contAux] = this.lista[cont]
                contAux++
            }
        }
        this.lista = listaAux
    }
 
    //remove todos os pares
    removePares(){
        let semPares = []
        let contaPares = 0
        for(let cont = 0; cont<this.contador; cont++){
            if(this.lista[cont]%2 != 0){
                semPares[contaPares] = this.lista[cont]
                contaPares++
            }
        }
        this.lista = semPares
    }
 
    //remove ímpares
    removeImpares(){
        let semImpares = []
        let contaImpares = 0
        for(let cont = 0; cont<this.contador; cont++){
            if(this.lista[cont]%2 === 0){
                semImpares[contaImpares] = this.lista[cont]
                contaImpares++
            }
        }
        this.lista = semImpares
    }
 
    //remove repetidos
    removeRepetidos(){
        for(let cont = 0; cont<this.contador; cont++){
            for(let contAux = cont+1; contAux<this.contador; contAux++){
                if(this.lista[cont] === this.lista[contAux]){
                    this.remove(contAux)
                }
            }
        }
        return this.lista
    }
 
    //troca o valor na posição
    set(valor, pos){
        this.lista[pos] = valor
    }
 
    //retorna a quantidade de itens da lista
    size(){
        return this.contador
    }
 
    //retorna uma sublista dentro do range
    subList(inicio, fim){
        let listaAux = []
        let contAux = 0
        for(let cont = inicio+1; cont<fim; cont++){
            listaAux[contAux] = this.lista[cont]
            contAux++
        }
        return listaAux
    }
 
    //retorna a soma de todos os itens da lista
    sum(){
        let soma = 0
        for (let cont = 0; cont <= this.contador; cont++) {
            if(typeof this.lista[cont] == 'number'){
            soma += this.lista[cont]
            }
        }
        return soma
    }
 
    //Ordena a lista de forma ascendente
    sortAsc(){
        let aux
        for (let cont = 0; cont < this.contador; cont++) {
            for(let contAux = cont; contAux<this.contador; contAux++){
                if(this.lista[cont] > this.lista[contAux]){
                    aux = this.lista[cont]
                    this.lista[cont] = this.lista[contAux]
                    this.lista[contAux] = aux
                }
            }
        }
        return this.lista
    }
 
    //Ordena a lista de forma decrescente
    sortDesc(){
        let aux
        for (let cont = 0; cont < this.contador; cont++) {
            for(let contAux = cont; contAux<this.contador; contAux++){
                if(this.lista[cont] < this.lista[contAux]){
                    aux = this.lista[cont]
                    this.lista[cont] = this.lista[contAux]
                    this.lista[contAux] = aux
                }
            }
        }
        return this.lista
    }
 
}

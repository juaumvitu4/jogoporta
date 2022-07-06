
class Pessoa {
    #nome

    constructor(nome) {
        this.#nome = nome
    }

    set nome(nome) {
        return this.#nome = nome
    }

    getNome() {
        return this.#nome
    }
}

const p1 = new Pessoa ("Pedroca")
p1.nome = "Viroe"
console.log(p1.getNome())
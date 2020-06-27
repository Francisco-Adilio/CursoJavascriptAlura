import {Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        this._saldo = 0
        ContaCorrente.numeroDeContas += 1
    }

    depositar(valor_deposito) {
            if (valor_deposito <= 0) {
                return
            }

            this._saldo += valor_deposito
        }

    sacar(valor_saque) {
        if (this._saldo < valor_saque || valor_saque <= 0) {
            return
        }

        this._saldo -= valor_saque
        return true
    }

    transferir(valor, conta) {
        if (this.sacar(valor)) {
            conta.depositar(valor)
        }
    }
}
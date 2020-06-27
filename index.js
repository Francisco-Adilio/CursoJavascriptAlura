import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const Cliente1 = new Cliente("Francisco", 11122233300)

const ContaCorrente1 = new ContaCorrente(1001, Cliente1)

console.log(ContaCorrente1)
export default class Telefone {
    [x: string]: any;
    splice() {
        throw new Error("Method not implemented.");
    }
    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    public get getDdd(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }
}
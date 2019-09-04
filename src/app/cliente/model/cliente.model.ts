export interface Cliente {
    nome:string;
    sobrenome:string;
    telefone:string;
    logradouro:string;
    complemento?:string;
    bairro:string;
    cidade:string;
    estado:string;
    cep:string;
    observacoes?:string;
}
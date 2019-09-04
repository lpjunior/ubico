import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../model/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  clienteForm: FormGroup;
  cliente: Cliente;
  
  constructor(private formBuilder: FormBuilder, private clienteModel: Cliente, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      
           //atributo: [param1, param2]
           // param1 -> equivale ao atribuito referencia daquele campo
           // param2 -> equivale as validações para aquele campo

     nome: [
       this.cliente.nome,
       [
         Validators.required, // validação de campo requirido
         Validators.minLength(10), // validação de minimo de caracteres
         Validators.maxLength(100), // validação de maximo de caracteres
         Validators.pattern(/^[a-zA-Z]+$/)
       ]
     ], 
     sobrenome: [
       this.cliente.sobrenome,
       [
         Validators.required, // validação de campo requirido
         Validators.minLength(10), // validação de minimo de caracteres
         Validators.maxLength(100), // validação de maximo de caracteres
         Validators.pattern(/^[a-zA-Z]+$/)
       ]
     ], 
     telefone: [
       this.cliente.telefone,
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(12), // validação de minimo de caracteres
        Validators.maxLength(12), // validação de maximo de caracteres
        Validators.pattern(/^[0-9]+$/)
      ]
     ], 
     logradouro: [
       this.cliente.logradouro,
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(12), // validação de minimo de caracteres
        Validators.maxLength(120), // validação de maximo de caracteres
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]
     ], 
     bairro: [
       this.cliente.bairro,
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(12), // validação de minimo de caracteres
        Validators.maxLength(12), // validação de maximo de caracteres
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]
     ], 
     cidade: [
       this.cliente.cidade,
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(12), // validação de minimo de caracteres
        Validators.maxLength(120), // validação de maximo de caracteres
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]
     ], 
     estado: [
       this.cliente.estado,
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(12), // validação de minimo de caracteres
        Validators.maxLength(120), // validação de maximo de caracteres
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]
     ], 
     cep: [
       this.cliente.cep,
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(8), // validação de minimo de caracteres
        Validators.maxLength(8), // validação de maximo de caracteres
        Validators.pattern(/^[0-9]+$/)
      ]
     ], 
     complemento: [
       this.cliente.complemento,
       [
        Validators.maxLength(120), // validação de maximo de caracteres
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]
     ]
     , 
     observacoes: [
       this.cliente.observacoes,
       [
        Validators.maxLength(120), // validação de maximo de caracteres
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]
     ]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../model/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  clienteForm: FormGroup;
  cliente: Cliente;
  clienteID: number;
  editable: boolean = false;
  
  constructor(private formBuilder: FormBuilder, 
              private route: ActivatedRoute, 
              private router: Router,
              private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      
           //atributo: [param1, param2]
           // param1 -> equivale ao valor do campo
           // param2 -> equivale as validações para aquele campo

     nome: [
       '',
       [
         Validators.required, // validação de campo requirido
         Validators.minLength(4), // validação de minimo de caracteres
         Validators.maxLength(100), // validação de maximo de caracteres
         //Validators.pattern(/^[a-zA-Z ]+$/)
       ]
     ], 
     sobrenome: [
       '',
       [
         Validators.required, // validação de campo requirido
         Validators.minLength(4), // validação de minimo de caracteres
         Validators.maxLength(100), // validação de maximo de caracteres
         //Validators.pattern(/^[a-zA-Z ]+$/)
       ]
     ], 
     telefone: [
       '',
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(5), // validação de minimo de caracteres
        Validators.maxLength(12), // validação de maximo de caracteres
        //Validators.pattern(/^[0-9]+$/)
      ]
     ], 
     logradouro: [
       '',
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(5), // validação de minimo de caracteres
        Validators.maxLength(120), // validação de maximo de caracteres
        //Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ]
     ], 
     bairro: [
       '',
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(5), // validação de minimo de caracteres
        Validators.maxLength(12), // validação de maximo de caracteres
        //Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ]
     ], 
     cidade: [
       '',
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(5), // validação de minimo de caracteres
        Validators.maxLength(120), // validação de maximo de caracteres
        //Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ]
     ], 
     estado: [
       '',
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(2), // validação de minimo de caracteres
        Validators.maxLength(2), // validação de maximo de caracteres
        //Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ]
     ], 
     cep: [
       '',
       [
        Validators.required, // validação de campo requirido
        Validators.minLength(8), // validação de minimo de caracteres
        Validators.maxLength(8), // validação de maximo de caracteres
        //Validators.pattern(/^[0-9]+$/)
      ]
     ], 
     complemento: [
       '',
       [
        Validators.maxLength(120), // validação de maximo de caracteres
        //Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ]
     ]
     , 
     observacoes: [
       '',
       [
        Validators.maxLength(120), // validação de maximo de caracteres
        //Validators.pattern(/^[a-zA-Z0-9 ]+$/)
      ]
     ]
    });

    this.route.paramMap.subscribe(params => {
      this.clienteID =+ params.get('id');
      if(this.clienteID) {
        this.getCliente(this.clienteID);
        this.editable = true;
      }
    })
  }

  addCliente() {
    // Resgata os valores do campo e faz um cast(conversão) para o modelo Cliente
    const novoCliente = this.clienteForm.getRawValue() as Cliente;

    this.clienteService
      .insertCliente(novoCliente)
      .subscribe(
        () => { // arrow function
         this.router.navigateByUrl('/list'); // redireciona para a pagina list
         this.clienteForm.reset(); // Limpa os campos do formulario
        },
        error => {
          console.log(error);
          this.clienteForm.reset();
        }
      );
  }

  getCliente(id: number) {
    this.clienteService.getCliente(id).subscribe(
      (clienteDB: Cliente) => this.loadForm(clienteDB),
      errorDB => console.log(errorDB)
    );
  }

  loadForm(cliente: Cliente) {
    this.clienteForm.patchValue({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,
      telefone: cliente.telefone,
      logradouro: cliente.logradouro,
      bairro: cliente.bairro,
      cidade: cliente.cidade,
      estado: cliente.estado,
      cep: cliente.cep,
      complemento: cliente.complemento,
      observacoes: cliente.observacoes
    });
  }
  editCliente() {
    const clienteEditado = this.clienteForm.getRawValue() as Cliente;
    clienteEditado.id = this.clienteID;

    this.clienteService.updateCliente(clienteEditado).subscribe(
      () => {
        this.router.navigateByUrl('/list');
        this.clienteForm.reset();
      },
      error => {
        console.log(error);
        this.clienteForm.reset();
      }
    );
  }
}

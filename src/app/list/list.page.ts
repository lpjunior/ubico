import { Component } from '@angular/core';
import { Cliente } from '../cliente/model/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  
  private clientes: Cliente;
  
  constructor(private clienteService: ClienteService, private router: Router) {}

  ionViewWillEnter(): void {
    this.listaClientes();
  }

  listaClientes() {
    this.clienteService.getClientes().subscribe(
      clientesDB => this.clientes = clientesDB,
      errorDB => console.log(errorDB)
    );
  }
}

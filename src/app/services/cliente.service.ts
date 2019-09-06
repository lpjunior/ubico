import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cliente } from '../cliente/model/cliente.model';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json;charset=utf-8'}
  )
};

const API_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  /* CRUD METHODS */

  // CREATE
  insertCliente(cliente: Cliente) {
    return this.http.post(`${API_URL}/cliente`, cliente, httpOptions);
  }

  // RETRIEVE SINGLE
  getCliente(id: number) {
    return this.http.get<Cliente>(`${API_URL}/cliente/${id}`, httpOptions);
  }

  // RETRIEVE All
  getClientes() {
    return this.http.get<Cliente>(`${API_URL}/cliente`, httpOptions);
  }

  // UPDATE
  updateCliente(cliente: Cliente) {
    return this.http.put(`${API_URL}/cliente`, cliente, httpOptions);
  }

  // DELETE
  deleteCliente(id: number) {
    return this.http.delete(`${API_URL}/cliente/${id}`, httpOptions);
  }
}

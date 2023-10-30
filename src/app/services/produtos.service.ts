import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  remover(id: number) {
    throw new Error('Method not implemented.');
  }

  // Link da API que será consumida
  api = 'http://localhost:3000/produto';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get<IProduto[]>(this.api);
  }

  cadastrar(produto: Partial<IProduto>) {
    return this.http.post(this.api, produto);
  }
  
}

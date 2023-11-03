import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from '../interface/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  getItemById(id: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.api}/${id}`);
  }
  remover(id: number) {
    throw new Error('Method not implemented.');
  }

  // Link da API que será consumida
  api = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get<IProduto[]>(this.api);
  }

  cadastrar(produto: Partial<IProduto>) {
    return this.http.post(this.api, produto);
  }
  
  excluir(id: number) {
    return this.http.delete<IProduto>(`${this.api}/${id}`);
  }

  atualizar(produto: IProduto) {
    return this.http.put(this.api, produto);
  }
}

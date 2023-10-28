import { Component } from '@angular/core';
import { IProduto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: IProduto[] = [];

  constructor(private ProdutosService: ProdutosService) {}

  ngOnInit() {
    this.ProdutosService.buscarTodos().subscribe(produtos =>{
      this.produtos = produtos;
    }, error => {
      console.log(error);
    });
  }
  
}

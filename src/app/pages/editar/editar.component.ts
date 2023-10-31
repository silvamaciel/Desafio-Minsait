import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  produto: IProduto = {
    id: 0, // Coloque um valor inicial apropriado para o ID
    nome: '',
    codigoDeBarras: '',
    preco: 0,
  };

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const produtoId = +params['id']; // Obtém o ID da URL
      this.produtosService.getItemById(produtoId).subscribe((produto: IProduto) => {
        this.produto = produto; // Define o produto encontrado no componente
      });
    });
  }
}

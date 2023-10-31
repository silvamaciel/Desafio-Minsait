import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  produto: IProduto = {
    id: 0,
    nome: '',
    codigoDeBarras: '',
    preco: 0,
  };

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const produtoId = +params['id'];
      this.produtosService.getItemById(produtoId).subscribe((produto: IProduto) => {
        this.produto = produto;
      });
    });
  }

  atualizarProduto() {
    if (!this.produto.nome || this.produto.nome.trim() === '' ||
      !this.produto.codigoDeBarras || this.produto.codigoDeBarras.length < 12 ||
      this.produto.preco <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos corretamente!',
      });
    } else {
      Swal.fire({
        title: 'Tem certeza que deseja salvar as alterações?',
        showDenyButton: true,
        confirmButtonText: 'Salvar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Salvo!', '', 'success')
          this.produtosService.atualizar(this.produto).subscribe(() => {
            this.router.navigate(['/produtos']);
          });
        } else if (result.isDenied) {
          Swal.fire('Produto não foi Alterado', '', 'info')
        }
      })
      
    }
  }
}

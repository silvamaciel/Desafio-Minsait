import { Component } from '@angular/core';
import { IProduto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

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

  deletar(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá voltar atrás!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Pode excluir!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        {
          this.ProdutosService.excluir(id).subscribe(() => {
            this.ngOnInit();
          }, error => {
            console.log(error);
          });
        }
      }
    })
  }

  preencherForm(produto: IProduto) {
    
  }
}

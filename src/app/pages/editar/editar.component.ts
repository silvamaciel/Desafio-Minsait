import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    codigoBarras: '',
    preco: 0,
  };

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const produtoId = +params['id'];
      if (produtoId) {
        this.produtosService.getItemById(produtoId).subscribe((produto: IProduto) => {
          this.editarForm.setValue(produto);
        });
      }
    });
  }

  editarForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    codigoBarras: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(13)]),
    preco: new FormControl(0, [Validators.required])
  });

  atualizarProduto() {
    if (this.editarForm.invalid) {
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
          Swal.fire('Salvo!', '', 'success');
          const produtoAtualizado = this.editarForm.value as IProduto; // Coerção de tipo
          this.produtosService.atualizar(produtoAtualizado).subscribe(() => {
            this.router.navigate(['/produtos']);
          });
        } else if (result.isDenied) {
          Swal.fire('Produto não foi Alterado', '', 'info');
        }
      });
    }
  }
  
}

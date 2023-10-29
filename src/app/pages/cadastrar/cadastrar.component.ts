import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  constructor (private ProdutosService: ProdutosService) { }

  cadastroForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    codigoDeBarras: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(13)]),
    preco: new FormControl(0,[Validators.required]),
  });

  
  enviar(){
    const produto: Partial<IProduto> = this.cadastroForm.value as IProduto;
    if (this.cadastroForm.invalid) {
      alert('Preencha todos os campos!');
      return;
    }else{
      this.ProdutosService.cadastrar(produto).subscribe(result => {
      });
    }
  }
  
}

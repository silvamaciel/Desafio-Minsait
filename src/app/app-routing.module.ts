import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: "produtos"
  },
  {
    path: 'produtos', component: ProdutosComponent
  },
  {
    path: 'produtos/cadastro', component: CadastrarComponent
  },
  {
    path: 'produtos/editar/:id', component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

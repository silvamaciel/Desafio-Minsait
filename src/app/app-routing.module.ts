import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './admin-form/admin-form/admin-form.component';
import { AdminComponent } from './admin/admin/admin/admin.component';
import { CadUsuarioComponent } from './guest/guest/cad-usuario/cad-usuario/cad-usuario.component';
import { produtosComponent } from './guest/guest/produtos/produtos/produtos.component';
import { UsuariosComponent } from './admin/usuarios/usuarios/usuarios.component';
import { CarrinhoComponent } from './guest/guest/carrinho/carrinho/carrinho.component';

const routes: Routes = [
  {path:'produtos', component: produtosComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'usuarios/new', component: CadUsuarioComponent}, 
  {path: 'admin', component: AdminComponent},
  {path:'admin/new', component: AdminFormComponent},
  {path:'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
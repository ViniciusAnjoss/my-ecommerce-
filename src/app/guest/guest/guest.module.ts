import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { produtosComponent } from './produtos/produtos/produtos.component';
import { SharedModule } from 'src/app/shared/shered/shered.module';
import { CadUsuarioComponent } from './cad-usuario/cad-usuario/cad-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho/carrinho.component';



@NgModule({
  declarations: [
    produtosComponent,
    CadUsuarioComponent,
    CarrinhoComponent,
  
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ],
  exports:[
    produtosComponent,
   
  ]
})
export class GuestModule { }  
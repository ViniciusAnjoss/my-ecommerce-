import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/shared/shered/models/categoria.model';
import { ItemVendaModel } from 'src/app/shared/shered/models/item-venda.model';
import { ProdutoModel } from 'src/app/shared/shered/models/produto.model';
import { CategoriaService } from 'src/app/shared/shered/services/categorias.service'; 
import { StorageService } from 'src/app/shared/shered/services/storage.service';
import { GuestService } from 'src/app/guest/guest.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class produtosComponent implements OnInit {
  itemVenda : ItemVendaModel[] = [];
  categoriaSelected: number = -1;
  all_produtos : ProdutoModel[] = [];
  produtos : ProdutoModel[] = [];
  categorias : CategoriaModel[] = [];
  

  constructor(private guestService: GuestService, private storageService: StorageService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
  this.getAllProdutos();
    this.getAllCategorias();
  }
  onQuantidadeChange(produto : ProdutoModel , event: any){
    console.log(event.target.value)

    let ivm : ItemVendaModel = new ItemVendaModel();

    ivm.produto = produto;
    ivm.quantidade = event.target.value;

    let index = this.itemVenda
      .findIndex( 
        (x:ItemVendaModel) => x.produto.idProduto == produto.idProduto 
      );
      
    if (index >=0 ){
      this.itemVenda[index].quantidade = event.target.value;
    }
    else {
      this.itemVenda.push(ivm);
    }

    console.log(this.itemVenda);
  }

  finalizarCompra(){
    this.storageService.setCarrinho(this.itemVenda);
  }
  onCategoriaChange(){
    //console.log(this.categoriaSelected)
    this.produtos = this.all_produtos;
    if (this.categoriaSelected >= 0)
      this.produtos = this.produtos.filter( (x) => this.hasCategoria(x.categorias, this.categoriaSelected ) >= 0  );
  }
  private hasCategoria(categorias : CategoriaModel[], categoria_sel_id : number){
    let index = categorias.findIndex( (y) => y.idCategoria == categoria_sel_id );
    //console.log(index)
    return index;
  }
  private getAllProdutos(){
    this.guestService.getAll()
      .subscribe(
        {
          next : (produtos : any) => {
            this.produtos = produtos;
            this.all_produtos = produtos;
          }
        }
      );
  }
  private getAllCategorias(){
    this.categoriaService.getAll()
      .subscribe(
        {
          next : (categorias : any) => {this.categorias = categorias;}
        }
      );
  }




 
}
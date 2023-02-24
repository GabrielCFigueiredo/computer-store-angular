import { IProdutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  Items: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.Items = JSON.parse(localStorage.getItem('carrinho') || '[]' );
    return this.Items
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {

    this.Items.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.Items));
  }

  removerDoCarrinho(produtoId: number) {
    this.Items = this.Items.filter(item => item.id !== produtoId );
    localStorage.setItem("carrinho", JSON.stringify(this.Items));
  }

  limparCarrinho() {
    this.Items = [];
    localStorage.clear();
  }
}

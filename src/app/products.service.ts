import { IProduto, produtos } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId)
  }
}

import { IProduto, produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(

    private produtoService: ProductsService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }

}

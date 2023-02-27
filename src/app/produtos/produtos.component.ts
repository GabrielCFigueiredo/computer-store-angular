import { ActivatedRoute } from '@angular/router';
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

    private produtoService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get('descricao')?.toLocaleLowerCase();

      if (descricao) {
        this.produtos = produtos?.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    })
  }

}

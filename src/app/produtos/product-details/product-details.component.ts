import { IProduto } from './../../produtos';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId)
  }

}

import { IProdutoCarrinho } from './../../produtos';
//import { NotificacaoService } from './../../notificacao.service';
import { IProduto } from './../../produtos';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtoService: ProductsService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    public carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar('O produto foi adicionado ao carrinho');
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto)
  }
}

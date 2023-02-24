import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from 'src/app/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itemsCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public serviceCarrinho: CarrinhoService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.itemsCarrinho = this.serviceCarrinho.obtemCarrinho();
    this.calcularTotal()
  }

  calcularTotal() {
    this.total = this.itemsCarrinho.reduce((prev, curr) => prev + (curr.quantidade * curr.preco), 0);
  }
  
  removerDoCarrinho(produtoId: number) {
    this.itemsCarrinho = this.itemsCarrinho.filter(item => item.id !== produtoId);
    this.serviceCarrinho.removerDoCarrinho(produtoId);
    this.calcularTotal();
  }

  compraFinalizada() {
    alert("Parabéns, você finalizou sua compra!");
    this.serviceCarrinho.limparCarrinho();
    this.route.navigate(["produtos"]);
  }

}

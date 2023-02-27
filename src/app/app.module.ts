import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingFlatModule } from './app-routing--flat/app-routing--flat.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraDePesquisaComponent } from './barra-de-pesquisa/barra-de-pesquisa.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BarraDePesquisaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingFlatModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

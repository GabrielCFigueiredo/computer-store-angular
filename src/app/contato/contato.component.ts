import { Contato } from './../contato';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {

  
  submitted!: false;
  

  formContato= this.fb.group({
    nome: ["", [Validators.minLength(4), Validators.required]],
    assunto: ["", [Validators.minLength(10), Validators.required]],
    telefone: ["", [Validators.minLength(11), Validators.required]],
    email: ["", [Validators.email, Validators.required]],
    mensagem: [
      ,
      [
        Validators.maxLength(255),
        Validators.minLength(10),
        Validators.required,
      ],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }



  onSubmit() {
    alert("dados enviados com sucesso!")
    console.log(this.formContato.value);
    this.formContato.reset();
    
  }
}

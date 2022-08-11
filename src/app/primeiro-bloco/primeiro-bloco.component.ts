import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { PerguntasService } from '../services/perguntas.service';

@Component({
  selector: 'app-primeiro-bloco',
  templateUrl: './primeiro-bloco.component.html',
  styleUrls: ['./primeiro-bloco.component.scss'],
})
export class PrimeiroBlocoComponent implements OnInit {
  suaResposta: string = '';
  certo: boolean = false;
  errado: boolean = false;

  perguntas = [
    {
      id: 0,
      texto: '',
      resposta: '',
      liberada: false,
    },
  ];

  constructor(private perguntasService: PerguntasService) {}

  ngOnInit(): void {
    this.perguntas = this.perguntasService.getPerguntas();
  }

  conferirResposta(suaResposta: string, resposta: string) {
    console.log(suaResposta);
    console.log(resposta);
    if (suaResposta == resposta) {
      this.certo = true;
      this.errado = false;
    } else {
      this.certo = false;
      this.errado = true;
    }
  }
}

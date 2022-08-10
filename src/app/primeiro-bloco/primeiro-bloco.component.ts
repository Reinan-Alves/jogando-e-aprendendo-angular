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
  semResposta: boolean = true;
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
    if (suaResposta == resposta) {
      this.certo = true;
      this.errado = false;
      this.semResposta = false;
    } else if (suaResposta != resposta) {
      this.certo = false;
      this.errado = true;
      this.semResposta = false;
    } else {
      this.certo = false;
      this.errado = false;
      this.semResposta = false;
    }
  }
}

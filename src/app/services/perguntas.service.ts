import { Injectable } from '@angular/core';

@Injectable()
export class PerguntasService {
  getPerguntas() {
    return [
      {
        id: 1,
        texto:
          'Complete. Abreviação usada para criar um component? ng ___ component',
        resposta: 'new',
        liberada: true,
      },
      {
        id: 2,
        texto:
          'Complete. Abreviação usada para criar um component? ng _ component',
        resposta: 'g',
        liberada: false,
      },
      {
        id: 3,
        texto:
          'São blocos de aplicações contendo módulos,estrutura e estilizações.Digite o número. 1)Module 2)Service 3)Component 4)Decorator',
        resposta: '3',
        liberada: false,
      },
      {
        id: 4,
        texto:
          'Nome do ciclo de vida carregado na inicialização de um componente?',
        resposta: 'ngOnInit',
        liberada: false,
      },
      {
        id: 5,
        texto:
          'Data binding que possibilita escultar eventos do template e possibilita executar um método no componente.',
        resposta: 'event binding',
        liberada: false,
      },
    ];
  }
}

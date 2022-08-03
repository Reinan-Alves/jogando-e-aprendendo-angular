import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-bloco',
  templateUrl: './primeiro-bloco.component.html',
  styleUrls: ['./primeiro-bloco.component.scss'],
})
export class PrimeiroBlocoComponent implements OnInit {
  public resposta01: string = '';
  public resposta02: string = '';
  public resposta03: string = '';
  public resposta04: string = '';
  public resposta05: string = '';
  public resposta06: string = '';
  public resposta07: string = '';
  public resposta08: string = '';

  constructor() {}

  ngOnInit(): void {}
}

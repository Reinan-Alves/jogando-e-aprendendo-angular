import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroBlocoComponent } from './primeiro-bloco.component';

describe('PrimeiroBlocoComponent', () => {
  let component: PrimeiroBlocoComponent;
  let fixture: ComponentFixture<PrimeiroBlocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroBlocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroBlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

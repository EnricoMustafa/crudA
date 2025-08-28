import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLoginComponent } from './cadastrar-login.component';

describe('CadastrarLoginComponent', () => {
  let component: CadastrarLoginComponent;
  let fixture: ComponentFixture<CadastrarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGruposComponent } from './criar-grupos.component';

describe('CriarGruposComponent', () => {
  let component: CriarGruposComponent;
  let fixture: ComponentFixture<CriarGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

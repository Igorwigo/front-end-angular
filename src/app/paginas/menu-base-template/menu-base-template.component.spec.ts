import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBaseTemplateComponent } from './menu-base-template.component';

describe('MenuBaseTemplateComponent', () => {
  let component: MenuBaseTemplateComponent;
  let fixture: ComponentFixture<MenuBaseTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBaseTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBaseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

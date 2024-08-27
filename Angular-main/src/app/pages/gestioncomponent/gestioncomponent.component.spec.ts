import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncomponentComponent } from './gestioncomponent.component';

describe('GestioncomponentComponent', () => {
  let component: GestioncomponentComponent;
  let fixture: ComponentFixture<GestioncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestioncomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

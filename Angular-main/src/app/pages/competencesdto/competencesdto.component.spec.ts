import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesdtoComponent } from './competencesdto.component';

describe('CompetencesdtoComponent', () => {
  let component: CompetencesdtoComponent;
  let fixture: ComponentFixture<CompetencesdtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetencesdtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetencesdtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

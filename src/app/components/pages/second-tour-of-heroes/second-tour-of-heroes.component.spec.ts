import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTourOfHeroesComponent } from './second-tour-of-heroes.component';

describe('SecondTourOfHeroesComponent', () => {
  let component: SecondTourOfHeroesComponent;
  let fixture: ComponentFixture<SecondTourOfHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTourOfHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTourOfHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokePillComponent } from './poke-pill.component';

describe('PokePillComponent', () => {
  let component: PokePillComponent;
  let fixture: ComponentFixture<PokePillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokePillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

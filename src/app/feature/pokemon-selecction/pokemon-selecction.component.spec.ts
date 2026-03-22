import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSelecctionComponent } from './pokemon-selecction.component';

describe('PokemonSelecctionComponent', () => {
  let component: PokemonSelecctionComponent;
  let fixture: ComponentFixture<PokemonSelecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSelecctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSelecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

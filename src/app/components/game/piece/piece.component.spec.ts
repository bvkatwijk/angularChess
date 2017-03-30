import { PieceType } from './piece-type.enum';
import { Color } from '../player/color.enum';
import { Piece } from './piece';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceComponent } from './piece.component';

describe('PieceComponent', () => {
  let component: PieceComponent;
  let fixture: ComponentFixture<PieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PieceComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceComponent);
    component = fixture.componentInstance;
    component.piece = new Piece(PieceType.KING, Color.BLACK);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

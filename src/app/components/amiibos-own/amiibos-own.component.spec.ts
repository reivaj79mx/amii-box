import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiibosOwnComponent } from './amiibos-own.component';

describe('AmiibosOwnComponent', () => {
  let component: AmiibosOwnComponent;
  let fixture: ComponentFixture<AmiibosOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiibosOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiibosOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

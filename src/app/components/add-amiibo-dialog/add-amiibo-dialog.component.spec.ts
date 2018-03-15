import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAmiiboDialogComponent } from './add-amiibo-dialog.component';

describe('AddAmiiboModalComponent', () => {
  let component: AddAmiiboDialogComponent;
  let fixture: ComponentFixture<AddAmiiboDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAmiiboDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAmiiboDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

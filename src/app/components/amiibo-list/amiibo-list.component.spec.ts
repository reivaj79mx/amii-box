import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiiboListComponent } from './amiibo-list.component';

describe('AmiiboListComponent', () => {
  let component: AmiiboListComponent;
  let fixture: ComponentFixture<AmiiboListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiiboListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiiboListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

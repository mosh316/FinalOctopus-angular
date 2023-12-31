import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsListComponent } from './fruits-list.component';

describe('FruitsListComponent', () => {
  let component: FruitsListComponent;
  let fixture: ComponentFixture<FruitsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitsListComponent]
    });
    fixture = TestBed.createComponent(FruitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

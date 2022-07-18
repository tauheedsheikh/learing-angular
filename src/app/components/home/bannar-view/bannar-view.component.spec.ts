import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannarViewComponent } from './bannar-view.component';

describe('BannarViewComponent', () => {
  let component: BannarViewComponent;
  let fixture: ComponentFixture<BannarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannarViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiletransferComponent } from './mobiletransfer.component';

describe('MobiletransferComponent', () => {
  let component: MobiletransferComponent;
  let fixture: ComponentFixture<MobiletransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiletransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiletransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

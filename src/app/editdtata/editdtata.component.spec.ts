import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdtataComponent } from './editdtata.component';

describe('EditdtataComponent', () => {
  let component: EditdtataComponent;
  let fixture: ComponentFixture<EditdtataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdtataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdtataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

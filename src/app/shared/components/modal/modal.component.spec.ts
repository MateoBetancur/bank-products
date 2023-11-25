import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set modalText and emit event on cancel', () => {
    const modalText = 'Test Modal Text';
    const emittedValue = false;
    jest.spyOn(component.modalEvent, 'emit')

    component.modalText = modalText;
    component.onCancelModal(emittedValue);

    expect(component.modalTxt).toEqual(modalText);
    expect(component.modalEvent.emit).toHaveBeenCalledWith(emittedValue);
  });

});

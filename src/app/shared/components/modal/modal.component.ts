import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bank-products-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  modalTxt!: string
  @Input() set modalText(value: string) {
    this.modalTxt = value;
  }
  @Output() modalEvent = new EventEmitter<boolean>();

  onCancelModal(event: boolean): void {
    this.modalEvent.emit(event)
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/product.interface';
import { FIVE, ONE_HUNDRED, TEN, THREE, TWO_HUNDRED, ZERO } from 'src/app/core/utils/number.constants';
import { errorsForm } from '../../utils/errors-form-constants';

@Component({
  selector: 'bank-products-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  currentDate!: string;
  formErrors = errorsForm;
  productForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(THREE),
      Validators.maxLength(TEN)
    ]),
    logo: new FormControl('', [Validators.required]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(FIVE),
      Validators.maxLength(ONE_HUNDRED)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(TEN),
      Validators.maxLength(TWO_HUNDRED)
    ]),
    date_release: new FormControl('', [Validators.required]),
    date_revision: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    const now = new Date();
    this.currentDate = this.formatDate(now);
    this.productForm.valueChanges.subscribe(console.log);
  }

  /* getters from form */

  get id() {
    return this.productForm.get('id');
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get logo() {
    return this.productForm.get('logo');
  }

  get dateRelease() {
    return this.productForm.get('date_release');
  }

  get dateRevision() {
    return this.productForm.get('date_revision');
  }

  /* handler functions */

  onChangeDateRelease(): void {
    const dateRelease = new Date(this.dateRelease?.value || '');
    const newDate = dateRelease.setFullYear(dateRelease.getFullYear() + 1);
    const dateRevision = new Date(newDate);
    this.dateRevision?.setValue(this.formatDate(dateRevision));

  }

  formatDate(date: Date): string {
    return date.toISOString().slice(ZERO, TEN)
  }
}

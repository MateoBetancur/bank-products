import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [NavBarComponent, LoaderComponent, ModalComponent],
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  exports: [NavBarComponent, LoaderComponent, ModalComponent],
})
export class SharedModule {}

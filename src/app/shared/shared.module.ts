import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent, LoaderComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule
  ],
  exports: [NavBarComponent, LoaderComponent]
})
export class SharedModule { }

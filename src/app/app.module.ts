import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

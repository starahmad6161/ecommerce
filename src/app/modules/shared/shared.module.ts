import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdcardComponent } from 'src/app/core/models/prodcard/prodcard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProdcardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FontAwesomeModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProdcardComponent,
  ]
})
export class SharedModule { }

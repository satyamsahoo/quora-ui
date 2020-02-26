import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatSliderModule,
} from '@angular/material';

const MaterialComponents = [
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatSliderModule,
  MatStepperModule,
  MatMenuModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }

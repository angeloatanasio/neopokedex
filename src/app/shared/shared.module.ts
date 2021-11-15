import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import {SharedComponent} from "./shared.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    SharedComponent,
    UploadComponent,
    CardComponent
  ],
  exports: [
    UploadComponent,
    CardComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildHomeComponent } from './child-home/child-home.component';
import { ChildModalComponent } from './child-modal/child-modal.component';
import { ChildService } from './child.service';
import { RouterModule } from '@angular/router';
import { CHILD_ROUTES } from './child.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ChildHomeComponent,
    ChildModalComponent
  ],
  providers: [
    ChildService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CHILD_ROUTES),
    NgbModule
  ]
})
export class ChildModule { }

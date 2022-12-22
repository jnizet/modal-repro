import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildModalComponent } from '../child-modal/child-modal.component';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent {

  constructor(private modal: NgbModal) { }

  openModal() {
    this.modal.open(ChildModalComponent);
  }
}

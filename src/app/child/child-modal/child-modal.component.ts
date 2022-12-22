import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildService } from '../child.service';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.component.html',
  styleUrls: ['./child-modal.component.scss']
})
export class ChildModalComponent {
  message: string;

  constructor(public activeModal: NgbActiveModal, private childService: ChildService) {
    this.message = childService.message();
  }
}

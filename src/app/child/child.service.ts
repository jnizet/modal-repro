import { Injectable } from '@angular/core';

@Injectable()
export class ChildService {

  constructor() { }

  message() {
    return 'Hello from sservice';
  }
}

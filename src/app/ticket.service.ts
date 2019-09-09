import { Injectable } from '@angular/core';
import TicketData from '../assets/results.json'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() {  }

  public getData () {
    return TicketData;
  }
}

import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(300, style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(300, style({opacity:0})) 
      ])
    ])
  ]
})
export class TicketsComponent implements OnInit {
  
  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
  }

  getTicketList(): any[] {
    return this.ticketService.getData()
  }

  getFormattedTime(time:string): string {
    if (time == null)
      return ''

    return time.substr(0,2) + ':' + time.substr(2)
  }

  getFormattedDate(date:string): string {
    if (date == null)
      return ''

    if (date.length == 6)
      date = '20' + date;

    return date.substr(0,4) + '/' + date.substr(4,2) + '/' + date.substr(6)
  }
}

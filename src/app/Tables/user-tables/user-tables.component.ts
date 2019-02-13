import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tables',
  templateUrl: './user-tables.component.html',
  styleUrls: ['./user-tables.component.css']
})
export class UserTablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  panels = [
    {
      active    : true,
      name      : 'User 1',
      UserName : [
        {
          key    : '1',
          charity_name   : 'Heart Foundation',
          donations    : '100$',
          date: '21/01/2019',
          paymentType: 'bank type'
        },
        {
          key    : '2',
          charity_name   : 'Child foundation',
          donations    : '100$',
          date: '21/01/2019',
          paymentType: 'bank type'
        }
      ],
      customStyle: {
        'background'   : '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        'border'       : '0px'
      }
    },
    {
      active: false,
      name  : 'User 2',
      UserName : [
        {
          key    : '1',
          charity_name   : 'John Cena',
          donations    : 32,
          date: '21/01/2019',
          paymentType: 'bank type'
        },
        {
          key    : '2',
          charity_name   : 'Racheal Green',
          donations    : 32,
          date: '21/01/2019',
          paymentType: 'bank type'
        }
      ]
    },
    {
      active: false,
      name  : 'User 3'
    },
    {
      active: false,
      name  : 'User 4'
    }
  ]; 
}

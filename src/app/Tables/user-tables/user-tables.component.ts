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
      name      : 'Vinut',
      UserName : [
        {
          key    : '1',
          charity_name   : 'John Brown',
          donations    : 32,
          date: '21/01/2019',
          paymentType: 'bank type'
        },
        {
          key    : '2',
          charity_name   : 'Jim Green',
          donations    : 32,
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
      name  : 'This is panel header 2',
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
      name  : 'This is panel header 3'
    },
    {
      active: false,
      name  : 'This is panel header 4'
    }
  ]; 
}

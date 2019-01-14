import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charity-tables',
  templateUrl: './charity-tables.component.html',
  styleUrls: ['./charity-tables.component.css']
})
export class CharityTablesComponent implements OnInit {

  public searchString: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }

  dataSet = [
    {
      key    : '1',
      name   : 'Heart foundation',
      address: 'New York No. 1 Lake Park',
      funds: '$',
      progress: '30'
    },
    {
      key    : '2',
      name   : 'Accion Foundation',
      funds: '$',
      address: 'London No. 1 Lake Park',
      progress: '50'
    },
    {
      key    : '3',
      name   : 'Kuber Foundation',
      funds: '$',
      address: 'Sidney No. 1 Lake Park',
      progress: '30'
    },
    {
      key    : '2',
      name   : 'Accion Foundation',
      funds: '$',
      address: 'London No. 1 Lake Park',
      progress: '50'
    },
    {
      key    : '2',
      name   : 'Accion Foundation',
      funds: '$',
      address: 'London No. 1 Lake Park',
      progress: '50'
    },
  ];

}

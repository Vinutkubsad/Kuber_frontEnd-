import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charity-tables',
  templateUrl: './charity-tables.component.html',
  styleUrls: ['./charity-tables.component.css']
})
export class CharityTablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.dataSet.push({
        key         : i.toString(),
        name        : `Edrward ${i}`,
        totalfunds  : 21231.231,
        address     : `London Park no. ${i}`
      });
    }
    this.updateEditCache();
  } 

  i = 1;
  editCache = {};
  dataSet = [];

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    Object.assign(this.dataSet[ index ], this.editCache[ key ].data);
    // this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: { ...item }
        };
      }
    });
  }

}

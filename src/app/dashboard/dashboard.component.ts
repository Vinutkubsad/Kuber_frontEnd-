import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public searchString: string;

  constructor( private router: Router) { }

  ngOnInit() { }
  

  charityTable() {
    this.router.navigate(['charitytabels'])
  }
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  

  // Bar chart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  // Pai charts
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // Charity tables

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }

  charitySet = [
    {
      key    : '1',
      name   : 'Heart foundation',
      address: 'New York No. 1 Lake Park',
      funds: '$',
      progress: '30',
      rating: 2.1
    },
    {
      key    : '2',
      name   : 'Accion Foundation',
      funds: '$',
      address: 'London No. 1 Lake Park',
      progress: '50',
      rating: 2.5
    },
    {
      key    : '3',
      name   : 'Kuber Foundation',
      funds: '$',
      address: 'Sidney No. 1 Lake Park',
      progress: '30',
      rating: 1
    },
    {
      key    : '2',
      name   : 'Accion Foundation',
      funds: '$',
      address: 'London No. 1 Lake Park',
      progress: '50',
      rating: 4
    },
    {
      key    : '2',
      name   : 'Accion Foundation',
      funds: '$',
      address: 'London No. 1 Lake Park',
      progress: '50',
      rating: 3
    },
  ];

  // user-detail-table
  userTable = [
    {
      key    : '1',
      user_name   : 'John Brown',
      email: 'test@gmail.com',
      address: 'New York No. 1 Lake Park',
      fund   : '$200',
      goal_balence: 70
    },
    {
      key    : '2',
      user_name   : 'Jim Green',
      email: 'test@gmail.com',
      address: 'London No. 1 Lake Park',
      fund   : '$200',
      goal_balence: 70
    },
    {
      key    : '3',
      user_name   : 'Joe Black',
      email: 'test@gmail.com',
      address: 'Sidney No. 1 Lake Park',
      fund   : '$200',
      goal_balence: 70
    },
    {
      key    : '3',
      user_name   : 'Joe Black',
      email: 'test@gmail.com',
      address: 'Sidney No. 1 Lake Park',
      fund   : '$200',
      goal_balence: 70
    },
    {
      key    : '3',
      user_name   : 'Joe Black',
      email: 'test@gmail.com',
      address: 'Sidney No. 1 Lake Park',
      fund   : '$200',
      goal_balence: 70
    },
    {
      key    : '3',
      user_name   : 'Joe Black',
      email: 'test@gmail.com',
      address: 'Sidney No. 1 Lake Park',
      fund   : '$200',
      goal_balence: 70
    }
  ];
}

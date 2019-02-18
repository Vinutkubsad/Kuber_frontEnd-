import { Component, OnInit } from "@angular/core";
import { TemplateRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ServicesService } from "../services/charityServices.service";
import { NgForm } from "@angular/forms";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  // charityCount:Number;

  // public charityValue = [];
  checked = true;

  public searchString: string;

  public charityResult = [];

  constructor(private router: Router, private service: ServicesService) {}

  ngOnInit() {
    this.getCharityList();
  }

  getCharityList() {
    this.service.getCharityList().subscribe(response => {
      // console.log(response);
      this.charityResult = response["result"];
    });
  }

  
  onEdit(edit) {
    this.router.navigate(["updateCharity/", edit]);
  }

  refresh(){
    window.location.reload();
  }

  onDelete(_id: string, form: NgForm) {
    Swal.fire({
      title: "Are you sure?",
      type: "warning", 
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.service.deleteCharity(_id).subscribe(res => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.refresh();
        });
      }
    });
  }

  charityTable() {
    this.router.navigate(["charitytabels"]);
  }
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild("trigger") customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  // // Bar chart
  // public barChartOptions:any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType:string = 'bar';
  // public barChartLegend:boolean = true;

  // public barChartData:any[] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  // public randomize():void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
  // }

  // // Pai charts
  // public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData:number[] = [350, 450, 100];
  // public doughnutChartType:string = 'doughnut';

  // // Charity tables

  // onChange(value: string): void {
  //   console.log(value);
  // }

  // onSelect(suggestion: string): void {
  //   console.log(`onSelect ${suggestion}`);
  // }

  // user-detail-table
  userTable = [
    {
      key: "1",
      user_name: "John Brown",
      email: "test@gmail.com",
      address: "New York No. 1 Lake Park",
      fund: "$200",
      goal_balence: 70
    },
    {
      key: "2",
      user_name: "Jim Green",
      email: "test@gmail.com",
      address: "London No. 1 Lake Park",
      fund: "$200",
      goal_balence: 70
    },
    {
      key: "3",
      user_name: "Joe Black",
      email: "test@gmail.com",
      address: "Sidney No. 1 Lake Park",
      fund: "$200",
      goal_balence: 70
    },
    {
      key: "3",
      user_name: "Joe Black",
      email: "test@gmail.com",
      address: "Sidney No. 1 Lake Park",
      fund: "$200",
      goal_balence: 70
    },
    {
      key: "3",
      user_name: "Joe Black",
      email: "test@gmail.com",
      address: "Sidney No. 1 Lake Park",
      fund: "$200",
      goal_balence: 70
    },
    {
      key: "3",
      user_name: "Joe Black",
      email: "test@gmail.com",
      address: "Sidney No. 1 Lake Park",
      fund: "$200",
      goal_balence: 70
    }
  ];
}

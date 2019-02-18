import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicesService } from '../../services/charityServices.service'

@Component({
  selector: 'app-update-charity',
  templateUrl: './update-charity.component.html',
  styleUrls: ['./update-charity.component.css']
})
export class UpdateCharityComponent implements OnInit {

  constructor(private router: ActivatedRoute, private charityServices : ServicesService) { }

  ngOnInit() {
    this.router.params.subscribe((params:Params) =>{
      this.loadProject(params.id)
    })
  }
  loadProject(id) {
    var data = {}
  }

  // submitForm(form: NgForm) {
  //   if (this.validateForm.valid) {
  //     console.log("form Submited", this.validateForm.value);
  //     this.charityServices.postCharty(this.validateForm.value).subscribe((res) => {
  //       console.log(res);
  //       if (res) {
  //         swal("Succefully Added", "success");
  //         this.validateForm.reset();
  //       } else {
  //         swal("Something is missing", "Error");
  //       }
  //     });
  //   } else {
  //     swal("Please enter valid data", "Error");
  //   }
  // }

}

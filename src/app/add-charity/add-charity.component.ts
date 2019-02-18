import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { NzMessageService, UploadFile } from "ng-zorro-antd";
import { from } from "rxjs";
import { ServicesService } from "../services/charityServices.service";
import { Charity } from "./shared/charity.model";
import { NgForm } from "@angular/forms";
import swal from "sweetalert";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-charity",
  templateUrl: "./add-charity.component.html",
  styleUrls: ["./add-charity.component.css"]
})
export class AddCharityComponent implements OnInit {
  validateForm: FormGroup;

  previewImage = "";
  previewVisible = false;
  // public charity: Charity;

  fileList = [
    {
      uid: -1,
      name: "xxx.jpg",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ];

  constructor(
    private charityServices: ServicesService,
    private fb: FormBuilder,
    private msg: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resetForm();
    // this.refreshCharityList();
    this.validateForm = this.fb.group({
      charityName: [null, [Validators.required]],
      // email: [null, [Validators.email, Validators.required]],
      description: [null, [Validators.required]],
      address: [null, [Validators.required]],
      city: [null, [Validators.required]],
      zipcode: [null, [Validators.required]],
      state: [null, [Validators.required]]
    });
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.charityServices.slectedCharity = {
      _id: "",
      charityName: "",
      email: "",
      description: "",
      address: "",
      city: "",
      state: "",
      zipcode: null,
      suggested: false
    };
  }
  // refreshCharityList() {
  //   this.charityServices.getCharityList().subscribe((res) => {
  //     this.charityServices.charities = res as Charity[];
  //   });
  // }

  submitForm(form: NgForm) {
    if (this.validateForm.valid) {
      console.log("form Submited", this.validateForm.value);
      this.charityServices
        .postCharty(this.validateForm.value)
        .subscribe(res => {
          console.log(res);
          if (res) {
            swal("Succefully Added", "success");
            this.validateForm.reset();
          } else {
            swal("Something is missing", "Error");
          }
        });
    } else {
      swal("Please enter valid data", "Error");
    }
  }

  submitCharity() {
    console.log("click");
  }

  onClickView() {
    this.router.navigate(["/dashboard"]);
  }

  // image Upload
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
}

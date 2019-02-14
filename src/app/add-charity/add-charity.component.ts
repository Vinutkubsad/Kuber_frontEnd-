import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzMessageService, UploadFile } from "ng-zorro-antd";
import { from } from "rxjs";
import { ServicesService } from '../services/charityServices.service';
import { Charity } from './shared/charity.model';
import { NgForm } from '@angular/forms'
import swal from 'sweetalert';



@Component({
  selector: "app-add-charity",
  templateUrl: "./add-charity.component.html",
  styleUrls: ["./add-charity.component.css"]
})
export class AddCharityComponent implements OnInit {
  
  validateForm: FormGroup;

  previewImage = '';
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


  constructor( private charityServices : ServicesService, private fb: FormBuilder, private msg: NzMessageService) { }

  // public charityName: any;
  // public email: any;
  // public description : any;
  // public adress: any;
  // public city: any;
  // public state: any;
  // public zipCode: any;

  ngOnInit(): void {
    this.resetForm();
    // this.refreshCharityList();
    this.validateForm = this.fb.group({
      charityName: [null, [Validators.required]],
      // email: [null, [Validators.email, Validators.required]],
      description: [null, [Validators.required]],
      adress: [null, [Validators.required]],
      city: [null,[Validators.required]],
      pinCode: [null,[Validators.required]],
      state:[null,[Validators.required]],
    });
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.charityServices.slectedCharity = {
      _id:'',
      charityName:'',
      email:'',
      description:'', 
      adress:'',
      city:'',
      state:'',
      zipCode: null
    }
  }
  // refreshCharityList() {
  //   this.charityServices.getCharityList().subscribe((res) => {
  //     this.charityServices.charities = res as Charity[];
  //   });
  // }

  submitForm(form: NgForm ){
    if (this.validateForm.valid) {
      console.log("form Submited", this.validateForm.value);
      this.charityServices.postCharty(this.validateForm.value).subscribe((res) =>{
        console.log(res);
        if (res){
          swal("Succefully Added", "success");
          this.validateForm.reset();
        }else {
          swal("Something is missing", "Error");
        }
      });
    } else {
      swal("Please enter valid data", "Error");
    }
    // if (form.value._id == "") {
    //   this.charityServices.postCharty(form.value).subscribe((res) => {
    //     console.log(res);
    //     for (const i in this.validateForm.controls) {
    //       this.validateForm.controls[i].markAsDirty();
    //       this.validateForm.controls[i].updateValueAndValidity();
    //     }
    //     this.resetForm();
    //     // this.refreshCharityList();
    //     swal("Succefully Added", "success");
    //   });
    // }
    // else {
    //   swal("Something is missing", "Error");
    // } 
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };
  
  submitCharity() {
    console.log('click')
  }     

  // image Upload
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
}

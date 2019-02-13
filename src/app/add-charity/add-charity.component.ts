import { Component, OnInit } from "@angular/core";
import { Charity } from './shared/charity.model';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NzMessageService, UploadFile } from "ng-zorro-antd";
import { from } from "rxjs";
import { ServicesService } from '.././services/services.service';


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


  constructor(private service : ServicesService, private fb: FormBuilder, private msg: NzMessageService) {}
  public charityName: any;
  public email: any;
  public description : any;
  public adress: any;
  public city: any;
  public state: any;
  public zipCode: any;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.submitCharity();
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

  ngOnInit(): void {
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
  submitCharity() {
    console.log('click')
    var data={
      "charityName":this.charityName,
      "description":this.description,
      "address":this.adress,
      "city":this.city,
      "state":this.state,
      "zipcode":this.zipCode,
      // "charitylogo":this.charitylogo
    }
    this.service.addCharty(data).subscribe((Response)=>{
      console.log(Response);
      this.charityName=null;
      this.city=null;
      this.adress=null;
      this.state=null;
      this.zipCode=null;
      this.description=null;
      // this.charitylogo=null;
    });
    alert('addes succefully');
  }     

  // image Upload
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
}

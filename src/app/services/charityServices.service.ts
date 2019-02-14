import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


import { Charity } from '../add-charity/shared/charity.model'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  slectedCharity: Charity;
  charities: Charity[];

  constructor(private http:HttpClient,private router:Router) { }

  getCharityList(){
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_URL;
    return this.http.get(url).map((data) => {return data})
  }

  postCharty(data: Charity){
    let url = AppSettings.BASE_URL + AppSettings.Add_CHARITY_URL;
    return this.http.post(url,data)
  }
}




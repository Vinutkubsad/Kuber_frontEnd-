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

  constructor(private http:HttpClient,private router:Router) { }

  public charityList(){
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_URL;
    return this.http.get(url).map((data) => {return data})
  }

  public addCharty(data){
    let url = AppSettings.BASE_URL + AppSettings.Add_CHARITY_URL;
    return this.http.post(url,data)
  }
}




import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router,
    public gs: GlobalService,
  ) {}
  
  id: string = "";
  password: string = "";
  age: any = 22;
  postObj: any = {"myname": "kawakami yuta", "age": 23};
  post: any = {}

  birthday = (e: any) => {
    this.age = this.age + 1;
    console.log(this.age);
    console.log(e.timeStamp);
  }
  setStorage = () => {
    localStorage.box = "事前研修がんばれ〜！"
  }
  getStorage = () => {
    console.log(localStorage.box)
  }

  navigate = () => {
    console.log(this.id)
    console.log(this.password)
  }

  getOtherPage = () => {
    this.router.navigate(['/tabs', 'tab2'])
  }

  login = () => {
    this.post["password"] = "yy";
    const body = this.post;
    this.gs.http("https://techfusion-studio.com/safire/login/yy/login", body).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}

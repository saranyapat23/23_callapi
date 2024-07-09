import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
users : any = [ ];
isloading = false;
  constructor() {
    this.getdata();
  }

  async getdata(){
    this.isloading = true
    const _users = await
     fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
      
      this.isloading = false;
      this.users = _users;
      console.log(this.isloading);
  }

}

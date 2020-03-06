import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  name: string;
  lastname: string;
  detail: string;

  customers: any;


  constructor() { }

  ngOnInit()  {
    this.loaddata();
  }

  delete_data(id: any) {
    console.log(id);
    axios.get('http://localhost/ionicserver/delete_profile.php?id=' + id)
    .then(() => {
      console.log("ลบข้อมูลเรียบร้อย");
      this.loaddata();
    });
  }

  loaddata() {
    axios.get('http://localhost/ionicserver/get_customer.php').then((response) => {
      //handle success
        console.log(response.data);

          this.customers = response.data;
        // this.name = response.data[1].name;
        // this.lastname = response.data[1].lastname;
        // this.detail = response.data[1].detail;
        
      })
      .catch((error) => {
        // handle error
          console.log(error);
      })
      .then(() => {
        //always executed
      });
  }
}


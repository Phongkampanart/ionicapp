import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  id:string;
  name: string;
  lastname: string;
  address: string;
  tel: string;

  input_id: string;
  input_name: string;
  input_lastname: string;
  input_address: string;
  input_tel: string;

  constructor() { }

  ngOnInit()  {
    axios.get('http://localhost/ionicserver/get_customer.php').then((response) => {
      //handle success
        console.log(response.data);
        this.id = response.data[0].id;
        this.name = response.data[0].name;
        this.lastname = response.data[0].lastname;
        this.address = response.data[0].address;
        this.tel = response.data[0].tel;

      })
      .catch((error) => {
        // handle error
          console.log(error);
      })
      .then(() => {
        //always executed
      });
  }

  register(){
    console.log('input_id: ' + this.input_id);
    console.log('input_name: ' + this.input_name);
    console.log('input_lastname: ' + this.input_lastname);
    console.log('input_address: ' + this.input_address);
    console.log('input_tel: ' + this.input_tel);

    axios.post('http://localhost/ionicserver/get_customer.php',{
      id: this.input_id,
      name: this.input_name,
      lastname: this.input_lastname,
      address: this.input_address,
    }).then((response) => {
      console.log(response);
      this.input_id = '';
      this.input_name = '';
      this.input_lastname = '';
      this.input_address = '';
      this.input_tel = '';
    }).catch((error) => {
      console.log(error);
    });

    
  }

}
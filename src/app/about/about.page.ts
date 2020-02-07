import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  name: string;
  lastname: string;
  detail: string;

  constructor() { }

  ngOnInit() {
    axios.get('http://localhost/ionicserver/get_profiles.php').then((response) => {
      //handle success
        console.log(response.data);
        this.name = response.data[1].name;
        this.lastname = response.data[1].lastname;
        this.detail = response.data[1].detail;
        
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

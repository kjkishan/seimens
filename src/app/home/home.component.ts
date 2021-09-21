import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
  }
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  success(pos:any) {
    var crd = pos.coords;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
 error(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  
  











  


}

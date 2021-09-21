import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './mapstyles';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'google-maps';

  private map: any;
  location:any;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if(navigator.geolocation){
      this.updateMap();
    }else{
      this.showSnackbarTopPosition("Geolocation not supported");
    }
  }
  updateMap(){
    let loader = new Loader({
      apiKey: 'AIzaSyCzKwt_AHe2VaaAY-FGqbeAX869Sx5wwUs'
    })
    navigator.geolocation.getCurrentPosition((position: any)=>{
    loader.load().then(() => {
        console.log('loaded gmaps')
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.location = { lat: position.coords.latitude, lng: 	position.coords.longitude }
      const x:any = document.getElementById("map");
      this.map = new google.maps.Map(x, {
        center: this.location,
        zoom: 12,
        styles: styles
      })
      const marker = new google.maps.Marker({
        position: this.location,
        map: this.map,
      });
    })
  });
  }
  zoomIn(){
    this.map.zoom = this.map.zoom + 1;
    console.log(this.map);
  }
  zoomOut(){
    this.map.zoom = this.map.zoom - 1;
    console.log(this.map);
  }

  showSnackbarTopPosition(x:string) {
    this.snackBar.open(x, "close", {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

}

// proper way to get permession:

// function handlePermission() {
//   navigator.permissions.query({name:'geolocation'}).then(function(result) {
//     if (result.state == 'granted') {
     
//     } else if (result.state == 'prompt') {
     
      
//     } else if (result.state == 'denied') {
      
//     }
//   });
// }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild("map") mapRef: ElementRef;

  map: google.maps.Map;
  center = new google.maps.LatLng(0, 0);
  coordinates: Position;

  constructor() { }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: this.center,
      zoom: 15
    });
  }

  ngOnInit(): void {
    this.initMap();
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.goPosition();
  }

  goPosition() {
    this.center = new google.maps.LatLng(this.coordinates.coords.latitude, this.coordinates.coords.longitude);
    this.map.setCenter(this.center);
    this.map.setZoom(18);

    new google.maps.Marker({
      position: this.center,
      map: this.map,
      title: "Hello World!",
      animation: google.maps.Animation.DROP
    });
  }

}

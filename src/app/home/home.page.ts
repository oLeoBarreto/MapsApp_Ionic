import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild("map") mapRef: ElementRef;

  map: google.maps.Map;
  center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

  constructor() { }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: this.center,
      zoom: 8
    });
  }

  ngOnInit(): void {
      this.initMap();
  }

}

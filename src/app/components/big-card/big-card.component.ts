import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string ="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  @Input()
  cardTitle: string =""
  @Input()
  cardDescription: string =""
  constructor() { }

  ngOnInit(): void {
  }

}

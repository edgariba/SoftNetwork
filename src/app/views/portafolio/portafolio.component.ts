import { Component, OnInit, Renderer2 } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'black');
   }

  ngOnInit(): void {
    document.getElementById('nav-home-tab').click();
    $("#nav-home-tab")[0].click();
  }

}

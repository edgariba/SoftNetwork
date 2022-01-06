import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-telecomunicaciones',
  templateUrl: './telecomunicaciones.component.html',
  styleUrls: ['./telecomunicaciones.component.scss']
})
export class TelecomunicacionesComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnInit(): void {
  }

}

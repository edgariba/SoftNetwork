import { Component, OnInit, Renderer2 } from '@angular/core';
import * as ScrollMagic from 'ScrollMagic';

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
    this.playVideo()
    this.addAnimations()
  }

  playVideo() {
    let audioPlayer = <HTMLVideoElement>document.getElementById('background-video');
    audioPlayer.muted = true
  }

  addAnimations(){
    var controller = new ScrollMagic.Controller();
    var revealElements = document.getElementsByClassName("digit");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addTo(controller);
    }
  }
}

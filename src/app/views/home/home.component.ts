import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var particlesJS: any;
import * as ScrollMagic from 'ScrollMagic';
import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  images: any[] = ["./assets/img/softnet/redes.jpg", "./assets/img/softnet/software.jpg"]
  @ViewChild("imageInit") imageInit: ElementRef;
  timer = null
  indice = 0

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
      //console.log('callback - particles.js config loaded');
    });
    var that = this
    this.timer = setInterval(() => {
      this.indice++
      if (that.images.length == this.indice) {
        this.indice = 0
      }
      //that.imageInit.nativeElement.classList.remove('animate__animated');
      /*  that.imageInit.nativeElement.classList.remove('animate__slideInUp');
       that.imageInit.nativeElement.classList = 'animate__slideInUp';
       that.imageInit.nativeElement.src = that.images[i]; */
    }, 3000);
    this.addAnimations()
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
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

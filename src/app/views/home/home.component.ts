import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var particlesJS: any;
import * as ScrollMagic from 'ScrollMagic';
import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
declare var $: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  imgs = new Array();
  images: any[] = ["./assets/img/softnet/redes.jpg", "./assets/img/softnet/software.jpg"]
  @ViewChild("imageInit") imageInit: ElementRef;
  timer = null
  indice = 0

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnInit(): void {
    this.pload(
      "../../../assets/img/tecmhi/pexels-cottonbro-5473298.jpg",
      "../../../assets/img/tecmhi/network.jpg")
    particlesJS.load('particles-js', 'assets/particles.json', function () {
      //console.log('callback - particles.js config loaded');
    });
    var that = this
    this.timer = setInterval(() => {
      this.indice++
      //$('.masthead').css('background-image','url(./assets/img/tecmhi/network.jpg)');
      if (that.images.length == this.indice) {
        this.indice = 0
        //$('.masthead').css('background-image','url(./assets/img/tecmhi/pexels-cottonbro-5473298.jpg)');
      }
    }, 3000);
    this.addAnimations()
  }

  pload(...args: any[]): void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


  addAnimations() {
    var controller = new ScrollMagic.Controller();
    var revealElements = document.getElementsByClassName("digit");
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
      new ScrollMagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50,												 // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        .addTo(controller);
    }

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      triggerHook: 0.9,
      duration: "70%",
      offset: 10
    })
      .setClassToggle("#revealbox1", "visible")
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      triggerHook: 0.9,
      duration: "70%",
      offset: 10
    })
      .setClassToggle("#revealbox2", "visible")
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      triggerHook: 0.9,
      duration: "70%",
      offset: 10
    })
      .setClassToggle("#revealbox3", "visible")
      .addTo(controller);
  }

}

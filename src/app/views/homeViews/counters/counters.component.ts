import { Component, OnInit } from '@angular/core';
import * as ScrollMagic from 'ScrollMagic';
import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

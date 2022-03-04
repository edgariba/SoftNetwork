import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var particlesJS: any;
declare var $: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  imgs = new Array();
  images: any[] = ["./assets/img/softnet/redes.jpg", "./assets/img/softnet/software.jpg"]
  @ViewChild("imageInit") imageInit: ElementRef;
  timer = null
  indice = 0

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }
  ngAfterViewInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
      //console.log('callback - particles.js config loaded');
    });
  }

  ngOnInit(): void {
    var that = this
    this.timer = setInterval(() => {
      this.indice++
      if (that.images.length == this.indice) {
        this.indice = 0
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

}

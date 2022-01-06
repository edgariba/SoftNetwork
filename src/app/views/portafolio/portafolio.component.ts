import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  portafolioDev: Portafolio[] = [
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupPanel.JPG", subtitle: "", title: "Libup Panel de administración" }
  ]

  portafolioRedes: Portafolio[] = [
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web" },
    { image: "./assets/img/portafolio/dev/LibupPanel.JPG", subtitle: "", title: "Libup Panel de administración" }
  ]
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'black');
  }

  ngOnInit(): void {
    document.getElementById('nav-home-tab').click();
    $("#nav-home-tab")[0].click();
    this.playVideo()
  }

  playVideo(){

    let audioPlayer = <HTMLVideoElement>document.getElementById('background-video');
    audioPlayer.play()
  }
}

export interface Portafolio {
  image: any,
  subtitle: string,
  title: string,
}
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  portafolioDev: Portafolio[] = [
    { image: "./assets/img/portafolio/dev/experco.PNG", subtitle: "", title: "Experco", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/miMenuExperco.png", subtitle: "", title: "Mi Menú Experco", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/feuh.PNG", subtitle: "", title: "FEUH Envios", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/g2030.PNG", subtitle: "", title: "G2030 Monitoreo sustentable", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/g2030App.png", subtitle: "", title: "G2030 Monitoreo sustentable", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/LibupPanel.JPG", subtitle: "", title: "Libup Panel", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/LibupMx.JPG", subtitle: "", title: "Libup Web", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/AppLibup.png", subtitle: "", title: "App Ponte Oreja", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Caisa.JPG", subtitle: "", title: "Sade Caisa", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/TalkDoc.JPG", subtitle: "", title: "Talk Doc", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Mantenme.JPG", subtitle: "", title: "MNTNM", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/reiko.JPG", subtitle: "", title: "Reiko Rentas y construcciones", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Ferretianguis.JPG", subtitle: "", title: "Ferretianguis", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Pincello.JPG", subtitle: "", title: "Pincello", skills: ['FrontEnd'], ruta: '' },    
    { image: "./assets/img/portafolio/dev/Unity.JPG", subtitle: "", title: "MAPA WTC CDMX", skills: ['FrontEnd'], ruta: '' },    
  ]

  portafolioRedes: Portafolio[] = [
  ]
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'black');
  }

  ngOnInit(): void {
    document.getElementById('nav-home-tab').click();
    $("#nav-home-tab")[0].click();
    this.playVideo()
  }

  playVideo() {
    let audioPlayer = <HTMLVideoElement>document.getElementById('background-video');
    audioPlayer.muted = true
  }
}

export interface Portafolio {
  image: any,
  subtitle: string,
  title: string,
  skills: string[],
  ruta: string
}
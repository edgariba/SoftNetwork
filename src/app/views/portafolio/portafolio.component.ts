import { Component, OnInit, Renderer2 } from '@angular/core';
import * as ScrollMagic from 'ScrollMagic';
declare var $: any

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  portafolioDev: Portafolio[] = [
    { image: "./assets/img/portafolio/dev/g2030.PNG", subtitle: "Sistema de Información basado en censado de datos agrícolas en el Estado de Querétaro (SEJUVE).", title: "G2030 Monitoreo sustentable", skills: ['FrontEnd', 'Angular', 'Api'], ruta: '' },
    { image: "./assets/img/portafolio/dev/g2030App.png", subtitle: "Esta aplicación ayuda en la adquisición de datos de los dispositivos G2030, los cuales están colocados en los huertos comunitarios construidos por las y los voluntarios del programa Generación 2030 de la Secretaría de la Juventud del Estado de Querétaro.", title: "G2030 Monitoreo sustentable", skills: ['Android', 'Hardware', 'Arduino'], ruta: '' },
    { image: "./assets/img/portafolio/dev/experco.PNG", subtitle: "Sistema web para el control de hoteles, (Valet Parking, Encuestas de satisfacción, Pedidos al restaurante, Venta de Souvenirs). ", title: "Experco", skills: ['FrontEnd', 'Angular', 'Códigos QR', 'Api'], ruta: '' },
    { image: "./assets/img/portafolio/dev/miMenuExperco.png", subtitle: "Sitio web totalmente responsivo para los clientes de Experco, se utiliza para realizar estas acciones: (Pedir vehiculo, Conar encuestas, Pedidos al restaurante, Compra de Souvenirs)", title: "Mi Menú Experco", skills: ['FrontEnd', 'Ionic', 'Códigos QR'], ruta: '' },
    { image: "./assets/img/portafolio/dev/feuh.PNG", subtitle: "Sistema web para servicios de mensajería express.", title: "FEUH Envios", skills: ['FrontEnd', 'Angular'], ruta: '' },
    { image: "./assets/img/portafolio/dev/LibupPanel.JPG", subtitle: "Sistema web para otorgar premios o recompensas a usuarios mediante la asociación con distintas radiodifusoras.", title: "Libup Panel", skills: ['FrontEnd', 'Angular', 'Api'], ruta: '' },    
    { image: "./assets/img/portafolio/dev/Caisa.JPG", subtitle: "Esta aplicación sirve para leer, consultar e interactúar, con miles de documentos de todos los sectores Industriales y/o específico al que perteneces, necesarios para el buen desempeño de las personas y funcionamiento de las organizaciones.", title: "Sade Caisa", skills: ['FrontEnd', 'Ionic'], ruta: '' },
    { image: "./assets/img/portafolio/dev/TalkDoc.JPG", subtitle: "Aplicación móvil que ayuda a los pacientes a conectarse con médicos especialistas certificados y obtener una consulta médica mediante una videollamada o un mensaje, pagando una subscripción.", title: "Talk Doc", skills: ['FrontEnd', 'Ionic'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Mantenme.JPG", subtitle: "Aplicación móvil para el control y seguimiento de servicios preventivos de vehículos.", title: "MNTNM", skills: ['FrontEnd', 'Ionic'], ruta: '' },
    { image: "./assets/img/portafolio/dev/reiko.JPG", subtitle: "Página web para atraer clientes a la constructora y verificar sus precios en la renta de equipo.", title: "Reiko Rentas y construcciones", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Ferretianguis.JPG", subtitle: "Sistema web para el control inventario y venta de la empresa", title: "Ferretianguis", skills: ['FrontEnd', 'Angular'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Pincello.JPG", subtitle: "Sistema web para el control de alumnos, calificaciones, examenes.", title: "Pincello", skills: ['FrontEnd', 'Angular'], ruta: '' },
    { image: "./assets/img/portafolio/dev/Unity.JPG", subtitle: "Mapa para guiar a un usuario dentro de una expocisión con recorridos guiados.", title: "MAPA WTC CDMX", skills: ['FrontEnd', 'Unity', 'Api'], ruta: '' },
  ]

  portafolioRedes: Portafolio[] = [
    { image: "./assets/img/portafolio/tele/Rack.png", subtitle: "Proyecto de cableado estructurado ya terminado organización, peinado, remate de terminales, identificación de cableado, etiquetado y pruebas escaneo de nodos para certificación.", title: "", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/tele/switch.png", subtitle: "Instalación de cableado estructurado categoría 7A equipo activo y envió de servicios a las áreas de trabajo.", title: "", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/tele/Grandstream.png", subtitle: "Implementación y administración de sistema de telefonía grandstream para servicios en call center,", title: "", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/tele/meraki.png", subtitle: "Instalacion y configuración de red WiFi con un sistema centralizado desde la plataforma de cisco meraki.", title: "", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/tele/Meraki1.png", subtitle: "", title: "", skills: ['FrontEnd'], ruta: '' },  
    { image: "./assets/img/portafolio/tele/ap.png", subtitle: "Instalación y canalización de antena WiFi con cobertura amplia. Administración y monitoreo desde la nube de Unifi Networks.", title: "", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/tele/videovigilancia.png", subtitle: "Sistema de monitoreo para varias empresas implementando un DVR hibrido (analógico e IP ), administrado desde la nube por p2p, con políticas de seguridad con forme a la necesidad del cliente.", title: "", skills: ['FrontEnd'], ruta: '' },
    { image: "./assets/img/portafolio/tele/Zkteko.png", subtitle: "Sistema de control de acceso para administración de personal de gasolinera G500, autorización y restricción de personal a distintas áreas.", title: "", skills: ['FrontEnd'], ruta: '' },    
  ]
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'black');
  }

  ngOnInit(): void {
    document.getElementById('nav-home-tab').click();
    $("#nav-home-tab")[0].click();
    this.playVideo()
    this.addAnimations()
  }

  playVideo() {
    let audioPlayer = <HTMLVideoElement>document.getElementById('background-video');
    audioPlayer.muted = true
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
  }
}

export interface Portafolio {
  image: any,
  subtitle: string,
  title: string,
  skills: string[],
  ruta: string
}
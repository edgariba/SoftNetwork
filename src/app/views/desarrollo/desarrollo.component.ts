import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.scss']
})
export class DesarrolloComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnInit(): void {
    this.playVideo()
  }

  playVideo() {
    let audioPlayer = <HTMLVideoElement>document.getElementById('background-video');
    audioPlayer.muted = true
  }
}

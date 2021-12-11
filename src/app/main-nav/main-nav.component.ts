import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  @ViewChild('home', { read: ElementRef, static: false }) homeData: ElementRef;
  constructor(private router: Router) { }

  ngOnInit() {
    $('#logoColor').css('display', 'none');
    $(document).on("scroll", function () {

      if ($(document).scrollTop() > 30) {
        $("#banner").addClass("nav_color");
        $('#logoBlanco').css('display', 'none');
        $('#logoColor').css('display', 'block');
      }
      else {
        $("#banner").removeClass("nav_color");
        $('#logoBlanco').css('display', 'block');
        $('#logoColor').css('display', 'none');
      }
    });

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });

  }

  closeMenu() {
    document.getElementById('menus').click();
  }

  removeClass() {
    //this.homeData.nativeElement.classList.remove('link_active')
  }

  getCurrentRoute(){    
    var ruta = this.router.url
    if(ruta.startsWith('/soluciones')){
      return true
    } else{
      return false
    }
  }

  addClassActive() {
    this.homeData.nativeElement.classList.add('link_active')
  }

}

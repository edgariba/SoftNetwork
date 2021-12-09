import {
  Component,
  Input,
  OnDestroy,
  Inject,
  ViewEncapsulation
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-spinner',
  template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">        
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
        <img style="text-align: center !important; padding-top: 45px; max-width: 18rem;"  src="./assets/img/logo/logo_tecmi.png" id="logo" class="light-logo img-fluid ">
    </div>`,
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
  public isSpinnerVisible = true;

  @Input()
  public backgroundColor = 'rgb(249,239,211)';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
          document.body.style.overflow = 'hidden';
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.closeSpinner()
        }
      },
      () => {
        this.closeSpinner()
      }
    );
  }

  ngOnDestroy(): void {
    this.closeSpinner()
  }

  closeSpinner(){
    var that = this
    setTimeout(function(){
      that.isSpinnerVisible = false;
      document.body.style.overflow = 'scroll';
    },500);
  }
}

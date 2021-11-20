
import { Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'loading',
	template: `		<div class="preloader" id="pause">

	<div class="spinner">
  <div class="cube1"></div>
  <div class="cube2"></div>
</div>
	<img src="assets/img/cisco.svg" id="logo" class="light-logo img-fluid parpadea logo">
</div>`,
	styleUrls: ['loading.scss']
})

export class LoadingComponent {

}

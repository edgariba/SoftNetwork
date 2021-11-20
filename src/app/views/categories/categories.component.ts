import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatWithActivities } from 'src/app/classes/interfaces';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  catWithActivities: CatWithActivities[] = []
  isLoading: boolean = false;
  constructor(private categoriesService: CategoriesService, private comonAlerts: CommonAlertsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllCategoriesWithImages()
  }

  getAllCategoriesWithImages(){
    this.loadSpinner()
    this.categoriesService.getAllCategoriesWithImages().subscribe(
      (response) => {
        if (response.header.code == 200){          
          this.catWithActivities = response.data
        } else{
          this.comonAlerts.showWarnning(response.header.message)
        }
        this.terminateSpinner()
      }, (error) => {
        this.comonAlerts.showToastError(error)
        this.terminateSpinner()
      } 
    )
  }

  addNumberData(numero: any){
    if(numero > 0 && numero < 10){
      return "0" + numero;
    } else{
      return numero;
    }
  }
  
  showActivity(item: any){
    this.router.navigate(['/categories/activity/'+ item.hash_activity])
  }

  loadSpinner(): void {
    this.isLoading = true;
  }

  terminateSpinner(): void {
    setTimeout(() => this.isLoading = false, 500);
  }
}

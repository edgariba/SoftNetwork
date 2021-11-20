import { Component, OnInit } from '@angular/core';
import { LeaderboardGeneral } from 'src/app/classes/interfaces';
import { CommonAlertsService } from 'src/app/services/common/common-alerts.service';
import { CommonService } from 'src/app/services/common/common.service';
import { LeaderbordService } from 'src/app/services/leaderbord/leaderbord.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  leaderboardMain: LeaderboardGeneral[] = [];
  leaderboardSecondary: LeaderboardGeneral[] = [];

  constructor(
    private leaderboardService: LeaderbordService, 
    private comonAlerts: CommonAlertsService,
    private apiConfig: CommonService
  ) { }

  ngOnInit(): void {
    this.getLeaderboard();
  }

  splitLeaderboard(leaderboardArray){
    /* leaderboardArray.forEach(element => {
        element.medals.forEach(medal => {
            console.log(medal);
        });
    }); */
    this.leaderboardMain = leaderboardArray.splice(0, 3);
    this.leaderboardSecondary = leaderboardArray.splice(0);
  }

  getLeaderboard(){
    var test = [
      {
          "country": {
              "id_country": 1,
              "country": "México",
              "hash_country": "9e8f-2bd19d2b9432",
              "image": "mx.svg",
              "is_active": 1
          },
          "points": 15,
          "medals": [
              {
                  "winners": 5,
                  "type": "oro"
              },
              {
                  "winners": 0,
                  "type": "plata"
              },
              {
                  "winners": 0,
                  "type": "bronce"
              }
          ]
      },
      {
          "country": {
              "id_country": 2,
              "country": "Usa",
              "hash_country": "9726-baa58f7dbfd3",
              "image": "us.svg",
              "is_active": 1
          },
          "points": 2,
          "medals": [
              {
                  "winners": 0,
                  "type": "oro"
              },
              {
                  "winners": 1,
                  "type": "plata"
              },
              {
                  "winners": 0,
                  "type": "bronce"
              }
          ]
      },
      {
          "country": {
              "id_country": 2,
              "country": "India",
              "hash_country": "9726-baa58f7dbfd3",
              "image": "in.svg",
              "is_active": 1
          },
          "points": 2,
          "medals": [
              {
                  "winners": 0,
                  "type": "oro"
              },
              {
                  "winners": 1,
                  "type": "plata"
              },
              {
                  "winners": 0,
                  "type": "bronce"
              }
          ]
      },
      {
          "country": {
              "id_country": 2,
              "country": "India",
              "hash_country": "9726-baa58f7dbfd3",
              "image": "in.svg",
              "is_active": 1
          },
          "points": 2,
          "medals": [
              {
                  "winners": 0,
                  "type": "oro"
              },
              {
                  "winners": 1,
                  "type": "plata"
              },
              {
                  "winners": 0,
                  "type": "bronce"
              }
          ]
      },
      {
          "country": {
              "id_country": 2,
              "country": "Usa",
              "hash_country": "9726-baa58f7dbfd3",
              "image": "us.svg",
              "is_active": 1
          },
          "points": 2,
          "medals": [
              {
                  "winners": 0,
                  "type": "oro"
              },
              {
                  "winners": 1,
                  "type": "plata"
              },
              {
                  "winners": 0,
                  "type": "bronce"
              }
          ]
      },
      {
          "country": {
              "id_country": 2,
              "country": "Usa",
              "hash_country": "9726-baa58f7dbfd3",
              "image": "us.svg",
              "is_active": 1
          },
          "points": 2,
          "medals": [
              {
                  "winners": 0,
                  "type": "oro"
              },
              {
                  "winners": 0,
                  "type": "plata"
              },
              {
                  "winners": 1,
                  "type": "bronce"
              }
          ]
      },
      {
          "country": {
              "id_country": 2,
              "country": "Usa",
              "hash_country": "9726-baa58f7dbfd3",
              "image": "mx.svg",
              "is_active": 1
          },
          "points": 2,
          "medals": [
              {
                  "winners": 0,
                  "type": "oro"
              },
              {
                  "winners": 0,
                  "type": "plata"
              },
              {
                  "winners": 0,
                  "type": "bronce"
              }
          ]
      }
  ]
    this.leaderboardService.getLeaderboard().subscribe(
      (response) => {
        if (response.header.code == 200){
          if(response.data.length > 3){
          //if(test.length > 3){
            this.splitLeaderboard(response.data);
            //this.splitLeaderboard(test);
          } else {
            this.leaderboardMain = response.data;
          }
        } else{
          this.comonAlerts.showWarnning(response.header.message)
        }
      }, (error) => {
        this.comonAlerts.showToastError(error)
      } 
    )
  }

}

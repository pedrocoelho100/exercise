import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  userId;
  userData;
  hasDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { 
    this.route.queryParams.subscribe((params) => {
      console.log(params)      
      var Id = params.id;
      this.httpClient.get('https://jsonplaceholder.typicode.com/users/' + Id).subscribe((response:any) => {
        this.userData = response;
        this.hasDataLoaded = true;
      });
    })
  }

  chartData = [
    {
      'name': 'Germany',
      'series': [
        {
          'name': '2010',
          'value': 40632,
          'extra': {
            'code': 'de'
          }
        },
        {
          'name': '2000',
          'value': 36953,
          'extra': {
            'code': 'de'
          }
        },
        {
          'name': '1990',
          'value': 31476,
          'extra': {
            'code': 'de'
          }
        }
      ]
    },
    {
      'name': 'United States',
      'series': [
        {
          'name': '2010',
          'value': 0,
          'extra': {
            'code': 'us'
          }
        },
        {
          'name': '2000',
          'value': 45986,
          'extra': {
            'code': 'us'
          }
        },
        {
          'name': '1990',
          'value': 37060,
          'extra': {
            'code': 'us'
          }
        }
      ]
    },
    {
      'name': 'France',
      'series': [
        {
          'name': '2010',
          'value': 36745,
          'extra': {
            'code': 'fr'
          }
        },
        {
          'name': '2000',
          'value': 34774,
          'extra': {
            'code': 'fr'
          }
        },
        {
          'name': '1990',
          'value': 29476,
          'extra': {
            'code': 'fr'
          }
        }
      ]
    },
    {
      'name': 'United Kingdom',
      'series': [
        {
          'name': '2010',
          'value': 36240,
          'extra': {
            'code': 'uk'
          }
        },
        {
          'name': '2000',
          'value': 32543,
          'extra': {
            'code': 'uk'
          }
        },
        {
          'name': '1990',
          'value': 26424,
          'extra': {
            'code': 'uk'
          }
        }
      ]
    }
  ];

  ngOnInit() {
  }

}
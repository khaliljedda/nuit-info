import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   list = [{id : 1,
            title : 'financial',
            text : 'des probléme rencontrés au cours de l\'ètude',
           image:'/assets/img/financial.jpg'},

            {id :2,
              title : 'Sociale',
              text : 'des problémes rencontrés dans la societés',
              image:'/assets/img/socialejpg.jpg'},
              {id : 3,
                title : 'familiale',
                text : 'des problémes rencontrés dans la famille',
                image:'/assets/img/familiale.jpg'}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}

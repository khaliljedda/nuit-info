import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   list = [{id : 1,
            title : 'happy',
            text : 'to be happy'},
            {id :2,
              title : 'hapdfghpy',
              text : 'to be happy'},
              {id : 3,
                title : 'dfggfb',
                text : 'to be dfbndfgbf'}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}

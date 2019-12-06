import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postes=[
    {tilte:"j'ai besoins d'aide",
    Description:"pour plus d'aide et de solution vous-pouvez d'entrer l'un des axes ci-dessus",}
  ]

  constructor() { }

  ngOnInit() {
  }

}

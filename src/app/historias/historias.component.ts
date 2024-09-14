import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss'],
})
export class HistoriasComponent  implements OnInit {

  stories = [
    { title: 'User 1', image: 'https://via.placeholder.com/80' },
    { title: 'User 2', image: 'https://via.placeholder.com/80' },
    { title: 'User 3', image: 'https://via.placeholder.com/80' },
    { title: 'User 4', image: 'https://via.placeholder.com/80' },
    { title: 'User 5', image: 'https://via.placeholder.com/80' },
  ];

  constructor() { }

  ngOnInit() {  
    console.log('HistoriasComponent initialized');
  }

}

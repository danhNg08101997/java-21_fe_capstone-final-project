import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  // START SCLICK CAROUSEL
  slides = [
    {
      img: 'https://nb.scene7.com/is/image/NB/mt31590gym_nb_40_i?$pdpflexf2$&wid=928&hei=928',
    },
    {
      img: 'https://nb.scene7.com/is/image/NB/mp31595ack_nb_40_i?$pdpflexf2$&wid=928&hei=928',
    },
    {
      img: 'https://nb.scene7.com/is/image/NB/mt31591gym_nb_40_i?$pdpflexf2$&wid=928&hei=928',
    },
    {
      img: 'https://nb.scene7.com/is/image/NB/bb550lsa_nb_02_i?$pdpflexf2$&wid=928&hei=928',
    },
    {
      img: 'https://nb.scene7.com/is/image/NB/mp03558ag_nb_70_i?$pdpflexf2$&wid=928&hei=928',
    },
    {
      img: 'https://nb.scene7.com/is/image/NB/ms31594gym_nb_40_i?$pdpflexf2$&wid=928&hei=928',
    },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button class='arrow-prev'></button>",
    nextArrow: "<button class='arrow-next'></button>",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
  };
  // END SCLICK CAROUSEL
}

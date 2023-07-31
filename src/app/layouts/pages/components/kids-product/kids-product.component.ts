import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-product',
  templateUrl: './kids-product.component.html',
  styleUrls: ['./kids-product.component.css'],
})
export class KidsProductComponent implements OnInit {
  slides = [
    {
      name: 'Fresh Foam X 880v12',
      img: 'https://nb.scene7.com/is/image/NB/gp880g12_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$89.99',
      sex: "Kid's",
    },
    {
      name: 'DynaSoft Reveal v4 BOA',
      img: 'https://nb.scene7.com/is/image/NB/gtrvlbk4_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$74.99',
      sex: "Kid's",
    },
    {
      name: 'PLAYGRUV v2 Bungee',
      img: 'https://nb.scene7.com/is/image/NB/ptpgrvaa_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$61.99',
      sex: "Kid's",
    },
    {
      name: '550',
      img: 'https://nb.scene7.com/is/image/NB/gsb550nb_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$94.99',
      sex: "Kid's",
    },
    {
      name: 'FuelCell 990v6',
      img: 'https://nb.scene7.com/is/image/NB/gc990gl6_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$129.99',
      sex: "Kid's",
    },
    {
      name: '574 NEW-B Hook & Loop',
      img: 'https://nb.scene7.com/is/image/NB/nw574nv_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$54.99',
      sex: "Kid's",
    },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button class='arrow-prev'></button>",
    nextArrow: "<button class='arrow-next'></button>",
    centerMode: true,
    infinite: true,
    standalone:true
  };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.css'],
})
export class WomenProductComponent implements OnInit {
  slides = [
    {
      name: 'Fresh Foam X 880v13',
      img: 'https://nb.scene7.com/is/image/NB/w880c13_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$139.99',
      sex: "Women's",
    },
    {
      name: 'FuelCell Propel v4',
      img: 'https://nb.scene7.com/is/image/NB/wfcprlg4_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$109.99',
      sex: "Women's",
    },
    {
      name: 'Klutch x NB Pre Game Chill T-Shirt',
      img: 'https://nb.scene7.com/is/image/NB/wb31590gym_nb_40_i?$pdpflexf2$&wid=928&hei=928',
      price: '$39.99',
      sex: "Men's",
    },
    {
      name: 'Klutch x NB Unleash Training Short',
      img: 'https://nb.scene7.com/is/image/NB/ws31594ttm_nb_40_i?$pdpflexf2$&wid=928&hei=928',
      price: '$119.99',
      sex: "Women's",
    },
    {
      name: 'Made in USA 996',
      img: 'https://nb.scene7.com/is/image/NB/u996te_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price: '$189.99',
      sex: 'Unisex',
    },
    {
      name: 'Klutch x NB Unleash Short Sleeve Top',
      img: 'https://nb.scene7.com/is/image/NB/wt31591ttm_nb_40_i?$pdpflexf2$&wid=928&hei=928',
      price: '$39.99',
      sex: "Women's",
    },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button class='arrow-prev'></button>",
    nextArrow: "<button class='arrow-next'></button>",
    centerMode: true,
    infinite: true,
  };

  constructor() {}

  ngOnInit(): void {}
}

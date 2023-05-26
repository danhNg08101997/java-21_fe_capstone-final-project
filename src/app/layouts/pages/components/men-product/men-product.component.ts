import { Component } from '@angular/core';

@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.css']
})
export class MenProductComponent {
  slides = [
    {
      name:"Fresh Foam X 880v13",
      img: 'https://nb.scene7.com/is/image/NB/m880n13_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price:'$139.99',
      sex:"Men's"
    },
    {
      name:"FuelCell Propel v4",
      img: 'https://nb.scene7.com/is/image/NB/mfcprlh4_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price:'$109.99',
      sex:"Men's",
    },
    {
      name:"Klutch x NB Pre Game Chill T-Shirt",
      img: 'https://nb.scene7.com/is/image/NB/mt31591gse_nb_40_i?$pdpflexf2$&wid=928&hei=928',
      price:'$39.99',
      sex:"Men's",
    },
    {
      name:"550",
      img: 'https://nb.scene7.com/is/image/NB/bb550gd1_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price:'$119.99',
      sex:"Men's",
    },
    {
      name:"Made in USA 998",
      img: 'https://nb.scene7.com/is/image/NB/u998ta_nb_02_i?$pdpflexf2$&wid=928&hei=928',
      price:'$209.99',
      sex:"Unisex",
    },
    {
      name:"Klutch x NB Pre Game Hoodie",
      img: 'https://nb.scene7.com/is/image/NB/mt31590ack_nb_40_i?$pdpflexf2$&wid=928&hei=928',
      price:'$119.99',
      sex:"Men's",
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

}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  fullScreen = false;
  notificationItems: Array<{}> = [];
  listCategory: any;
  listProduct: any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  getAllCategories() {
    this.categoryService.getCategories({}).subscribe((res) => {
      this.listCategory = res.data;
      console.log(this.listCategory[0].id);
    });
  }
  getAllProducts() {
    this.productService.getProducts({}).subscribe((res) => {
      this.listProduct = res.data;
      console.log(res);
    });
  }
}

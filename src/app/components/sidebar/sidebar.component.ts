import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ni-tv-2 text-primary',
    class: '',
  },
  { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
  {
    path: '/user-profile',
    title: 'User profile',
    icon: 'ni-single-02 text-yellow',
    class: '',
  },
  {
    path: '/tables',
    title: 'Tables',
    icon: 'ni-bullet-list-67 text-red',
    class: '',
  },
  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  {
    path: '/register',
    title: 'Register',
    icon: 'ni-circle-08 text-pink',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public menuProducts: any[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.getCategories();
    this.getProducts();
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  getCategories() {
    this.categoryService.getAll({}).subscribe((res) => {
      this.menuItems = res.data;
    });
  }
  getProducts() {
    this.productService.getAll({}).subscribe((res) => {
      console.log(res);
      this.menuProducts = res.data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  fullScreen = false;
  notificationItems: Array<{}> = [];
  listCategory: Array<{}> = [];

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories({}).subscribe((res)=>{
      console.log(res)
    })
  }

  showQrScan() {}
  openScreen() {}
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GdvService } from 'src/app/core/services/gdv.service';
import { GdvModalComponent } from './gdv-modal/gdv-modal.component';
import { GdvModel } from 'src/app/core/models/gdv-model';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gdv',
  templateUrl: './gdv.component.html',
  styleUrls: ['./gdv.component.scss'],
})
export class GdvComponent implements OnInit {
  listGDVs: any;
  formGdv: FormGroup;

  constructor(
    private gdvService: GdvService,
    private modalService: NgbModal,
    private toastService: ToastrService,
    private fb: FormBuilder
  ) {
    this.formGdv = this.fb.group({
      username: [null],
    });
  }

  ngOnInit(): void {
    this.getGDVs();
  }
  get f() {
    return this.formGdv.controls;
  }
  getGDVs() {
    this.gdvService.getAll({}).subscribe((res) => {
      this.listGDVs = res.data;
    });
  }
  openModal(type?: string, item?: any) {
    const modalRef = this.modalService.open(GdvModalComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
    });

    modalRef.componentInstance.item = item;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.getGDVs();
      this.modalService.dismissAll();
    });
    modalRef.componentInstance.type = type;
  }
  delete(payload: GdvModel) {
    if (payload) {
      Swal.fire({
        title: 'Xác nhận xoá dữ liệu',
        html: 'Dữ liệu sau khi xoá sẽ không thể khôi phục lại!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Đóng',
      }).then((res) => {
        if (res.value) {
          const json = { id: payload.gdvId };
          this.gdvService.delete(json).subscribe(
            (res) => {
              if (res.statusCode === 200) {
                this.toastService.success(res.message, 'Thông báo');
                this.getGDVs();
              } else {
                this.toastService.error(res.message, 'Thông báo');
              }
            },
            (err) => {
              this.toastService.error(err, 'Thông báo');
            }
          );
        }
      });
      return;
    }
  }
  search() {
    const json = this.formGdv.value;
    this.gdvService.getByUsername(json).subscribe((res) => {
      this.listGDVs = res.data;
    });
  }
  refresh() {
    this.initSeach()
    this.getGDVs();
  }
  initSeach() {
    this.formGdv = this.fb.group({
      username: [null],
    });
  }
}

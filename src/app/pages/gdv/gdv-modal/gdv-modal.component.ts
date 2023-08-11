import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { GdvService } from 'src/app/core/services/gdv.service';

@Component({
  selector: 'app-gdv-modal',
  templateUrl: './gdv-modal.component.html',
  styleUrls: ['./gdv-modal.component.scss'],
})
export class GdvModalComponent implements OnInit {
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Input() item: any;
  @Input() type: any;
  formGdvModal: FormGroup;
  isSubmit: boolean;
  listStatus = [
    { value: false, name: 'Available' },
    { value: true, name: 'Not available' },
  ];

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private gdvService: GdvService,
    private toastrService: ToastrService
  ) {
    this.formGdvModal = this.fb.group({
      username: [null],
      password: [null],
      fullname: [null],
      status: [null],
    });
  }

  ngOnInit(): void {
    if (this.item) {
      this.formGdvModal.patchValue(this.item);
    }
  }
  get f() {
    return this.formGdvModal.controls;
  }
  cancel() {
    this.activeModal.close();
  }
  onSubmit() {
    if (this.item) {
      this.update();
    } else {
      this.create();
    }
  }
  create() {
    const json = this.formGdvModal.value;
    this.gdvService.create(json).subscribe((res) => {
      if (res && res.statusCode === 200) {
        this.toastrService.success(res.message);
        this.passEntry.emit(res);
      } else {
        this.toastrService.error(res.message);
      }
    });
  }

  update() {
    const json = this.formGdvModal.value;
    this.gdvService.update(json).subscribe((res) => {
      if (res && res.statusCode === 200) {
        this.toastrService.success(res.message);
        this.passEntry.emit(res);
      } else {
        this.toastrService.error(res.message);
      }
    });
  }
}

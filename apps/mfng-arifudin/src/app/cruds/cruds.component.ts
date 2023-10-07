import { Component } from '@angular/core';
import { Crud } from '../models/crud';
import { ServicesService } from '../services/services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mfng-arifudin-cruds',
  templateUrl: './cruds.component.html',
  styleUrls: ['./cruds.component.scss'],
})
export class CrudsComponent {


  posts: Crud[] = [];
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  page: number = 1;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  count: number = 0;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private _serviceCrud : ServicesService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this._serviceCrud.getAll().subscribe((data: Crud[]) => {
      this.posts = data;

      console.log(this.posts, 'ini post');
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this._serviceCrud.getAll().subscribe((data: Crud[]) => {
      this.posts = data;
    })
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this._serviceCrud.getAll().subscribe((data: Crud[]) => {
      this.posts = data;
    })
  }

  deletePost(id:number) {
    this._serviceCrud.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      this.toastr.success('Crud deleted successfully!');
    })
  }

}

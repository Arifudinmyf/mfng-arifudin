import { Component } from '@angular/core';
import { Crud } from '../../models/crud';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mfng-arifudin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {

  id!: number;
  post!: Crud;
  form!: FormGroup;

  constructor(
    public postService: ServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Crud) => {
      this.post = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
      console.log('create Success');
      this.toastr.success('Crud updated successfully!');
      this.router.navigateByUrl('cruds');
    })
  }
}

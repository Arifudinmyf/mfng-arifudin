import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mfng-arifudin-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {

  form!: FormGroup;

  constructor(
    public postService: ServicesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
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
    this.postService.create(this.form.value).subscribe(res => {
      this.toastr.success('Crud created successfully!');
      this.router.navigateByUrl('cruds');
    })
  }
}

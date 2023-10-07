import { Component } from '@angular/core';
import { Crud } from '../../models/crud';
import { ServicesService } from '../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mfng-arifudin-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {

  id!: number;
  post!: Crud;

  constructor(
    public postService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.postService.find(this.id).subscribe((data: Crud) => {
      this.post = data;
    });
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'mfng-arifudin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfng-arifudin';

  condition = '';

  sidebars = [
    {name: 'Home', path: '/'},
    {name: 'Crud', path: 'cruds'}
  ]
}

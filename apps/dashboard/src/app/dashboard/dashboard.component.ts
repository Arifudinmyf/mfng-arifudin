import { Component } from '@angular/core';

@Component({
  selector: 'mfng-arifudin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface, @typescript-eslint/no-empty-function, @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  chartOptions = {
    title: {
      text: "This is Chart with Index Labels"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true
    },
    data: [{
      type: "column",
      indexLabelFontColor: "#5A5757",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 71 },
        { x: 60, y: 92, indexLabel: "Highest\u2191" },
        { x: 70, y: 68 },
        { x: 80, y: 38, indexLabel: "Lowest\u2193" },
        { x: 90, y: 54 },
        { x: 100, y: 60 }
      ]
    }]
  }

}

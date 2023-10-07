import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
// import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // CanvasJSAngularChartsModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppDashboardModule {}

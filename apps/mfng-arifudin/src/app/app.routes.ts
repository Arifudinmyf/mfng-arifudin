import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CrudsComponent } from './cruds/cruds.component';
import { EditComponent } from './cruds/edit/edit.component';
import { ViewComponent } from './cruds/view/view.component';
import { CreateComponent } from './cruds/create/create.component';
import { HomeComponent } from './home/home.component';

export const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent  },
  { path: 'cruds', component: CrudsComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/:postId/view', component: ViewComponent },
  { path: ':crud/:postId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

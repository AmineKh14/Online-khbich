import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [

  {path: "",pathMatch : 'full', redirectTo: 'courses' },
  {path: "new-course", component: CreateComponent},
  {path: "courses", component: ShowComponent},
  {path: "course/:id",component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

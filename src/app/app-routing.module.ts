import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProjectsListComponent } from './routes/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './routes/project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectsListComponent
      },
      {
        path: 'projects/:id',
        component: ProjectDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

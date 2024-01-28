import { Routes } from '@angular/router'

import { PostsComponent } from './pages/post/posts.component'
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: PostsComponent
  }
]

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { data } from '../../../types'
import { fakeData } from '../../data/fakeData'

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  data: data | undefined

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      console.log(value.get('id'))
      this.data = fakeData.find(data => data.id === value.get('id'))
      console.log(this.data)
    })
  }
}

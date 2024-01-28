import { NgFor } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { PostCardComponent } from '../../components/post-card/post-card.component'
import { fakeData } from '../../data/fakeData'
import { data } from '../../../types'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  links!: data[]

  ngOnInit(): void {
    this.links = fakeData
  }
}



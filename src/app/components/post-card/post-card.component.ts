import { Component, Input, OnInit } from '@angular/core'
import {  RouterLink } from '@angular/router'

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {

  @Input()
  img: string = ''
  @Input()
  id: string = ''
  @Input()
  title: string = ''


}

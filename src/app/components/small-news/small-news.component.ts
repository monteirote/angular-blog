import { Component, Input } from '@angular/core';
import { NoticiaTemplate } from 'src/app/models/noticia-template';

@Component({
  selector: 'app-small-news',
  templateUrl: './small-news.component.html',
  styleUrls: ['./small-news.component.css']
})
export class SmallNewsComponent {

  @Input() noticiaExibidia!: NoticiaTemplate;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'dot-care-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() heading = '';
}

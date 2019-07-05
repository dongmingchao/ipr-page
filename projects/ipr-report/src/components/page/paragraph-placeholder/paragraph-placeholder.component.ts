import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-news-post-placeholder',
  templateUrl: 'paragraph-placeholder.component.html',
  styleUrls: ['news-post-placeholder.component.scss'],
})
export class NewsPostPlaceholderComponent {

  @HostBinding('attr.aria-label')
  label = 'Loading';
}

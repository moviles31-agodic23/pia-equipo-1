import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class FeedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Master } from './services/master';
import { inject } from '@angular/core';
//import { HttpClientModule} from '@angular/common/http';
//this import wasnt possible here hence we did it in main.ts in a different way


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  posts: any[] = [];
  masterService = inject(Master);
  protected title = 'AngularServices-app';

  ngOnInit(): void{
    this.masterService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });
  }
}

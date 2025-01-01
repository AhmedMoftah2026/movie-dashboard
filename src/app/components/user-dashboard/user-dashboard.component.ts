// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-user-dashboard',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-dashboard.component.html',
//   styleUrl: './user-dashboard.component.css'
// })
// export class UserDashboardComponent {
//
// }

import { Component, OnInit } from '@angular/core';
import { MovieDashboardService } from '../../services/movie-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  template: `
    <div>
      <h2>User Dashboard</h2>
      <ul>
        <li *ngFor="let movie of movies">
          {{ movie.title }} - {{ movie.genre }}
          <button (click)="viewDetails(movie.title)">View Details</button>
        </li>
      </ul>
    </div>
  `
})
export class UserDashboardComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieDashboardService) {}

  ngOnInit(): void {
    this.movieService.fetchAllMovies().subscribe(data => {
      this.movies = data;
    });
  }

  viewDetails(title: string) {
    this.movieService.fetchMovieByTitle(title).subscribe(data => {
      alert(`Details: ${JSON.stringify(data)}`);
    });
  }
}

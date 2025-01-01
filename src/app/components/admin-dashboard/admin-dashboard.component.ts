// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-admin-dashboard',
//   standalone: true,
//   imports: [],
//   templateUrl: './admin-dashboard.component.html',
//   styleUrl: './admin-dashboard.component.css'
// })
// export class AdminDashboardComponent {
//
// }

import { Component, OnInit } from '@angular/core';
import { MovieDashboardService } from '../../services/movie-dashboard.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <div>
      <h2>Admin Dashboard</h2>
      <input [(ngModel)]="searchTitle" placeholder="Search Movies">
      <button (click)="searchMovies()">Search in OMDB</button>
      <ul>
        <li *ngFor="let movie of movies">
          {{ movie.title }}
          <button (click)="addMovie(movie.title)">Add</button>
        </li>
      </ul>
    </div>
  `
})
export class AdminDashboardComponent implements OnInit {
  searchTitle = '';
  movies: any[] = [];

  constructor(private movieService: MovieDashboardService) {}

  ngOnInit(): void {}

  searchMovies() {
    this.movieService.searchInOMDB(this.searchTitle).subscribe(data => {
      this.movies = data;
    });
  }

  addMovie(title: string) {
    this.movieService.addMovieFromOMDB(title).subscribe(() => {
      alert('Movie added successfully!');
    });
  }
}

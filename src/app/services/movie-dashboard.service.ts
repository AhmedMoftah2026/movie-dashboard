// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MovieDashboardService {
//
//   constructor() { }
// }


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDashboardService {
  private baseUrl = 'http://localhost:8080/movie';
  private headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJzdWIiOiJ1c2VyIiwiaWF0IjoxNzM1NjQ2ODczLCJleHAiOjE3MzU5NDY4NzN9.kAHzXnJVVj2Tk1ByCvLxBD8MK1bQRPvMpksP7_q6CZa7NBsR1wMbSqtwgb5zTnIVxhwiZj-D3MohwMVduz7A0w'
  });

  constructor(private http: HttpClient) {}

  //
  fetchAllMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/fetch-all`, { headers: this.headers });
  }

  //
  fetchMovieByTitle(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/fetchbytitle?title=${title}`, { headers: this.headers });
  }

  //
  searchInOMDB(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/admin/search-in-OMDB?title=${title}`, { headers: this.headers });
  }

  //
  addMovieFromOMDB(title: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/admin/search-in-OMDB-And-AddtoDB?title=${title}`, {}, { headers: this.headers });
  }

  //
  deleteMovie(movieId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admin/delete/${movieId}`, { headers: this.headers });
  }
}

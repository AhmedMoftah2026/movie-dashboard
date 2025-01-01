import { Component } from '@angular/core';
import { MovieDashboardService } from '../../services/movie-dashboard.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
      public LoginService:movie-dashboard
    ) {}
ngOnInit(){
  this.LoginService.getmovies()
}
}

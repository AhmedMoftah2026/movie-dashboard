import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // لاستيراد RouterModule
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { routes } from './app.routes'; // استيراد routes

@NgModule({
  declarations: [
    // مكون الجذر

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    // استخدام RouterModule مع routes
  ],
  providers: [],
  bootstrap: [AppComponent] // تأكد من أن AppComponent هو الـ bootstrap
})
export class AppModule { }

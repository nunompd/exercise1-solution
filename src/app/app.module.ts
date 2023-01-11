import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { TodoComponent } from './features/todo/components/todo/todo.component';

const COMPONENTS = [AppComponent, DashboardComponent, TodoComponent];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...COMPONENTS],
  bootstrap: [AppComponent],
})
export class AppModule {}

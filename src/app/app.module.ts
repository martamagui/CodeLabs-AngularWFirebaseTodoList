import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//App
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
//CDk
import { DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [AppComponent, TaskComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

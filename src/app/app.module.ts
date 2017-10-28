import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HaircutComponent } from './components/haircut/haircut.component';
import { ElonComponent } from './components/elon/elon.component';
import { ListComponent } from './components/list/list.component';

import { PostService } from './services/post.service';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HaircutComponent,
    ElonComponent,
    ListComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

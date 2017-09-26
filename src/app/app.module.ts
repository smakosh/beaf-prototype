import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HaircutComponent } from './components/haircut/haircut.component';
import { ElonComponent } from './components/elon/elon.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HaircutComponent,
    ElonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

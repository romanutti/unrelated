import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo/foo.component';
import { BarComponent } from './bar/bar/bar.component';
import { BazService } from './baz.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FooComponent, BarComponent],
  bootstrap: [AppComponent],
  providers: [BazService],
})
export class AppModule {}

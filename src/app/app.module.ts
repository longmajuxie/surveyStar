import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DropdownModule,AlertModule,TabsModule  } from 'ng2-bootstrap';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AppComponent } from './app.component';
import { NoContentComponent } from './pages/no-content/no-content.component'
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routes';

//Utilities
import * as _ from 'lodash';
@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    DropdownModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    PagesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

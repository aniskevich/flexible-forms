import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { FlexibleFormsModule } from './modules/flexible-forms/flexible-forms.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexibleFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

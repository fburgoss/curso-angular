import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HeroesModule } from "./heroes/heroes.module";



@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    
    
],        
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

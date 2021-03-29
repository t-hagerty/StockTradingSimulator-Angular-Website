import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { SearchComponent } from './components/search/search.component';
import { MarketComponent } from './components/pages/market/market.component';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesService } from './services/companies.service';
import { CompanyComponent } from './components/company/company.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyListComponent,
    SearchComponent,
    MarketComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CompaniesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

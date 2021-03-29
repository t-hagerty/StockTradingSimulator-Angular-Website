import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../models/Company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies!:Company[];

  constructor(private companiesService:CompaniesService) { }

  ngOnInit(): void {
    this.companiesService.get().subscribe(companies => {this.companies = companies;});
  }

  getSearchResults(searchTerm:string) {
    this.companiesService.getSearchResult(searchTerm).subscribe(companies => {this.companies = companies;});
  }
}

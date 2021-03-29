import { Component, Input, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Company } from '../../models/Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() company!: Company;

  constructor(private companyService:CompaniesService) { }

  ngOnInit(): void {
  }

}

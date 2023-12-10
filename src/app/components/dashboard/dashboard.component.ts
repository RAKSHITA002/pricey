import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data: any;
  brandA: any;
  brandB: any;
  brandC: any;
  filteredProducts: any[] = [];
  searchText: string = "";

  constructor(private service: ApiService) {}

  ngOnInit(){
    this.service.getAllData().subscribe((res) => {
      this.data= res;
    });

    this.service.getbrandAdata().subscribe((res) => {
     this.brandA = res;
    });

    this.service.getbrandBdata().subscribe((res) => {
      this.brandB = res;
    });

    this.service.getbrandCdata().subscribe((res) => {
     this.brandC = res;
    });

    this.service.getbrandddata().subscribe((res) => {
    
    });
  }

  searchbar() {
    forkJoin({
      allData: this.service.getAllData(),
      brandAData: this.service.getbrandAdata(),
      brandBData: this.service.getbrandBdata(),
      brandCData: this.service.getbrandCdata(),
      brandDData: this.service.getbrandddata()
    }).pipe(
      map((res) => {
        // Combine all data into a single array
        return [
          res.allData,
          res.brandAData,
          res.brandBData,
          res.brandCData,
          // Add other brands if needed
        ];
      })
    ).subscribe((combinedData) => {
      // Filter the combined data based on the search text
      this.filteredProducts = this.filterData(combinedData, this.searchText);
    });
  }

  filterData(data: any[], searchText: string): any[] {
    if (!searchText) {
      return data.flat(); // If no search text, return all data
    }
  
    searchText = searchText.toLowerCase();
    return data.flat().filter(item =>
      item.title.toLowerCase().includes(searchText)
    );
  }

  // Assuming you have a component property 'maxStars' to define the maximum number of stars
  maxStars = 5;

  getStarRating(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = this.maxStars - fullStars - (halfStar ? 1 : 0);

    return Array(fullStars).fill('full').concat(halfStar ? ['half'] : []).concat(Array(emptyStars).fill('empty'));
  }

  // Your other methods...

  search(event: any) {
    // Implement search if needed
  }
}


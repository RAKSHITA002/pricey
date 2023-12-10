import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private service : ApiService){}

ngOnInit(){

}

search(event : any) {
  /* const searchText = event.target.value
  this.filteredProducts = this.data.filter(data=>
    data.title.toLowerCase().startsWith(searchText.toLowerCase())
  ); */
}
}

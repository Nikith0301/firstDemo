import { Component,OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { HttpService } from '../http.service';
import { NgFor } from '@angular/common';
// import { provideHttpClient } from '@angular/common/http';

// import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',

  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  data:any=[];
  posts : any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    try {
      // this.data = await this.httpService.getData();
      this.data=await this.httpService.getData()
      console.log(this.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

}
// bootstrapApplication(AboutComponent, {
//   providers: [provideHttpClient()]  // Use providers here for standalone components
// });
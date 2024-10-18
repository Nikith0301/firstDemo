import { Component,ViewChild ,AfterViewInit, ViewChildren} from '@angular/core';
import {  RouterOutlet ,RouterLink, RouterLinkActive} from '@angular/router';
import { TestPipe } from './test.pipe';
import { HeaderComponent } from './header/header.component'; 
import { ArtistsComponent } from './artists/artists.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { HttpClientModule } from  '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';


// import axios from 'axios';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,TestPipe,FormsModule,HeaderComponent,ArtistsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'myAppDemo';
 mystyle:object={
  color:'red',
  background:'gray',
  border:"5px solid green"
 }
name="XYYZ"
 counter:number=0;

person={
  "gender":"f",
  "name":"goku",
  "number":1234
}

arr=[10,20,30,4,5,6]
 increment(){
  this.counter++
 }
 decrement(){
  this.counter--
 }
 inpFun(e:any){
this.name=e.target.value
this.person.name=e.target.value
console.log(this.person)
 }

 cdata:any;


// *below is part2 method #3 
// @ViewChild(HeaderComponent) header!: HeaderComponent;

// power:string=""
// ngAfterViewInit() {
  // console.log(this.header.power); // You can now access HeaderComponent here
// }


//*below is part 3 DOM maipulation video 26,27 from teleguCS World
@ViewChild ("test") d:any;
@ViewChildren("heading")h:any;
// ngAfterViewInit(){
// console.log(this.d.nativeElement)
// //Arrow functions do not have their own this. Instead, they capture the value of this from the surrounding context 
// //If you need to use a regular function and access the class's this, you should use .bind(this).
// // this.d.nativeElement.onkeyup = function() {
//   // console.log(this.d.nativeElement.value); // This would normally fail
// // }.bind(this);



// // this.d.nativeElement.onkeyup=()=>{
// //   console.log(this.d.nativeElement.value); // 'this' refers to the component instance
// // }



// //if u use function() do this
// // this.d.nativeElement.onkeyup = function() {
// //   console.log(this.value); // 'this' refers to the nativeElement, not the component
// // };


// }

 printfun(){
  console.log(this.h)
  //* to print single one from array
  console.log(this.h._results[0].nativeElement.innerHTML)
  for(let ele of this.h){
    console.log(ele.nativeElement.innerHTML)
  }
}

// ? Use Function Expressions: When assigning a function to a variable or property.
// const test = function() {
//    console.log("This is a function expression.");
//  }



}

// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()]  // Use providers here for standalone components
// });
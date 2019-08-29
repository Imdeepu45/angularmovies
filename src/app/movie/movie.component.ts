import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  getmovie='';
  getactor='';
  getactress='';
  getdirector='';

  onsubmit(data:NgForm){
    console.log(data.value);
    this.apiService.insertdata(data.value).subscribe((response)=>{
      console.log(data)
    })
  }


  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}

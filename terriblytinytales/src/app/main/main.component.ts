import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient,HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	nFreq;
	val_n:Number;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  postN(event){
  console.log("started");
  	event.preventDefault();

  	let data = {"val_n":this.val_n};
  	let specificUrl = "https://terribletinytales--ShushantKumar.repl.co";
    let headers =  {headers: new  HttpHeaders({ 'Content-Type':  'application/json'})};
    console.log(data);
    this.http.post(specificUrl, data,headers).subscribe(
    	(res) => {console.log(res);
    				this.nFreq=res;


    				},
    	(err) => console.log(err),
      	() => console.log('done!')

    	);
  }
}

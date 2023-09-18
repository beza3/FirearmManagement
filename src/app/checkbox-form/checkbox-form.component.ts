import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkbox-form',
  templateUrl: './checkbox-form.component.html',
  styleUrls: ['./checkbox-form.component.css']
})
export class CheckboxFormComponent implements OnInit {
  checkboxOptions: string[] = ['car','gun'];
  selectedOption: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string[]>('http://localhost:3000/sign').subscribe(options => {
      this.checkboxOptions = options;
    });
  }
}

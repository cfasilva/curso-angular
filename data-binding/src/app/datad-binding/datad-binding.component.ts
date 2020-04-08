import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datad-binding',
  templateUrl: './datad-binding.component.html',
  styleUrls: ['./datad-binding.component.css']
})
export class DatadBindingComponent implements OnInit {

  url = 'http://youtube.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

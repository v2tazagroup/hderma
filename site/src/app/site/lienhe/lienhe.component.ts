import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.scss']
})
export class LienheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
  }

}

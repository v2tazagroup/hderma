import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(history.state.navigationId!=1){this.LoadPage()}
  }
  LoadPage()
  {
    setTimeout(() => {
      location.reload();
    }, 0);
  }

}

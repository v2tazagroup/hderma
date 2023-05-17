import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  type: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }
  ngOnInit() {
    const item = localStorage.getItem('type');
    const type = item?JSON.parse(item) : 'trangchu';
    this.route.queryParams.subscribe(params => {
    this.type = params['type'] || 'trangchu'
    localStorage.setItem('type',JSON.stringify(this.type));
    });
    if(history.state.navigationId!=1){this.LoadPage()}
  }
  LoadPage()
  {
    setTimeout(() => {
      location.reload();
    }, 0);
  }
  
}

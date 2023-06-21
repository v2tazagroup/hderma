import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nhanhapi',
  templateUrl: './nhanhapi.component.html',
  styleUrls: ['./nhanhapi.component.css']
})
export class NhanhapiComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {}
}

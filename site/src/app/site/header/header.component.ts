import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/admin/auth/auth.service';
import { GiohangService } from 'src/app/shared/giohang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total: number=0;
  token = localStorage.getItem('HdermaToken') || null;
  constructor(
    private cartService: GiohangService,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    ) {
   this.cartService.calculateTotal();
   this.cartService.total$.subscribe(data=>this.total = data)
  }
  ngOnInit() {
  }
  Dangxuat() {
    this._authService.Dangxuat().subscribe((res) => {
      if (res == true) {
        this._router.navigate(['']);
        location.reload();
      }
    });
  }
}

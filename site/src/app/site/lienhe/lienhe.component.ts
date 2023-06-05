import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.scss']
})
export class LienheComponent implements OnInit {
  
  items = [
    {
      Title: 'Quận 10',
      Des: 'Số 408 Cao Thắng, P.12, Quận 10 TP.Hồ Chí Minh',
      Num: '180000',
      Iframe: '!1m18!1m12!1m3!1d3919.472711700977!2d106.67076621494179!3d10.775060962165002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed92600cea5%3A0x48798bb10b5c12e5!2zNDA4IMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDEyLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1676347688137!5m2!1sen!2s'
    },
    {
      Title: 'Thủ Đức',
      Des: 'Số 800 Phạm Văn Đồng, P.Hiệp Bình Chánh, Quận Thủ Đức, TP.Hồ Chí Minh',
      Num: '100000',
      Iframe: '!1m18!1m12!1m3!1d3918.733609722967!2d106.72410911494205!3d10.831686661132764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527d52993fe4d%3A0xfff1cd8c56abaaa7!2zODAwIMSQLiBQaOG6oW0gVsSDbiDEkOG7k25nLCBIaeG7h3AgQsOsbmggQ2jDoW5oLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1676348050427!5m2!1sen!2s'
    },
    {
      Title: 'Gò Vấp',
      Des: 'Số 1012 - 1014 Quang Trung, P.8, Quận Gò Vấp, TP. Hồ Chí Minh',
      Num: '750000',
      Iframe: '!1m18!1m12!1m3!1d3918.625200564401!2d106.64432431494211!3d10.83996776098141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299c1f280895%3A0x44339b8b67122eb1!2zMTAxMiBRdWFuZyBUcnVuZywgUGjGsOG7nW5nIDgsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1676348094701!5m2!1sen!2s'
    },
    {
      Title: 'Đà Nẵng',
      Des: 'Số 69 Hàm Nghi, P.Thạc Gián, Quận Thanh Khê, TP. Đà Nẵng',
      Num: '180000',
      Iframe: '!1m18!1m12!1m3!1d3833.9993226739416!2d108.20797941497712!3d16.065524943804228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184b31cc6057%3A0x130ce3daf9608f27!2zNjkgSMOgbSBOZ2hpLCBUaOG6oWMgR2nDoW4sIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1676348127407!5m2!1sen!2s'

    },
    {
      Title: 'Nha Trang',
      Des: 'STH 41, 47 Đường số 4, Phước Hải, TP Nha Trang, Khánh Hòa',
      Num: '100000',
      Iframe: '!1m18!1m12!1m3!1d3899.060906964626!2d109.1746904149494!3d12.24415533373426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705d833000b7a1%3A0xfeac937f77cb3e1d!2zNDcgxJAuIFPhu5EgNCwgUGjGsOG7m2MgSOG6o2ksIE5oYSBUcmFuZywgS2jDoW5oIEjDsmEgNjUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1676348193843!5m2!1sen!2s'

    },

  ]
  constructor(private elem: ElementRef) { }

  ngOnInit() {
    if(history.state.navigationId!=1){location.reload()}
  }
  getiframe(item: any) {
    let link = `https://www.google.com/maps/embed?pb=${item.Iframe}`
    document.querySelector('.google-map')?.setAttribute('src', link)
  }
  ngAfterViewInit(): void {
    let elements = this.elem.nativeElement.querySelector('.google-map');

    let link = `https://www.google.com/maps/embed?pb=${this.items[0].Iframe}`
    elements.setAttribute('src', link)
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

}

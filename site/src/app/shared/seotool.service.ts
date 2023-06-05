import { Injectable, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeotoolService {
  script:any;
  constructor(private meta: Meta, private title: Title,private renderer: RendererFactory2) {}
  setMetaData(title: string, description: string, keywords: string,robots:any='index, follow',url:any,image:any) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords});
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ name: 'og:url', content: url });
    this.meta.updateTag({ name: 'og:type', content: "article" });
    this.meta.updateTag({ name: 'og:title', content: title});
    this.meta.updateTag({ name: 'og:description', content: description });
    this.meta.updateTag({ name: 'og:image', content: image });
  }
  addStructuredData(data: any) {
    const script = this.renderer.createRenderer(null,null).createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.renderer.createRenderer(null,null).appendChild(document.body, script);
  }
}

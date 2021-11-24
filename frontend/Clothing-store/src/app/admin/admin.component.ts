import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'Clothing-store';
  ngOnInit(){
    this.loadScript
    this.shutdownCSS();
   
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  public loadCSS(url:string){
    const head = <HTMLDivElement> document.head;
    const css = document.createElement('link');
    css.href=url;
    css.type="text/css";
    head.appendChild(css);
  }
  shutdownCSS(){
    document.getElementById("gg").removeAttribute("href");
  }
}

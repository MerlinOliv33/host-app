import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  texteMFE: string = "";
  
  @HostListener("document:echange", ["$event"])
  echangeTexte($event: any) {
    this.texteMFE = $event.detail;
  }
  
  title = 'host-app';

  ajoutPanier(): void {
    const event: CustomEvent = new CustomEvent('Ajoutpanier', {});
    document.dispatchEvent(event);
  }

  supPanier(): void {
    const event: CustomEvent = new CustomEvent('Suppanier', {});
    document.dispatchEvent(event);
  }
  

}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gridlist';
  columnas: number = 3;
  largo: string = "2:1";
  tiles = [
    { text: 'Shiba' },
    { text: 'Doggy' },
    { text: 'Dog' },
    { text: 'Doggo' },
    { text: 'Doge' },
    { text: 'Some Dog' },
  ];
  constructor(public breakpointObserver: BreakpointObserver) {

  }
    ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log('Matches XSmall viewport');
        this.columnas = 1;
        this.largo = "2:2.2"

      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches Small viewport');
        this.columnas = 1;
        this.largo = "2:2"

      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('Matches Medium  viewport');
        this.columnas = 2;
        this.largo = "2:2.2"
      }
      if (state.breakpoints[Breakpoints.Large]) {

        console.log('Matches Large viewport');
        this.columnas = 3;
        this.largo = "2:2.2"

      }
      if (state.breakpoints[Breakpoints.XLarge]) {

        console.log('Matches XLarge viewport');
        this.columnas = 4;
      }
    });
  }
  sombra(text){
console.log(text)
  }
}

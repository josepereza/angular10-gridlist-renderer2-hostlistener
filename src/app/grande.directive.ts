import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[zoom]'
})
export class GrandeDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseover') 
  onMouseOver() {
      this.renderer.addClass(this.elRef.nativeElement, 'grande');
      //Add more class
      //this.renderer.addClass(this.elRef.nativeElement, 'efg');
  }
  @HostListener('mouseleave') 
  onMouseLeave() {
      this.renderer.removeClass(this.elRef.nativeElement, 'grande');
      //Add more class
      //this.renderer.addClass(this.elRef.nativeElement, 'efg');
  }
}

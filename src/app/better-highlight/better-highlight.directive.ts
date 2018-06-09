import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.bgColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeave() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.bgColor = 'transparent';
  }
}

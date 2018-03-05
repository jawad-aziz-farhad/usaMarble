import { Directive , HostListener , ElementRef } from '@angular/core';

/**
 * Generated class for the HighlightDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[highlight]' // Attribute selector
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {
    console.log('Hello HighlightDirective Directive');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}

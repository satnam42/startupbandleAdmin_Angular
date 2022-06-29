import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgLazy]'
})
export class ImgLazyDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
} 
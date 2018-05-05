import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective {
  @Input() message: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#090';
  }

  @HostListener('click', ['$event'])
  showAlert (e) {
    e.preventDefault();
    alert(this.message);
  }
}

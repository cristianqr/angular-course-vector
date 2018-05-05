import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appAttachFile]'
})
export class AttachFileDirective {
  private input;
  @Output() afterSelect = new EventEmitter<any>();

  constructor(private el: ElementRef) {
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'file');
    this.input.setAttribute('hidden', 'hidden');

    this.el.nativeElement.appendChild(this.input);

    this.input.addEventListener('change', (e) => {
      this.afterSelect.emit(e.files ? e.files : e.target.files);
    });
  }

  @HostListener('click', ['$event'])
  attachFile (e) {
    this.input.click();
  }

}

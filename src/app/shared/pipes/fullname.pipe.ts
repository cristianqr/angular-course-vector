import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'appFullName'
})
export class FullnamePipe implements PipeTransform {
  transform (person: object, params: any) {
    if (!person) {
      return person;
    }
    return `${person['lastName']} ${params} ${person['name']}` ;
  }
}

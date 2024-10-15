import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(p: any, ...args: unknown[]): string {
    if(p.gender==='m'){
      return `Hello Ms.${p.name}`;
    }
else{
  return `Hello mR.${p.name}`
}
  }

}

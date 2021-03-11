import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Well Hello there Mr. " + value;
  }

}

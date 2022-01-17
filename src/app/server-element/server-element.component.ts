import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor Called')
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges Called');
   }

  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
      console.log('ngAfterViewInit Called');
    }

    ngAfterViewChecked() {
      console.log('ngAfterViewChecked Called');
    }

    ngOnDestroy() {
          console.log('ngAfterViewChecked Called');
    }

}

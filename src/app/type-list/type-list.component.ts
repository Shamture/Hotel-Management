import { Component, OnInit, Input} from '@angular/core';
import { ProductType } from '../food/product';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  @Input() types: ProductType[] = [];

  constructor() { }

  ngOnInit() {
  }

}

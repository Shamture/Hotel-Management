import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() public id: number;
  @Input() public name: string;
  @Input() public price: number;
  @Input() public size: number;
  @Input() public picture: string;

  public getCurrency(): string {
    return '₹​';
  }

}

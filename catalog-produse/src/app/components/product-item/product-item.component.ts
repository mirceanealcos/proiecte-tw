import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produs } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() produs!: Produs;

  public onAddToCart() {
    alert(`Ai adăugat în coș: ${this.produs.nume}`);
  }


}

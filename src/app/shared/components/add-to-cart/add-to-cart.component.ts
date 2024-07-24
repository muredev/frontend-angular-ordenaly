import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { ProductService } from 'src/app/features/product/product.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from 'src/app/features/product/Product.inteface';
import { OrderCartService } from 'src/app/features/order/orderCart.service';
import { ActivatedRoute } from '@angular/router';
import { AddToOrderRequest } from 'src/app/features/order/interfaces/OrderCart.interface';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: 'add-to-cart.component.html',
})
export class AddToCartComponent implements OnInit {

  products: Product[] = [];

  orderId!: number;

  selectedProductId?: number;
  quantity?: number;

  addToOrderForm: FormGroup;

  constructor(
    private productService: ProductService,
    private orderCartService: OrderCartService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.addToOrderForm = this.formBuilder.group({
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      this.orderId = +params['id'];

      if (isNaN(this.orderId)) {
        console.error('El ID de la orden no es un número válido');
      } else {
        console.log('Order ID:', this.orderId);
      }
      
    })

    this.loadProducts();
    
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }


  submit() {

    const payload: AddToOrderRequest = {
      product: this.addToOrderForm.get('product')?.value,
      quantity: this.addToOrderForm.get('quantity')?.value
    };

    this.orderCartService.addProductToOrder(this.orderId, payload).subscribe(response => {
      console.log('Solicitud POST exitosa', response);
    }, error => {
      console.error('Error en la solicitud POST', error);
    });

    this.addToOrderForm.reset();
  }

}
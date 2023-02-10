import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {};

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id = data.get("id");
      if (id!= null){
        this.getProduct(id);
      }
    })

  }

  ngOnInit(): void {
  }

  getProduct(id: any) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.productForm.controls.id.value,product).subscribe(data=>{
      this.router.navigateByUrl('product/list');
      alert('Cập nhật thành công');
    });
  }
}

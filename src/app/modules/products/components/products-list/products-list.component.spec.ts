import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { ProductsService } from '../../services/products.service';
import { MockProductsService, mockProducts } from '../../utils/products.mock';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productsServiceMock: ProductsService;
  let mockRouter: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [FormsModule, RouterTestingModule, SharedModule],
      providers: [{
        provide: ProductsService,
        useClass: MockProductsService
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    productsServiceMock = TestBed.inject(ProductsService);
    mockRouter = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all products on component initialization', () => {
    jest.spyOn(productsServiceMock, 'getProducts');

    expect(component.productList).toEqual(mockProducts);
  })

  it('should filter and update productListFiltered', () => {
    const searchTxt = 'Tarjeta de credito 5'
    component.productList = mockProducts;
    component.search = searchTxt;
    jest.useFakeTimers();

    component.onFiltered();
    jest.runAllTimers();

    expect(component.productListFiltered).toEqual([
      expect.objectContaining({ name: searchTxt })
    ]);
  });

  it('should set product for edit and navigate to edit page',()=>{
    const productToEdit: IProduct = mockProducts[0];
    const spyService = jest.spyOn(productsServiceMock, 'setProdToEdit');
    const spyRouter = jest.spyOn(mockRouter, 'navigateByUrl');

    component.goToEdit(productToEdit);

    expect(spyService).toHaveBeenCalledWith(productToEdit)
    expect(spyRouter).toHaveBeenCalledWith('/list/product')
  })
});

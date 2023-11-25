import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { ProductsService } from '../../services/products.service';
import { MockProductsService, mockProducts } from '../../utils/products.mock';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';
import { of, throwError } from 'rxjs';

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

  it('should set product for edit and navigate to edit page', () => {
    const productToEdit: IProduct = mockProducts[0];
    const spyService = jest.spyOn(productsServiceMock, 'setProdToEdit');
    const spyRouter = jest.spyOn(mockRouter, 'navigateByUrl');

    component.goToEdit(productToEdit);

    expect(spyService).toHaveBeenCalledWith(productToEdit)
    expect(spyRouter).toHaveBeenCalledWith('/list/product')
  })

  it('should set properties on onDelete', () => {
    const product: IProduct = mockProducts[0];

    component.onDelete(product);

    expect(component.idToDelete).toEqual(product.id);
    expect(component.modalTxt).toEqual(`¿Estas seguro de eliminar el producto ${product.name}?`);
    expect(component.isOpenModal).toBe(true);
  });

  it('should handle modalEvent with true', () => {
    component.idToDelete = 'test-id';
    jest.spyOn(productsServiceMock, 'deleteProduct').mockReturnValue(of(''));
    jest.spyOn(component, 'getData');

    component.modalEvent(true);

    expect(component.isOpenModal).toBe(false);
    expect(component.isLoading).toBe(false);
    expect(component.getData).toHaveBeenCalled();
  });

  it('should handle error in modalEvent', () => {
    component.idToDelete = 'test-id';
    const errorMessage = 'Deletion failed';
    jest.spyOn(productsServiceMock, 'deleteProduct').mockReturnValue(throwError(() => errorMessage));

    component.modalEvent(true);

    expect(component.isOpenModal).toBe(false);
    expect(component.isLoading).toBe(false);
  });

  it('should handle modalEvent with false', () => {
    component.idToDelete = '123';

    component.modalEvent(false);

    expect(component.isOpenModal).toBe(false);
  });
});

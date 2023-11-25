import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';
import { ProductsService } from '../../services/products.service';
import { MockProductsService, mockProducts } from '../../utils/products.mock';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsListComponent } from '../products-list/products-list.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let productsServiceMock: ProductsService;
  let mockRouter: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([{
          path: 'products',
          component: ProductsListComponent
        }])
      ],
      providers: [{
        provide: ProductsService,
        useClass: MockProductsService
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    productsServiceMock = TestBed.inject(ProductsService);
    mockRouter = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update dateRevision when dateRelease changes', () => {
    const initialDate = new Date('2022-01-01');
    const expectedDate = new Date('2023-01-01');
    component.dateRelease?.setValue(initialDate.toISOString().slice(0, 10));

    component.onChangeDateRelease();

    expect(component.dateRevision?.value).toEqual(expectedDate.toISOString().slice(0, 10)); // Adjust based on your date format
  });

  it('should set isLoading to false and navigate on successful product creation', fakeAsync(() => {
    jest.spyOn(productsServiceMock, 'createProduct').mockReturnValue(of(mockProducts[0]));
    const spyRouter = jest.spyOn(mockRouter, 'navigateByUrl')

    component.onSubmit();
    tick();

    expect(component.isLoading).toBe(false);
    expect(spyRouter).toHaveBeenCalledWith('/list');
  }));

  it('should set isLoading to false and handle error on product creation', () => {
    const errorMessage = "Can't create because product is duplicate";
    jest.spyOn(productsServiceMock, 'createProduct').mockReturnValue(throwError(() => new Error(errorMessage)));

    component.onSubmit();

    expect(component.isLoading).toBe(false);
  });
});

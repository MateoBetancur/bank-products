import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { IProduct } from '../interfaces/product.interface';
import { mockProducts } from '../utils/products.mock';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve products from the API via GET', () => {
    const mockProducts = [
      {
        "id": "trj-crd",
        "name": "Tarjeta de credito",
        "description": "Tareta de consumo bajo modalidad de credito",
        "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2023-11-23T00:00:00.000+00:00"
      }
    ];

    service.getProducts().subscribe((products) => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(service.URL_BASE);
    expect(req.request.method).toEqual('GET');

    req.flush(mockProducts);
  });

  it('should create a new product via POST', () => {
    const mockProduct: IProduct = {
      "id": "trj-crd",
      "name": "Tarjeta de credito",
      "description": "Tareta de consumo bajo modalidad de credito",
      "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
      "date_release": "2023-11-24" as any,
      "date_revision": "2023-11-24" as any
    }

    service.createProduct(mockProduct).subscribe((createdProduct) => {
      expect(createdProduct).toEqual(mockProduct);
    });

    const req = httpTestingController.expectOne(service.URL_BASE);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockProduct);

    req.flush(mockProduct);
  });

  it('should return true for a valid ID', () => {
    const id = 'test-1';
    const expectedResult = true;

    service.verifyId(id).subscribe((result) => {
      expect(result).toEqual(expectedResult);
    });

    const req = httpTestingController.expectOne(`${service.URL_BASE}/verification?id=${id}`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedResult);
  });

  it('should return false for an invalid ID', () => {
    const id = 'test-2';
    const expectedResult = false;

    service.verifyId(id).subscribe((result) => {
      expect(result).toEqual(expectedResult);
    });

    const req = httpTestingController.expectOne(`${service.URL_BASE}/verification?id=${id}`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedResult);
  });


  it('should edit a product successfully', () => {
    const editedProduct: IProduct = mockProducts[0];

    service.editProduct(editedProduct).subscribe();

    const req = httpTestingController.expectOne(`${service.URL_BASE}?id=${editedProduct.id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(editedProduct);
  });

  it('should set product to edit', () => {
    const productToEdit: IProduct = mockProducts[0];

    service.setProdToEdit(productToEdit);

    expect(service.getProdToEdit).toEqual(productToEdit);
  });

  it('should get product to edit', () => {
    const productToEdit: IProduct = mockProducts[0];

    service.setProdToEdit(productToEdit);

    const retrievedProduct = service.getProdToEdit;

    expect(retrievedProduct).toEqual(productToEdit);
  });

  it('should get null if no product to edit', () => {
    const retrievedProduct = service.getProdToEdit;

    expect(retrievedProduct).toBeNull();
  });

  it('should delete product successfully', () => {
    const productId = 'test-id';

    service.deleteProduct(productId).subscribe();

    const req = httpTestingController.expectOne(`${service.URL_BASE}?id=${productId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush('success');
  });
});

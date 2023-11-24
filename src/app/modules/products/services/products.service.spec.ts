import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';

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
});

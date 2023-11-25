import { of } from "rxjs";
import { IProduct } from "../interfaces/product.interface";

export class MockProductsService {
    getProducts() {
        return of(mockProducts)
    }
    validateData() {
        return of(true)
    }
    
    createProduct() { }
}
export const mockProducts: IProduct[] = [
    {
        "id": "trj-crd",
        "name": "Tarjeta de credito",
        "description": "Tareta de consumo bajo modalidad de credito",
        "logo": "https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2023-11-23T00:00:00.000+00:00"
    },
    {
        "id": "trj-deb",
        "name": "Tarjeta debito",
        "description": "Tarjeta debito de libre consumo",
        "logo": "https://latam.mastercard.com/content/dam/public/mastercardcom/lac/mx/home/consumidores/encontrar-una-tarjeta/tarjetas-de-debito/tarjeta-standard/tarjeta-debito-standard-1280x720.jpg",
        "date_release": "2023-11-27T00:00:00.000+00:00",
        "date_revision": "2024-11-27T00:00:00.000+00:00"
    },
    {
        "id": "cons-crd",
        "name": "credito de consumo",
        "description": "Credito de consume de libre inversion",
        "logo": "https://www.caixabankresearch.com/sites/default/files/styles/share/public/content/image/2020/01/24/34529/consumo-credito.jpg?itok=h1kaw0MV",
        "date_release": "2023-11-24T00:00:00.000+00:00",
        "date_revision": "2024-11-24T00:00:00.000+00:00"
    },
    {
        "id": "test-1",
        "name": "Producto de prueba 1",
        "description": "Este es un producto financiero de prueba #1",
        "logo": "https://www.comparaonline.cl/blog-statics/cl/uploads/2013/05/credito-consumo-preguntas.png",
        "date_release": "2023-11-25T00:00:00.000+00:00",
        "date_revision": "2024-11-25T00:00:00.000+00:00"
    },
    {
        "id": "test-2",
        "name": "Producto de prueba dos",
        "description": "Este es un producto financiero de prueba #2",
        "logo": "https://www.sabermassermas.com/wp-content/uploads/2017/09/Buen-uso-del-cr%C3%A9dito-de-consumo.png",
        "date_release": "2023-12-30T00:00:00.000+00:00",
        "date_revision": "2024-12-30T00:00:00.000+00:00"
    },
    {
        "id": "test-3",
        "name": "Producto prueba 3",
        "description": "Este es un producto de prueba #3",
        "logo": "https://www.portafolio.co/files/article_new_multimedia/uploads/2022/09/09/631bb64a88e30.jpeg",
        "date_release": "2024-01-18T00:00:00.000+00:00",
        "date_revision": "2025-01-18T00:00:00.000+00:00"
    },
    {
        "id": "test-4",
        "name": "Producto prueba cuatro",
        "description": "Este es un producto de prueba numero cuatro",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzK24MFkxD4qb2H5vc_lfJ0ZzcAJ2tPCxz0csy0Pm2fnWoN4MahcpYH-R7pnqjyhXueo&usqp=CAU",
        "date_release": "2023-12-01T00:00:00.000+00:00",
        "date_revision": "2024-12-01T00:00:00.000+00:00"
    },
    {
        "id": "test-5",
        "name": "Tarjeta de credito 5",
        "description": "Tareta de consumo bajo modalidad de credito 5",
        "logo": "https://elcomercio.pe/resizer/FZUkPBs7A_tgP9apmN6pM_Lo96o=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7YGAYW7NK5BRJGTCZBIT7FXERQ.jpg",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-6",
        "name": "Tarjeta e-card 6",
        "description": "Tareta de consumo bajo e-card 5",
        "logo": "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-amazon-e-gift-card-112616-m.jpg",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-8",
        "name": "Tarjeta e-card 7",
        "description": "Tareta de consumo bajo e-card 7",
        "logo": "https://givelo.co/cdn/shop/products/GIFT-CARD-BLACK_CYCLING-E-VOUCHER.jpg?v=1668520531&width=2048",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-9",
        "name": "Tarjeta e-card 8",
        "description": "Tareta de consumo bajo e-card 8",
        "logo": "https://givelo.co/cdn/shop/products/GIFT-CARD-BLACK_CYCLING-E-VOUCHER.jpg?v=1668520531&width=2048",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-10",
        "name": "credito vehicular",
        "description": "Credito de vehicolo para persona natural",
        "logo": "https://www.carroya.com/noticias/sites/default/files/entradillas/72810895financiacioncarro.jpg",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-11",
        "name": "credito vehicular empresa",
        "description": "Credito de vehicolo para persona juridica",
        "logo": "https://www.carroya.com/noticias/sites/default/files/entradillas/72810895financiacioncarro.jpg",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-12",
        "name": "leasing vehicular empresa",
        "description": "leasing de vehicolo para persona juridica",
        "logo": "https://www.sabermassermas.com/wp-content/uploads/2020/02/10_conozca_los_beneficios_del_credito_de_vehiculo.png",
        "date_release": "2023-11-23T00:00:00.000+00:00",
        "date_revision": "2024-11-23T00:00:00.000+00:00"
    },
    {
        "id": "test-13",
        "name": "Credito vivienda cuota fija",
        "description": "Credito vivienda cuota fija hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    },
    {
        "id": "test-14",
        "name": "Credito vivienda cuota constante",
        "description": "Credito vivienda cuota constante hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    },
    {
        "id": "test-15",
        "name": "Credito vivienda cuota constante",
        "description": "Credito vivienda cuota constante hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    },
    {
        "id": "test-16",
        "name": "Credito vivienda cuota constante",
        "description": "Credito vivienda cuota constante hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    },
    {
        "id": "test-17",
        "name": "Credito vivienda cuota constante",
        "description": "Credito vivienda cuota constante hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    },
    {
        "id": "test-18",
        "name": "Credito vivienda cuota constante",
        "description": "Credito vivienda cuota constante hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    },
    {
        "id": "test-19",
        "name": "Credito vivienda cuota constante",
        "description": "Credito vivienda cuota constante hasta 20 años",
        "logo": "https://www.metrocuadrado.com/sites/noticias-m2/files/styles/crop_770x383/public/field/image/istock-1062332352_1.jpg",
        "date_release": "2023-12-23T00:00:00.000+00:00",
        "date_revision": "2024-12-23T00:00:00.000+00:00"
    }
];
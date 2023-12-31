export const CARS_BRANDS = {
    id: 3, title: 'Ford', logoFilename: 'ford.png'
}

export const LIST_OF_CARS_BRANDS = {
    status: 'ok',
    data: [
      { id: 1, title: 'Audi', logoFilename: 'audi.png' },
      { id: 2, title: 'BMW', logoFilename: 'bmw.png' },
      { id: 3, title: 'Ford', logoFilename: 'ford.png' },
      { id: 4, title: 'Porsche', logoFilename: 'porsche.png' },
      { id: 5, title: 'Fiat', logoFilename: 'fiat.png' }
    ]
  }

export const CARS_MODELS_LEAST = {
    status: 'ok',
    data: [
        { id: 1, carBrandId: 1, title: 'TT' },
        { id: 2, carBrandId: 1, title: 'R8' },
        { id: 3, carBrandId: 1, title: 'Q7' },
        { id: 4, carBrandId: 1, title: 'A6' },
        { id: 5, carBrandId: 1, title: 'A8' },
        { id: 6, carBrandId: 2, title: '3' },
        { id: 7, carBrandId: 2, title: '5' },
        { id: 8, carBrandId: 2, title: 'X5' },
        { id: 9, carBrandId: 2, title: 'X6' },
        { id: 10, carBrandId: 2, title: 'Z3' },
        { id: 11, carBrandId: 3, title: 'Fiesta' },
        { id: 12, carBrandId: 3, title: 'Focus' },
        { id: 13, carBrandId: 3, title: 'Fusion' },
        { id: 14, carBrandId: 3, title: 'Mondeo' },
        { id: 15, carBrandId: 3, title: 'Sierra' },
        { id: 16, carBrandId: 4, title: '911' },
        { id: 17, carBrandId: 4, title: 'Cayenne' },
        { id: 18, carBrandId: 4, title: 'Panamera' },
        { id: 19, carBrandId: 5, title: 'Palio' },
        { id: 20, carBrandId: 5, title: 'Ducato' },
        { id: 21, carBrandId: 5, title: 'Panda' },
        { id: 22, carBrandId: 5, title: 'Punto' },
        { id: 23, carBrandId: 5, title: 'Scudo' }
    ]
}
export const CARS_MODEL_WITD_ID_4 = {
    status: 'ok',
    data: { id: 4, carBrandId: 1, title: 'A6' }
}

export const CREATED_CAR = {
    "carBrandId": 1,
    "carModelId": 2,
    "mileage": 123
}
export const EDIT_CAR_BODY = {
    "carBrandId": 3,
    "carModelId": 1,
    "mileage": 323
}
export const LIST_OF_CURRENT_USER_CARS ={
    status: 'ok',
    data: [
      {
        id: 70040,
        carBrandId: 4,
        carModelId: 17,
        initialMileage: 678,
        updatedMileageAt: '2023-11-29T19:57:52.000Z',
        carCreatedAt: '2023-11-29T19:57:52.000Z',
        mileage: 678,
        brand: 'Porsche',
        model: 'Cayenne',
        logo: 'porsche.png'
      }
    ]
  }
  export const VALID_BRANDS_MODELS = {
    1:  {
        "status": "ok",
        "data": [
            {
                "id": 1,
                "carBrandId": 1,
                "title": "TT"
            },
            {
                "id": 2,
                "carBrandId": 1,
                "title": "R8"
            },
            {
                "id": 3,
                "carBrandId": 1,
                "title": "Q7"
            },
            {
                "id": 4,
                "carBrandId": 1,
                "title": "A6"
            },
            {
                "id": 5,
                "carBrandId": 1,
                "title": "A8"
            }
        ]
    }}
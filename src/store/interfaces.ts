export interface ResGenerator {
  data?: any;
  headers?: string;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface ITokens {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  user_id: string;
}

export interface IModels {
  updatedAt: number;
  createdAt: number;
  description: string;
  priceMin: number;
  priceMax: number;
  name: string;
  number: string;
  categoryId: {
    name: string;
    description: string;
    id: string;
  };
  thumbnail: {
    size: number;
    path: string;
    originalname: string;
    mimetype: string;
  };

  tank: number;
  colors: string[];
  id: string;
}

export interface ICategories {
  createdAt: number;
  description: string;
  id: string;
  updatedAt: number;
  name: string;
}

export interface IStatus {
  name: string;
  id: string;
}

export interface ICity {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: string;
}

export interface IPoint {
  address: string;
  name: string;
  id: string;
}

export interface IRate {
  price?: number;
  rateTypeId?: IRateTypes;
  id?: string;
}

export interface IRateTypes {
  unit?: string;
  name?: string;
  id?: string;
}

export interface ICar {
  name: string;
  number: string;
  thumbnail: IThumbnail;
  description: string;
  categoryId: ICategory;
  priceMin: number;
  priceMax: number;
  tank: number;
  colors: string[];
  id: string;
}

export interface IThumbnail {
  path: string;
  mimetype: string;
  originalname: string;
  size: number;
}

export interface ICategory {
  name?: string;
  description?: string;
  id?: string;
}

export interface IOrders {
  updatedAt: number;
  createdAt: number;
  orderStatusId: IStatus;
  cityId: ICity;
  pointId: IPoint;
  color: string;
  dateFrom: number;
  dateTo: number;
  price: number;
  isFullTank: true;
  isNeedChildChair: true;
  isRightWheel: true;
  rateId: IRate;
  carId: ICar;
  id: string;
}

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

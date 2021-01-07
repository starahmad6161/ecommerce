export interface Product {
  id?: number,
  name?: string,
  category?: string,
  rate?: number,
  price?: number,
  hasDiscount?: true,
  discount?: number,
  inStock?: number,
  sold?: number,
  mainImage?:string,
  images?: Array<any>,
  shortDescription?:string,
  description?: string,
  details?:string,
  userId?: number,
  quantity?:number
}

export interface Product {
  id: number
  name: string
  presentation: string
  image: string
}

export interface Category {
  id: number
  name: string
  ScientificName: string
  CapturedIn: string
  ProcessedIn: string
  CaptureZone: string
}

export interface CategoryProducts {
  category: Category
  products: Product[]
}

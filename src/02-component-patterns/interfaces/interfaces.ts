import { ReactElement } from 'react'

export interface Product {
  id: string
  img?: string
  title: string
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  product: Product
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Title: ({ title }: { title?: string }) => JSX.Element
  Image: ({ img }: { img?: string }) => JSX.Element
  Buttons: () => JSX.Element
}

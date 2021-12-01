import { CSSProperties, ReactElement } from 'react'

export interface Product {
  id: string
  img?: string
  title: string
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  className?: string
  onChange?: (args: onChangeArgs) => void
  product: Product
  style?: CSSProperties
  value?: number
}

export interface ProductTitleProps {
  className?: string
  style?: CSSProperties
  title?: string
}

export interface ProductImageProps {
  className?: string
  img?: string
  style?: CSSProperties
}

export interface ProductButtonsProps {
  className?: string
  style?: CSSProperties
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
  style?: CSSProperties
}

export interface ProductInCart extends Product {
  count: number
}

export interface ProductCardHOCProps {
  ({ children, className, product }: ProductCardProps): JSX.Element
  Title: ({ className, title }: ProductTitleProps) => JSX.Element
  Image: ({ img }: ProductImageProps) => JSX.Element
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product
  count: number
}

export interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

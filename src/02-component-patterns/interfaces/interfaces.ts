import { CSSProperties, ReactElement } from 'react'

export interface Product {
  id: string
  img?: string
  title: string
}

export interface ProductCardProps {
  // children?: () => JSX.Element | ReactElement | ReactElement[]
  className?: string
  initialValues?: InitialValues
  product: Product
  style?: CSSProperties
  value?: number

  children: (args: ProductCardHandlers) => JSX.Element
  onChange?: (args: onChangeArgs) => void
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
  maxCount?: number
  product: Product
  style?: CSSProperties

  increaseBy: (value: number) => void
}

export interface ProductInCart extends Product {
  count: number
}

export interface ProductCardHOCProps {
  ({ children, className, product }: ProductCardProps): JSX.Element
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element
  Image: ({ img }: ProductImageProps) => JSX.Element
  Title: ({ className, title }: ProductTitleProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product
  count: number
}

export interface useProductArgs {
  initialValues?: InitialValues
  product: Product
  value?: number

  onChange?: (args: onChangeArgs) => void
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product

  increaseBy: (value: number) => void
  reset: () => void
}

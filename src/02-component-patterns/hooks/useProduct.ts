import { useEffect, useRef, useState } from 'react'
import { useProductArgs } from '../interfaces/interfaces'

export const useProduct = ({
  onChange,
  product,
  value = 0
}: useProductArgs) => {
  const [counter, setCounter] = useState(value)

  const isControlled = useRef(!!onChange)

  useEffect(() => {
    setCounter(value)
  }, [value])

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product })
    }

    const newValue = Math.max(counter + value, 0)

    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  }

  return {
    counter,
    increaseBy
  }
}

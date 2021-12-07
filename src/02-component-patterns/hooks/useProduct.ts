import { useEffect, useRef, useState } from 'react'
import { useProductArgs } from '../interfaces/interfaces'

export const useProduct = ({
  initialValues,
  onChange,
  product,
  value = 0
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) return

    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset
  }
}

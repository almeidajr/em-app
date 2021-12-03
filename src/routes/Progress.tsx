import nprogress from 'nprogress'
import { useEffect, useLayoutEffect } from 'react'

interface ProgressProps {
  children: JSX.Element
}

export const Progress = ({ children }: ProgressProps) => {
  useLayoutEffect(() => {
    nprogress.start()
  })
  useEffect(() => {
    nprogress.done()
  })

  return children
}

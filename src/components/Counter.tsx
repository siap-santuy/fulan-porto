import { useEffect, useRef, useState } from 'react'

export default function Counter({
  to,
  suffix = '',
  decimals = 0,
  duration = 1600,
  active,
}: {
  to: number
  suffix?: string
  decimals?: number
  duration?: number
  active: boolean
}) {
  const [val, setVal] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(eased * to)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [active, to, duration])

  return <>{val.toFixed(decimals)}{suffix}</>
}

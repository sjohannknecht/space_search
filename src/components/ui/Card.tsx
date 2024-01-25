import type { ReactNode } from "react"
import "./Card.css"

interface CardProps {
  children: ReactNode
  className: string
}

function Card({ children, className }: CardProps) {
  return <div className={`Card ${className}`}>{children}</div>
}

export default Card

import styles from "@/pages/index.module.css"
import { ReactElement } from "react"

interface IProps {
  href: string
  children: ReactElement[]
}

export default function Link(props: IProps) {
  const { href, children } = props
  return (
    <a href={href} className={styles.card}>
      {children}
    </a>
  )
}

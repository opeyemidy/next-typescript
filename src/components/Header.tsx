import Head from "next/head"

interface IProps {
  title: string
}
export default function Header(props: IProps) {
  const { title } = props
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"

type Props = {
  site?: Queries.BlogIndexQuery["site"]
  title?: string
  children?: React.ReactNode
}
const Layout = (props: Props) => {
  const { site, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = site?.siteMetadata?.siteUrl === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header site={site} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

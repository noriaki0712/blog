import * as React from "react"
import { Link,PageProps } from "gatsby"
import * as styles from "./_index.module.scss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine"

type Props = {
  site?: Queries.BlogIndexQuery["site"]
}
const Header = ({site}: Props) => {

    console.log(site)
  return (
    <div className="global-wrapper" data-is-root-path>
      <header className={styles.header}>
        <div className={styles.nav_contents}>
					<div>
						<Link to="/">{site?.siteMetadata?.title}</Link>
					</div>
          <div className={styles.header_icons}>
            <a rel="noreferrer" target="_blank" href={site?.siteMetadata?.social?.twitter || ''} className={styles.icon}>
              <RiTwitterLine size="3rem" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={site?.siteMetadata?.social?.github || '/'}
              className={styles.icon}
            >
              <FaGithub size="3rem" />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = (props: PageProps<Queries.BlogIndexQuery>) => {
  const { data } = props
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMdx?.nodes
  if (posts.length === 0) {
    return (
      <Layout site={data.site} title={siteTitle}>
        <Bio />
        <p>投稿がありません</p>
      </Layout>
    )
  }

  return (
    <Layout site={data.site} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter?.title || post.fields?.slug
          return (
            <li key={post.fields?.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields?.slug || ""} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter?.date}</small>
                </header>
                <section>
                  <>{post.frontmatter?.description || ""}</>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="記事一覧" />

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
          github
        }
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

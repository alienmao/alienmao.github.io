import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const data = graphql`
      query MDXQuery($slug: String) {
        site {
          siteMetadata {
            title
          }
        }
        mdx(fields: { slug: { eq: $slug } }) {
          id
          body
          frontmatter {
            title
            description
          }
        }
      }
`

export default function MyPageLayout({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {graphql} from 'gatsby'

export const data = graphql`
      query MDXQuery($slug: String) {
        mdx(fields: { slug: { eq: $slug } }) {
          id
          body
        }
      }
`

export default function MyPageLayout({ data }) {
  return (
    <div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}
import React from "react"
import { graphql, Link } from "gatsby"

export default function MyFiles({ data }) {
  console.log(data.allMdx.nodes[0])
  return (
    <div>
    <h1>My Site's Mdx</h1>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>slug</th>
        </tr>
      </thead>
      <tbody>
        {data.allMdx.nodes.map((node, index) => (
          <tr key={index}>
            <td>{node.id}</td>
            <td><Link to={node.slug}>{node.slug}</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export const query = graphql`
  query {
    allMdx {
        nodes {
            slug
            id
        }
    }
  }
`
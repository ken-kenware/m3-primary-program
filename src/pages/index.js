import * as React from "react"
import { graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const titleStyle = {
  textAlign: 'center'
}

// markup
const IndexPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  return (
    <main style={pageStyles}>
      <h1 style={titleStyle}>McKinney 3rd Ward Primary Program Covers</h1>
      <title>Home Page</title>
      <Gallery images={images} />
    </main>
  )
}

export const pageQuery = graphql`
query ImagesForGallery {
  allFile(filter: {relativeDirectory: {eq: "covers"}}) {
    edges {
      node {
        childImageSharp {
          thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
          full: gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}

`

export default IndexPage

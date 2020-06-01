import React from "react"
import { graphql } from "gatsby";

import "../components/bootstrap.min.css";
import Layout from "../components/layout"
import BackgroundMain from "../components/BackgroundMain";
import Button from "../components/Button";

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundMain
      img={data.img.childImageSharp.fluid}
      title="The best personal training, right in your own home"
      styleClass="background"
      children={Button}
    />




  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "background.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage

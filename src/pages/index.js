import React from "react"
import { graphql } from "gatsby";

import "../components/bootstrap.min.css";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero.js";
import Card from "../components/Card";
import Equipment from "../components/Equipment";


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="The best personal training, right in your own home"
      styleClass="background"
    />
    <Card />
    <Equipment />
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

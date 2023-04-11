import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Slider } from "../components/slider/slider";
import { useStaticQuery, graphql } from "gatsby";

import "./index.scss";

const IndexPage = () => {
  const homeData = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/homepage.md/" }) {
          frontmatter {
            action
            title
          }
        }
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/slide/" } }) {
          edges {
            node {
              frontmatter {
                author1
                author2
                text1
                text2
                image1 {
                  childImageSharp {
                    fixed(height: 163) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                image2 {
                  childImageSharp {
                    fixed(height: 163) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Seo title="Test Project | Homepage" />
      <section className="container">
        <div className="row offer-container">
          <div className="offer-text">
            <h1 className="offer-title">
              {homeData.markdownRemark.frontmatter.title}
            </h1>
            <em className="offer-instructions">
              {homeData.markdownRemark.frontmatter.action}
            </em>
          </div>
        </div>
        <div className="row slider-container gx-0">
          <Slider data={homeData.allMarkdownRemark.edges} />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

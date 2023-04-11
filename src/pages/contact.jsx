import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "./contact.scss";

const ContactPage = () => {
  const contactData = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/contact.md/" }) {
        frontmatter {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Contact" />
      <div className="container  my-5">
        <h1 className="form__title">
          {contactData.markdownRemark.frontmatter.title}
        </h1>
        <div className="contact__form--description">
          {contactData.markdownRemark.frontmatter.description}
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

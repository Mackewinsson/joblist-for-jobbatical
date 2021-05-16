import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import styled from "styled-components";
import Footer from "../components/Footer";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const BodyWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`;

const index = ({ jobs }) => {
  return (
    <BodyWrapper>
      <Header />
      <Main jobs={jobs} />
      <Footer />
    </BodyWrapper>
  );
};

export default index;

export async function getServerSideProps() {
  // Fetch data from external API
  const client = new ApolloClient({
    uri: "https://api.graphql.jobs/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        jobs {
          id
          title
          tags {
            name
          }
          company {
            name
            logoUrl
          }
          isFeatured
          locationNames
        }
      }
    `,
  });
  return {
    props: {
      jobs: data.jobs,
    },
  };
}

import React from "react";
import styled from "styled-components";
import JobsContainer from "./JobsContainer";

const MainContent = styled.main`
  grid-area: content;
`;

const Main = ({ jobs }) => {
  return (
    <MainContent>
      <h1
        style={{
          paddingLeft: "100px",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Current Jobs
      </h1>
      <JobsContainer jobs={jobs} />
    </MainContent>
  );
};

export default Main;

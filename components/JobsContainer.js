import React from "react";
import JobCard from "./JobCard";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const JobsContainer = ({ jobs }) => {
  const Joblist = jobs.map((el) => {
    return (
      <JobCard
        title={el.title}
        company={el.company.name}
        tags={el.tags}
        isFeatured={el.isFeatured}
        locationNames={el.locationNames}
        logoUrl={el.company.logoUrl}
        key={el.id}
      />
    );
  });
  return <Ul>{Joblist}</Ul>;
};

export default JobsContainer;

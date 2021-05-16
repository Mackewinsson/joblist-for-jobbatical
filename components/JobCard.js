import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  width: 100%;
  height: 160px;
  background-color: rgb(240, 245, 255);
  background: ${(props) => (props.featured ? "rgb(240, 245, 255);" : "white")};
  display: flex;
`;
//JOB DETAILS
const JobWrapper = styled.div`
  width: 80%;
  padding-left: 100px;
  display: flex;
`;
const IconWrapper = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  position: relative;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 8px;
`;
const TitleandCompanyWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TagsWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledTags = styled.span`
  border: 2px solid blue;
  border-radius: 8px;
  height: 28px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 10px;
  color: blue;
  font-weight: 100;
`;

// LOCATION
const LocationWrapper = styled.div`
  width: 20%;
  padding-right: 100px;
  padding-left: 50px;

  display: flex;
  align-items: center;
`;

const JobCard = ({
  title,
  company,
  id,
  tags,
  isFeatured,
  locationNames,
  logoUrl,
}) => {
  const tagList = tags.map((el) => {
    return <StyledTags>{el.name}</StyledTags>;
  });

  return (
    <Wrapper key={id} featured={isFeatured}>
      <JobWrapper>
        <IconWrapper>
          {isFeatured ? (
            <small style={{ position: "absolute", top: "15px", color: "blue" }}>
              FEATURED
            </small>
          ) : (
            ""
          )}

          <Icon
            style={{
              background: `${
                logoUrl
                  ? `url("${logoUrl}") center center / contain no-repeat white}`
                  : "black"
              }`,
            }}
          />
        </IconWrapper>
        <TitleandCompanyWrapper>
          <h2 style={{ margin: "0" }}>{title}</h2>
          <small style={{ marginTop: "10px" }}>{company}</small>
        </TitleandCompanyWrapper>
        <TagsWrapper>{tagList}</TagsWrapper>
      </JobWrapper>
      <LocationWrapper>
        {locationNames ? locationNames : "Remote"}
      </LocationWrapper>
    </Wrapper>
  );
};

export default JobCard;

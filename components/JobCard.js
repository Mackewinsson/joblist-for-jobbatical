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
  @media (max-width: 800px) {
    padding-left: 30px;
  }
`;
const IconWrapper = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    > small {
      font-size: 0.7em;
    }
  }
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
  @media (max-width: 800px) {
    width: 80%;
  }

  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media (max-width: 800px) {
    > h2 {
      font-size: 1.3em;
      margin-left: 0.5em;
    }
  }
`;
const TagsWrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledTags = styled.span`
  border: 2px solid blue;
  border-radius: 8px;
  height: 28px;
  font-size: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.6em;
  padding-right: 0.6em;
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
  @media (max-width: 600px) {
    padding-right: 30px;
  }

  @media (max-width: 500px) {
    display: none;
  }
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
  const tagList = tags.map((el, i) => {
    if (i < 3) {
      if (isFeatured) {
        return <StyledTags key={i + el}>{el.name}</StyledTags>;
      } else {
        return (
          <span key={i + el} style={{ padding: "0 0.7em" }}>
            {el.name}
          </span>
        );
      }
    }
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

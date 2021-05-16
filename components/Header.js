import React from "react";
import styled from "styled-components";

const Head = styled.header`
  grid-area: header;
  background: #c6ffdd; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7797d,
    #fbd786,
    #c6ffdd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 421px;
  display: flex;
  justify-content: center;
`;

const SeachBar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 80px;
  align-items: center;
`;

const SearchInput = styled.input`
  height: 100%;
  border-radius: 8px 0px 0px 8px;
  border: none;
  width: 400px;
  padding: 0px;
`;

const SeachWrapper = styled.div`
  display: flex;
  height: 60px;
  border-radius: 50px;
  margin-top: 50px;
`;

const SearchButton = styled.button`
  background-color: black;
  color: white;
  width: 140px;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  margin-left: 0px;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Head>
      <SeachBar>
        <h1>Job List</h1>
        <span>By Mackewinsson</span>
        <SeachWrapper>
          <SearchInput />
          <SearchButton>Search</SearchButton>
        </SeachWrapper>
      </SeachBar>
    </Head>
  );
};

export default Header;

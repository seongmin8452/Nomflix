import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    margin-top: 10px;
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: rgba(25, 25, 25, 0.6);
`;

const Grid = styled.div`
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 140px);
    grid-gap: 15px;
`;

const LogoWrapper = styled.div`
    flex: 1;
    height: auto;
    background-color: rgba(24, 24, 28, 0.85);
    border-radius: 4px;
    padding: 5px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
`;

const CompanyLogo = styled.div`
    background-image: url(${(props) => props.bgUrl});
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Country = styled.div`
    width: 100%;
    height: auto;
    margin-top: 5px;
    background-color: rgba(24, 24, 28, 0.85);
    padding: 10px;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
`;

const ProductionsTab = ({ result: { production_companies, production_countries } }) => (
    <>
        <Item>
            Production Companies
            <Grid>
                {production_companies && production_companies.length > 0
                    ? production_companies.map((company, index) => (
                          <LogoWrapper>
                              <CompanyLogo
                                  bgUrl={
                                      company.logo_path
                                          ? `https://image.tmdb.org/t/p/w300${company.logo_path}`
                                          : require('../../../assets/noPosterSmall.png')
                                  }
                              />
                              <h1>{company.name}</h1>
                          </LogoWrapper>
                      ))
                    : 'None'}
            </Grid>
        </Item>
        <Item>
            Production Countries
            {production_countries && production_countries.length > 0 ? (
                production_countries.map((country, index) => <Country>{country.name}</Country>)
            ) : (
                <Country>None</Country>
            )}
        </Item>
    </>
);

export default ProductionsTab;

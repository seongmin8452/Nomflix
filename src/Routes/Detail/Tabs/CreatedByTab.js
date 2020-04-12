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

const ProfileWrapper = styled.div`
    flex: 1;
    height: auto;
    padding: 5px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
`;

const Profile = styled.div`
    background-color: rgba(24, 24, 28, 0.85);
    background-image: url(${(props) => props.bgUrl});
    border-radius: 4px;
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const MadeByTab = ({ result: { created_by } }) => (
    <Item>
        Peoples
        <Grid>
            {created_by && created_by.length > 0
                ? created_by.map((people, index) => (
                      <ProfileWrapper>
                          <Profile
                              bgUrl={
                                  people.profile_path
                                      ? `https://image.tmdb.org/t/p/w300${people.profile_path}`
                                      : require('../../../assets/noPosterSmall.png')
                              }
                          />
                          <h1>{people.name}</h1>
                      </ProfileWrapper>
                  ))
                : 'None'}
        </Grid>
    </Item>
);

export default MadeByTab;

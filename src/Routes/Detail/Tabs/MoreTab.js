import React from 'react';
import styled from 'styled-components';
import Poster from '../../../Components/Poster';

const Container = styled.div``;

const Content = styled.div`
    margin-top: 10px;
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: rgba(25, 25, 25, 0.6);
`;

const Item = styled.div`
    width: 100%;
    height: auto;
    margin-top: 5px;
    background-color: rgba(24, 24, 28, 0.85);
    padding: 10px;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
`;

const Homepage = styled.a.attrs((props) => ({
    href: props.children,
    target: '_blank',
}))`
    text-decoration: underline;
    display: inline-block;
`;

const SeasonsContainer = styled.div`
    width: 100%;
    height: 245px;
    padding-top: 10px;
    /* background-color: red; */
    display: flex;
    overflow-x: auto;
    overflow-y: visible;
`;

const Season = styled.div`
    height: auto;
    width: 125px;
    margin-right: 10px;
`;

const MoreTab = ({ result }) => (
    <Container>
        {result.homepage && (
            <Content>
                Homepage
                <Item>
                    <Homepage>{result.homepage}</Homepage>
                </Item>
            </Content>
        )}
        {result.status === 'Released' && (
            <Container>
                <Content>
                    Release Date
                    <Item>{result.release_date ? result.release_date : result.status}</Item>
                </Content>
                <Content>
                    Budget
                    <Item>{result.budget ? `${result.budget.toLocaleString()} $` : 'None'}</Item>
                </Content>
            </Container>
        )}
        {result.status === 'In Production' && (
            <Content>
                Status<Item>In Production</Item>
            </Content>
        )}
        {result.spoken_languages && result.spoken_languages.length > 0 && (
            <Content>
                Spoken Languages
                {result.spoken_languages.map(({ name }) => name !== '' && <Item>{name}</Item>)}
            </Content>
        )}
        {result.seasons && (
            <Content>
                Seasons
                <SeasonsContainer>
                    {result.seasons.map((season) => (
                        <Season>
                            <Poster
                                key={season.id}
                                id={season.id}
                                imageUrl={season.poster_path}
                                title={season.name}
                                year={season.air_date}
                                onlyImage={true}
                            />
                        </Season>
                    ))}
                </SeasonsContainer>
            </Content>
        )}
    </Container>
);

export default MoreTab;

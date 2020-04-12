import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Message from '../../Components/Message';
import Tabs from './Tabs';
import Poster from '../../Components/Poster';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
    overflow: hidden;
`;

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 69%;
    margin-left: 10px;
`;

const Title = styled.h3`
    font-size: 32px;
`;

const ItemContainer = styled.div`
    margin-top: 20px;
    height: 16px;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.div`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
    margin: 20px 0;
`;

const IMDb = styled.a`
    height: 16px;
    width: 32px;
    display: inline-block;
    top: 50px;
    position: absolute;
    background-image: url(${require('../../assets/IMDb.svg')});
`;

const Stars = styled.span`
    color: #f1c40f;
`;

const Collection = styled(Link)`
    width: 125px;
    height: 180px;
`;

const DetailPresenter = ({ result, loading, error }) =>
    loading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader />
        </>
    ) : (
        <>
            {result && (
                <Container>
                    <Helmet>
                        <title>{result.original_title ? result.original_title : result.original_name} | Nomflix</title>
                    </Helmet>
                    <BackDrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                    <Content>
                        <Cover
                            bgImage={
                                result.poster_path
                                    ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                                    : require('../../assets/noPosterSmall.png')
                            }
                        />
                        <Data>
                            <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                            <ItemContainer>
                                {result.release_date && (
                                    <>
                                        <Item>{result.release_date.substring(0, 4)}</Item>
                                        <Divider>•</Divider>
                                    </>
                                )}
                                {result.first_air_date && (
                                    <>
                                        <Item>{result.first_air_date.substring(0, 4)}</Item>
                                        <Divider>•</Divider>
                                    </>
                                )}
                                {result?.runtime > 0 ? (
                                    <>
                                        <Item>{`${result.runtime} min`}</Item>
                                        <Divider>•</Divider>
                                    </>
                                ) : null}
                                {result?.episode_run_time > 0 ? (
                                    <>
                                        <Item>{`${result.episode_run_time[0]} min`}</Item>
                                        <Divider>•</Divider>
                                    </>
                                ) : null}
                                <Item>
                                    {result.genres && result.genres.length > 0
                                        ? result.genres.map((genre, index) =>
                                              index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                                          )
                                        : 'No Genres'}
                                </Item>
                                {result.imdb_id && (
                                    <>
                                        <Divider>•</Divider>
                                        <Item>
                                            <IMDb href={`https://www.imdb.com/title/${result.imdb_id}/`} target="_blank" />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </Item>
                                    </>
                                )}
                                {result.vote_average !== 0 && (
                                    <>
                                        <Divider>•</Divider>
                                        <Stars role="img" aria-label="rating">
                                            {['☆', '☆', '☆', '☆', '☆'].fill('★', 0, Math.round(result.vote_average / 2)).join(' ')}
                                        </Stars>
                                    </>
                                )}
                            </ItemContainer>
                            <Overview>{result.overview}</Overview>
                            <Tabs result={result} />
                        </Data>
                        {result.belongs_to_collection && (
                            <Collection to={`/collection/${result.belongs_to_collection.id}`}>
                                <Poster
                                    key={result.belongs_to_collection.id}
                                    id={result.belongs_to_collection.id}
                                    imageUrl={result.belongs_to_collection.poster_path}
                                    title={result.belongs_to_collection.name}
                                    isCollection={true}
                                />
                            </Collection>
                        )}
                    </Content>
                </Container>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </>
    );
DetailPresenter.propTypes = {
    Result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default DetailPresenter;

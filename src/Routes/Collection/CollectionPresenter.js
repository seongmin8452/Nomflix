import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
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
    width: 70%;
    margin-left: 10px;
`;

const Title = styled.h3`
    font-size: 32px;
`;

const Overview = styled.div`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
    margin: 20px 0;
`;

const CollectionPresenter = ({ result, loading, error }) =>
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
                        <title>{result.name} | Nomflix</title>
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
                            <Title>{result.name}</Title>
                            <Overview>{result.overview}</Overview>
                            {result.parts && result.parts.length > 0 && (
                                <Section title="Movies belonged to this collection">
                                    {result.parts.map((movie) => (
                                        <Poster
                                            key={movie.id}
                                            id={movie.id}
                                            imageUrl={movie.poster_path}
                                            title={movie.title}
                                            rating={movie.vote_average}
                                            year={movie.release_date}
                                            isMovie={true}
                                        />
                                    ))}
                                </Section>
                            )}
                        </Data>
                    </Content>
                </Container>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </>
    );
CollectionPresenter.propTypes = {
    Result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default CollectionPresenter;

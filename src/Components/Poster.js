import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${(props) => props.bgUrl});
    width: 125px;
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 5px;
    right: 5px;
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const ImageContainerOnly = styled.div`
    margin-bottom: 5px;
    position: relative;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false, isCollection = false, onlyImage = false }) =>
    onlyImage ? (
        <Container>
            <ImageContainerOnly>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('../assets/noPosterSmall.png')} />
            </ImageContainerOnly>
            <Title>{title.length > 18 ? `${title.substring(0, 15)}...` : title}</Title>
            <Year>{year && year.substring(0, 4)}</Year>
        </Container>
    ) : (
        <Link to={isCollection ? `/collection/${id}` : isMovie ? `/movie/${id}` : `/show/${id}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('../assets/noPosterSmall.png')} />
                    {!isCollection && (
                        <Rating>
                            <span role="img" aria-label="rating">
                                ⭐
                            </span>{' '}
                            {rating}/10
                        </Rating>
                    )}
                </ImageContainer>
                <Title>{title.length > 18 ? `${title.substring(0, 15)}...` : title}</Title>
                <Year>{year && year.substring(0, 4)}</Year>
            </Container>
        </Link>
    );

PerformanceEntry.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool,
};

export default Poster;

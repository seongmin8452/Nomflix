import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    margin-top: 10px;
    width: 100%;
    height: auto;
`;

const NoVideo = styled.div`
    width: 100%;
    height: 0;
    background-image: url(${require('../../../assets/NoVideo.png')});
    background-size: cover;
    background-position: center center;
    padding: 10px 10px 56.25% 10px;
`;

const VideoContainer = styled.div`
    width: 100%;
    height: auto;
    overflow-x: hidden;
    background-image: url(${require('../../../assets/Loading.gif')});
    background-size: cover;
    background-position: center center;
`;

const Viewer = styled.div`
    width: calc(100% * ${(props) => props.num});
    height: auto;
    display: flex;
`;

const WrapWrap = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;

const Wrap = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
`;

const Video = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const VideoButtons = styled.div`
    height: auto;
    width: 100%;
    margin-top: 5px;
    text-align: center;
`;

const VideoButton = styled.a`
    display: inline-block;
    background-color: rgba(20, 20, 20, 0.8);
    width: 20px;
    height: 20px;
    margin: 5px;
    border-radius: 50%;
    border: 1px solid rgb(100, 100, 100);
    :hover {
        background-color: rgb(100, 100, 100);
    }
`;

const VideoTab = ({
    result: {
        videos: { results: videos },
    },
}) => (
    <Item>
        {videos.length === 0 ? (
            <NoVideo>No videos find</NoVideo>
        ) : (
            <>
                <VideoContainer>
                    <Viewer num={`${videos.length}`}>
                        {videos.map((video, index) => (
                            <WrapWrap id={`${index}`}>
                                <Wrap>
                                    <Video src={`https://www.youtube.com/embed/${video.key}`} />
                                </Wrap>
                            </WrapWrap>
                        ))}
                    </Viewer>
                </VideoContainer>
                <VideoButtons>
                    {videos.map((video, index) => (
                        <VideoButton href={`#${index}`} />
                    ))}
                </VideoButtons>
            </>
        )}
    </Item>
);
export default VideoTab;

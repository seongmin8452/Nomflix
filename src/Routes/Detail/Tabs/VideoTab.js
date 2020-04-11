import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    width: 100%;
    height: auto;
    overflow-x: hidden;
`;

const Viewer = styled.div`
    width: calc(100% * ${(props) => props.num});
    height: auto;
    display: flex;
`;

const Testt = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;

const Test = styled.div`
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

const VideoTab = ({ result }) =>
    result.videos.results.length === 0 ? (
        <h1>{'No videos find :('}</h1>
    ) : (
        <>
            <VideoContainer>
                <Viewer num={`${result.videos.results.length}`}>
                    {result.videos.results.map((video, index) => (
                        <Testt id={`${index}`}>
                            <Test>
                                <Video src={`https://www.youtube.com/embed/${video.key}`} />
                            </Test>
                        </Testt>
                    ))}
                </Viewer>
            </VideoContainer>
            <VideoButtons>
                {result.videos.results.map((video, index) => (
                    <VideoButton href={`#${index}`} />
                ))}
            </VideoButtons>
        </>
    );
export default VideoTab;

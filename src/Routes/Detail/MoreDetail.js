import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import VideoTab from './Tabs/VideoTab';
import DetailsTab from './Tabs/DetailsTab';

const MenuContainer = styled.div`
    width: 50%;
    height: auto;
`;

const MenuTab = styled(NavLink)`
    display: flex;
    flex: 1;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 3px solid ${(props) => (props.current ? '#bdc3c7' : 'transparent')};
`;

const Menu = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    background-color: rgba(25, 25, 25, 0.6);
`;

const MenuContents = styled.div`
    width: 100%;
    height: auto;
`;

const MenuContent = styled.div`
    width: 100%;
    height: auto;
    padding: 2% 0;
`;

const MoreDetail = withRouter(({ location, result }) => (
    <MenuContainer>
        <Menu>
            <MenuTab to={`${location.pathname}?tab=trailer`} current={location.search === '?tab=trailer'}>
                Trailer
            </MenuTab>
            <MenuTab to={`${location.pathname}?tab=details`} current={location.search === '?tab=details'}>
                Details
            </MenuTab>
            <MenuTab to={`${location.pathname}?tab=more`} current={location.search === '?tab=more'}>
                More
            </MenuTab>
        </Menu>
        <MenuContents>
            {(location.search === '?tab=trailer' || location.search === '') && (
                <MenuContent>
                    <VideoTab result={result} />
                </MenuContent>
            )}
            {location.search === '?tab=details' && (
                <MenuContent>
                    <DetailsTab result={result} />
                </MenuContent>
            )}
            {location.search === '?tab=more' && <MenuContent></MenuContent>}
        </MenuContents>
    </MenuContainer>
));

export default MoreDetail;

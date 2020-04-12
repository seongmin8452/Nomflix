import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import VideoTab from './Tabs/VideoTab';
import ProductionTab from './Tabs/ProductionTab';
import MadeBy from './Tabs/CreatedByTab';
import CreatedByTab from './Tabs/CreatedByTab';

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
    transition: border-bottom 0.5s ease-in-out;
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
`;

const Tabs = withRouter(({ location, result }) => (
    <MenuContainer>
        <Menu>
            <MenuTab to={`${location.pathname}?tab=video`} current={location.search === '?tab=video' || location.search === ''}>
                Video
            </MenuTab>
            <MenuTab to={`${location.pathname}?tab=production`} current={location.search === '?tab=production'}>
                Production
            </MenuTab>
            {result.created_by && result.created_by.length > 0 && (
                <MenuTab to={`${location.pathname}?tab=made_by`} current={location.search === '?tab=made_by'}>
                    Created By
                </MenuTab>
            )}
            <MenuTab to={`${location.pathname}?tab=more`} current={location.search === '?tab=more'}>
                More
            </MenuTab>
        </Menu>
        <MenuContents>
            {(location.search === '?tab=video' || location.search === '') && (
                <MenuContent>
                    <VideoTab result={result} />
                </MenuContent>
            )}
            {location.search === '?tab=production' && (
                <MenuContent>
                    <ProductionTab result={result} />
                </MenuContent>
            )}
            {location.search === '?tab=made_by' && (
                <MenuContent>
                    <MadeBy result={result} />
                </MenuContent>
            )}
            {location.search === '?tab=more' && (
                <MenuContent>
                    <CreatedByTab result={result} />
                </MenuContent>
            )}
        </MenuContents>
    </MenuContainer>
));

export default Tabs;

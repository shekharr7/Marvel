import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import { Provider, History, Trigger } from 'react-history-search';
import 'react-history-search/dist/index.css'; // import css

interface headerProps {
    handleClick: (name: any) => void;
}

export const Header = (props: headerProps) => {

    const searchField = React.createRef<HTMLInputElement>();
    const handleSearch = (value: string) => {
        props.handleClick(value);
    }
    return (
        <Provider value={{
            handleSearch,
            isEnterDown: true,
            limitHistory: 5
        }}>
        <Container>
            <Row>
                <Col><h1>Marvel</h1></Col>
                <Col xs={6}>
                    <History isHint isTabFill>
                        <input id="search-field" type="text" style={{width: '100%'}} placeholder="Search" className="mr-sm-12" ref={searchField} />
                    </History>
                </Col>
                <Col className="text-right">
                    <Trigger dataId="search-field">
                        <Button style={{width: '100%'}} variant="outline-success">Search</Button>
                    </Trigger>
                </Col>
            </Row>
        </Container>
        </Provider>
    )
}

export default Header;
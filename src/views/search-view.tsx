import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SearchResult from "./search-result";
import '../stylesheet/custom.scss';
import Header from "./header";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";

const mapStateToProps = (state: any) => {
    return state;
}

class SearchView extends React.Component<any, any> {

    render() {
        const result = this.props;
        const { data } = result.data;
        const metaData = data?.results;

        return (
            <div className="search-view">
                <Container>
                    <Row>
                        <Col>
                            <Header handleClick={this.props.fetchData} />
                        </Col>
                    </Row>
                    <Row>
                        {!metaData && <h1 style={{width: '100%'}} className='text-center'>Enter your favorite character or series</h1>}
                    </Row>
                    <Row lg={4}>
                        {metaData && metaData.map((item: object, index: number) => {
                                return (
                                    <Col key={index}>
                                        <SearchResult item={item}/>
                                    </Col>
                                )
                            }
                        )}
                    </Row>
                    <Row>
                        {metaData?.length === 0 && <h1 className="text-center" style={{color: 'red', width: '100%'}}>Sorry, we couldn't find any results for your search</h1>}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, actionCreators)(SearchView);

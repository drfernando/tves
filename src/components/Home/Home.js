import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Latest from "../Latest/Latest";
import Politics from "../Politics/Politics";
import Sports from "../Sports/Sports";

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <Latest/>
            <Row>
                <Col><Sports/></Col>
                <Col><Politics/></Col>
            </Row>
            </div>
        );
    }
}
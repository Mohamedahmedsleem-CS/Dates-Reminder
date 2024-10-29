import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import { person } from '../data'

const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8">لديك {person.length} مواعيد</Col>
  </Row>
  )
}

export default DatesCount
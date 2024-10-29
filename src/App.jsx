import { Button, Container, Row, Col } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./component/DatesCount";
import DatesList from "./component/DatesList";
import DatesAction from "./component/DatesAction";
import React ,{ useState } from "react";

function App() {
  const [personData, stePersonData] = useState(person);
  const onDelete=()=>{
    // stePersonData(personData.filter((person)=>person.id !== 1))
    stePersonData([])
  }

  const onViewData=()=> {
    stePersonData(person)
  }

  return (
    <div className="font color-body ">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DatesAction deleteData={onDelete} viewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;

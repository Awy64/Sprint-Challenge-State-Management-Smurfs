import React, {useEffect} from "react";
import { Card, CardContent, Container } from '@material-ui/core';
import {connect} from 'react-redux';
import {getSmurfs} from "../store/actions";



const SmurfList = (props, {smurfs}) => {
  useEffect(() => {
  props.getSmurfs()
}, [smurfs])

  return(
    <div>
      {props.smurfs.map(e => {
        return(
          <Container key={e.id} maxWidth="sm">
          <Card>
            <CardContent>
              <h3>Name: {e.name}</h3>
              <h4>Age: {e.age}</h4>
              <h5>Height: {e.height}</h5>
            </CardContent>
          </Card>
          </Container>
)})}
    </div>
  )
}

const mapStateToProps = state => {
  console.log('state', state)
  return({
  smurfs: state.smurfs,
  errors: state.errors,
})}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);
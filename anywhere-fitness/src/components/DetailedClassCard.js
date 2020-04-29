import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux';

const DetailedClasses = (props) => {
  const [ classDetail, setClassDetail ] = useState('')
  const params = useParams();

  useEffect(()=>{
    const [ filter ] = props.classes.filter(classObj => classObj.id == params.id)
    setClassDetail(filter) 
  }, [params.id])

  // console.log('filtered: ', classDetail, 'params.id: ',params.id, 'redux classes',props.classes)
  if (!classDetail) {
    return <div>Loading class information...</div>
  }
  console.log(classDetail)
  return (
    <div className="classDetails">
      <h2>{classDetail.name}</h2>
      <div>
        <p>Time: {classDetail.time}</p>
      </div>
      <div>
        <p>Class Description: {classDetail.description}</p>
      </div>
      <div>
        <p>Location: {classDetail.address}</p>
      </div>
      <div>
        <p>Class starting: {classDetail.startDate}</p>
      </div>
      <div>
        <p>Cost of class: {classDetail.cost}</p>
      </div>
      <div>
        <p>Duration: {classDetail.duration}</p>
      </div>
      <div>
        <p>Fitness level: {classDetail.intensity}</p>
      </div>
      <div>
        <p>Class capacity: {classDetail.maxSize}</p>
      </div>
      <div>
        <p>Equipment needed: {classDetail.equiptmentRequired}</p>
      </div>
      <div>
        <p>Upon arrival: {classDetail.arrivalDescription}</p>
      </div>
      <div>
        <p>Additional Info: {classDetail.additionalInfo}</p>
      </div>
      <Link to='/classes'>
        Back to class list
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    classes: state.classes.classes
  }
}


export default connect(mapStateToProps, null )(DetailedClasses);

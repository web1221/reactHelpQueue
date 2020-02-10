import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  var pinkIssueStyle = {
    backgroundColor: "pink"
  }
  return (
    <div style={myStyledComponentStyles}>
    <h3>{props.location} - {props.names}</h3>
    <p style={pinkIssueStyle}><em>{props.issue}</em></p>
    <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;

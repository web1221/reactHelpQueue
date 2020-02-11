import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <div>
    <Header/>
    <TicketList/>
    </div>
  );
}

export default App;

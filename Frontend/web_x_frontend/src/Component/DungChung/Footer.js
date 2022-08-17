import React, {useState} from "react";
import axios from "axios";


function Footer() {
    const [text, setText] = useState("");

    function getQuote() {
      axios.get("https://localhost:7161/weatherforecast",  { crossdomain: true }).then(response => {
        console.log(response.data);
        setText(response.data[0].summary);
      });
      // WARNING: For GET requests, body is set to null by browsers.


    }

    function insertQuote() {
        axios.post("http://localhost:7161/api/todoitems",  
        { 
            crossdomain: true,
            id: "string",
            name: "string",
            address: "string",
            city: "string",
            age: 0,
            gender: "string"
        })
        .then(response => {
          console.log(response);
          setText(response.data[0].name);
        });
      }

    return (
      <div>
        <button onClick={getQuote}>
          Generate Quote
        </button>
        <button onClick={insertQuote}>
          insert Quote
        </button>
        <h1>{text}</h1>
      </div>
    )
  }
export default Footer;
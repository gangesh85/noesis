import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Spinkit.css";

function Data() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div class="spinner">
          <div class="bounce1" />
          <div class="bounce2" />
          <div class="bounce3" />
        </div>
      ) : (
        userData.name
      )}

      {userData.map((users) => (
        <div className="list" key={users.id}>
          <h1>{users.name}</h1>
          <strong>Email: </strong> {users.email} <br />
          <strong>Phone: </strong> {users.phone} <br />
          <strong>Website: </strong> {users.website}
        </div>
      ))}
    </div>
  );
}

export default Data;

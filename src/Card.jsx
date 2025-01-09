import React, { useState, useEffect } from "react";
import { axios } from 'axios';

const Card = () => {
  const number = (Math.floor(Math.random() * 999) + 1);
  const [name, setName] = useState({});

  useEffect(() => {
    const getImage = async () => {
      const response = await axios.get(' https://picsum.photos/id/' + number + '/info');
      setName(response?.data);
    }
    getImage();
  }, []);

  return (
    <div className="card">
      <h1>{name.author}</h1>
      <img src={`${name.download_url}.jpg`} alt="" />
      <a href={`${name.download_url}.jpg`} download target="_blank">DOWNLOAD</a>
    </div>
  )
}

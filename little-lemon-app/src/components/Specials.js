import React, { useState } from 'react'
import Card from './Card'

import axios from 'axios';
import { useEffect } from 'react';






export default function Specials() {

  const [menuItems, setMenuItems] = useState([])


  useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`https://littlelemonrestaurant-git-newbranch-mdogan89s-projects.vercel.app/restaurant/menu/`).then((response) => {
      const menuItems = response.data
      setMenuItems(menuItems)
      console.log(menuItems);
    }).catch(error => {
      console.log(error);
    });
  }, []);



  return (
    <section id='specials'>
      <article>
        <h1>This weeks specials!</h1>
        <button id="menu-button">Online Menu</button>
      </article>
      <article id="cards">
        {menuItems.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            price={special.price}
            description={special.description}
            imageSrc={special.image}
          />
        ))}
      </article>
    </section>
  )
}

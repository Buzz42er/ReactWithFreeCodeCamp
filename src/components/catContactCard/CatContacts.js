import React from 'react'
import ContactCard from './ContactCard'
import pumpkin from '"./catsImg/pumpkin.png"'

const CatContacts = () => {
    return (
        <div className="contacts">
            <ContactCard 
                img="./catsImg/mr-whiskerson.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                mail="mr.whiskaz@catnap.meow"   
            />
            
            <ContactCard 
                img="./catsImg/fluffykins.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                mail="fluff@me.com"
            />
            
            <ContactCard 
                img="./catsImg/felix.jpg"
                name="Felix"
                phone="(212) 555-4567"
                mail="thecat@hotmail.com"
            />
            
            <ContactCard 
                img={pumpkin}
                name="Pumpkin"
                phone="(0800) CAT KING"
                mail="pumpkin@scrimba.com"
            />
            
        </div>
    )

}

export default CatContacts

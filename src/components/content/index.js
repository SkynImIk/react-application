import React, { useState } from "react";
import './style.css';
import Card from './card';
import Article from './article';
import mockCards from './mock/cards.json'

function Content () {
    const cards = mockCards;

 const [selectedTag, setSelectedTag] = useState();
 console.log('selectedTag:', selectedTag);

 let selectedTagStyle = {};
 if (selectedTag) {
  selectedTagStyle.opacity = 1;
  selectedTagStyle.transform = 'scaleY(1)';
 }
 const [selectedCard, setSelectedCard] = useState();
 console.log('selectedCard:', selectedCard);
 return (
  <div className="content-container">
   <div
    className="selected-tag"
    style={selectedTagStyle}
   >{selectedTag}</div>
   {
    !selectedCard && cards.map(el => {
     let isVisible = true;
     if (selectedTag) {
      isVisible = selectedTag === el.tag;
     }
     return (<Card
      isVisible={isVisible}
      image={el.image}
      description={el.description}
      title={el.title}
      tag={el.tag}
      date={el.date}
      setTag={setSelectedTag}
      setSelectedCard={() => setSelectedCard(el)}
     />);
    })
   }
   {selectedCard && <Article card={selectedCard}/>}
   <div
    className="return-button"
    onClick={() => {
     setSelectedTag();
     setSelectedCard();
    }}
   >All posts</div>
  </div>
       );
};

export default Content;


/**
 * let a = 45;
 * let b = 67;
 * let c;
 * c = a $$ b // => 67 ;;
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './state-drills/Accordion';

// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import RouletteGun from './state-drills/RouletteGun';

// ReactDOM.render(<HelloWorld />, document.getElementById('root'));
// ReactDOM.render(<Bomb />, document.getElementById('root'));
// ReactDOM.render(<RouletteGun />, document.getElementById('root'));

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
];

ReactDOM.render(<Accordion sections={sections}/>, document.getElementById('root'));
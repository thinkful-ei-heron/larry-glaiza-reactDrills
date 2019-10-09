import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Accordion from './Accordion';

const  sections = [
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
]

  describe('<ul>', () => {
    it('renders empty list', () => {
        const result = renderer.create(<Accordion />).toJSON();
        expect(result).toMatchSnapshot(); 
    });

  });
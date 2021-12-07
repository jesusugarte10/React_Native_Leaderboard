import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
describe('<App />', () => {
  test('constructing page', async () => {
    var tree;
    await renderer.act(async () => {
      tree = renderer.create(<App />);
      await new Promise((r) => setTimeout(r, 1000));
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
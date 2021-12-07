import React from 'react';
import renderer from 'react-test-renderer';

import Leaderboard, {getLeaderboard, listItem} from '../app/Leaderboard';

describe('<Leaderboard />', () => {
  test('handling network error', () => {
    let tree = listItem('', -1, 0).props.children;
    expect(tree.props.children).toBe('Unable to reach network. Try again later.');
  });

  test('fetching leaderboard', () => {
    return getLeaderboard().then(data => {
      expect(data.length.toString()).toMatch('10');
    });
  });

  test('constructing list', async () => {
    var tree;
    await renderer.act(async () => {
      tree = renderer.create(<Leaderboard />);
      await new Promise((r) => setTimeout(r, 1000));
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('refreshing page', async () => {
    var tree;
    await renderer.act(async () => {
      tree = renderer.create(<Leaderboard />);
      await new Promise((r) => setTimeout(r, 1000));
      tree.toJSON().children[0].children[2].props.refreshControl.props.onRefresh();
      await new Promise((r) => setTimeout(r, 1000));
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });

});

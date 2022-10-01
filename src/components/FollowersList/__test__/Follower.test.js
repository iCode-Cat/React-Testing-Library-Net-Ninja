import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FollowersList from '../FollowersList';

import { BrowserRouter } from 'react-router-dom';

const MockFollower = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe('FollowersList', () => {
  beforeEach(() => console.log('Running before each test'));
  beforeAll(() => console.log('Running once before all tests'));
  afterEach(() => console.log('Running after each test'));
  afterAll(() => console.log('Running once after all tests'));
  it('fetch 1 item', async () => {
    await render(<MockFollower />);
    const item = await screen.findByTestId('follower-item-1');
    item.debug();
    expect(item).toBeInTheDocument();
  });

  it('fetch items', async () => {
    await render(<MockFollower />);
    const items = await screen.findAllByTestId(/follower-item/i);
    expect(items.length).toBe(5);
  });
});

import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow'
import {mockEpisodesData} from './utils/mockEpisodesData'

test("renders App component", () => {
  // arrange
  render(<App />);
});


jest.mock('./api/fetchShow')
mockFetchShow.mockResolvedValue(mockEpisodesData)

it('should reveal a list when the dropdown is clicked', async () => {
    const {getByText, queryAllByText} = render(<App />)
    await waitFor(() => {
        userEvent.click(getByText(/season/i))
    })
    expect(queryAllByText(/season/i)).toHaveLength(5)

})

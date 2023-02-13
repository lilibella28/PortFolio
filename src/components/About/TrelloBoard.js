import React from 'react';
import TrelloBoard from 'react-trello';

const MyTrelloBoard = () => {
  return (
    <TrelloBoard
      data={{
        lanes: [
          {
            id: 'lane1',
            title: 'To Do',
            cards: [
              {id: 'card1', title: 'Task 1'},
              {id: 'card2', title: 'Task 2'},
            ],
          },
          {
            id: 'lane2',
            title: 'In Progress',
            cards: [
              {id: 'card3', title: 'Task 3'},
            ],
          },
          {
            id: 'lane3',
            title: 'Done',
            cards: [],
          },
        ],
      }}
    />
  );
};

export default MyTrelloBoard;

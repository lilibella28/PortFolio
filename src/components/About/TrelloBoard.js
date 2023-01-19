import React from 'react';

function TrelloBoard(props)  {
 
    return (
      <div>
        <iframe
          title="Trello Board"
          src={`https://trello.com/b/BsJkWSUz/dailygoal&embedded=true`}
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    );
  
}

export default TrelloBoard;
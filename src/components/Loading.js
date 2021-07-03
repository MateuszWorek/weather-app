import React from 'react';
import { VscLoading } from 'react-icons/vsc';

const Loading = () => {
  return (
    <div className="loading">
      <h4 className="loading__heading">pobieranie artykułów...</h4>
      <VscLoading className="loading__icon" />
    </div>
  )
}

export default Loading

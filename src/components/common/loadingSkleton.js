import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

export class loadingSkleton extends Component {
  render() {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
}

export default loadingSkleton;

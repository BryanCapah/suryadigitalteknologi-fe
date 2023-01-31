import React from 'react';
import Discover from './Discover';
import apis from './Discover/apis';

export default function Routes() {

  apis.hooks.useApiConfig()
  return <Discover />;
}

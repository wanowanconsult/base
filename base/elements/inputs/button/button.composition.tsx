import * as React from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button onClick={() => new Promise((res) => setTimeout(res, 2000))}>Hello World</Button>
);

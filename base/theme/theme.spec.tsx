import * as React from 'react';
import {render} from '@testing-library/react';

it('should render with the correct text', () => {
    const {getByText} = render(<BasicTheme/>);
    const rendered = getByText('hello from Theme');
    expect(rendered).toBeTruthy();
});

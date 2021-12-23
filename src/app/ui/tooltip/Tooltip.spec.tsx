import { shallow } from 'enzyme';
import React from 'react';

import Tooltip from './Tooltip';

describe('Tooltip', () => {
    it('displays tooltip text', () => {
        const component = shallow(<Tooltip>Hello world</Tooltip>);

        expect(component.text())
            .toEqual('Hello world');
    });

    it('has expected CSS classes', () => {
        const component = shallow(<Tooltip>Hello world</Tooltip>);

        expect(component.hasClass('tooltip'))
            .toEqual(true);
    });

    it('has expected test ID attribute', () => {
        const component = shallow(<Tooltip testId="foobar">Hello world</Tooltip>);

        expect(component.prop('data-test'))
            .toEqual('foobar');
    });
});

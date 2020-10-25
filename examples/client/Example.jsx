import React from 'react';
import '@atlaskit/css-reset';
import { hot } from 'react-hot-loader/root';

import { Description, Code, Component, Properties } from '@scripty/react-examples';
import { Flyout } from '../../src';

const Example = () => {

    const code = `import React from 'react';
import { Flyout } from '@scripty/react-flyout';

const App = () => {
    return <Flyout color={'#000'}/>
}
`
    const propertiesData = [
        {
            property: 'color',
            description: 'hex color',
            type: 'string',
            default: '#fff'
        }
    ]

    return (
        <Description title={'Flyout'}>
            <Component>
                <Flyout color={'#000'}/>
            </Component>

            <Code>
                {code}
            </Code>

            <Properties data={propertiesData}/>
        </Description>
    );
};

export default hot(Example);

import React from 'react';

import { Container } from './Styles';

export const Flyout = (props) => {
    const {
        color = '#fff',
    } = props;

    return (
        <Container color={color}>
            react-flyout
        </Container>
    );
};

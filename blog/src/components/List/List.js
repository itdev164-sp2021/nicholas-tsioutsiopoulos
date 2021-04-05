import { BaseContainer } from '../BaseContainer'
import React from 'react'
import PropTypes from 'prop-types'

export const List = ({ children, ...rest }) => (
    <BaseContainer
        flex
        flexDirection='column'
        mx='auto'
        as='ul'
        {...rest}
    >
        {children}
    </BaseContainer>
)

List.propTypes = {
    children: PropTypes.node.isRequired
}
import { Link } from "gatsby"
import { H1 } from '../Heading'
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Outer = styled.header`
    background: ${props => props.theme.header.backgroundColor};
    margin-bottom: 1.45rem;
    `

const Inner = styled.div`
    margin: 0px auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    `


const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: purple;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <H1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </H1>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }

import React from 'react'

import { Container } from './styles'

import Logo from '../../assets/logo.svg'

export default function index() {
    return (
        <Container>
            <img src={Logo} alt="logo" />
        </Container>
    )
}

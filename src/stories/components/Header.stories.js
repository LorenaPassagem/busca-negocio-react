import React from 'react'

import Header from '../../components/Header'
import Logo from '../../components/Logo'
import IconSearch from '../../components/Search'

export default {
    title: 'Components/Header',
    components: Header
}

export const Default = () => 
<Header> 
    <Logo />
    <IconSearch />
</Header>
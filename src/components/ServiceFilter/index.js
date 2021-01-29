import React from 'react'
import { Filter, Label } from '../Filter';
import ServiceFilterStyle from './styles';


function ServiceFilter() {
 return(
    <ServiceFilterStyle>
        <Filter/>
        <Label> Guia de Serviço</Label>
    </ServiceFilterStyle>
 )
}
export default ServiceFilter;
import styled from 'styled-components'
import { Filter } from '../Filter';

const ServiceFilterStyle = styled.nav`
    display: flex;
    background-color: #3a4042;

    & > ${Filter} {
        padding-right: 20px;
    }
`;

export default ServiceFilterStyle;
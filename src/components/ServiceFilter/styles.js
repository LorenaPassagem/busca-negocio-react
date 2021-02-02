import styled from 'styled-components'
import { Filter } from '../Filter';

const ServiceFilterStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: #3a4042;
    padding: 10px;

    & > ${Filter} {
        padding-right: 20px;
    }
`;

export default ServiceFilterStyle;
import styled from 'styled-components';

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
    padding: 10px 0;
`

export const Category = styled.div<{ categoryColor: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.categoryColor};
`

export const Value = styled.div<{ valueColor: string }>`
    color: ${props => props.valueColor};
` 
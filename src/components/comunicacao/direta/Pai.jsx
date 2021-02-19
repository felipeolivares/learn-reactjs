import React from 'react';
import Filho from './Filho'

export default props =>
<div>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Felipe</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
</div>;
import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi'

import { Container, Check, Title } from './styles';

export default function Checkbox({ title, value, onChange }) {
    const [checked, setChecked] = useState(false);
    return (
        <Container>
            <Check onClick={() => setChecked(!checked)}>
                {checked && <FiCheck size={15} />}
            </Check>
            <Title>{title}</Title>
        </Container>
    );
}

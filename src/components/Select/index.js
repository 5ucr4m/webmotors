import React, {useState, useEffect} from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { Container, ListOptions, Loading, Item } from './styles';

function Select({ span, title, option, loading, data, value, onSelect}) {
    const [showList, setShowList] = useState(false);
    const [defaultOption, setDefaultOption]= useState(option);
    
    function handleSelect(item) {
        onSelect(item);
        setDefaultOption(item.Name)
    }

    useEffect(() => {
        if (!value) {
            setDefaultOption(option)
        }
    }, [option, value])

    function renderList() {

        return (
            <ListOptions>
                {data.map(item => (
                    <Item key={item.ID} onClick={() => handleSelect(item)}>{item.Name}</Item>
                ))}
            </ListOptions>
        );
    }

    return (
        <Container span={span} onClick={() => setShowList(!showList)}>
            <span>{title}</span>
            <strong>{defaultOption}</strong>
            {loading ? (
                <Loading type="spin" color="#999" width={20} height={20} />
            ): (
                <MdArrowDropDown size={18}  />
            )}
            
            
            {showList && renderList()}
        </Container>
    );
}

Select.defaultProps = {
    span: 1, 
    title: "", 
    option: "", 
    loading: false,
    data: [],
    onSelect: () => {}
}

export default Select;

import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container, VehicleSelect, Form, FormFields } from './styles';

import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';

import api from '../../services/api'

export default function Main() {
    const [active, setActive] = useState('car');
    const [make, setMake] = useState([]);
    const [selectedMake, setSelectedMake] = useState(null);
    const [loadingMake, setLoadingMake] = useState(false);
    const [model, setModel] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    const [loadingModel, setLoadingModel] = useState(false);
    const [version, setVersion] = useState([]);
    const [selectedVersion, setSelectedVersion] = useState(null);
    const [loadingVersion, setLoadingVersion] = useState(false);

    function handleCleanFilters() {
        setSelectedMake(null);
        setSelectedModel(null);
        setModel([]);
        setSelectedVersion(null);
        setVersion([]);
    }

    useEffect(() => {
        setLoadingMake(true)
        api.get('Make').then(response => {
            setMake(response.data);
            setLoadingMake(false)
        })
    }, []);

    useEffect(() => {
        if (!!selectedMake) {
            setLoadingModel(true);
            api.get(`Model?MakeID=${selectedMake.ID}`).then(response => {
                setLoadingModel(false)
                setModel(response.data);
            })
        }
    }, [selectedMake])

    useEffect(() => {
        !!selectedModel && console.log(selectedModel.ID);
        if (!!selectedModel) {
            setLoadingVersion(true);
            api.get(`Version?ModelID=${selectedModel.ID}`).then(response => {
                setLoadingVersion(false)
                setVersion(response.data);
            })
        }
    }, [selectedModel])
        
    return (
        <Container>
            <div>
            <section>
                <VehicleSelect active={active === 'car'} onClick={() => setActive('car')}>
                    <span>comprar</span>
                    <p>CARROS</p>
                </VehicleSelect>
                <VehicleSelect active={active === 'motorcycle'} onClick={() => setActive('motorcycle')}>
                    <span>comprar</span>
                    <p>MOTOS</p>
                </VehicleSelect>
                <button className="sellCar">
                    Vender meu Carro
                </button>
            </section>
            </div>
            <Form>
                <section>
                    <Checkbox title="Novos" />
                    <Checkbox title="Usados" />
                </section>
                <FormFields>
                    <Select span={2} title="Onde: "/>
                    <Select title="Marca: " option="Todas" data={make} loading={loadingMake} value={selectedMake} onSelect={setSelectedMake} />
                    <Select title="Modelo: " option="Todos" data={model} loading={loadingModel} value={selectedModel} onSelect={setSelectedModel} />
                    <Select title="Ano desejado"/>
                    <Select title="Faixa de preço" />
                    <Select span={2} title="Versão: "  data={version} loading={loadingVersion} value={selectedVersion} onSelect={setSelectedVersion} />
                    <section>
                        <p>
                        <FiChevronRight size={14} />
                        Busca Avançada
                        </p>
                    </section>
                    <section className="controlForm">
                        <span onClick={handleCleanFilters}>
                            Limpar filtros
                        </span>
                        <button>
                            Ver Ofertas
                        </button>
                    </section>
                </FormFields>
            </Form>
        </Container>
    );
}

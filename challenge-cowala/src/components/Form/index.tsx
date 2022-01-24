import { useEffect, useState } from "react";
import api from '../../services/axios';

import { 
    Form, 
    Fields, 
    FieldPC, 
    Label, 
    Input, 
    InputPr, 
    InputPh, 
    FieldP,
    FieldC,
    FieldI,
    FieldB,
    FieldIP,
    Button,
    ButtonSave,
    ButtonCleaner,
    ButtonContainer,
 } from './styles';



const Forms = () => {

    const [ formValues ] = useState( JSON.parse(localStorage.getItem('formValues') || '{}') );
  
    const [ name, setName ] = useState('');
    const [ profession, setProfession ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ ip, setIp ] = useState('');


    const onSubmit = () => {
        localStorage.setItem('formValues', JSON.stringify({name, profession, phone, ip}));
    }
  
  const formCleaner = () => {
        localStorage.clear();
        setPhone('');
        setName('');
        setIp('');
        setProfession('');

    }

    const apiGet = async () => {
        const response = await api.get('/');
        setIp(response.data);
    }

    


    useEffect(() => {
        if(localStorage.length > 0){
            setName(formValues.name);
            setProfession(formValues.profession);
            setPhone(formValues.phone);
            setIp(formValues.ip);
        }
    }, []);



    return (
            <Form onSubmit={onSubmit}>
                <Fields>
                    <Label>Nome</Label>
                    <Input  value={name} onChange={(e) => setName(e.target.value)}/>
                        <FieldPC>
                            <FieldP>
                                <Label>Profissão</Label>
                                <InputPr  value={profession} onChange={(e) => setProfession(e.target.value)}/>
                            </FieldP>
                            <FieldC>
                                <Label>Celular</Label>
                                <InputPh  mask="(99) 9.9999-9999" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </FieldC>
                        </FieldPC>
                        <FieldIP>
                            <FieldI>
                                <Label>Meu IP</Label>
                                <Input
                                    value={ip}
                                    readOnly
                                />
                            </FieldI>
                            <FieldB>
                                <Button
                                type="button"
                                onClick={apiGet}
                                >
                                    ENCONTRAR IP
                                </Button>
                            </FieldB>
                        </FieldIP>
                    <ButtonContainer>
                        <ButtonSave type="submit" >SALVAR</ButtonSave>
                        <ButtonCleaner type="button" onClick={formCleaner}>LIMPAR</ButtonCleaner>
                    </ButtonContainer>
                </Fields>
            </Form>
    );
    }

    export default Forms;
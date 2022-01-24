import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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


type FormData = {
    name: string;
    profession: string;
    phone: string;
    ip: string;
};

const Forms = () => {
  const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(
    data => localStorage.setItem('formValues', JSON.stringify(data)),
);  

  const [ formValues , setFormValues ] = useState( JSON.parse(localStorage.getItem('formValues') || '{}') );
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  
  
  const formCleaner = () => {
        localStorage.removeItem('formValues');
        setIsSafeToReset(true);
    }

    const apiGet = async () => {
        const response = await api.get('/');
        setFormValues({ip: response.data});
        setFocus('ip');
    }


    useEffect(() => {
        if (isSafeToReset === true) {
            reset();
            setIsSafeToReset(false);
            setFormValues({
                name: '',
                profession: '',
                phone: '',
                ip: '',
            });
            console.log('RODOOOU');
        }
    }, [isSafeToReset]);



    return (
            <Form onSubmit={onSubmit}>
                <Fields>
                    <Label>Nome</Label>
                    <Input {...register("name")} defaultValue={formValues.name}/>
                        <FieldPC>
                            <FieldP>
                                <Label>Profissão</Label>
                                <InputPr {...register("profession")} defaultValue={formValues.profession}/>
                            </FieldP>
                            <FieldC>
                                <Label>Celular</Label>
                                <InputPh {...register("phone")} mask="(99)9.9999-9999" defaultValue={formValues.phone}/>
                            </FieldC>
                        </FieldPC>
                        <FieldIP>
                            <FieldI>
                                <Label>Meu IP</Label>
                                <Input
                                    {...register("ip")}
                                    defaultValue={formValues.ip}
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
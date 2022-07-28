import React, {useState} from "react";
import { getAxios } from "./AxiosMethods";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle
} from "@ionic/react";
import "./List.css";
type props = {
    data: any;
  };

const Form = ({data}: props) => {

    if (!data) return <h1>No hay animales para mostrar</h1>;

    return(
        <>
            {data?.map((animal: any) =>{
                return (
                        <IonCard className="animal-card" key={animal.id}>
                            <IonCardHeader>
                                <IonCardSubtitle className="animal-name" >Nombre animal: {animal?.name}</IonCardSubtitle>
                                <IonCardSubtitle className="animal-specie" >Especie: {animal?.specie}</IonCardSubtitle>
                            </IonCardHeader>
                        </IonCard>
                );
            })};
        </>
    )
}

export default Form;

import React from "react";
import UseApi from "../components/UseApi";
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
import FormsList from "../components/List";

const Home: React.FC = () => {
    
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/animals`);

    if (!data) {
        return <h1>Cargando...</h1>
    }else {
        return ( 
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Examen
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <FormsList data={data}/>
                </IonContent>
            </IonPage>
        )
    }   
};

export default Home;
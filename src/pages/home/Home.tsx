import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonButton,
    IonTitle
} from "@ionic/react";
import "./Home.css";
import UseApi from "../../components/UseApi";

const Home: React.FC = () => {
    const { data } = UseApi(`${process.env.REACT_APP_API_URL}/animals`);

    console.log(data);

    if (!data) {
        return <h1>Cargando...</h1>
    } else {
        return ( 
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Contenidos
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {data?.map((content: any) => {
                        return (
                            <IonCard className="Card" key={content.id}>
                                <IonCardHeader>
                                    <IonCardSubtitle className="Category">Animal: {content?.name} Species: {content?.species}</IonCardSubtitle>
                                </IonCardHeader>

                            </IonCard>
                        )
                    })}

                </IonContent>
            </IonPage>
        )
    }
};

export default Home;
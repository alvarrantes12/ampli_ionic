import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ListAnimals from "../components/ListAnimals";
import UseApi from "../components/UseApi";

const Home = () => {
  const url = `${process.env.REACT_APP_API_URL}/animals`;
  const {data, refetch} = UseApi(url);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Animals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListAnimals data={data} />
                
      </IonContent>
    </IonPage>
  );
}

export default Home;
import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import Home from './Home';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>        
          <IonButtons slot="start">            
          </IonButtons>
          <IonTitle>{name}</IonTitle>        
      </IonHeader>
      <Home />
    </IonPage>
  );
};

export default Page;

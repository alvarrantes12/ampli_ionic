import { IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/react';

type Props = {
  data: any;
};

const ListAnimals = ({data}: Props) => {
  return (
    <IonCard>
      {
        data?.map((animal: any)=>{
          return (
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Nombre: {animal?.name}</IonCardSubtitle>
                <IonCardSubtitle>Especie: {animal?.specie}</IonCardSubtitle>                
              </IonCardHeader>
            </IonCard>
          )
        })
      }
    </IonCard>
  );
}

export default ListAnimals;
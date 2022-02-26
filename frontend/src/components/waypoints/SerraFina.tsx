import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const SerraFina: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.428197642012798, lng: -44.84314007222225 }}
      onClick={() => {
        setIsOpen(false)
        setTimeout(() => {
          setIsOpen(true)
        }, 50)
      }}
    >
      {isOpen && (
        <InfoWindow>
          <div>
            <div className="flex">
              <a
                href="https://pisa.tur.br/blog/2019/06/27/tudo-sobre-a-travessia-da-serra-fina/"
                className="center"
              >
                <h2>Serra Fina - MG/SP/RJ</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://i1.wp.com/pisa.tur.br/blog/wp-content/uploads/2019/06/serra-fina_capablog-2.jpg?fit=1024%2C448&ssl=1',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://i2.wp.com/pisa.tur.br/blog/wp-content/uploads/2019/06/serra-fina-2.jpg?resize=700%2C525&ssl=1',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.nattrip.com.br/wp-content/uploads/2017/02/Serra-Fina-Pan-9-1500x430.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.nattrip.com.br/wp-content/uploads/2017/02/Serra-Fina-Pan-38.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/upload/w_512,h_256,c_fill,f_auto/v1645848884/decabecanomato/serrafina1_zblnwm.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/upload/w_512,h_256,c_fill,f_auto/v1645848888/decabecanomato/serrafina_gvkjzt.jpg',
                ]}
              />
            </div>

            <div>
              A Serra Fina é considerada por muitos a trilha mais desafiadora do Brasil. São cerca
              de 30km, sendo que a segunda metade não tem nenhum fluxo d'água, o que te obriga a
              carregar MUITA água se for acampar. Os MUITOS sobe e desce, acumulam quase 3000m de
              ganho de elevação.
            </div>
            <div>
              É um lugar de vistas incríveis que já está fechado a 2 anos por causa de uma queimada
              no inverno de 2020 e aparentemente, finalmente será reaberto em maio de 2022, e aí ?
              Bora ?
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default SerraFina

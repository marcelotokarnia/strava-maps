import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const MonteVerde: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.864348122122657, lng: -46.03556548083161 }}
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
              <a href="https://monteverde.org.br/" className="center">
                <h2>Monte Verde - MG</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://i0.wp.com/brasilturis.com.br/wp-content/uploads/2022/02/kuriuwa-hotel-ux-scaled.jpg?zoom=2&resize=684%2C422&ssl=1',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://monteverde.org.br/wp-content/uploads/2021/03/e9f9ba2168364d1693348070ef027c44.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://monteverde.org.br/wp-content/uploads/2021/05/Aventuras-na-Fazenda-Radical-Monte-Verde-850x491-1.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://monteverde.org.br/wp-content/uploads/2021/02/Pedra-Redonda-1.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://monteverde.org.br/wp-content/uploads/2021/03/mv1.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://monteverde.org.br/wp-content/uploads/2021/02/Corredeiras-3-682x1024-1.jpg',
                ]}
              />
            </div>

            <div className="flex">
              Monte Verde foi considerada{' '}
              <a href="https://brasilturis.com.br/booking-elege-as-cidades-mais-acolhedoras-do-mundo-para-2022/">
                a sexta cidade mais acolhedora do mundo.
              </a>{' '}
              "Conhecida como a “Suíça brasileira”, Monte Verde é uma pequena cidade com inspiração
              cultural, culinária e arquitetônica em obras europeias, oferecendo hospedagem em
              chalés alpinos, áreas naturais e uma grande biodiversidade para ser explorada."
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default MonteVerde

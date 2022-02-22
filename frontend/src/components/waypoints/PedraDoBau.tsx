import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const PedraDoBau: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.688128467641743, lng: -45.66044772419916 }}
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
              <a href="https://bauecoturismo.com.br/pedra-do-bau/" className="center">
                <h2>Pedra do Baú - São Bento do Sapucaí - SP</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://bauecoturismo.com.br/wp-content/uploads/2016/06/IMG_3202.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://bauecoturismo.com.br/wp-content/uploads/2016/06/by_EHDER-DE-SOUZA_-189.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://media-cdn.tripadvisor.com/media/photo-s/0b/62/43/25/restaurante-pedra-do.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://bauecoturismo.com.br/wp-content/uploads/2016/06/a-cidade-1.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.guiavaledoparaiba.com.br/uploads/itens/52715/thumb/654/cachoeira-dos-amores_5.jpg?1634414546',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://live.staticflickr.com/4202/35318496006_fdcb3b3a9f_b.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.ecoturismobrasil.com.br/fotos/pedra_do_bau/fotos/pedra_do_bau_9134.jpg',
                ]}
              />
            </div>

            <div className="flex">
              Em São Bento do Sapucaí fica a maior via ferrata do Brasil, com cerca de 350m de
              altura, atingindo o topo da Pedra do Baú a 1950m de altitude. Aqueles que encaram o
              medo de altura são presenteados com uma linda vista 360º da Serra da Mantiqueira.
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default PedraDoBau

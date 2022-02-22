import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const Extrema: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.85566963820864, lng: -46.318828863025594 }}
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
              <a href="https://www.extrematur.com.br/" className="center">
                <h2>Extrema - MG</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.extrematur.com.br/wp-content/uploads/2019/01/DSC_6277-900x500.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.extremadeaaz.com/wp-content/uploads/2021/03/trocar-essa-asa-pg-8_2-900x600-1-500x400.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.extremadeaaz.com/wp-content/uploads/2021/03/80579772_2933276693371355_6134831676724871168_o-500x400.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.extremadeaaz.com/wp-content/uploads/2021/03/rafting-900x500-1-500x400.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.extremadeaaz.com/wp-content/uploads/2021/03/L60A0014a-900x500-1-500x400.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://catracalivre.com.br/wp-content/uploads/2018/03/extrema-aventurasul-minas-gerais-viramundo-mundovirado6598.jpg',
                ]}
              />
            </div>

            <div className="flex">
              Começamos a nossa aventura em Extrema-MG, uma cidade localizada a 100km da capital
              paulista. Destino ideal para uma viagem de fim de semana para experimentar alguns
              esportes de aventura como Rafting, escalada, asa delta, rappel. Ou se aventurar no
              comecinho da Mantiqueira com algumas trilhas como Pedra Cume, Pico do Lopo, Pedra das
              Flores e o Pico do Lobo Guará.
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default Extrema

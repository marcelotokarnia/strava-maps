import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const Itaiaia: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -21.956224039809097, lng: -44.89077352658337 }}
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
                href="https://pt.wikiloc.com/trilhas-trekking/transmantiqueira-560km-19809078"
                className="center"
              >
                <h2>Transmantiqueira - MG/SP/RJ</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.transportal.com.br/noticias/wp-content/uploads/2019/04/Pedra-do-Ba%C3%BA.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.minasgerais.com.br/imagens/atracoes/1509365882q2JAeRC0eX.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://bafafa.com.br/images/artigos/pico_das_agulhas_negras_4_23112020_073735.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://media-cdn.tripadvisor.com/media/photo-s/18/35/29/aa/lrm-export-88063564094463.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWakN1Fw_iI-GkmBOTus0mSPSPQYGKfGpUg&usqp=CAU',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://media-cdn.tripadvisor.com/media/photo-s/0b/b6/16/15/o-itaguare-admirado-de.jpg',
                ]}
              />
            </div>

            <div>
              Parabéns, você acaba de percorrer a Transmantiqueira, um conjunto de trilhas que
              percorre as principais montanhas da Serra da Mantiqueira. Como você pôde perceber, nem
              todo o caminho é trilha, portanto é um percurso que pode ser dividido em várias etapas
              e ser feito em dias separados tranquilamente.
            </div>
            <div>
              Algumas pessoas, inclusive preferem "encurtar" o caminho percorrendo alguns trechos de
              asfalto de carro ou bicicleta e focando os esforços nas trilhas.
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default Itaiaia

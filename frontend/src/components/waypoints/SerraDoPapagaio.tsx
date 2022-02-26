import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const SerraDoPapagaio: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.045841864940304, lng: -44.66554018568251 }}
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
                href="https://www.minasgerais.com.br/pt/atracoes/aiuruoca/parque-estadual-da-serra-do-papagaio-0"
                className="center"
              >
                <h2>Serra do Papagaio - MG</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://www.transportal.com.br/noticias/wp-content/uploads/2019/11/Cachoeira-PArque-estadual-da-Serra-do-Papagaio.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://gooutside.com.br/wp-content/uploads/sites/3/2019/06/papagaio2.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://gooutside.com.br/wp-content/uploads/sites/3/2019/06/shutterstock-1356137123.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://minasgerais.com.br/imagens/atracoes/150886253969F5NnarfT.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://blogdescalada.com/wp-content/uploads/2017/10/Serra-do-Papagaio-6.jpg',
                ]}
              />
            </div>

            <div>
              A Serra do Papagaio é uma reserva que atrai interessados em trekking, mountain bike,
              escalada, cavalgada, bóia cross, canionismo e muitas outras atividades outdoor.
            </div>
            <div>
              Por se interligar com a porção norte do Parque Nacional do Itatiaia, forma um
              importante corredor ecológico de preservação da Mata Atlântica, além de ser uma
              importante reserva de muitas espécies, como o papagaio do peito roxo, que dá nome ao
              parque.
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default SerraDoPapagaio

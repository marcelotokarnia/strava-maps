import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const PicoDosMarins: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.49744169961548, lng: -45.12353413882634 }}
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
              <a href="https://web.facebook.com/refugio.marins" className="center">
                <h2>Pico dos Marins - SP</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Panorama_Pico_dos_Marins.jpg/2880px-Panorama_Pico_dos_Marins.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://trilhandomontanhas.com/arquivos/2017-06/pico-dos-marins-piquete-sp-por-gustavo-felipe-carvalho-dos-santos-maior.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://getoutside.com.br/wp-content/uploads/2017/07/IMG_4063-600x600.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://conteudo.imguol.com.br/c/entretenimento/91/2016/09/26/hora-da-descida-pico-dos-marins-e-paredao-de-pedra-ingreme-mas-que-pode-ser-subido-sem-equipamento-de-escalada-1474925202433_v2_900x506.jpg.webp',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://i0.wp.com/acampamentobasemarins.com/wp-content/uploads/2018/05/IMG-20170731-WA0042.jpg?resize=640%2C410&ssl=1',
                ]}
              />
            </div>

            <div>
              Pico dos Marins,2420m de altitude, já foi considerado o ponto mais alto do estado de
              São Paulo. Mas hoje sabe-se que o real ponto mais alto é a Pedra da Mina, 2798m de
              altitude, parte da Serra Fina.
            </div>
            <div>
              Não recomenda-se subir em temporadas de chuva, dado que não existe abrigo contra chuva
              e relâmpagos. A navegação na trilha é bem difícil com pouca visibilidade. Várias
              pessoas já morreram nessa montanha por se perderem em condições climáticas adversas.
            </div>
            <div>
              <a href="https://www.opovo.com.br/noticias/brasil/2022/01/08/resgatado-de-escalada-no-pico-do-marins-coach-pablo-marcal-ironiza-polemica.html">
                Esse ano mesmo tivemos uma situação lamentável de um coach sem noção promovendo um
                evento com 60+ pessoas despreparadas.
              </a>
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default PicoDosMarins

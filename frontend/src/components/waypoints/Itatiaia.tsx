import { InfoWindow, Marker } from 'react-google-maps'
import React, { FC, useState } from 'react'
import PhotoCarrousel from './PhotoCarrousel'

const Itaiaia: FC<{ shouldShow: boolean }> = ({ shouldShow }) => {
  const [isOpen, setIsOpen] = useState(shouldShow)
  return (
    <Marker
      position={{ lat: -22.364821190765113, lng: -44.661249476080506 }}
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
              <a href="https://www.icmbio.gov.br/parnaitatiaia/en/" className="center">
                <h2>Itaiaia - RJ</h2>
              </a>
            </div>
            <div className="flex">
              <PhotoCarrousel
                photos={[
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://parquedoitatiaia.tur.br/wp-content/uploads/2019/06/cume-do-morro-do-couto___.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://desviantes.blob.core.windows.net/desviantes/media/adventures/items/4b0e6a8236a702a7d68792f162756684.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaaH5G4ZwTd3rBw2WFZvg9kHLxzXij321i01NDNrjQNOlzJmkNmwGcxQyd4c-Ps6S6yU&usqp=CAU',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://adamutrekking.files.wordpress.com/2015/01/p1080306-large.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://s2.glbimg.com/JRt1oDvTeIshzubPeObZEMgL2uw=/0x0:700x485/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/t/A/boiRQhS42qXoGtmUoDag/cachoeira-veu-de-noiva-wigold-2.jpg',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://live.staticflickr.com/5634/20788983005_4288c4c508_b.jpg',
                ]}
              />
            </div>

            <div>
              O Parque Nacional do Itatiaia é o Parque Nacional mais antigo, institucionalizado em
              1937. As principais atrações do Parque são Pico das Agulhas Negras e Pico das
              Prateleiras. Mas o parque oferece inúmeras outras atrações, desde simplesmente passar
              a tarde e/ou acampar com crianças no Abrigo Rebouças a longas travessias como o Rancho
              Caído e a Serra Negra.
            </div>
            <div>
              O Parque possui 2 principais acessos. A Parte Alta, um planalto de 2500m de altitude,
              com trilhas mais longas e terreno montanhoso, acesso próximo a cidade de Itamonte-MG e
              a Parte Baixa, com 3 principais cachoeiras, praticamente sem trilhas, terreno de Mata
              Atlântica e um ótimo lugar para relaxar com amigos e família, o acesso é feito pela
              cidade de Itatiaia-RJ.
            </div>
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default Itaiaia

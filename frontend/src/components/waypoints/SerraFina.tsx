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
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://instagram.fsjk2-1.fna.fbcdn.net/v/t51.2885-15/242768409_115586227526830_9052241472019461402_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fsjk2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=OFmYbSJ_NAAAX8dPhsJ&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjY2OTA0NjUwNzA5MTM4NDEwOA%3D%3D.2-ccb7-4&oh=00_AT-ORhi5jSgCutQYSwN05VlVmEo60Jbd5hVIXpU6YhcILw&oe=621F2B54&_nc_sid=30a2ef',
                  'https://res.cloudinary.com/marcelotokarnia/image/fetch/w_512,h_256,c_fill,f_auto/https://instagram.fsjk2-1.fna.fbcdn.net/v/t51.2885-15/250820104_604536087636627_928899092125983815_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fsjk2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=T8FIVFDxzNYAX_Gwg-_&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=MjY5NjgzMDY0MzE4OTI1NDkzOA%3D%3D.2-ccb7-4&oh=00_AT-w9qYQnenMooApD0bFHsHtF-9kRynxGZYJ8Jgk6fAVWQ&oe=621F8AA0&_nc_sid=83d603',
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

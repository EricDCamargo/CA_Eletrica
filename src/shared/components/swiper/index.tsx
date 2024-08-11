import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Autoplay, FreeMode } from 'swiper/modules'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface SwiperProps {
  images: string[]
}

const MyCustomSwiper: React.FC<SwiperProps> = ({ images }) => {
  const swipper = useSwiper()
  return (
    <SwiperContainer>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}
        speed={1800}
        autoplay={{
          delay: 5000
        }}
        preventClicks={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        freeMode={false}
        breakpoints={{
          1199: {
            slidesPerView: 7,
            autoplay: {
              delay: 5000
            }
          },
          767: {
            spaceBetween: 10,
            speed: 1800,
            autoplay: {
              delay: 5000
            },

            preventClicks: true
          }
        }}
        modules={[Navigation, Autoplay, FreeMode]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div onClick={() => swipper.slideNext()} className="swiper-button-next" />

      <div onClick={() => swipper.slidePrev()} className="swiper-button-prev" />
    </SwiperContainer>
  )
}

export default MyCustomSwiper
const SwiperContainer = styled.div`
  width: 60vw;
  margin-top: 10vh;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: yellow;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-button-next {
    right: calc(50% - 40vw - 30px);
  }

  .swiper-button-prev {
    left: calc(50% - 40vw - 30px);
  }

  .swiper-slide img {
    width: 8vw;
    object-fit: cover;
  }
`

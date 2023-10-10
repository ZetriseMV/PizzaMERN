import {React} from 'react'
import  Carousel from 'react-bootstrap/Carousel'
import mainMern from '../../ImagesSlider/mainmern.jpg'
import makerMern from '../../ImagesSlider/makermern.jpg'
import movieMern from '../../ImagesSlider/moviemern.jpg'
import upperMern from '../../ImagesSlider/uppermern.jpg'
import './slider.css'

export default function SliderCarousel(){
    return (
        <div className = 'slider-main'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='images-slider'
                        src={mainMern}
                    />
                    <Carousel.Caption>
                        <h3>Mern image1</h3>
                        <p> lorem Mern feedback upperMern react default false h2 default </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='images-slider'
                        src={makerMern}
                    />
                    <Carousel.Caption>
                        <h3>Mern image2</h3>
                        <p> lorem Mern feedback upperMern react default false h2 default </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='images-slider'
                        src={movieMern}
                    />
                    <Carousel.Caption>
                        <h3>Mern image3</h3>
                        <p> lorem Mern feedback upperMern react default false h2 default </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='images-slider'
                        src={upperMern}
                    />
                    <Carousel.Caption>
                        <h3>Mern image4</h3>
                        <p> lorem Mern feedback upperMern react default false h2 default </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
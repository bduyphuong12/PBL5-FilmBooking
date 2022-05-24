import React from 'react'

export default function Itemfilm({sliderRef,modalOpenFilm}) {
  return (
    <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1" onClick={function(event){modalOpenFilm(true)}}></div>
        <div className="keen-slider__slide number-slide2" onClick={function(event){modalOpenFilm(true)}}></div>
        <div className="keen-slider__slide number-slide3" onClick={function(event){modalOpenFilm(true)}}></div>
        <div className="keen-slider__slide number-slide4" onClick={function(event){modalOpenFilm(true)}}></div>
        <div className="keen-slider__slide number-slide5" onClick={function(event){modalOpenFilm(true)}}></div>
        <div className="keen-slider__slide number-slide6" onClick={function(event){modalOpenFilm(true)}}></div>
    </div>
  )
}

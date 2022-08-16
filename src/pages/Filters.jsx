import React from 'react'
import './filters.css'
import { useRef,useEffect,useState } from 'react'
import datamt from '../clothingdata/tshirts.json'

const showFilter = ()=>{
    document.getElementsByClassName('sidebar')[0].classList.toggle('is-active')
}


const Filters = (props) => {
  
  const redT = useRef()
  const greenT = useRef()
  const blueT = useRef()
  const yellowT = useRef()
  const whiteT = useRef()
  const gucciT = useRef()

  console.log(redT.current)

  const gucciFunc= ()=>{
    if(gucciT.current.checked === true){
      return "gucci"
    }
    if(gucciT.current.checked === false){
      return "none"
    }
  }

  const redFunc= ()=>{
    if(redT.current.checked === true){
      return "red"
    }
    if(redT.current.checked === false){
      return "none"
    }
  }

  const greenFunc= ()=>{
    if(greenT.current.checked === true){
      return "green"
    }
    if(greenT.current.checked === false){
      return "none"
    }
  }

  const whiteFunc= ()=>{
    if(whiteT.current.checked === true){
      return "white"
    }
    if(whiteT.current.checked === false){
      return "none"
    }
  }

  const yellowFunc= ()=>{
    if(yellowT.current.checked === true){
      return "yellow"
    }
    if(yellowT.current.checked === false){
      return "none"
    }
  }

  const blueFunc= ()=>{
    if(blueT.current.checked === true){
      return "blue"
    }
    if(blueT.current.checked === false){
      return "none"
    }
  }


  const makeChange = ()=>{
    props.changeMenTee(
      datamt.filter(val=> val.brand.includes(gucciFunc()) & (val.color.includes(redFunc()) || val.color.includes(greenFunc())|| val.color.includes(yellowFunc()) || val.color.includes(whiteFunc()) || val.color.includes(blueFunc()))).map(
        data => (
          <div key={data.id}>
          <img src={data.itemlink} alt="" />
          <p>color - {data.color} colorid - {data.colorID} brand - {data.brand} gender - {data.gender}</p>
          </div>
        )
      )
    )
  }

  // val=> val.brand.includes(gucciFunc()) & val.color.includes(redFunc()) || val.brand.includes(gucciFunc()) & val.color.includes(greenFunc()) || val.brand.includes(gucciFunc()) & val.color.includes(whiteFunc()) || val.brand.includes(gucciFunc()) & val.color.includes(yellowFunc()) || val.brand.includes(gucciFunc()) & val.color.includes(blueFunc())

  return (
    <div>
      <button type='submit' className='showfilter' onClick={showFilter}>Show/Hide Filters &rarr;</button>
    <div className='sidebar'>
        <h3>Filters</h3>
        <div className='sidebar-brand'>
            <h4>Brands</h4>
            <div><input type="checkbox" id='sidebar-brand-gucci' ref={gucciT} onClick={(e)=>{
              
            }}/>
            <label htmlFor="sidebar-brand-gucci" >Gucci</label></div>
            <div><input type="checkbox" id='sidebar-brand-armani'/>
            <label htmlFor="sidebar-brand-armani">Armani</label></div>
            <div><input type="checkbox" id='sidebar-brand-boss'/>
            <label htmlFor="sidebar-brand-boss">Boss</label></div>
            <div><input type="checkbox" id='sidebar-brand-hackett'/>
            <label htmlFor="sidebar-brand-hackett">Hackett</label></div>
            <div><input type="checkbox" id='sidebar-brand-lv'/>
            <label htmlFor="sidebar-brand-lv">Louis Vuitton</label></div>
            <div><input type="checkbox" id='sidebar-brand-bd'/>
            <label htmlFor="sidebar-brand-bd">Beyond Designs Handmade</label></div>
        </div>
        <div className='sidebar-price'>
            <h4>Price</h4>
            <div><input type="checkbox" id='sidebar-price-200'/>
            <label htmlFor="sidebar-price-200">0-200$</label></div>
            <div><input type="checkbox" id='sidebar-price-400'/>
            <label htmlFor="sidebar-price-400">0-400$</label></div>
            <div><input type="checkbox" id='sidebar-price-600'/>
            <label htmlFor="sidebar-price-600">0-600$</label></div>
            <div><input type="checkbox" id='sidebar-price-800'/>
            <label htmlFor="sidebar-price-800">0-800$</label></div>
            <div><input type="checkbox" id='sidebar-price-1000'/>
            <label htmlFor="sidebar-price-1000">0-1000$</label></div>
        </div>
        <div className='sidebar-color'>
            <h4>Color</h4>
            <form action="/">
            <div><input type="checkbox" id='sidebar-color-red' ref={redT} />
            <label htmlFor="sidebar-color-red"><span className='makeitred'>red</span>Red</label></div>
            <div><input type="checkbox" id='sidebar-color-green' ref={greenT} />
            <label htmlFor="sidebar-color-green"><span className='makeitgreen'>red</span>Green</label></div>
            <div><input type="checkbox" id='sidebar-color-blue' ref={blueT} />
            <label htmlFor="sidebar-color-blue"><span className='makeitblue' >red</span>Blue</label></div>
            <div><input type="checkbox" id='sidebar-color-yellow' ref={yellowT} />
            <label htmlFor="sidebar-color-yellow"><span className='makeityellow'>red</span>Yellow</label></div>
            <div><input type="checkbox" id='sidebar-color-white' ref={whiteT} />
            <label htmlFor="sidebar-color-white"><span className='makeitwhite'>red</span>White</label></div>
            </form>
            <button type='submit' onClick={(e)=>{makeChange()}}> Test me now</button>
        </div>
    </div>
    </div>
  )
}

export default Filters
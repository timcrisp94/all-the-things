import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'


const App = () => {
  const [evansThings, setEvansThings] = useState([
    {
      name: 'Towel Rack Dog',
      image: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/54857167/2/?bust=1646411737&width=1080',
      attributes: ['droopy', 'many breasts', 'affectionate', 'beautiful'],
    },
    {
      name: 'My Hero',
      image:
        'https://i.etsystatic.com/30123442/r/il/468df0/3273000359/il_1588xN.3273000359_aw0a.jpg',
      attributes: [
        'riffs',
        'looks cool',
        'great tone',
        "coolest guitar",
      ],
    },
    {
      name: 'Grapes',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6c/Abhar-iran.JPG',
      attributes: [
        'very attractive',
        'has taste',
        'a fruit',
      ],
    },
    {
      name: 'Kickflip',
      image: 'https://media.giphy.com/media/Ihlo8QC1T9yQ9p4KRF/giphy.gif',
      attributes: [
        'you cannot do it',
        'i cannot do it',
      ],
    },
  ])

  const [timsThings, setTimsThings] = useState([
    {
      name: 'tetractys',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tetractys.svg/200px-Tetractys.svg.png',
      attributes: [
        'triangle',
        'four rows',
        'ten points',
        'kosmos',
      ],
    },
    {
      name: 'turkey',
      image:
        'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'such gobbles',
        'good when stuffed',
        'not a taco',
        'why gravy exists',
      ],
    },
    {
      name: 'taco',
      image:
        'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
      attributes: [
        'yummy in my tummy',
        'salsas may vary',
        'definitely a taco',
        'very edible',
      ],
    },
    {
      name: 'linux',
      image: 'https://i.imgur.com/3BmfSOA.png',
      attributes: ['not a taco', 'not Windows', 'not macOS', 'Penguins?'],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [huntersThings, setHuntersThings] = useState([
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={evansThings} />}
      />
      <Route
        path="/the-manliest-things"
        element={<ManliestThings things={timsThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
    </Routes>
  )
}

export default App

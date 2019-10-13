import React from 'react'
import Card from '../components/card'
import GridLayout from 'react-grid-layout'

const Home = () => {

  var layout = [
    { i: '1', x: 0, y: 0, w: 4, h: 1, static: true },
    { i: '2', x: 6, y: 0, w: 4, h: 1, static: true },
    { i: '3', x: 0, y: 1, w: 4, h: 1, static: true },
    { i: '4', x: 6, y: 1, w: 4, h: 1, static: true }
  ];

  
  return (

    <div>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={400} width={1200}>

        <div key="1">
          <Card></Card>
        </div>
        <div key="2">
          <Card></Card>
        </div>
        <div key="3">
          <Card></Card>
        </div>
        <div key="4">
          <Card></Card>
        </div>

        {/* <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>a</div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>b</div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>c</div> */}

      </GridLayout>
    </div>
  )
}

export default Home
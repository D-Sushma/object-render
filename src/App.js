//OBJECT - RENDERING============================================
// don't need again and again rendering component, means 
// obj me jitne bhi bar jb bhi arr k undr obj change hoga hmara compo utni hi bar automatic render hoga
// 1st create card compo and import in app.js jisme ham object render krayenge
// 2nd we create Object.js component and make object. than import in app.js


import './App.css';
import Header from './components/Header'
import Card from './components/Card'
// 3. import object.js--------------------
import Object from './components/Object'



function App() {

  let task = "i am best";
  let name ="sushma";

  // OBJECT RENDERING============================================
  // 4. use map() fun to receive whole element of object.js--------------------
  // map()--> have a callback fun & this fun have "ele" parameter inside (), than use arrow=> fun and curly braces{}
  // map(ele) --> this ele traverse all the obj frm object.js and receive that object (in ele parameter)
  // FatchCardArr called --> CUSTOM COMPONENT

  console.log(Object);
 let FatchCardArr = Object.map((ele)=>{
  // 5.  checking that object comes or not (in form of object)-------------------------
    console.log(ele);

    // 6. render that component which is need to render agaIn and again-----
    // and FatchCardarr var directly render inside app.js return()
    return(
      <>
      {/* 8. pass ele in var Fatchdata and go Card.js */}
          <Card Fatchdata = {ele}/>
      </>
    )
 })
  

 
  return (
    <div className="App">
     <Header  data={{task, name}} />

     {/* 7. render CUSTOM COMPONENT FatchCardArr which we make var for objet mapping  */}
     {/* <Card /> */}
     {FatchCardArr}
    
    </div>
  );
}

export default App;

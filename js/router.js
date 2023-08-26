export class Router{

  //just declaring this variabel are the type object 
  PAGESpath = {}

  add(otherPAGE, link){
    this.PAGESpath[otherPAGE]= link
  }

  route(e){
    console.log("passou pelo prevent default");
    console.log(" data event : ", e)

    console.log(" window.event : ", window.e)

    e = e || window.event
    e.preventDefault()  
    console.log("passou pelo prevent default")
    window.history.pushState({ } , "" , e.target.href)  

    this.handle()
  }

  handle(){    

    console.log(" window.location :", window.location)
    const {pathname} = window.location

    console.log("pathname : ", window.location.pathname)
    
    console.log("target.href" , window.location.href) 

    let route = this.PAGESpath[pathname] || this.PAGESpath[404]   // before was ROUTES now is  this 

    console.log("route: ",route)

    console.log("\nAntes do fetch")

    fetch(route)
    .then( data =>  data.text()                                         )    //pq retornou este em texto ? 
    .then( html => { document.querySelector('#App').innerHTML = html }  )

    console.log("showing route from link clicked \nAfter fetch:\n", route)
   }
   
}


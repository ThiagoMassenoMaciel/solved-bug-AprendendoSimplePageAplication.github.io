import {Router} from "./router.js"

const obj = new Router();

obj.add(  "/"       ,"./pages/home.html")
obj.add( "/about"   ,"./pages/about.html")
obj.add( "/contact" , "./pages/contact.html")
obj.add( 404      , "./pages/404.html")

console.log("new object created ",obj)

obj.handle()

window.onpopstate = () => obj.handle() ; 
window.route      = () => obj.route() ;

console.log("afer window")


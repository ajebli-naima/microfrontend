import { registerApplication, start } from "single-spa";



/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/


registerApplication({
   name: "@ehealth/nav-app",
   app: () => System.import("@ehealth/nav-app"),
   activeWhen: ["/"],
   //domElement: document.getElementById('nav-container') 
});

registerApplication({
  name: "@ehealth/authentication",
  app: () => System.import("@ehealth/authentication"),
  activeWhen: ["/authentication"],
  //domElement: document.getElementById('nav-container') 
});

registerApplication({
  name: "@ehealth/edocument",
  app:() => System.import("@ehealth/edocument"),
  activeWhen: ["/edocument"],
   //domElement: document.getElementById('edocument-container') 
});

registerApplication({
  name: "@ehealth/search",
  app: () => System.import("@ehealth/search"),
  activeWhen: ["/search"],
 //domElement: document.getElementById('search-container') 
});

start({
  urlRerouteOnly: true,
});

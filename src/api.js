 const PERFILES_API = {

    profiles:[
       {
          id: 1,
          role:'user',
          siguiendo:false,
          title: "Rick Sanchez",
          description: "Ceintífico 🥃",
          twits: ["Las bodas son básicamente funerales con un pastel.", "...pensé que todo el punto de tener un perro era sentirse superior..","Bien, científicamente, las tradiciones son estúpidas."],
          teléfono: 5551320657,
          email: "ricksanches@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "rick.jpg"
       },
       {
          id: 2,
          role:'user',
          siguiendo:false,
          title: "Morty Smith",
          description: "Estudiante, ayudante de Rick",
          twits: ["No lo sé Rick..", "Jessicaa 🧡🧡🧡🧡","Nadie existe a propósito, nadie pertenece aningún sitio, todos vamos a morir...ven a ver tele.." ],
          teléfono: 51321657893,
          email: "mortysmith@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "morty.png"
       },
       {
          id: 3,
          role:'user',
          siguiendo:false,
          title: "Summer Smith",
          description: "Estudiante, escucha a Elliott Smith 🎶 🎵",
          twits: ["Todo lo que tengo son fotos mías y de mis amigos de la escuela. ¿Cuál es el problema? ¿Qué chica adolescente tiene fotos de su familia? No es como si fuésemos mormones o nos estuviéramos muriendo."],
          teléfono: 51321657893,
          email: "summersmith@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "summer.jpg"
       },
       {
          id: 4,
          role:'user',
          siguiendo:false,
          title: "Beth Sanchez",
          description: "Cirujana de Caballos",
          twits: ["Tommy aún está ahí violando Muppets y comiendo bebés 😟", "Me estoy quedando sin excusas para no ser quien soy, ¿así que quién soy? 🤔🙄 "],
          teléfono: 51321657893,
          email: "bethsanchez@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "beth.jpeg"
       },
       {
          id: 5,
          role:'user',
          siguiendo:false,
          title: "Jerry Smith",
          description: "perdedooooooor...💨🍂🍂 ",
          twits: ["No lo entiendo, ni necesito entenderlo", "Supongo que simplemente soy el papel de baño de toda esta familia.🚽"],
          teléfono: 51321657893,
          email: "jerrysmith@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "Jerry.png"
       },
       {
          id: 6,
          role:'user',
          siguiendo:false,
          title: "Mr. Poopybutthole",
          description: "Soy yo!",
          twits: ["Soy todo lo que buscas pero en guapo 😊", "¡Oooh weeeee!"],
          teléfono: 51321657893,
          email: "popopants@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "popo.jpg"
       }
     ],
     all: function() { return this.profiles},
     get: function(id) {
      const isProfile = p => p.id === id
      return this.profiles.find(isProfile)
    }
  }

  export default PERFILES_API
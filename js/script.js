/**
 * Descrizione:
        Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
    *Bonus:
        Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input.
 */ 

const app = new Vue (
    {
        el : "#app", 
        data : {
            message : "Hello World", 
            messageBtn : "Click MEEEEEEEEEEE", 
            messageImg : "Padre Maronno", 
            img: "https://picsum.photos/id/1025/600/700", 
            
        },  
        methods: {
            immage : function() {
                const img = document.getElementById("img");
                img.innerHTML+=`
                <img src="${this.img}" alt=""> 
                <h1> ${this.messageImg}</h1> 
                 `
            }
        } 

    }
)
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
            img2: "", 
            
        }
    }
)
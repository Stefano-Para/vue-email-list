// Descrizione: generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus: Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue (
    {
        el: '#root',
        data: {
            randomEmail: "email casuale",
            arrayEmails: [],
        },
        methods: {

        },

    

        created: function() {  
            for (i = 0; i < 10; i++) {         
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ( (result) => {
                
                    console.log(result.data.response);
                        this.randomEmail = result.data.response;
                        this.arrayEmails.push(this.randomEmail);
                    
                    });

                // const self = this;
                // oppure
                // .then( function(result) {                    
                //     console.log(result.data.response);
                //     self.email = result.data.response;
                // });
            }
        }

    }
)

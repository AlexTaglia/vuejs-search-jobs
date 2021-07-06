Vue.config.devtools = true;

new Vue(
    {
        el: '#app',

        // -----------------------------
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.png',
                    city: 'Cesenatico',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Pinco Palla',
                    position: 'junior Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '2/22/2021',
                    logo: './img/logo.png',
                    city: 'Torino',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Tech 1',
                    position: 'Front End Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/28/2021',
                    logo: './img/logo.png',
                    city: 'Bologna',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'IT info',
                    position: 'Back End Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '4/22/2021',
                    logo: './img/logo.png',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Stark industries',
                    position: 'Full stack Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/21/2021',
                    logo: './img/logo.png',
                    city: 'Milano',
                    contract: 'Full Time'
                },
            ],
            starred: [2],
            applied: [4, 5],
            applicationSent: false,
        },

        // -----------------------------
        methods: {
            //Funzione per ritorna un cuore pieno 
            //se l'id dell'annncio è inclueso in array starred
            inclededInStarred: function(index){
                if(this.starred.includes(this.jobs[index].id)){
                    return 'fas fa-heart'
                } else {
                    return 'far fa-heart'
                }
            },

            //Funzione che aggiunge l'id dell'annuncio a array starred
            addToStarred: function(index){
                this.starred.push(this.jobs[index].id)
                console.log(this.starred);
            },

            //Funzione che aggiunge l'id dell'annuncio a array applied
            addToApplied: function(index){
                this.applied.push(this.jobs[index].id)
                console.log(this.applied);
                
                //dopo un secondo cambia lo stato dell'applicationSent in true
                //cosi viene mostrata nell'html
                setTimeout(()=>{
                    this.applicationSent = true
                },1000)
                this.hideNotification()
            },

            //Funzione che nasconde il button "Candidati"
            //se si è gia candidati all'annuncio 
            hideApplyButton: function(index){
                if(this.applied.includes(this.jobs[index].id)){
                    return 'd-none'
                } else {
                    return ''
                }
            },

            //Funzione che mostra il il badge se si è gia inviata
            //la candidatura
            showApplyBadge: function(index){
                if(this.applied.includes(this.jobs[index].id)){
                    return ''
                } else {
                    return 'd-none'
                }
            },

            //dopo un'altro secondo ricambia lo stato dell'applicationSent 
            //in false cosi viene nascosta nell'html
            hideNotification: function(){
                setTimeout(()=>{
                    this.applicationSent = false
                },2000)             
            }
            
        },


        // -----------------------------

    }

)

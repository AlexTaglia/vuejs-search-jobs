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
            applied: [4, 5]

        },

        // -----------------------------
        methods: {
            inclededInStarred: function(index){
                if(this.starred.includes(index + 1)){
                    return 'fas fa-heart'
                } else {
                    return 'far fa-heart'
                }
            },
            addToStarred: function(index){
                this.starred.push(index + 1)
            },
            addToApplied: function(index){
                this.applied.push(index + 1)
            },
            hideApplyButton: function(index){
                if(this.applied.includes(index + 1)){
                    return 'd-none'
                } else {
                    return ''
                }
            },
            showApplyBadge: function(index){
                if(this.applied.includes(index + 1)){
                    return ''
                } else {
                    return 'd-none'
                }
            }
        },


        // -----------------------------

    }

)

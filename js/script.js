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
                    logo: 'logo.jpg',
                    city: 'Cesenatico',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'Pinco Palla',
                    position: 'junior Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '2/22/2021',
                    logo: 'logo.jpg',
                    city: 'Torino',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Tech 1',
                    position: 'Front End Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/28/2021',
                    logo: 'logo.jpg',
                    city: 'Bologna',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'IT info',
                    position: 'Back End Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '4/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Stark industries',
                    position: 'Full stack Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/21/2021',
                    logo: 'logo.jpg',
                    city: 'Milano',
                    contract: 'Full Time'
                },
            ],
            starred: [1, 2, 3],
            applied: [4, 5]

        },

        // -----------------------------
        methods: {

        },


        // -----------------------------

    }

)

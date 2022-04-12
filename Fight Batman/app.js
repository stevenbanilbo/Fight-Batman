

const app = Vue.createApp({

    data(){

        return{
        batmanHealth: 100,
        playerHealth: 100,
        };
    },
    methods:{
        attackBatman(){

            const damage = randomDamage();
            this.batmanHealth -= damage;
            this.attackPlayer();

        },
        attackPlayer(){

            const damage = randomDamage();
            this.playerHealth -= damage;
            

        },
        healPlayer(){

            const heal = Math.floor(Math.random() * 40)
            this.playerHealth + heal > 100 ? this.playerHealth = 100
            : this.playerHealth += heal;

            this.attackPlayer();
        }

    },        
    computed:{
        batmanHealthStyles(){
            return{
                width: this.batmanHealth + '%'}
            },

        playerHealthStyles(){
            return{
                width: this.playerHealth + '%'}

            },
        

        }    

});


app.mount('#game');


const randomDamage = () => Math.floor(Math.random() * 20);


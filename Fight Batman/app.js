

const app = Vue.createApp({

    data(){

        return{
        batmanHealth: 100,
        playerHealth: 100,
        currentRound: 0    
    };



    },
    methods:{
        attackBatman(){
            this.currentRound++;
            const damage = randomDamage();
            this.batmanHealth -= damage;
            this.attackPlayer();

        },
        attackPlayer(){

            const damage = randomDamage();
            this.playerHealth -= damage;
            

        },
        specialAttack(){
            this.currentRound++;
            const damage = randomDamage();
            this.batmanHealth -= damage;

        },

        healPlayer(){
            this.currentRound++;
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

        useSpecialAttack(){

            return this.currentRound  % 3 !== 0;

            

        }
        

        }    

});


app.mount('#game');


const randomDamage = () => Math.floor(Math.random() * 20);


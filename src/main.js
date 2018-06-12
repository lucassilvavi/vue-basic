import Vue from 'vue'
import { Time } from './time';

new Vue({
  el: '#app',
  data: {
    times:[
       new Time("Botafogo", require('./assets/botafogo_60x60.png')),
       new Time("America MG", require('./assets/america_mg_60x60.png')),
       new Time("Atletico MG", require('./assets/atletico_mg_60x60.png')),
       new Time("Atletico PR", require('./assets/atletico-pr_60x60.png'))       
    ],
    colecao:[0,1,2,3,x]
  }
})

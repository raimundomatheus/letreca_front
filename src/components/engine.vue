<template id="engine">
  <!--eslint-disable-->
  <div class="container engine">
    <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg-engine" alt="Imagem responsiva">
    <a class="btn btn-voltar-engine" href="" role="button" placeholder="Digite o nome do contexto"></a>-->

    <div class="alert alert-success" role="alert" v-show="winner">
      <a class="btn btn-voltar-engine" href="#/contextos" v-on:click="repeatGame()"></a>
      <a class="btn btn-repeat-engine" href="#" v-on:click="repeatGame()"></a>
      <p>Parabéns! Você finalizou o jogo!</p>
      <div class="scores"><p>Sua pontuação final foi: {{scores}} Pontos</p></div>
    </div>
    <div class="alert alert-warning" role="alert" v-show="looser">
      <a class="btn btn-voltar-engine" href="#/contextos" v-on:click="repeatGame()"></a>
      <a class="btn btn-repeat-engine" href="#" v-on:click="repeatGame()"></a>
      <p>Oh Oh! Infelizmente não foi dessa vez! </p>
      <div class="scores"><p>Sua pontuação final foi: {{scores}} Pontos</p></div> 
    </div>

    <!-- <form class="lista" method="post" accept-charset="utf-8">
                <input class="img-1" type="image" name="" src="../imagens/test.jpg"><br>
                <strong>Palavras diversas</strong>
    </form>-->

    <div class="row life">
      <div class="col" id="score">
        <div class="scores">{{scores}}</div>
      </div>
      <div class="col-auto ac" v-for="n in 6" :key="n">
        <div class="vida">
          <img
            :src="heartImg"
            ref="heartL"
            id="heartLife"
            class="img-fluid cadimg-engine"
            alt="Imagem responsiva"
            :style="filterGrayScale"
          />
        </div>
      </div>
    </div>

    <!-- <div class="row life">
                <div class="col-auto ac">
                  <div class="vida">
                      <img ref="img" :src="heartImg" id="heartLife1" class="img-fluid cadimg-engine" alt="Imagem responsiva">
                  </div>
                </div>
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" id="heartLife2" class="img-fluid cadimg-engine" alt="Imagem responsiva">
                  </div>
                </div>
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" id="heartLife3" class="img-fluid cadimg-engine" alt="Imagem responsiva">
                  </div>
                </div>
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" id="heartLife4" class="img-fluid cadimg-engine" alt="Imagem responsiva">
                  </div>
                </div>
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" id="heartLife5" class="img-fluid cadimg-engine" alt="Imagem responsiva">
                  </div>
                </div>
                <div class="col-auto ac">
                  <div class="vida">
                      <img src="../_imagens/letreca/life.png" id="heartLife6" class="img-fluid cadimg-engine" alt="Imagem responsiva">
                  </div>
                </div>
    </div>-->

    <div class="row palavra">
      <div class="col-auto ca" v-for="letter in gameWord" v-bind:key="letter.id">
        <div class="teclas tec">
          <!-- <div class="text-center well well-lg" v-show="!show">
                        <span class="letter font" style="position: relative; font-size: 1.8rem; left: 0%" v-for="letter in gameWord" v-bind:key="letter.id">{{ letter }}</span>
          </div>-->
          <a class="font" style="position: relative; font-size: 1.8rem; left: 0%">{{ letter }}</a>
        </div>
      </div>
      <!-- <div v-show="!show && wrongLetters.length != 6">
                <h3>Atenção! <span class="label label-info">Você pode errar {{ 6 - wrongLetters.length }}</span></h3>
      </div>-->
    </div>

    <div class="container3">
      <img :src="imgChallenge" class="img-fluid cadimg-engine" alt="Imagem responsiva" />
    </div>

    <div class="container2">
      <img src="../_imagens/letreca/paisagem2.png" class="img-fluid cadimg-engine" alt="Imagem responsiva" />
    </div>

    <div class="row container-teclado">
      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('A', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >A</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('B', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >B</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('C', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >C</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('D', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >D</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('E', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >E</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('F', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >F</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('G', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >G</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('H', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >H</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('I', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >I</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('J', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >J</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('K', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >K</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('L', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >L</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('M', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >M</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('N', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >N</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('O', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >O</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('P', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >P</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Q', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Q</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('R', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >R</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('S', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >S</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('T', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >T</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('U', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >U</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('V', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >V</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('W', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >W</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('X', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >X</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Y', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Y</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Z', $event)"
            style="position: relative; font-size: 1.7rem; left: 0%"
          >Z</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Á', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Á</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('É', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >É</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Í', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Í</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ó', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Ó</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ú', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Ú</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Â', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Â</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ê', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Ê</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ô', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Ô</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ã', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Ã</a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Õ', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >Õ</a>
        </div>
      </div>
    </div>

    <!-- <div class="content">
                <div class="card itens" style="width: 10rem;">
                  <img class="card-img-top" src="../imagens/test.jpg" alt="Imagem de capa do card">
                  <div class="card-body body">
                    <h5 class="card-title text" style="text-align: center;">Palavras diversas</h5>
                </div>
            </div>
    </div>-->
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import { constants } from "crypto";
import { create } from 'domain';

export default {
  template: "#engine",
  data() {
    return {
      show: true,
      winner: false,
      looser: false,
      words: [],
      images: [],
      word: [],
      gameWord: [],
      guessedLetters: [],
      wrongLetters: [],
      heartImg: require("../_imagens/letreca/life.png"),
      filterGrayScale: "",
      contHeart: 6,
      imgChallenge: "",
      rounds: 0, 
      scores: 0,
    };
  },

  created: function() {
    let cat = this.$route.params.id;
    console.log(cat);
    let url = "http://localhost:3000/desafios/"+cat+"/contexto";
    if (cat !== undefined) {
      //url += cat;
      console.log(url);
    }
    axios
      .get(url)
      .then(response => {
        for(let i=0;i<response.data.length;i++){
          this.words.push(response.data[i].nome);
          this.images.push(response.data[i].imagem); 
        }
        this.newGame();
      })
      .catch(e => {
        console.log(e);
      });    

  },

  methods: {
    selectWord: function() {

      if(this.words.length>0){
        var indexRandom = Math.floor(Math.random() * (this.words.length));

        this.word = this.words[
          indexRandom
        ].toUpperCase().split("");
        this.imgChallenge = this.images[indexRandom];
        this.words.splice(indexRandom, 1);
        this.images.splice(indexRandom, 1);
      }
    
    },

    newGame: function() {
      this.show = false;
      this.winner = false;
      this.looser = false;
      this.guessedLetters = [];
      this.wrongLetters = [];
      this.selectWord();
      this.initWord();
      this.filterGrayScale = "filter: grayscale(10%)";
      this.contHeart = 6;

      document.querySelectorAll("img.img-fluid").forEach(function(el, index) {
          el.style = "filter: grayscale(10%)";
      });    
      document.querySelectorAll("a.btn-default").forEach(function(el, index) {
        el.classList.remove("disabled");
      });
    },
    initWord: function() {
      this.gameWord = "#".repeat(this.word.length).split("");
    },
    makeGuess: function(letter) {
      var self = this;
      var changed = false;
      this.word.forEach(function(item, index) {
        if (item === letter) {
          self.gameWord.splice(index, 1, letter);
          changed = true;
        }
      });
      return changed;
    },
    addLetter: function(letter, event) {
      event.target.classList.add("disabled");
      if (!this.makeGuess(letter)) {
        if (this.wrongLetters.indexOf(letter) < 0) {
          this.wrongLetters.push(letter);
          this.wrongHeart();
        }
      }
      this.shouldFinishGame();
    },
    hasGuessers: function() {
      return this.wrongLetters.length <= 5;
    },
    shouldFinishGame: function() {
      if (this.gameWord.indexOf("#") < 0) {
        this.rounds += 1;
        this.scores += 10; 
        if(this.rounds >= 1 ){
          document.querySelectorAll("a.btn-default").forEach(function(el, index) {
            el.classList.add("disabled");
          });
          this.winner = true;
        } else {
          this.nextChallenge();
          alert("Next round")
        }
        
      } else if (!this.hasGuessers()) {
        this.rounds += 1;
        if(this.rounds >= 1){
          document.querySelectorAll("a.btn-default").forEach(function(el, index) {
            el.classList.add("disabled");
          });
          this.looser = true;
        } else {
            this.nextChallenge();
        }
      }
    },

    nextChallenge: function(){
      this.newGame();
    },

    repeatGame: function() {
      Object.assign(this.$data, this.$options.data.call(this));
      let cat = this.$route.params.id;
      let url = "http://localhost:3000/desafios/"+cat+"/contexto";
      if (cat !== undefined) {
        //url += cat;
      }
      axios
        .get(url)
        .then(response => {
          for(let i=0;i<response.data.length;i++){
            this.words.push(response.data[i].nome);
            this.images.push(response.data[i].imagem); 
            
          }
          this.newGame();
        })
        .catch(e => {
          console.log(e);
        });  
    },

    wrongHeart: function() {
      this.$refs.heartL[this.contHeart - 1].style = "filter: grayscale(90%)";
      this.contHeart -= 1;
    },
  }
};
</script>

<style>
/* eslint-disable */

.container {
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 2px solid;
  border-color: #a8d500;
  border-radius: 1%;
  box-shadow: 5px 5px;
  background-color: #a8d500;
  max-width: auto !important;
  border: none !important;
  height: 650px;
}

.engine {
  background-color: #2a7039;
}

.container-teclado {
  background-color: #2a7039;
  position: relative;
  padding-left: 1.8%;
  margin-top: -1%;
  border-radius: 5px 5px 5px 5px;
}

.cadimg-engine {
  position: relative;
  width: 100%;
  left: 0%;
}

.teclas {
  position: relative;
  width: 3.2rem;
  background-color: #a2d048;
  margin-left: -0.66rem;
  color: aliceblue;
  border-radius: 7px 7px 7px 7px;
}

.palavra {
  position: absolute;
  z-index: 999;
  top: 22%;
  left: 5%;
}

.col-auto {
  margin-top: 0%;
  margin-bottom: 2%;
}

.container2 {
  position: relative;
  margin-right: -15px;
  margin-left: -15px;
  border-radius: 5px 5px 5px 5px;
}

.container3 {
  position: absolute;
  z-index: 999999;
  width: 35%;
  left: 60%;
  top: 29%;
}

.btn-voltar-engine{
	background-image: url(../_imagens/letreca/voltar-icone.png);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
	position: absolute;
	width: 7%;
	height: 3rem;
	z-index: 2;
  left: 1%;
}

.btn-repeat-engine{
	background-image: url(../_imagens/letreca/repetir.jpeg);
	background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
	position: absolute;
	width: 7%;
	height: 3rem;
	z-index: 2;
  left: 9%;
}

.life {
  position: absolute;
  z-index: 999;
  top: 10%;
  left: 51%;
}

.ac {
  width: 3rem !important;
}

/*col-auto das palavras*/
.ca {
  width: 3.5rem !important;
}

/*style das letras*/
.tec {
  width: 3rem !important;
}

.alert-success {
    position: absolute !important;
    width: 95.5% !important;
    z-index: 99999 !important;
}

.alert-warning{
    position: absolute !important;
    width: 95.5% !important;
    z-index: 99999 !important;
}

@media (max-width: 699px) {
  .container {
    max-width: auto !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2%;
  }

  .col-auto {
    margin-top: 2%;
  }

  .ca {
    width: 2.2rem !important;
  }

  /*style das letras*/
  .tec {
    width: 2rem !important;
    /*background-color: #2A7039;*/
  }

  .font {
    font-size: 1.5rem !important;
  }

  .container3 {
    width: 40%;
    left: 50%;
    top: 25%;
  }

  .palavra {
    top: 16%;
    left: 10%;
  }

  .life {
    top: 5%;
    left: 40%;
  }
}

@media (max-width: 574px) {
  .container-teclado {
    background-color: #2a7039;
    padding-left: 2%;
  }

  .col-auto {
    margin-top: 2%;
  }

  .ca {
    width: 2.2rem !important;
  }

  /*style das letras*/
  .tec {
    width: 2rem !important;
    /*background-color: #2A7039;*/
  }

  .font {
    font-size: 1.5rem !important;
  }

  .container3 {
    width: 40%;
    left: 50%;
    top: 25%;
  }

  .palavra {
    top: 16%;
    left: 10%;
  }

  .life {
    top: 5%;
    left: 40%;
  }
}

@media (max-width: 499px) {
  .container-teclado {
    background-color: #2a7039;
    padding-left: 4.5%;
  }

  .col-auto {
    margin-top: 2%;
  }

  .ca {
    width: 2.2rem !important;
  }

  /*style das letras*/
  .tec {
    width: 2rem !important;
    /*background-color: #2A7039;*/
  }

  .font {
    font-size: 1.5rem !important;
  }

  .container3 {
    width: 40%;
    left: 45%;
    top: 18%;
  }

  .palavra {
    top: 10%;
    left: 10%;
  }

  .life {
    top: 2%;
    left: 20%;
  }
}

@media (min-width: 700px) {
  .container {
    max-width: 700px;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 700px;
  }
}

@media (max-width: 399px) {
  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
  }

  .col-auto {
    margin-top: 2%;
  }

  .ca {
    width: 2.2rem !important;
  }

  /*style das letras*/
  .tec {
    width: 2rem !important;
    /*background-color: #2A7039;*/
  }

  .font {
    font-size: 1.5rem !important;
  }

  .container3 {
    width: 40%;
    left: 45%;
    top: 18%;
  }

  .palavra {
    top: 10%;
    left: 10%;
  }

  .life {
    top: 2%;
    left: 20%;
  }
}

@media (max-width: 360px) {
  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
  }

  .col-auto {
    margin-top: 2%;
  }

  .ca {
    width: 2.2rem !important;
  }

  /*style das letras*/
  .tec {
    width: 2rem !important;
    /*background-color: #2A7039;*/
  }

  .font {
    font-size: 1.5rem !important;
  }

  .container3 {
    width: 40%;
    left: 45%;
    top: 18%;
  }

  .palavra {
    top: 10%;
    left: 10%;
  }

  .life {
    top: 2%;
    left: 20%;
  }
}
</style>

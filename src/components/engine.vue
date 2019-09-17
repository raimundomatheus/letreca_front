<template id="engine">
  <!--eslint-disable-->
  <div class="container engine">
    <a class="btn btn-home2-engine" href="/index" v-on:click="repeatGame()"></a>
    <!-- <img src="../imagens/sele-contexto.jpg" class="img-fluid cadimg-engine" alt="Imagem responsiva">
    <a class="btn btn-voltar-engine" href="" role="button" placeholder="Digite o nome do contexto"></a>-->

    <div class="alert alert-success" role="alert" v-show="winner">
      <a class="btn btn-voltar-engine" href="#/contextos" v-on:click="repeatGame()"></a>
      <a class="btn btn-repeat-engine" href="#" v-on:click="repeatGame()"></a>
      <a class="btn btn-home-engine" href="/index" v-on:click="repeatGame()"></a>
      <p>Parabéns! Você finalizou o jogo!</p>
      <div class="scores">
        <p>Sua pontuação final foi: {{scores}} Pontos</p>
      </div>
    </div>
    <div class="alert alert-warning" role="alert" v-show="looser">
      <a class="btn btn-voltar-engine" href="#/contextos" v-on:click="repeatGame()"></a>
      <a class="btn btn-repeat-engine" href="#" v-on:click="repeatGame()"></a>
      <a class="btn btn-home-engine" href="/index" v-on:click="repeatGame()"></a>
      <p>Oh Oh! Infelizmente não foi dessa vez!</p>
      <div class="scores">
        <p>Sua pontuação final foi: {{scores}} Pontos</p>
      </div>
    </div>

    <!-- <form class="lista" method="post" accept-charset="utf-8">
                <input class="img-1" type="image" name="" src="../imagens/test.jpg"><br>
                <strong>Palavras diversas</strong>
    </form>-->

    <div class="row life">
      <!-- <div class="col" id="score">
        <div class="scores">{{scores}}</div>
      </div>-->
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
      <img
        src="../_imagens/letreca/paisagem2.png"
        class="img-fluid cadimg-engine"
        alt="Imagem responsiva"
      />
    </div>

    <div class="row container-teclado">
      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('A', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-A"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            A
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('B', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-B"
              src="data:audio/mpeg;base64,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EWMlXiXDaiDD5JkVJgF3L4c5yAAnG5Us//NExFYRGL4YAMmGTOFBOg4lgoYMFBAwgOB4BCws2kFhYWFRUy5YqzFRUVZ/rFG//6hYXZ/rFRUV/ioqLCwsLUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExGQQ+IEYAHmGSDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExHMAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            B
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('C', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-C"
              src="data:audio/mpeg;base64,//NExAASSOoAAVkYAH6BBRtTHZcdkxuHBwE46CK6YbX3/l9vPPPDDDDDDn5ohbucQDAxbn7uiJ7noBgYGBg//8uD4fKA+fLn/EAPh/g+////KOy8hg+qM2Bpg0V0WrTu//NExAkUwyKAAZo4AThbp8c///p+/qyf89P6tqYIhAh/+z0LGf225rE0Ndv/8wxhofQxBIIA9Gv/9/zOWSzkB2NCx5///8+fn6n89xOOFAfCSGy5pcqUAPBJ2+vbpf/9//NExAkUuxqgAdI4AT/+Yb+3v///MT+jf/MXmNMQ81MyrrzN/m0oYpU5FMGhMqr7mefOIIhAxBwqJZQTD40KjdRu54sG43F4rF5UXkzBEIACC0B43IIxAvUjRk1MtP1///NExAkTqyKsAGhQvP///8j1////X6//////u/fn/rY0rnvm5nvm0iE6SqYp6lJVYj+X4oX8fY4cLnDJKrkyLoellPRwqWQkQHARB6SIgtAci1IGIQz7//////mf3f////NExA0UUx6sABBQvPpc/z/////3XfPP8XSVCd1d62jvMrCfxMWOjlxp3f1aqOo0aNdmF5DosRyRGoUowZAmDsfFYuNiBAHOLiwOgmHIRjhd6hZ0////+a/8s0Wv//+///NExA4Tkx6oABBQvO/////v77+fjvqo4rW9ZS2Vej4e5du9nU15riY4SUJmBVylgG6tIiQeDUWHhc2yROI5CnujMD0uKFhOLmkjhIOqFNb//////6////+f1////m76//NExBIRCxqwAGhOvS3ebnV59Kc3d6mtt1091MsthwKlXH3KMcD0SgsMDpYJiAwXAcMnGlTCBwoGxcWjAoLzVQSIWpt/6f/5f/zX//P/+ff////p9HXznpN/RGSrqWX5//NExCARyyKsAGhOvMfRmf6e9jCLnkIqIjiDxEYHBsE4vIj5xAdHTiBgrQKC0SweiwExWioFrHTjyW1K31j/O/9////y+/rL/8v+///6bJ9aPd0//U/7dPm+r5T3RKor//NExCsREyK4AHhKvDkIxDOcw4PGYWFg64oAg8pRygIJCgDAEHWqBtmbmhkbVJXf9+v9f///////////l/yLsv31m2fWzK5Zz0b/oWhXJmSiFYcHhgiQ4oogcVcSFBUW//NExDkQ0yK4AIBKvCHDwCAcARIRGDnqMYr8pxm3YhDS4U78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"
            >The “audio” tag is not supported by your browser.</audio>
            C
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('D', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-D"
              src="data:audio/mpeg;base64,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1KTQyakfNtYfdYKCoFRUkeS3AoJHVkTr//NExHkRQPo0ANDGcP9RUidJHjo9Ar9ZEiEn+MbsshJ//CUVGUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIcS+O3kAMGGcDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExI4AAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            D
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('E', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-E"
              src="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIoQGHWIAMnESDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            E
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('F', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-F"
              src="data:audio/mpeg;base64,//NExAASCH4MAVoYAAEnBiA4V4+Hg+2w7UI1A5SDgFy0U13rDrvZ25b/y+WSiMRiMSykpMHcOLB94OAgCAYgh/8Mf8uH/gh/1AmD4fwQd9MP//gmD6pEfIuNKSYpYHz5//NExAoUQeKwAZhoAHxhdDif7WIEVchryULjAIR6mfpuyZHl9f0kE03JA6SJUFw/HuX0003HcYmxTLB3/1pvTzMpFynV///qY6mo1//kv//1O/WYHkxXHGIkq73d1sky//NExAwSUUa0AdhgALWVbq8gaGjnssfhf/8l9VOzix6frieZ3Gx/do+wFgYfkbhAPZtW4kfennZGp3XKb1q40kzCa8A1Eag7SapqIy/prYFkVcTPbACWJ7nhnwLVhzTZ//NExBUWubqoAH0alGocgYTLxcht1DbfoDadlyKDu5MAuy6cXFkFVNGWkMUXrqMhgTc8yjcThFdiYU0XrKvq9T+pLqMlYapd//+XrEOSMXeqpVcfXLtbjhYxEsf1EwMK//NExA0UyUaoAMYYcN2fmhC0Fef2KZXGePNvD8X+x3+tMI5mTsy+duKDbegKQtLU23gNa7PmaXptAUlVe1a+72fGfBlYRrRSyx7mHXn////25gyqDlfh9UwhhNj7jRyK//NExAwUSVKoAMYSlDRaoYeBEVvymC8qFf1/95Q3FefnhJbP/uJ6/mdSd5q7uA0/YJEKJ8MpAt4YQTZ3rqCp96jpq8T0NXM6yyVlm2////RsCdVEiBbdaUoUYVaN2xCd//NExA0USUqoAMZSlILhqCxUU5RmTTPOw5f3rB9Mcebm5da/dSl1z9Ukuy5nKxAJmrLhIDRM0oFE0OQLjzOV12Fv5Id/+MoALK/5Zn///+j0Kh9xmUIQPFQrRBSucGsN//NExA4Q6S60AH4ScERx+WjBiJc/lSV0tqOz/ancuW8e71H6ayrlvXxlkwlCBlPjZteN7tsVDPXUgunjl6f/FP//VdO/ZaUmY/cwSofiBIUmOdQhgbQkL9JQmeM3yx6N//NExB0SMTK0AMPScO2xockK13ZtbLwk14TVs/h7T9icjOLecamlNHSxpOnzq1XI/+/R////iU4hRFh+XugLiPZGRggtK7T/DpIBEHUAvALwRZy9ngK75cGa+ZYusaz///NExCcSoSqoAMvMcHfp3/aEmlqCmZIvAa26RJTz5eNizTjtvZRuTe3///7WgmxGleqvhoKCC110RlfRcqEvK2VCGJzYPALB0SomEjG3EQ/r/H86ztHEmHnmmkMs67rX//NExC8ScZagAMIMlP5osFLU5X7/dp/3//+P3bcdtWyAYb////qNLQbQJdFBfCxR/CtX1+4oCJgkT0m41+fpm5cRJnNoLFysxyFTUxRNQzkDyUjk7l/Fm+eFIfCgoCN8//NExDgRMYqgAHjGlOdiq5z8b96XuWl3/6kQ0gEVD3Pv5InxRDbMsdWrfou1XvLs6BEBMgAyAJixEJriwIvMhp0uo6WDImFgeA58ZhkhHEqUNDBfq7XSbhBuwBU7awzY//NExEYRoNKkAHhEcLUkASNSS62o0auyP2//2oRGUQ068HhV7TY1JWDFopGDCJOEyVX4cAM+gIHoKrpQ9v/Y3b+1x9ZcYwpzhNtYjriqAgNQdW87dDen//ZdZioSLZTv//NExFIP6W6oAGiGlHd41XabXfgvHvUkHJGBRB1M9trb97ZLZCaUHFhjSgfs/Nsy6WVVwygcMWdA/c9MPhi0vK0QQLJ+tfXX/+9dELrqq6g3YgAACuDFQKBAILK02IC+//NExGURaYakADiMlCqlEGWMqYficwLB4VcKMf7bPL6LCsVRotQBiCXFXR1LOIocSioTsdf6fvOZLLl3b4nUMZsZpUDhxsJTSfKj9SQYDAPmwpELSbLBU6MTnbso0zem//NExHIQqTaoAGhGcNklRQ1a3RIoiV6bLk7EUrtL1QD0BKHqzR6aFtha9J/URGRzTiEQZuJO1+V3txGVPbNHD0Xo3Kn/d7N/+9tppBgYjBh6nWvc1nY1pj7atIq7lekt//NExIIQCP6kADhMcHQ6dcKjRsLIEgw5bMEUFBDC04pW/XmLzCA4gAAE0JAAWL0RC86Hc7zMmrzTVeqzM3EXdHUcdGMYJGCywpZQZUaqF/zv/+TUVSR5QESD6Dq6JUUQ//NExJQQuXqYAIhMlO97//3f/pQ8WiZIySk1x1wxWDSZD1Qw82E3tOsotKmI2d+QbnI401eU5aPNzZZ6f2i05tXCXO1GjlomRVJA5gwH8Ri6VC2TSsPJIKJsA0Qg5SL0//NExKQWcX6MAMDSlEuhbitvezl7Vy9bMwRvLYG6PQpDtfE9XPrbbxeEhI///9YQ/6FpAoVDonpmoGaWCGViAJYcxVA4QTQMQbwMGA6GpKNn7nctY50uv/+2+1yp7UkU//NExJ0dIeKQAMmYmNEA0RjxI6ILBwQEgKOTF6f3IDbTKN3//+sYkBnTqf3onT4AFSE4FBKY5IJ19cnalNqC5mnpRBAAO7zOlizu/zEbqdlMk7oxBymGMcJRoYzKzKUY//NExHsTATaIAMLKcAMLDA89DMv9P3NSVEHix2RBbZjMwr/99UGj3/5UNT3yAEthiD6VLVbkalz6tdcksAYNBo1spSlLx8lUOeW1VTOTM56eTc2ZyvWmzzQCEg08FQVc//NExIITOcZ4AMCKlCUFf9fg0edxqYTKt9/J/qU7QO0LS7SsNMhNX7qh+UWqIHMjIvU+qsNZueZ5V5Vps7dy1SWol2JJrdasi+Yrh5ah9jorfIg1Ck7tXUOqe9Y26muv//NExIgRIP5oANJMcLvFjSU334PXWi8oJAHmcYlBJqKhMYYUoiGPDoi2ntJWCyjywVPFip0TSQdtQsFQWwVGEZWCz4aWDWRiVRUJdQcIx7pFoNN/5Z6pLsW4ijXQEXKk//NExJYRsQ5AAODEcALpLOF40VEx1MGYOnDEvnLYBgIy//5f/////lksssslhl/VllllBwWFhYXFRUVFRYWFhYXFf/21CwuKioqKt/+KilVMQU1FMy45OS41TEFNRTMu//NExKISaEIcANpGJDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKsRyXFcAMBGlDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            F
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('G', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-G"
              src="data:audio/mpeg;base64,//NExAAQ0U4UAUsYAB0HQSwBwAwEwRyefOMYxlf//////UL///9w7wDFnERCcAAEru5x3NERCcAQuH/B8cD44EAwJAwXB8cD6gxKf///5eUVxtiwNAALJhiB9hItXqA6//NExA8VIk6kAZooAB/fy+xf7x63N874tb+jkGMjmc5zsjIBCIMiZVR3q/YRBSDHsChzZn326vGqxnKkVQXGMq//rdGT8iCCyBD/1p0G362lIAUTsRIyJ4M+BHkFNJcG//NExA0Tsf60AdAQAIF59SLfqZ////9jovT/00ezdfO9c5zhBiEDoMCOCBi3UIUWrqCFg0MhCFKIDA17xNUdNEMhKOheQXBB7D5Rd9xOUTVSZQBBQyVTkTJayJ9uX+a6//NExBEWut64AJBMuf/9cmP+b7jvmRDf/s+fd3STakfBkVpZA0JJXeCgqCFtt7HxX1BbIZX8PkvbxN/djM1u7v819j/zebEPsLL9ulkKp/CiubdY9oQwIb2DMUHyi2d8//NExAkUIrrEAGhKuf/////d1/8usrWRN7op1dhQODBQYQEEGYBx48YgvOIIyEUyoYTERRo+jmXVzu7MnPdG6PsZ3RVdLodAuScET8B50COjCc7YqhKkFJgepvpo9b8v//NExAsUesrEAGhMuf////w////7Tn///7f86nciipKzVVIpZdoU0Jb0PW/M7unsZjs1/M1/3mjdLvlNWM33cjc5up360wwhXuJwxFrcmRsw36W3L2cBLIa36v/////8//NExAwR+xLIAGhGuL///l///OcXscTHTBBghiSYUKUE7irXYiUOCI61ZnM25e41VeX4iprzYrGSxh4mtxJSGmtWZZ5I9HsIelNYNsovpdX/////89f+S/J//86fpsTu//NExBcSEr7IAGhGueMg7DjBwYcmUOLAYRKi3Vxi8mk2JxSpXsOFtOyz5ftRaKAkQo7CC/cUbVeE1N3PYZmqKdoUI831///////nS//1Rv6KajKaMUWU40WFyiIgKDCO//NExCESgrLIAGhKuAhpEcUZUSSw/mQlVOrK5TnYiurtV7e9TkfUazFDyyEFTwsQa0oJu4SIP8mghBZojWPNsl/////zNEN2/3zq90/90MiGGipyiwiKqYowGFhcqHQj//NExCoROiLIAGhKmMwkj2EWemrrQWc5jCpgNRdUBB2E3LoX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"
            >The “audio” tag is not supported by your browser.</audio>
            G
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('H', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-H"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            H
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('I', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-I"
              src="data:audio/mpeg;base64,//NExAAQWEYAAVkYAEN1UDIUNyA3mjUKLoRSo5cPxuNxuNy+neUBAMeUBMHwffDGfLvwfBAEAQBASBhZ//z8EHfrD//OesEAx/dLlwcDCqPZMRTIBREGSP4hQ2hpjZeH//NExBEV+yqUAZpQAP6fqMk5z0lFb9rGHmf+a5jr+YpOIRjDDR+TAKCp/G4qCwPx+fHw1IRbc1f/n/nz1UnR//+Y3/MN+j///2Qxm/9MXE7tTY4rAkLIqgZEWCSILuIk//NExAwVSbaoAdRYAE8TY6iFBQAMjov9FN/Pd/77++Gffsjj0ImItGzpuaJgKAcHkejjSUaFrzY1HgbCGWJ8uYtcd1Uu/5uog0RUPgcHD+2Q///hgXUqVdVzyxIRhcvD//NExAkTocKwAMhSlB7deBYWi/l8Pz+fwH8L//hPP/pAa/VAOAwhdeEaIKuuwEAgeRbShJbPuoXH9N8Ga6baTSvXFbZKRrlP/dd97Wn1f9OkLLpmvL+OYwILrT/80gw8//NExA0VCb6sAMielNf5o3hH8j+d+pm6p//i9t/9+y1+3g3yWnDBY1O3eLKrz/P6DqJdvZouvnFdUx4Etc/wINc/t7FChYDFIq93/S53Vip4O//11WoVLzMy74JsUiRA//NExAsT6b6sAMBSlDIBEePMunKfOhe17Xr4fNL+63+rS1HuNBoeRqkAhINVjoItdDZAFx6ULaVjDPsY/zhJPVFVEpbFh9pmP/myiv9//ruRQho+RyxDmpl2UuOdPLfw//NExA4VWaKkAMiSlPSlkUiyUOJ/TzdW07l//ef/PBOCwIBgCCJTJGKSVa6NdiLLIWUzcqvuXeS3bjWlCcIqgyIkHpEd/oERpiDvDsBRav/SIS5ZFUXIEvlgCuHKyI1Y//NExAsRuZ6oANBSlB0zEXYuqcc0N5vvP311+V5/f97trj7YaOj0LXFat0USmjXdep1X/+zuvD+53NgULKCjinNv/5pu37v/1CKV8sk/WzbmiTki2hlzKds3+o+r6dev//NExBcRyZqwAMiSlLaNr0/9f9NveVDc0ApH9myEzbxhtJMgPytLcy5/bnv3Ps73USDgcm8MayX//7P/9NVY97NjIsBVnxykxhJU3ubma4YuXfXXPm81J1fFc0b2wKg8//NExCISeZKwAMhWlNuJQ/2wMh3rmxwj2oO4/e5Cvj5t/NPTJJIWokPCT11oBc5/2f0//9ADVSL2QktOEDGMyd25sgp4WMKaMupTy7LaU3j9UZpH4NtCjLIiEuLgWhSR//NExCsRKd6gAMiUmJRSVwuACQnJHo9Y462/2XRDqkpzf/zTWkJtB4V+HpTyNh5OSPm0Ay+TQOQAD8/4QRbPb2mpb0t/jcWbWHzwplFBRdbXiuyZJIUAnOSLYkJSmrNo//NExDkSaRqAANPMcJuMA5vzxGSqV+Vp/////5taONSwwrRvUzKtcDm5BVNVFUGhChUM3qa9S2auX1aTW/16DesglCoZWopERMfTnS219vooqNdCJlVM2GSeelXesJzf//NExEIReRZ0AVtIAOt1bzE9SNjH6XNjk4x0PjhhSCgxHhLIn3mUEkUcHcowalGVB+HcwQR8MR3E8lE1yKRSsusPtkoElJWbbe44SyQWLsOmo6SStuJyZleapEtBV26J//NExE8filJgAZxYAGnruv3Sk1Brmtvj7PK7o6vfHEytbpOV8cw36v/+v/7lqB8yFTlX+29W8JNMhUUNKj6Q01UQXFagyaGn1lMbs2YtWmcaS/jPameXL/2WC0FxLhjC//NExCMRYJZ8AdoQADMDhcPAIQqe9pFBVR9wiEaBzWpKqvaRQtVzN9qar7Ef9qaqNHONuEuOM3Jm0oa9MnR0VLqCrVmquCLDCiAkNQw+GOLDww4Kkg6IlDlHg6MIjHh2//NExDARwKZUANJGTESzzxI8Wnp4ipKjxGktfPFueT/9iv/pNVPMEwNKDHnIOLF4WlU9Lds67joaET/Iv2Zp+hE/rDWk1hrnKTUmWQ12sNaRrHJgtI7nfyaxyYKDQCs7//NExDwR+bncANBGlB3/V7No/T9bdA4WNUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExEcAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJoAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            I
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('J', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-J"
              src="data:audio/mpeg;base64,//NExAAQqEYEAVkQAF+A0037T37PnE5VwwuVWWsO5GIxGIxSWHLB8H31Ag4HDgPh8oD7/EAYy4Ph9b//E7wf/4nB9/L+XBwEKSgPv/UD8QJNTEtq/QlmVBu+4hfMB3pu//NExBAWIdagAZlQAH+79tXFB1PceqSfPc8hJTl+9GnD8VhVIP3s9iRh+pQ3/shjGCJFo0iIBwg/5jOhhnC8OBAJRXHoVf/9QwFxOlf//ly7wOBz4WoCzEWMkzAAyA5Y//NExAoUIb64AdJAAJ4vMUxpk61f7pf6///+OOYOm4mr+K/eP92dRzIP79Lu6dx6JluPHi4dgvYt3oPxk6OXBQKGBoKICIJnIJ2ANA//7ZllzL66H+txJWwMvF/tMuWv//NExAwVUdK8AHhMleL//z/5ZiP7/59////7959/mR324ju+KdiwMkAvYlEiQ6dEFnmGgPUGNXt4YPUR2GfO/nKf9gb9nPfv7wc7Ww4fh7Dp+d9UDrXqC9yNQz4lI+04//NExAkUkdq4AICQmSyH4f////5hExv////6sMGkEraUtfMU5GkEdrEmnljglCcx4EELg1IejB0Kw2E0O/VtkLIy467T9/ez+ZXPBZ032N5/vRG/lCwqJpu20iGRWN+I//NExAkTWka4AHiMuFvtbowf7en/t5EyC///9+8JBCfuFby9WZ4xPIpMzE3TIDEYg81GW2oqX1v6z9879mdv/uf5W58K49ezN4blaHzFWUtANUWf3m3BA2pRbsATTHb+//NExA4RcV60AMIKlO4Wvxf+Mr4lP+3fopamAUD+punz+zsMQAxxzojKWdSC0uIQVcVMiIOhoO+rLeerub/+ayKr/aupWHhfM0nGb3IvRkgQMrUj9O64Z7+eeApcY1Kx//NExBsRiWawAMvQlVfp+r3HwGBSSWyc5Ozgn/7l/4vm4/+/hDqQgoAK0QgrXVq1QhMPEDACr/0qIlT2NwcFLpuxB4poOdP2EbDlYiW+c8+7nWOVIYd3fNy+Dt3swOBr//NExCcSMSa0AMYQcFNgeHg0VcebEVP8x9dzvL10NbiyDQAFhQFDUJCqHqOrb6oWJ/hhBLH1O8CTjhYGZmQMwHh30mmVizlPV1AFPhlUT3fmvMLQRpGtaACXhAbTvCX8//NExDESqSqsAH5McGb/rb+//1qo+zFsToNZdbh3E4rYXPnVFjddSYtWpgWrLdU5KtjlNXYQNjh6u8QWKXRl2DcIrlXyWm/VaqksDgvkgQBNBii6FNU3T/+1VCGxOkft//NExDkR4R6sAMYEcE6RonMx6A8h31U////+pRqtNdZ8HPtZxw0UfmnjwIMCRK1KUGzgjmaz1VWPDOWIyQNhYQlg4q8uQCHSMArMofFc7dv7+2ih0VOCB0L77u1CKhwr//NExEQScSakAMaKcBA8mlbIZShku+Ax51rMYEqrB9uGCL0ahsLhYUkFHYJrRbUBqbtdziZZdBVrr7y4WSIGRRcshNG///SYagIcafNOu+0XPiwZYxjbFMW3///9Kmcy//NExE0SmSqoAMYKcK9qpQL/IINC+ROgPOtTIEdiYvEZpskNUT8WSiTIIlOYhbsppKKBrUgbam1df/+moTejPX0//1aYaLlUGFOXXVUn//9qUUITJj7ooJKx70VdPxYi//NExFUSOaaoAMTKlMMISiwj5BimvKMGkvfzJaEKq0ooMv7kvEA6Z4uYFz424716du/fRsqLsoXrct1/rct913pp///o+lUe9P/ABQL5gVUhZEIIHXP5F4COyEY686ql//NExF8RUTakAMZOcJ56adUw6nFKrkdETmDT801a3rUm/Pci/93+3b/05Syguv///qZEQZi7lJV////mulUEAImLoFChpdnbDwCGLUOuwcxU0DIcUyPsRhkTibd5B95h//NExGwSUbKkAMYElLQ25IGQxNhPABFHkOYKIB7OGxEJNOTS81Z/nu2rr6Op1Z3vqf//tr6ZopZiOEZxdLkf///OgZs6pQGiGfhYLuAQFAuYTXMoMTEgJOaG2AvqYMNw//NExHUWobqYAVloAArtVRZzATwnhxGUf24qHL5zAIwEkh0BxtLGbVxBdywHVIL23gtz99LEj73nOcWfZrp7SeFeLAprP99Zra1tQdWxaub5pXUF6jF1kpcTisEBexMQ//NExG0iIZKAAZt4AR/8ikntBMMqhlGobyMm3Wp8n5LK/4+iluSyuSU3wK4qYnIoQBg0lorJVpJPW4rmSNvGJwTL5+Wh8HCpCjNPRphkChQgsvuoIM8VoCIhe3U5RyK6//NExDcfGepsAZxIAXZowjXUtf5PwzMzMQtMOXUWnUNqHnfzPicmnNzUuMM8P4VUK3yv7knIwKcYHuMwzcOof71PIgygZSmV/bL18/b/1+fZHWoHnbDz2xnE4NCjb7wO//NExA0VQUJ8AZtAALDRKHuyqgdaAceGK9gtCSvfWDQ6LFv+LmYJFBUYf/71UXZTjiUb/+4ip7KApIKehLYVKsCp79lyQUCQGQGgN/cvqgUkweVYIwGUkRAaMPsmFmJZ//NExAsTCIpoAZsYAM1KJM5oJNS1L2cp1m6IGFA2WH7sBVhpojniwULKC63qEKjd15ca4SmNiLAg4NOch70N/LrYG6ujVTa7qUKpQg701T75twykUm9yLacMX/aGMK5f//NExBEWedqgAY84ABkRxwsaET8oNCBEFoZQ/42EgwRCrCsTEyrfHR4fIlzC7D1E/lBSLy40VTWNU1X/5xlzD9vHh1v8MKAZ/nQfDv/AjEsJ+y1YVAYeM1TdF8rleA2H//NExAoUsaa0Ac9YAEmkdYI44nAZAD2Td48Y71hMnxD+E+nHV2pFI6zwojMrH8dB8/K5oyJqI/6fV0broh7PvOVNv//////m4qbZSFKcp3/6//6+AK448YUi16k6mxKS//NExAoSAarEAHvKlKVU5VAJhYtN99d59ZY337/1u2RtP9WfFsHpSsJne6cdsczkdVeYofYwHGHKjlLLTp//o27SiFVFH///0NvoCmdQflVArJpcKWacFABF1BPWe2Y2//NExBUSCR7AAGvScP5ia8NVbyXZ6QtBoEBGEViBrxRoftS/a/nHzyVQGT0nBt4aKBUP/re8AiAqcOv/////DtVDN5Lm0eGBLb5QHDbkxc4rFS1meUdb6LH6GTdwhie1//NExB8R+TK0AH4ecMVmrIhnndB9F2RcVdz4lda3D1nEDePqvhz2ovKK9Z8Uw91WSHfkHtrSSZpq6Wsj+qUQ5TJ+VYg1sL4va+sndGxf5Ra5BOFBqL6zwWW5lKKGvMQm//NExCoR2RqsAMZecLERu42IbbNfVcZ/xvPtV7mFvD6LlbQ6dRPO9a+1dSYqzDAWWSSjMBHOHVlhUcaHIWjGN0HXt022TCUzkF1/iNNUynIXuoLfQ7kWOjC6JUq2J9Fx//NExDUSmMaQAM5ecPMyCJp0XNgEJBIVVume/K8jbb///QoTWfWMBVQ201Bk5UJI82oiCRgEsD7Q8AXAS0NcRY1Wqz6drRLm9O4sR1Qx9D0GxJHTEsJRd/Mw7/mnKfMO//NExD0R6QaIAMvWcGG0sHdXTLDn/f9dAXMKgcuCoYYVnGNmIcAiIBMIETAQhH2XJkTE/zWZa1YFHCjXjxIL58rmLb1SlY8y8sHp1NVNrOdSXmZRNGGuXwaZI//Q1R6r//NExEgSqRJ0ANvMcG6PUjYT5sw0BJTnJ/hgg4RAcgdtXbOJ5YTIKZ3TDcro2vFvrOp3GX6PW8i4ggHUWZpP2eR9HMRJYNBS93HKd9Dyui6nMvI/r//rOeQTOhVZgAFT//NExFARwRpkANvQcDBHIjFAFhdf2W1ygiBaOccrQtyjFybDo1hmSXOiSBcbTtM/IhSg0QEoxcezdyDji6J1G9LUu/0e2r6OmgeIoRFuAgMdGHgABcEyCCp1G2eB3ioS//NExFwRIPpgANoGcNw0OhAQgBhNBlDoGQkCIekXWh1wYazodArsJiy27ZtSLmlC76UUcV///oo+ksrFr9UCRObPBSxrVLErcAY20dJOcXk4+Yd6eHRzJtrDkPbDMHSQ//NExGoQYGZcANpMKJUBQ8SJItUDrxTmk1Pyz0dS3eIlna2a/+V7ytU0PAjZo0BwpCJJ8phAitWMCxoOiEceUFbhLtJZYDA0oK5FpPKneGl86wVCT+WUCoKrctR6vDue//NExHsQyNJQANGGcPypZ4drErBjxC656skt1C04yjVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIoRsCoQAOYYADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJYAoAQAANgAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            J
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('K', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-K"
              src="data:audio/mpeg;base64,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TEFNRTMuOTkuNaqqqqqqqqqqTEFNRTMu//NExBgAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExGsAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExKwAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
            >The “audio” tag is not supported by your browser.</audio>
            K
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('L', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-L"
              src="data:audio/mpeg;base64,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OBRUMMgRgGfGABKmsFmFlRkYI/tR/m3k//NExGIReWqQANFQlBnZy3M2f5z/4wDAaLkymd4udY41kCk2JMlAr5YYw2GgLU7exSGfkv//7//8NzJxIEkhywkYIRhuoYUEK6XbDyxncWJS2ojTPa5ZsbJjuJJ4IAhj//NExG8SOR5sAVsYAKzaTsko1PGw9l5MH9aJjNXHm2SCwwJj4s7Dac2HLWWJk9E/tp3Euc216fZuoccaNZ/X7nVd1d097T6z7fbF7m+p+vin3D9lyx+hTKetL5fn2//c//NExHkhqnJsAZtYAb//DuXI1V2+BAwjg+eCOJCcMA5r4MseFj6HAZPpMBfsw+sNMgiESprstDcE8e1jWUTVQPBCEYb7Xe9sWkVk4dhIQhlU08q5tF5PTNGHY3TKLadu//NExEUgEhpsAZxYAbN07OMUe5yVNbDrbthq9s2vnpyUtRc5Ju7dMddR+655a9qIUVBYQSxx/f7diVswHv4KFFQWEVBfRfzvajx+hEnQSF2kTmbOC7r+36WlwlVrdWzv//NExBcRaF48AdoYABx+seDQlCQNFRoaEQVcVCR4qAYiKmJaVc4sVCWyDP2Q1wVtf8lrt7s98lntlbi1NcoTMlIWqwGyHFKtF8XlnbxCeO14CCYZATceMhOxxYidPEjx//NExCQSECnwAN5eAOcok08dPBMYBSwFJM8qRCW71liISArM0KuUBfXKt1NxnQRCZlVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExC4AAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIEAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            L
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('M', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-M"
              src="data:audio/mpeg;base64,//NExAAQ2HYEAVgYADlA2GLoPCDQmVJpOAlpXwipDD+P4/j+Rixrn///vNBAIOE4OO8Tg/rD/g+D/wfflDnLh+GCjvE4PnxGH/B//5d//4IKd/JY0MvIgxhgmGigkUYK//NExA8V2kq0AZpoASf6uKJ+Yc7Lc3PfTTplk3OfUzaZ00Kzb+cJQ2MRzl0vA2xiCJGE/k0tLimuIwHKHgmeQT/9NaZuSjUDBAyOEAnn5//9bt/zerUlUKRkEACCGxWI//NExAoTka7EAdM4AHB6QGmJGoLSMimh1J+cQ870dvHX6DfRBsMMagqB6Bc5HJBUZOHRqJIEgkZTTVWy39F6oYyqhxBgWJH6zBEJOs/////6FSNdHev1BWRWrLdSXnrZ//NExA4VWd6wAMHamD3iltnAQa/JegL/Qn8ObqHvxSTZqgNw8ETqcOA2MKBqD6Sw90zMiA2zPUmSiHOnvn36Ro2s2IK0EJx9SJSMTY5v//9X0/5NakUpbT2qJ3iZSbl8//NExAsUeeK4AMlamDajwM0JnoE4qBIW9fQBH8Q6qH17iD6RCzMMQXSxFkimL6Jxjg1CubLPmxfHMkpJjhRr6PrSqrorXRL571exRSZOf////+sjg6W9bEyNUrTWQhRD//NExAwTuaa4AMFWlEpSoxoHvP+/KCQFpVqm79OlpzPOctRVtaaPqwTwCkWpo1ZuTjVIPw8GV6B1rrfbWzX//x/9TD0wKKoNCGDRp3//+lJcP/Kihdq6tg6LgfPItZ3///NExBAU4qKwAMKUuJXe06tq3fl+Q8qfi7kd0EsJE0iAqusG1XYJw0OU8KUx4pepM+S8quUTIDqC93ojKgxNyJcomr//9v//6IioPW/5dq6qI8/GuKM6x9A/jUtwurVQ//NExA8RccK8AJFQlBe/Xnb9eptPI/0Ja4B8ApkhwdUGCzSMVUDgOTcuG7X3i/7uf4e73X/mReAaOCxlf//+0Ye/6qpPK11J9vtPo8oRKN0kMl/nElgIXn6vZfN2zpza//NExBwSQb6wAMCQlIy5cW3cSD6QMiaHFlignCsIH4VhCW8g3hW+LjnnS/Q6//kYPABK9Qas//+IaWZRXAqRL9yWPCok84DlhUSAWR4Nhyi3WQ1msnkNXWcXvl/bp+2o//NExCYSSS6gAMRScHnkdVW2BCZ+lg1TEDSTBZa4pimbMgMs6WSsFA+4SwN8qdVJVQSDnokOyQc2anOkIIituy+xUCjQytaQE73WTa80ttgmslhIjkktqzhtbUnXznjh//NExC8SSWKIANLOlMqFSRI8IBcEpMAAVhKxct//zx01jV/1ICINKhQdDj8FSiagc2VwAubHyUy7kAgu0eUiiM1sf1kPQdRFj1SZb5hfqX9Hv7+17rHY9i4Oi0mj0BM2//NExDgRMR6EANTWcCU/6IPUdX1yn/+/WFowEdWEoAsih4Q4r1FU5MGEG4LdVSQLrbQCMeVKPHI+LqeRecbONnH1vnXyolWUiC6aG5MCxZazT/6+T9FFHTFpf/q69yxt//NExEYRaV6AANtalC20I41kppj8BK5H0IaelnY8PLrA8DkSP4vkAS50fsqEbRyLbZfQ2GC08Y+gcGKCC6hCD02h02y4/hB9ggnxPX+s+///9KopYVDgQDE5s5HSQYBG//NExFMRSXKYAMlMlMre5gJbSlrGirYo2QTAnqU69C2n2kzV3ZklU9cZO7Cc3zi+iWumQG2i6uEeOlixsFoq80VnH8SOTVh+ZvM5lJmG/M51ATNaWkiQsDzjIg8eMy52//NExGAUGcqYAMnYlQIBnPgKYfhmwEfRtW0G7dfP8fXY6P7IHSa9RFPJsSYlR1MdoUx+SBIoM5a+TVUy+apqMj+Zst57KwwBz3/Z/9P/1DxPS6ayQwBD9aYISThGgSDo//NExGIUOb6cAMialJDW8/geEy0GnFe4KF2y2raH83l+W0Pz73Fc8d473ZJ1vIkTbn4y1Z7YMe+4as+e1fGWGPfKntuzW57zLE+G1195cP/qBxzIsoj9H/XVOeCh+lEI//NExGQXSdaUAMnemIExc/cGA4G8RaEMbMAGnfNCXk+QfA4tqW1LaDL5f83/cv+o4upTshV2pNagmbvEAZb97KSkRhqonUMpnTPveEnn1UkLdG2JrMV3v3m3iptUzJFo//NExFkZmdKQANHelPqiKxBXw2W/yPJPDv0qZAtGMIhlP0nzTcOAOjk8EGMDUxQNcjxUZnizKtq3L87xffzNveVTf2c4kTDE8xz9Z4lxyqus6TLTMGGld6qzUxhu14TX//NExEUV2dKUAMnelLzpTUrVu3jcurWhpT1k7/9FMrUS1tNeGIRViS5JtC7bLJFKjNMaZVsdUYhf4m5UK/NX81Uku7qYmqvnCAHikAoE9OYOkfCYcIt6Y7CHg8wug6g+//NExEAWAcqMAMoWlOYPVtRh1G7HOq+Gx7r/+Xp2Iv////+VlgUdq/doGB5j06aWAxmYbiOAr1QCBdBulgc46tc9Wt7TRo33S1u33HxHGdHuiiaRCSOEpmdkFCVFcjjo//NExDsRyRaEANvMcMhosItZaDQFBZ899ao01ALiRQLiBqxadKgIgyVYrQ2Ww6OIETU6Xuss0+ct815c/ntf891Dy33ERbSvxYdUJRoC1kS81/ZFP/Kf/9tjQ3UwcUXW//NExEYQWRJsANsQcCiY6eOb8PWMZy2eQRuEywHldkvetmtbvc6XmX2RzIR/ro+x1EQKUqCzgF8A632u3MY6xN5VT35Qsuzu/19aPTUMcJbyFp3I1TUlvBpDp5GgmWmo//NExFcQaQpcANGKcKQWMDgMNjDwcQsCYJiMGUjQyeDiRU4FAaBthUoNYeRGzT2d+SsPIr3tXt0fV2//b+k2KnNQDgxCVha1T4ZTIcYKCcY1ZqGMjICuGFqpNZKh9JsK//NExGgRgIJgANJGSBkBSxFxYkdWAmhK5zVkZKey27W4l6n6n+uGr+SX3s9R6jhWNrUGYJmjh7GGgIplAVRN6oJCkQqAgmGQE3///pGC5nHtNCoCCYqZdiyAKFA8aCoq//NExHURMLo0ANjGTEns+rqF2GXCzNQuKsMgsKmfioqLVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIMRCDXUANYMBDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJEAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            M
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('N', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-N"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            N
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('O', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-O"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            O
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('P', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-P"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            P
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Q', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Q"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Q
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('R', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-R"
              src="data:audio/mpeg;base64,//NExAAQaIoYAVoYADTlxUoby4fL8f7seacbY4DhiYhZtFNU6Y6g6x2du/D8YjEYfyMRiMUlh3AwMDAxZ+IAQOf/+D5////5/6gx//lAwgI/AaogGgbuvrY/wcn8R+LB//NExBEVmb6wAY9oACc1SYCiDwNPRSZEuFw0f3c0YlxwFw0HOX7/HMRiXPlwkxgBhDRMwZvyaXjx43NFKLhcN3of9NBJajY0L6IYUthz6ZB3ghUeJgn0bLOe7wqE0Ro1//NExA0UMWrQAY94AA9ievTzI2G+iTpgVc4Uci7uUG+sVxjWJvmHeE8b80xND9e7mVD+aFS7fDdbllSWY+IG9wpsf7nxmm/iD4HbaaY3XtYlJv5da7yMjWEps5XB0EFr//NExA8V8b6wAdloAD9U28HiCxjjS7dW8tSRdXTJc16xiP0hmT2RGkcySSSYngEizLQLo4DZFkD4VMoraYCyNklqUUijVyk/W3s3pL+ZadbN0u3//6VNaxljcegirz/m//NExAoUQVa4AMQSlML5mKLKbpgNJ5dAfDq0ybNemTb6jAnCslWZkXMx66MCw01sUaIhQ/aEaUsqCarNkYrIiFDGEE6CgIC40PnOpguJf////6vrXBvfJKDSr1qfhAZE//NExAwVOU64AMYSlcxvW4CYqEKisv7dd+W63qX2LX/hX13909bL+yiKWcs+mJxStcCo+ISWKgYbIiakEalMVmT5CyqvWxtGEw2Wrx/9rR0+fT//8BByc+6oUrLuuRMK//NExAoTeTK8AMTScaW1QWQMOuAf4ZqYl8uH9AmEWrMyel+ozvgoKHyuZGURauRj4JCakAUVJXfNjlIC+VNGiiTDwFQB5RB29VZnlEba//2FLVsIYDxFihCcBpgWrC2F//NExA8RQT7EAGPScPRFgcxDPDeyz5+Zc+97b/ncZ7DYObtMA4SEiwAAo29ASCF0oRTkxmpG9QRVhCfX54LBFai/6ZPY0+LTMdbTQx+bEZ3FuE8BSBU1plMiT1pPUaG2//NExB0SUVrAAMSYlGBtmbtKZBjaoljLWQeABPKhI/1mHazAqrkJmTWWHHel+K0w2rLEVoZu8if6lUBrvQndXLoEhj70DZwk4+wD5A0MiGq18wfMI3xuJv4Zd+jl7n+T//NExCYRwT68AHwecLCC/J/reMPM6w8jbhx6Whq9MOVIksWlILAIDrySyNPNGGg65BCrdZp+Lf3RqGCRY5iEGCBQZZS1pak9Ztpj1bOsmsaz6yYbTNVcFA5blP9xxe1d//NExDISkVq4AMNelEB7P8ru94EbWsNm9Yga+bzLKiyY6lQ12hVD59GwNrfB2DWljA7hmT7BjGSqotzvOPrfK2zB8dha0dxokcCpiiyxLCFoLuNSnYdhLKYknuSZ7T54//NExDoRQVK4AHtalPlZaqmXpr/p///oG08XwaRg1gdsmzYY4C8Om4eiW7lg30U8y6Sf9KfwomMJ6J8rmfyi2x8wCxMmtxtfDbbeIcfMNWzaEh0YdEbA7JdMWcZ///+t//NExEgR8Sq0AIxecFnz9dhSYtbbPhNTzV2UGDoYt+qVyYvhqar9/XeflX/9SyrjuVODoSnFUy8tG0wPOq5tJRmnkjqbKjB4jeGaK/qSLF9TfW5Am4OIrywCIlIzmlnk//NExFMQeR6wAMYScKo0XEfwHDBMocQwt1SysbRH5Do7S2IukQiSwrYk+abuQEcSDWmvHLe/7f6GqhZP////cj/6VygGntTAxAXhcangIlZFmORJpCGQplFKp1dvf9/e//NExGQRuaqkAMlOlOvxq4iJGQpzCiHIjgouBGM8XdmXs6u+tf7nLiA0cab////vH//EKRJS3fVTIy5r8muLJRpk8abs2zwBmGSVpLf/nVLqb3sdjOJFaV6IoEB23FVJ//NExHARAa6kAMtKlKGhMmCDRtKMoeGf7d7v/9zzc3J95tA9waWSqf/Xuon/JHQERv/9KgYK1iyO2lYdqROk8Np24de5xK4SWC34Z9x4bHz5//WbKNIPM4Zwom5hg4iP//NExH8UmbacAMiSlA8SXg/QAA8X+4+UB3BUrD4YNWRqS/FMuorT/Xnuyk2v9li51xOdlSzM0p9rzM0nq998YcksCzpKWiEQvQhkSFW3f9Q8jRUbuuQgYdRkYH2YdeC8//NExH8cWgaMAMmYmPS9qW/q7bpZqq5neZ/uWvaCy5k1Bq0h3bByaHh0sJgWABjjhojyZkdo0lZOIoDBsOog2uuGnW1DeWfcwy3In1BWPA/GBcTXMOsf8NYy52afE//9//NExGAceoaMAMoWuN//yq6p/psL3OdFTFzf6FF0UjFCXDMJlm5ycpqvoLVMMAGIA1GEyKkBHz///stC/qpTq7pIhceDUHTksRAOsLuBE0Kg1U/VLuKjlX/64lDZDiRU//NExEEVYbaUAMlQlFwMD1zB50aAtv/VTQRApolv/6xOihblqNdEA2rAVdfFCDUiN2BY8NtLXXQCgMWJpkc+S2t1slBDNDvbrf6UYmvJ0dsRtklKoiiWCRHNgaMG2sRw//NExD4WybKcAMiSlP5yz/7/9jOcIwyqSdSQ/JtKf/95UGBMLF0f+hbE1S3MPVSoEWxhzB/j/RfmgpkqHmxYqGu/M5dsc9soa2W9R23akR0nFWcfjaOLC6o4vhO3BhIP//NExDUUwa6kAMnYlNxp6P+otztv0z3zt8vbL9/2ZDgSWLLIgL//q7v/6yguTwKOjC5c88BKebGj8N7VQj/iAQFy76tqW0P0HWxGO3blBOvTPW2R1E50joO7SCPWkPo6//NExDUVUbqYAMnWlJE1FgIx6aJzpYTj3PfKTuJbwgbO/4ebOWWSG1s//7DSlTXDE+5YIwIm+k/Wkn0ouvG4JAZxOkOUVFSx0TTWRBpxHM4fdOkm85X5w6ydSn8erWiZ//NExDIUoUKIANSYcI2TTDGTGG7QEjiNpdbuXRy3ErlCfUUWe9bv/7YhAf/+pTqxSYfWGAZuGicLXxwIbt8HD11NMAFgiKbnB4dzhupq1JqNzTjn6cfBXZzvIQVRTpx5//NExDIUOTaIANSScBQTRiXyLr5bbBrYmt+JNixWXcsuPiz9B5D1HWt//9Q5GpAwZMDoDEqPCCI77tgwKjQbDADKVOjAYCefOgi2WWsv1+6U+l5Q51YaGXxmqiWgEBAR//NExDQQ4QJ0AVwYAOwEDNwSPCFECuyseS/8sRoxoUwx2JA5qAEw7Ao8OGYxMB0xXAlbAMAKIkQSIQR+rJK7pwOQ3QyBGDYWNOIx8yXE0L84iIzWZSBzXjwuRkxI61aj//NExEMgSxZgAZ1QARxKrjxicWyIeNqtmVDFdRYIycblCUWOzV1qmjyNycxix9zTPorOiea/zHuYYp55zEi//p//+pOToSEiuXMR1QXOolGbBsaFldzk6VbZfblcgfh5//NExBQXUZKAAZtYAKpjjfA8SyEOvQNKsPJgTx3RL3sqWFJINSUVse26ZxWeNVKNkanvfsripOpJLtRn+Y/q/2Wk+kYB7v+JAWD4SLN//BYiCpkGwCRVO7aMmsJk0gbF//NExAkSWLJgAdoYAAfVdq3Rzseo/jXcJ65nhTfctfWJiBD4Y4Jjk3BS3BJ4dKrASjxJZZU6hhVbmoJFbmnULdtQrc3Xd1+q+2rsI/1KNAhzahMFBSQrdn6tv7OgqIoK//NExBIReJYwANmGTCwnDlnEtmBmVapMakwEgdBURCUqMCp0OB1ZYq+egzErtGsYedI5VxLLc9+eO/nT3z1v/EU00EFRAotOXwTXWY0N5JNTVwAWzt/RURflks+sFBAr//NExB8RmOGAAMCGcCysDBAgYJioqKEjQMiosHjQVFGoeK9Yo39Yo38WFxX//ioo39TdYqpMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExCsAAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMu//NExH4AAANIAAAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExKwAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
            >The “audio” tag is not supported by your browser.</audio>
            R
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('S', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-S"
              src="data:audio/mpeg;base64,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x20PZsKAomCy9BgP6T2xzUt/qP/8vP51//NExA4TsyKwAFhQvP6TtP//zl///////qvjnT5qe2n/4u5nlnn12sUG3PP1URvtrEzEONibljIcV0GDRKWTB/NiUG5q0LyUSlgUIhA6CyNl///////+X///////1/0u//NExBIRGyK4AGhOvKqPrs97/ahlluhAdc11529ZlZWehRhSpqmGEjxoYI4+w+cNTiqujzSTGnA9AYDgcEUk1QwEcvf6//////cqX//1///////7XzTLTJP81//zX9LH//NExCASKyK4AChQvFHBA6u5qv+J/lrplh+Wh3LF0FAgoQ3IHn2g4mvpDyzjrEYUD4gNg8bKbnVi6BHCSNocY8xb1veYe//yNo3//T+QiEOBi51OdfnOdyM23////q5j//NExCoSQsasAHiEuRtVvt/omhndtP/9tqGMVJS4UhAIxjCosmvybhRTRotDd1pUSkOG9TSgvCesijD2uAprhwoDtVOQ2QrZu5WVHo5SmM5o6PlRoC5CbT6HTrl0JGik//NExDQRKa6kAMlOlOZT+v//9XaOs5kJf/////9NRCf+ZIShqN324DnITg4shTcBXkTMDpS55rH3oJr1R7RWv9/31aQthMAksEXdkMfRZJBZgNhHHH2Wd3lxUQu52c////NExEIRYTKcAMxQcP///oVLVnERZ0AxmSNTIATu5MABWV9AKweuO5ZMmndJaKDau/fv3bez7u/POJOaRBgZOStmenWmoODYYfco7ZyUFYl6go2MShUUuSBCgqwqSJpI//NExE8RESKUAMwMcLqiMg49jkbVUWGASgB8gpqutwe91TEkLON/PZEVVVqGS9WXZUGgCKohjLNZHQPM5hZ4aNp9P0/m1gqqP87MINTPQTythyyqesSg6GRmirpRNRTB//NExF0RCTZ8AMvKcHHRa9IgyNakSrUJHEioJDRGEhIDovDQaSgrdouYMaVvu+Ro2J///aj/vTUH0mUAMDl3S7r8KmXVA2AEAgqNLvzEHMokouGYqkmZgzrxYSlg6LoY//NExGsQmHZsANJMSLOoYVGMiVT6051KKjyHYup+8XwNNvc7Y5mWeVdt/6LqFTTXRLau6hpH63DUaCpKQkqFCyh8sq0BVQwpgwoOlmCIGhEDIKgqNLLrBUFh5G5+HT24//NExHsSEKJcAMmGTIoKuKw7kqWM5GgruQvI2X+VR7hKd5WWelURFODUwFYoCk8tiM5h3yZ0Ar/sx7Q11VVVmaHsfw/Zj1UBE4lDWHYudZknnZ2IkMYd5YkWlckyRaqW//NExIUSkIJEANJGSA7XOqCu6yoCskmazsrPJUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExI0SMO4IAMDGcDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJcAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            S
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('T', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-T"
              src="data:audio/mpeg;base64,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AyyQxHQsoCCyQaT0NCSLoqWUcEkfU7WP//NExGEQWQ5oAMmQcC7OClEndZQ2NJIS484yVLLsaKrVmkb3JKyq2NYvop3ZbPNrtc1HdQo1F85xeWuY3zOZJIoZXDJY+FWGlXBUFBRgIGJAkFEgbAQGJB0JAUSkQkFR//NExHIRmLpUANGMTLDQVARYkwY+RCQ95Fq3d3OqkZ6Itbvsae2r26f5710BQKhYIY6EcfTIxEI0NkBOeJkKxwGYTUkROLLYHAKFRT1sMhIXFQyAhYVIgIJC4qZd/xUW//NExH4SaHYwANJGSGmligsaHiv//qFhVn//8VVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIcQ4HUgAGJMSDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJYAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            T
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('U', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-U"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            U
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('V', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-V"
              src="data:audio/mpeg;base64,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NVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExGQQuSF4AMlGcDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExHQAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            V
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('W', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-W"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            W
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('X', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-X"
              src="data:audio/mpeg;base64,//NExAASCS4YAVgoAAUBlJhed9n3JzWDjsvh93IcpKSMRiMUlj/zzzzz7///5zvoScOEY5zv1OeIBwUUBA4wPgQMAhxIGNYYE4Pv+CDlh8uH//BCCCoMiSw5ANwHc8YA//NExAoTyvaUAY04AdAV0s2t/X+3en+448waDh557JJINBoyj4IBg40fb9mTwGDRBo1f+jfW8cEgsPjdz//6pt+I43eeWPc0+n////+OKiFsBFUfi3+////yX/1VP17L//NExA0UQxrMAYIoAdXITuUbXiwgKvsLPbo6FFynecxhVGEwaOOLBaBESU0hmyMvjyjxdyuKcBwMqh0GMoodzu36f7C52F29m5IRKpGQ40ilDP/9v+9f//////xzPV/F//NExA8V6qLQAcJAAfN/T++kXcZk5ac//P8KPIILQUDsXsRxADsTBIaoOSJR+zn9zK7DDTC3KQVFjSzBxxBY6Ei3eu+//LrbiJqT952g0888M/mmldJf///////+T//4//NExAoTSprYAAhMuf/r41buff+3ydn+3+2BFoUMGhK7MIECzkCAGk1TSBDTxUdZhwPBzreDFMZ013/33c7y2/o7mlQbiGOX3b4F1OOa+kdVH////////kpX+v8enFtz//NExA8Ucv7YABBQuV/33z7KlZQsDQwuYGqHJKh2KiAC0OBcnFReVKNHlEhGaly622Q6KIEXwKXNM3PE8IUdCm3UVnzKwjV8/zbT3Q21XpkU3///////+hy/8v/9f/////NExBARso7YABBQudf3frYwOhUyUjoRA/iixhTKP5WhyBCKkFMOMub9yal+K/06mq2OnriGNmTAJi8LLmu+VMioM2kZv///////1YP//9///r21IxxMyHH1HMEwBeHT//NExBwQeoLUABBKuTMICRTh5GEnAQXDTCIq5FVVc2z75kVWiK0IOCv0B3fzf/lXhIxWCf///////8shpe/nT7Jq/9n7IallERUXHEOBlIUOi4w4xCmHsVQ4KmGg4cKU//NExC0SKqrQAChKuaHAMjuTOMs9qVJoduh0kiCiCsm+bzS/1IbZE+0Ajun/p/////+U/ef//78Tx/zX/0tKsXEA/UiwgCqBdBWg+eRiDWqbcYIQ9Q+HjJGwVVzOsioq//NExDcSIjrMAChQuAqDTZZAnIMPGxwcrEmrXAyptT83eAyhVgJ5rqyMyQWefH/l/+f9K4mYXRRZohz+uHclxYd84fP+vPJ1qRU6JAVgUDG6JbPwvrIxhmf6jxas7+Iu//NExEEQ6gLIAHhGmFn/WpXl/vEFD1ndh2YUwTV/fkEeMZPA08v6IsoP8mVtWbLYIk7SA3WK1cl4sIIoC5C5eS9273vvfddO7hOSNx1iZeXQ2Nnqdjf6EQgxz51KYkEG//NExFAQ0bbEAMBSlSZB25OBMd+qTa7UZNKekzvrt9jdaMhcPQPoDzr09Z6vry4UTpGY3Or/kvZbd68zs/v5C1BG3FbI7tZKOWp5eckoKKh76dBGcALUN3WQQ8I/Iwqg//NExF8SIbq8AMHYlec8+S/LttbZhIvUHaMBuUmGLu2S89Kg/JHlq+u923/jjmnHj7nQlIYJjA67//6x9abunhKHZ3CHTE4WbTVWRurzeYniyXQn/zF7j7VjkLAGFg1R//NExGkRWa64AMhWlNMC4yVHxBRRlqMib7j+OKnarZrumLZDhvdRZwVd//7moYGz9hA8RvS4LGDgCWvUMN2seHBn+vQ7b9urb9shS3IiXRgILkpIrXQRyrJEUSdbUL4Z//NExHYQ8cqwAMhQlF//e5UPVQukm2CHzyNt+q+rSYs6///UNQ4o7/UjiaDL2cAmwP3BQE4y8ZFjp2J76PPaiSfOcw1n9Z/QRzB8zKNYcsJCMC4SckVGAxGoByBgjUzD//NExIUScdasANFSmGyg5ODkkqamZx6yYbJOfZJMtaViXF0lUBsSl8bD9EyNjg5B1ZAlzRKv//9m313l8vmp7/6lKAyF2guElCw6zyGSqoSWBYKYwOA0Q3cWGinaTZT0//NExI4b4mqYANNauIgtljZGes/rKeTjRo1EpUI8c5geA8TA0QBHiXSMg6kNIsCbxpxjAVyfcZ4WM3QMTRpRJxCYm+Ui+ucL9ENlLbl0SiQc+kfQjqGm8yONUk3/9JWt//NExHEiKtqQANtguAQUy01mC0yyQIiZtPJ1t379ugpTmZv8gg4U7ZKouRHmUFlWNErxN5vGlMcz20eTf8/9tj/LFE/fRPiPv+bf9P8K+99lvfKgn5OnlRHhG7ZgLiu4//NExDse+t6YANvauGexYkPobwlaY4R+ZKXjTRfRfdqjdqjRI6O0cB5ycOdkZcol1Jtv//qdnzTUZm6SjFadNN60+zX7XXutBjiRx7slHib8tQ4iXE5TATcnogJ3boGC//NExBIUOTakAMrYcMePJZX7Pczzt8t+a/M2jp1vv9XG1ZyWnUMCKBb0rk/mzOrf8OT5zmXWCWyR+HUWDYdt/Of5Y+Hf6IHHlJeB0B4u6pwAQxnZ2gZVuam4ttf////+//NExBQWoxqwAHiOvUAFcUKUrv/1OiNZSI9tH///r2Nc98yZ89358xT5g0IOZVO210443qhCPuOMxY13JDwRiMFAGDQSDBpPEs5BoOE1eeTPPJj6DQu5QVnU3//+T6n///NExAwUmx64AFBOveAQzmH88//kP5f/r/3odZ1/2uifsYjiQct9rPea7tS1TTGU8yOy5UkXPGpgyOCSNVHgeCWe7DgYGRoMHASLC4AQBg3CIWrVDiCK///////K8jxz//NExAwRWyK8ADhOvF9ab5/n+3//Xpt+f9L/dj0Nqa9m+v9TFup9S06yHMRceE7Hq4DixI13MHhqNQJDoiCMTEcJgLCsuaoCZen////5f9epv7/KTfVf4j//n////6Za//NExBkSKyK4ADhQvE15j45/7/v/dWuHn/T/+7m+NndB1SpZkQwyjxRzWxxw+7KDgWPGBQIlMAmQHwWGrQ9Gy//v////+c//nvl/P86u3//VPX6qvavrZ01RdOul2svb//NExCMRCyK4AGhUvKnTZU0lJ1HI+ZTihdiARBQVkKUFQoNhQNBXFcmhgIYYjioJA//////+cApUjn57D///m+d//TY5LGH+s3Q7rPR3rVuVN9a9EWrT/nGGsNAXnkBF//NExDESExqwAChOvTVEkmVIEDy4jlDHU5yQ1GoqG5NjRoSBKgOLO3//////5cDV+a+vWX///9dNKIxsyuvOt7ubtNd6/zerGuehppeVOqcJhccPFDSKDxE0507yqnG3//NExDsQmyKsAChOvBwfChgyKiK1BUdf//5Zr/88z5F8vfXCdufb+t9n0frVWNpQ91b+axv5lZ+hqsqdG19b7mOzoxpzFz3Y4alCo0djSLnjpY4fGDhsRNNB0IQRB4Hq//NExEsSmxKkAFBOuQQsPRKk5boqd2epf///+vvZip///v9//pvsqLYzVrTvSme9qsLFeipT/p8rtYzOtxGhkOoqcRDiK4++eMsUSDwGYIgUo+oADxKGrJf////9JbMs//NExFMRUxagAGhKucup3KvEfyJ8P17d+X2XaZ+tVvqxvM6ttLMa37c2mrTMzmOXKdCgwEEgdkOJYxytZjCTDBgJUQC6oIiA0CBmxADUzN+h+++8+hLic0a69asOHNZu//NExGAQuxqQAGhEvE+Ru3orc3//fK1epW+ybZdbOj9qcsqt1nKVgzylNkMpDTLqj1NKilASChQGyYOJU1FrO63ZdcodpAISRtVTVUFGdwoBSEnjztJAisy00hgsKHmR//NExHAR+xp8AKBEvSrS5c8hTxQrjISvd7rqN7YCR1P9bfZrV+ofO79AzWCBHK9nKZTS5Z4ConzRRPy1aVteitoj2Uo13hXOjm1mesqdLPLaDMshxVltL8XcV6m5Uwto//NExHsQeHJYANjGSLPS789sw1SqNQqzlksHCILV2yDxLMOkQEBTsNRECoKnRKCx62CsseFQkDRI8JZUBWnoaVPEW5VR3rOiUNLe6e7Su+3ls7Ezyqwl1HolBU6SN/At//NExIwQCPpEANhEcNC0DCMIAhWpBi7mSGVTYEFxzkVUtoqIvyyWfZZL///+ysDssssB1HI1ZQQqCZkY3+LC4rFRUWbU3/VxVuoXZ+LC4rVMQU1FMy45OS41TEFNRTMu//NExJ4SACYcANvSADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKkRWUV8AMFGcDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            X
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Y', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Y"
              src="data:audio/mpeg;base64,//NExAASGSoAAVkQAEN1UDIUNyA3mjSKLoSCo5b/xuNxuN09vv/hhhhz/OfoQhDnOc53/+d/3bIQIAEUIRwPy5/g+fwTPiAMfrB9//z+JAQd/y4Pggqj2TEqKBAoU4/0//NExAoUSyqYAZk4ANR5DcTRV/6fqZFF+i/9jDzP/Ncx1/MUmJDGMaTOAEFH8XiILBue8eImi91X/7/n3VSd//+Y3/MN+j///2Qy29/pigm7U2OK1QRDJFjInghsCI4z//NExAsUucasAdNoAEaEsRYgwWsDtZd/0lfV9X1v9/W61KdZcZGw/hZnS8YKcYczmRdMR5qPG6pfTqqM01qao3u1IuImClLHu5/Ai2f6/+YFhdP/0GDS23qySgFK/da2//NExAsVSb6wAMiWlN0fG9/T4VvVvO3Qhvp3/Lr+CQSTr7aLA1JUTni0dx6VATCeOl+wsN1vlj6/ha++DltagblCYQzpRov/oR+KrDYFHu/Cwtc1AIsIVW1vfjkKCG3W//NExAgTmbq0AMBYlPXKiZEW7+Xyfl/9/czM5WZmabWd0eBpJrjhgiPqwLDg1Jx8/b1C62Upev5SY613ejqze/oly3hfSAn/9X640IHf+FitVa1Kd3fbswK+TyldZ6Eh//NExAwU2bqwAMCSlBpdTeiCHfq3crf+n3/+8314wusSCqMpEQFiVqpnyMSNtHUgNI3Eelp7OfahULXQObRpC2wj5FtHf/uHOOl8naNFG/+GQy91dRNdIdADaS4fMheA//NExAsUknawAJlQuLGLyc4UW//p6e5eyf5FKyCA0BRZwUPFUZLeow0WFi7D8FqpTm/dX3CnTCi4gCNCeqv//////8xa3ExvHER38cRJNGf/aoWFVX83WpVN1W95mICQ//NExAsRKb6wAMCMlDfr3QFf1+v/6e///ycbKzsQUKKg+KqPZqIOU6gyUnVeyzZOu8TtijE3Xuf9X/+RBQQxRGpDk//SfKJndL8GGZsVsUJecOLOZe+78qMPT5/5Zk9L//NExBkSCZqoAMBQlOv7uk2kaJQwDxQi4tcjUpjjkHi8GBDBzewx5X9akWbNAYaUIv+vMEW8O1Z7o/XI1RZ6Tyl+hO51oMfg2rpBywzyRd7dy//5e3lXVV9E3VEYIYZ3//NExCMSKtqYAMiKuCqLiaO6iQKQcCh4YYh/7czFUaO0Xr///q6qyZLFt/9f//89VE9CBRhmkbKo8HRpBHB08cQuyKkghkvczip1bR+zYrUyfty9CHkkIPVUC9xUyDA4//NExC0RsZqQANCKlO5nZq9bUdmJqLFKZxWZmX/+dp53c//4sPB6PkbKANpCE2oVgrR1rDgwOAJdPiCwJQUhgu+K1S2Y1cq7K3LY+0p3tkYKFIzBGoCxhaUyDIKPCV2h//NExDkSISp4ANIGcMDQaFCOp+R/+/78sn/8qVo/xCIFuxo2Hu0jU1JDFPAECYAqERRQmngahDcUxMg7goJzQEBscNJjmHzDBcqkaKBM05bc45qn2Jonnd7mp3aF9Fdz//NExEMSUIJgAMpGSOj9XDveymoTEBUG2zWF/UZEJBkaJaizOFdRgxhQkODrTcBnjrBiBxo9DyCoTQxzGxVEsTTW2UU9oGbeVLJ1xhF7O1KYVazJ1/Qy3bqqE2wSKiyZ//NExEwRUGJUANGGKGjc9YRpm43ep9973H8t9zr5lAyGEGw+KyilsEhx40XTe8S8oQO6KEEbZucRdn31IlwfFw+Ud7z82bVilOhXsQMqGxYEFRYWL5QPKsZXDjAJzHXP//NExFkRkF5YAVsQAIbud8xL/0M+bRyDk6nQ9BA4yH/qZZuxQHuU/7vU08mTCA5sURGf+boJIm5LqZAQxfA5gxhHDaE9Pgmf/+pjQzPm/BtjDgDQDcJ4I+BMxFCdjEGA//NExGUg4yqAAZloAAVj//6DoboPsnxKQnYkA/AqB+EsCcDjHOS4NsJoFwoB4bOvT9//nf1X///7f///////+P/5//5////n5OtqJbo/7pSNd7UTpsuPKrXlY9D2GQ7Y//NExDQdkyKsAcpYAHicEA+eKDy6xmOC4nMWXND5dY7TAmmKY/FYbjoJg+iCA6PA/FZ8BRA3gNCOKdB9H8fB3qjwcPj4amxWUCG44Ppmq6oEDv///////////7////////NExBAWKyKsADhWvP8/dRX//8RfzXwyUWwXJHkXEooNqiF0E0j9aLdMrJTiem88R0YJYqG0uGwyJZFLzEuFtFqqA7RQIVNekTNSThSbFhoW0bDsNG0MJ/////8stf////NExAoVEyKkADhWvOvXmZa3//////7/+ab/x9f9fxfOchjGqmrG0etrTq9t6uW0fzryWrNFo8EYkmBUQawKkRECAygyIg/oE60Thtw81IM4ZHSbSKZ+1QQ3ae////////NExAgSWxawAFAOuf/66rV+/P7re8xnoqmKpFGscxFXd0U/HCY4JJ5zFRuJxwUj4rB+IopCUWCSI4kmjziwRzB4ajxyigdPJDp4ZHCDCgLHvb1//l////////////////NExBEQ0w68ADhEubq/38lkIk7gEgGHMzFdnQZh1RkdXYqMIElEiXMGA2dgEQ6ClEBgjABB3OEFmc6DACj56pVWH0g9lhwQ3fcYS8dANo2CMZf///////////T/92vQ//NExCASWv68ADBEucFKYoC4MgoqLu8xnVEMqCi0CgTjsKAhQEhhRDlKCMLdCuZFZSlOJBYUtZTYppt2VR2ZTDg6sONMvK8Bc8lVYOMMn8NtWorO3l8JHaFHa3e/mWFr//NExCkRAa64AMPElOMf/L6+n+nRCv7/9v8pluDMZv/4a///uarRlVxd+oFkQ9qDUOCcj8wJLAaMIy8udqVy3nw3HJ7clSQYcqZp1NKRwlOKysKG3m099ZZmE5jCYbKQ//NExDgRUTKwAMYKcAQU//taDYKnnf////oVnMN2jGGxnHAJ4uK7sYUMD60sqm3Dy59ZiMtuzSqNmjqUlrKowrSLqnt/9nMa4qhgGDpRELBFHCkKEH/VsN/////dRIqT//NExEUQ6UKsAMYKcH3E7y5V/2whr0qvzoGkD2c8jLR0tGxAeMiQtRcolmrG+NxabRuZ1/r79O5o6aPjo1B6Nw0cpw+wT1v1vYgW/////4meMrXNJ2jzFLML5F3IlKWD//NExFQRcUaoAMvOcIpahLcd9kmLHasKhOGKe7q3rl+Q4azDLUP5Xp3//O9mtjwnQsw0PCoZKm3u7Zz////dqOWAgZqWXtUpN3CsMEDw1KEkOcxRZ3WlBk9JphlNDAwC//NExGERIT6oAM5OcBCRRSCqsgodvJyWc6uv//+7bGNDCWRE79+3LztRc49J/////////9pjDyYGQ4LIK4qkwSrJAyhkxYPGxGm4hhwC6ImsYwhpkWCAAoJkXjg4ieyD//NExG8Rer6oAMNEuG5dbM319v5u//+qe/99GVbPcGRiDyECxR8f//7/nfxgdVg4dtDBobAyy+OmmJ0rZ1YBMrLZEH4gFQCqeIsBYmpMnRmU2SKL1jKm1EpNoG+zaNou//NExHwScc6cAMyKlKjqOvo38zmPb353VjTR18cJoPDYicIoQiUIhHb/9P/WFoVHERjEBzsMWxU8Ne4ZhRAyFD77SkEAgP2yYPC5w/ItHzAvKaLxVQm5VRKnqiOK2ZdW//NExIUUeb6QANUOlNE1dFFJdo81kJ8i9B0/JNm8ducc9EJ0CIvZzXQeLgIO//KSk3S79FUSCoEayDaoZH2vYqxFbWyVghgY8Jhw0LOoBUQBzSRBiLEAEIyq8pKopjYQ//NExIYWib6AANTOlERnSQ1GrVEHT0dh+pKwMKFCLrEj2R7mDwfOLA5lMKrelNNN0bEHUREpBisZ/9Q86Pyvt+sFMRe7ATCp6OQhkWBTqFUImJB1KWKLTMXEBq86JWB5//NExH4Xwb50AN0KlOWTcpjVQRY49FEQqhWXeXmrJgt8t7G8M5o4WKjUDuxeaa2o4o1IrzOnXy/0GwWu5Qgtn9KaRgoPfWv6fmEwkPfeJCMVObMokngscwgrX41tngBG//NExHIW8bpsAOSOlIGUlluTn3c4JpOf21h2pGsMOUFEKTCQ8jUnfqPncOkqJvo/fjiDXlv+o1nD3/0KNHIA4AWMISM7wfLLMkQDDoMUFr+SJI05A4GiEuhq9U3EYFt///NExGkRGTJ0AN4KcPM1cMPq3sgrydU5T4Xz2+CsUB9J6m6W3f+bJnCFHpUWKYLBgAaf8GbjYKM2JLRL5F2FYH3CridyvIEpeV8qTOm7r6kulO715OlSKwrzPlR1zOxx//NExHcQKPJsAN5GcILOX5TFw8AqLv/xcG+p////61TAgDkLLTD2Q9mgAfvplyoTWaPpR8i4xHeu9cCg3Ep2sDrdLPF2iiFN0zDodchCJe6APYXa6Va16TCK5FX+/7v9//NExIkSATZkAN4KcCo9x5DQsgmJGDCFVNXmtROOzdikotzdvDedtQICQ4JzYIPBAyH1g+AHC4RH3HXF01sLk1yjm8EOm/HrF4z7md7PsbX/+uo/IHIAg+ohLdgchLxK//NExJQQWFpYAN4eJOFY5uWsidlyGuO71rsZF5UEgiERz6nJucHhuhnrhmmPnroR4W6LEOWVt4GmVtVdHH4InHKV6l5ZxqyvIl+OPts7td62LqszM4/NL5z8Xa7zdd6r//NExKUREFpgAVoYADBbfy1co/tH/pecf2eirPdfe2s7rMuRQ2HgmRjB9uzIUJOuLfvgtuBVC0oC5XYoMxKXv6/st7uUy2zytarc1TUx4FToKgqWLCwdeCrlgqEhEWPJ//NExLMiKlZcAZtgASrlhospT663NsBr7KT3K31V8rq1/sr6VTItO5lSD3Wd83jl3//JuF2NxmX18mCuJz11LpalaVn5jVYytVko/9HmUBYKAUYDXREwlLPKmqwFEV/Y//NExH0QUFpMAdkYALCbrR9YCfaedyMsPiX1BxVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExI4SkWYMAMjElDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJYAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            Y
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Z', $event)"
            style="position: relative; font-size: 1.7rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Z"
              src="data:audio/mpeg;base64,//NExAARIwIgAU8QAQkA4HEv4t4m5Cy5oehiseRKUpT0p/e99/5zugGLkZTnORpznfITnOf/yN//P/87/kOehP//////////5CNnPQ4GBj4AhVN4ADl5KAHpZiKUUliw//NExA4VqyqQAZo4ALAIGVIVYfX9hss5hk8sR8aK6qRQWD58yhUcaAgTmqZ/+fMdFf9P5tV/1f/T/v///v/z3NdP//57z0a10M5ynOcSHyg+NxLFwkoPhOPlcB2A57u+//NExAoUGx6kAc84AFYOmNu2KXrb+3+Pvzvc25MTD5be/+vX/3//////t3///v1dnVDk6z7nqfalDT0Q15Uw13NnMVIIcaVLmKkRBYPlC4lnhIOVGdFgLxeApgXKWpMO//NExAwUwxqkAJCKvSDbkwl/hH5PXkBlK6K///////////vST/5GSc6KhzoqEaRpd3bQitOZmO4gVGIA7GFSiY0RBhAWD4dAZhEcY7pQCBMLCIsLB5GpaMAnxBFqcZYt//NExAwVQx6sAJCOvGstt/t0b/TUoT//Syft7f////7W0Temf5if1vnoyGntdVMsp5mcWUhExFS0QkhwiNBFLjQmKwfA4GhMiSEjPFZA08RyrCowSBwL6JmEFIHl9mAu//NExAoU2yKwAHhOvFNb+Zf+Rci0Xl/kf///////////+qfboyMzLPMIIxjTfMz5jscp5hiEVGhpQXMJgoYPERqPi4WjU4oVGJY2o+DwiNxQKhJBITnKAxTQ+eEyB8Wp//NExAkRmw60AGhOuGMVfQ9///8Z///////////7JXTZNFPfa05eacYyEVsYyHO3QzqjGsJRjkjCZAiTKiUSdxwRhoOpuPlXUL1VAtjuTWPkPB1lvq/5P//v////z/////NExBURYx64AIBOvP///VF+/a9n9DvNZj3vnTOa+faeP2G6D0dMHlNKKcSNExAeIkTz3UxR8fGC4+aEIuUBilxiYC8kF1lBvb/L//wKb////////v/WvdEW3l7vourJ//NExCIQkx60AIBEvFKx2avtdLeZiqYdizuwo5QaOgoWiBhcj2lFBnBCyCRZ1SYmWV2gQjgWR6q9LwQLP4fzvRtDTv2O9b1qAAAAMd1Of27H6uQjHOjf/////aizI+b///NExDIQ+j6wAMCEuP/uMGAxv/0CFpYkLC7MrWLpGE9XvrX+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"
            >The “audio” tag is not supported by your browser.</audio>
            Z
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Á', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Á"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Á
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('É', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-É"
              src="data:audio/mpeg;base64,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VVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExIoQGHWIAMnESDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            É
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Í', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Í"
              src="data:audio/mpeg;base64,//NExAAQWEYAAVkYAEN1UDIUNyA3mjUKLoRSo5cPxuNxuNy+neUBAMeUBMHwffDGfLvwfBAEAQBASBhZ//z8EHfrD//OesEAx/dLlwcDCqPZMRTIBREGSP4hQ2hpjZeH//NExBEV+yqUAZpQAP6fqMk5z0lFb9rGHmf+a5jr+YpOIRjDDR+TAKCp/G4qCwPx+fHw1IRbc1f/n/nz1UnR//+Y3/MN+j///2Qxm/9MXE7tTY4rAkLIqgZEWCSILuIk//NExAwVSbaoAdRYAE8TY6iFBQAMjov9FN/Pd/77++Gffsjj0ImItGzpuaJgKAcHkejjSUaFrzY1HgbCGWJ8uYtcd1Uu/5uog0RUPgcHD+2Q///hgXUqVdVzyxIRhcvD//NExAkTocKwAMhSlB7deBYWi/l8Pz+fwH8L//hPP/pAa/VAOAwhdeEaIKuuwEAgeRbShJbPuoXH9N8Ga6baTSvXFbZKRrlP/dd97Wn1f9OkLLpmvL+OYwILrT/80gw8//NExA0VCb6sAMielNf5o3hH8j+d+pm6p//i9t/9+y1+3g3yWnDBY1O3eLKrz/P6DqJdvZouvnFdUx4Etc/wINc/t7FChYDFIq93/S53Vip4O//11WoVLzMy74JsUiRA//NExAsT6b6sAMBSlDIBEePMunKfOhe17Xr4fNL+63+rS1HuNBoeRqkAhINVjoItdDZAFx6ULaVjDPsY/zhJPVFVEpbFh9pmP/myiv9//ruRQho+RyxDmpl2UuOdPLfw//NExA4VWaKkAMiSlPSlkUiyUOJ/TzdW07l//ef/PBOCwIBgCCJTJGKSVa6NdiLLIWUzcqvuXeS3bjWlCcIqgyIkHpEd/oERpiDvDsBRav/SIS5ZFUXIEvlgCuHKyI1Y//NExAsRuZ6oANBSlB0zEXYuqcc0N5vvP311+V5/f97trj7YaOj0LXFat0USmjXdep1X/+zuvD+53NgULKCjinNv/5pu37v/1CKV8sk/WzbmiTki2hlzKds3+o+r6dev//NExBcRyZqwAMiSlLaNr0/9f9NveVDc0ApH9myEzbxhtJMgPytLcy5/bnv3Ps73USDgcm8MayX//7P/9NVY97NjIsBVnxykxhJU3ubma4YuXfXXPm81J1fFc0b2wKg8//NExCISeZKwAMhWlNuJQ/2wMh3rmxwj2oO4/e5Cvj5t/NPTJJIWokPCT11oBc5/2f0//9ADVSL2QktOEDGMyd25sgp4WMKaMupTy7LaU3j9UZpH4NtCjLIiEuLgWhSR//NExCsRKd6gAMiUmJRSVwuACQnJHo9Y462/2XRDqkpzf/zTWkJtB4V+HpTyNh5OSPm0Ay+TQOQAD8/4QRbPb2mpb0t/jcWbWHzwplFBRdbXiuyZJIUAnOSLYkJSmrNo//NExDkSaRqAANPMcJuMA5vzxGSqV+Vp/////5taONSwwrRvUzKtcDm5BVNVFUGhChUM3qa9S2auX1aTW/16DesglCoZWopERMfTnS219vooqNdCJlVM2GSeelXesJzf//NExEIReRZ0AVtIAOt1bzE9SNjH6XNjk4x0PjhhSCgxHhLIn3mUEkUcHcowalGVB+HcwQR8MR3E8lE1yKRSsusPtkoElJWbbe44SyQWLsOmo6SStuJyZleapEtBV26J//NExE8filJgAZxYAGnruv3Sk1Brmtvj7PK7o6vfHEytbpOV8cw36v/+v/7lqB8yFTlX+29W8JNMhUUNKj6Q01UQXFagyaGn1lMbs2YtWmcaS/jPameXL/2WC0FxLhjC//NExCMRYJZ8AdoQADMDhcPAIQqe9pFBVR9wiEaBzWpKqvaRQtVzN9qar7Ef9qaqNHONuEuOM3Jm0oa9MnR0VLqCrVmquCLDCiAkNQw+GOLDww4Kkg6IlDlHg6MIjHh2//NExDARwKZUANJGTESzzxI8Wnp4ipKjxGktfPFueT/9iv/pNVPMEwNKDHnIOLF4WlU9Lds67joaET/Iv2Zp+hE/rDWk1hrnKTUmWQ12sNaRrHJgtI7nfyaxyYKDQCs7//NExDwR+bncANBGlB3/V7No/T9bdA4WNUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExEcAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExJoAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            Í
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ó', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Ó"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Ó
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ú', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Ú"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Ú
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Â', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Â"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Â
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ê', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Ê"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Ê
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ô', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Ô"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Ô
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Ã', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Ã"
              src="data:audio/mpeg;base64,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Hv1CtUxBTUUzLjk5LjVVVVVVTEFNRTMu//NExF0SGW2UAMhGlDk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExGcAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
            >The “audio” tag is not supported by your browser.</audio>
            Ã
          </a>
        </div>
      </div>

      <div class="col-auto" style="width: 3.5rem">
        <div class="teclas teclado" style="width: 3rem">
          <a
            class="btn btn-default"
            href="#"
            role="button"
            v-on:click="addLetter('Õ', $event)"
            style="position: relative; font-size: 1.8rem; left: 0%"
          >
            <audio
              ref="audio"
              id="audio-Õ"
              src="data:audio/mpeg;base64,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"
            >The “audio” tag is not supported by your browser.</audio>
            Õ
          </a>
        </div>
      </div>
    </div>

    <audio
      ref="audioRight"
      id="audioR"
      src="data:audio/mpeg;base64,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wyZNASek58c3qKkqjyGL3Pa6k3npXCeeSe0x5l7Mvc1zPmfEioRPTZd065jzP55Z3tKwNY3FYsoZ0+66V9NSVVTWACwsIO0YjpoIjMBeUKiUiNAFQMmAbIwSsiyT68skWoaVV93kkspppUkVJsJcsccsZZ5pZpZTTjShVhtjLvP7ljljqX7XNONf9ypJ7bDeUDWNxWLKGdPuulfTUlVU1gAsLCDtGI6aCIzAXlColIjQBUDJgGyMErIsk9PLJGqCyqvu8kllJGlSRUmwlyxxyx3PNLNLKacaUKsNsZd5/cscsZpb2uKONO9xUk9thLlVTEFNRTMuOTkuM1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5IE6gZi/R5PSzhKkmPDydllK3hLwFcszCTOCXsK5ZmEmcFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
    >The “audio” tag is not supported by your browser.</audio>

    <audio
      ref="audioError"
      id="audioE"
      src="data:audio/wav;base64,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i+2L7Yvti+2L7Yvti+2L7Yvti+2L7YvtdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRKL7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7XUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSi+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+11EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJiAYvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Wv3dRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSi+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+3uDXUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1Eovti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7YvtdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRKL7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7XUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSi+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+11EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRLUCYvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7fnudRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSUfOL7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+18BXUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1Eovti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7YvtdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRJ1EnUSdRKL7Yvti+2L7Yvti+2L7Yvti+2L7Yvti+2L7YztjO2N7Y3tju2P7Y/tkO2R7ZHtku2T7ZPtlO2V7WsSahJqEmkSaBJoEmcSZhJmEmUSZBJkEmMSYxJiEmESYRJgEl8SXxJeEl0SXRJcElsSWxJaEloSp+2o7ajtqe2q7artq+2s7aztre2t7a7tr+2v7bDtse2x7bLts+2z7bTttO217bbttu237bjtuO1HEkYSRhJFEkQSRBJDEkMSQhJBEkESQBI/Ej8SPhI9Ej0SPBI8EjsSOhI6EjkSOBI4EjcSNhIHEsvtzO3M7c3tze3O7c/tz+3Q7dHt0e3S7dPt0+3U7dTt1e3W7dbt1+3Y7djt2e3a7drt2+3c7dztIxIjEiISIRIhEiASHxIfEh4SHRIdEhwSHBIbEhoSGhIZEhgSGBIXEhYSFhIVEhQSFBITEhMS2fvv7e/t8O3x7fHt8u3z7fPt9O307fXt9u327fft+O347fnt+u367fvt/O387f3t/e3+7f/t/+0f/f8R/xH+Ef0R/RH8EfwR+xH6EfoR+RH4EfgR9xH2EfYR9RH0EfQR8xHzEfIR8RHxEfAR7xHvERLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLu7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hES7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4REu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu7uEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuERLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLu7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4RFAQS7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu7u9O4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuETbuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuzAruEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hES7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4REu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu7uEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuERLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLu7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4RSAwS7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEWr2Eu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLumALuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hES7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4REu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu7uEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuERLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLu7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hES7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEZ7+Eu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu7uEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4REu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4RfO4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7u4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hES7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLu7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHK+hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLutgzuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuERLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu7uEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuERYHEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu5oAO4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4R7hHuEe4REu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuEu4S7hLuE+4T7uwR6xHrEeoR6hHpEegR6BHnEeYR5hHlEeQR5BHjEeMR4hHhEeER4BHfEd8R3hHdEd0R3BHbEdsR2hEm7ifuKO4o7inuKu4q7ivuLO4s7i3uLe4u7i/uL+4w7jHuMe4y7jPuM+407jXuNe427jbuN+447jX0xxHGEcYRxRHEEcQRwxHDEcIRwRHBEcARvxG/Eb4RvRG9EbwRuxG7EboRuhG5EbgRuBG3EbYRthFL7kzuTO5N7k3uTu5P7k/uUO5R7lHuUu5T7lPuVO5V7lXuVu5W7lfuWO5Y7lnuWu5a7lvuXO5c7l3uoxGiEaERoRGgEZ8RnxGeEZ0RnRGcEZwRmxGaEZoRmRGYEZgRlxGWEZYRlRGUEZQRkxGTEZIRkRGREXDuce5x7nLuc+5z7nTudO517nbudu537njueO557nrueu577nzufO597n3ufu5/7n/ugO6B7oHugu59EX0RfBF8EXsRehF6EXkReBF4EXcRdhF2EXURdBF0EXMRcxFyEXERcRFwEW8RbxFuEW0RbRFsEZTule6W7pbul+6Y7pjume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume5nEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRme6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7mcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRWfmZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7u4NZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxGZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnuZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEZnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnuZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRmP2Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume5nEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEZnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7v0BZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRme6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume5nEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxGZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7mcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEfvyme6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnuZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRVAqZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6bDGcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEZnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7kH1ZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRme6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume5nEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxGZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7mcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEbj/me6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnuZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxGZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume7f/2cRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEZnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnuZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRme6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume5nEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxEa9Znume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7mcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEXMMme6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnuewpnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxGZ7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume6Z7pnume4i82cRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEWcRZxFnEZnume6a7prum+6c7pzune6d7p7un+6f7qDuoe6h7qLuo+6j7qTupe6l7qbupu6n7qjuqO6p7qruqu6r7qzuVBFTEVMRUhFREVERUBFPEU8RThFNEU0RTBFLEUsRShFKEUkRSBFIEUcRRhFGEUURRBFEEUMRQxFCEUERv+7A7sHuwe7C7sPuw+7E7sXuxe7G7sbux+7I7sjuye7K7sruy+7M7szuze7N7s7uz+7P7tDu0e7R7tLu0+4tESwRKxErESoRKhEpESgRKBEnESYRJhElESQRJBEjESMRIhEhESERIBEfER8RHhEdER0RHBEbERsRGhHOAefu6O7o7unu6u7q7uvu7O7s7u3u7e7u7u/u7+7w7vHu8e7y7vPu8+707vXu9e727vbu9+747vju+e767gYRBREEEQQRAxEDEQIRAREBEQAR/xD/EP4Q/RD9EPwQ+xD7EPoQ+hD5EPgQ+BD3EPYQ9hD1EPQQ9BDzEPMQDu8P7w/vEO8R7xHvEu8T7xPvFO8U7xXvFu8W7xfvGO8Y7xnvGu8a7xvvHO8c7x3vHe8e7x/vH+8g7yDv0f3gEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BAg7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7+AQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgECDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDv4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQfvcg7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO8g7yDvIO/gEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ4BDgEOAQ3xDfEN4Q3RAfDiTvJe8l7ybvJu8n7yjvKO8p7yrvKu8r7yzvLO8t7y3vLu8v7y/vMO8x7zHvMu8z7zPvNO807zXvNu827xAIyBDIEMcQxhDGEMUQxBDEEMMQwxDCEMEQwRDAEL8QvxC+EL0QvRC8ELwQuxC6ELoQuRC4ELgQtxC2ELYQS+9M70zvTe9N707vT+9P71DvUe9R71LvU+9T71TvVO9V71bvVu9X71jvWO9Z71rvWu9b71zvXO9d713vrPGhEKEQoBCfEJ8QnhCdEJ0QnBCcEJsQmhCaEJkQmBCYEJcQlhCWEJUQlBCUEJMQkxCSEJEQkRCQEI8QjxBy73Pvc+9073Tvde9273bvd+9473jvee9673rve+9873zvfe99737vf+9/74Dvge+B74Lvg++D74TvhO+F73oQehB5EHgQeBB3EHYQdhB1EHQQdBBzEHMQchBxEHEQcBBvEG8QbhBtEG0QbBBsEGsQahBqEGkQaBBoEJnvmu+a75vvnO+c753vne+e75/vn++g76Hvoe+i76Pvo++k76Tvpe+m76bvp++n76fvp++n76fvp++n76fvp+9ZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRCzCqfvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQwfin76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp+/h/1kQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEKfvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRCn76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n71kQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp+9ZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRA0Cafvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQQven76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp+9eAVkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEKfvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRCn76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n71kQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp+9ZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRC1B6fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n7+vwWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQw/Wn76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp+/dAlkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEKfvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRCn76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n71kQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp++n76fvp+9ZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWRBZEFkQWBBYEFcQVhA1BqvvrO+s763vre+u76/vr++w77Hvse+y77Pvs++077Xvte+277bvt++477jvue+677rvu++877zvve+9777vv++/73/yPxA/ED4QPRA9EDwQPBA7EDoQOhA5EDgQOBA3EDYQNhA1EDQQNBAzEDMQMhAxEDEQMBAvEC8QLhAtEC0QLBAsECsQZvTW79fv2O/Y79nv2u/a79vv3O/c793v3e/e79/v3+/g7+Hv4e/i7+Pv4+/k7+Tv5e/m7+bv5+/o7+jv6e/q7+rv6+9KBBQQExATEBIQERAREBAQDxAPEA4QDRANEAwQDBALEAoQChAJEAgQCBAHEAYQBhAFEAQQBBADEAMQAhABEAEQABD/DwHwAvAD8APwBPAE8AXwBvAG8AfwCPAI8AnwCvAK8AvwDPAM8A3wDfAO8A/wD/AQ8BHwEfAS8BPwE/AU8BTwFfAW8Bbw6Q/oD+gP5w/mD+YP5Q/kD+QP4w/jD+IP4Q/hD+AP3w/fD94P3Q/dD9wP3A/bD9oP2g/ZD9gP2A/XD9YP1g/VD9QP1A8t8C3wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8NIP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IPLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvDSD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g+QBC7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8E300g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IPM/Mu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvCrBdIP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SDy7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7w0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g8u8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8NIP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IPLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvDSD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g8eAy7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8MD10g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IPwPEu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAdB9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SDy7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7w0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g8u8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8NIP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IPLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvDSD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g+rAS7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8DL30g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IPTfAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvCQCNIP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SDy7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7w0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g/SD9IP0g8u8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8C7wLvAu8NIP0g/SD9IP0g/SD9IP0Q/RD9APzw/PD84PzQ/ND8wPyw/LD8oPyg/JD8gPyA/HD8YPxg/FD8QPxA/DD8MPwg/BD8EPwA+/D78Pvg+9D70PvA+7D7sPug9G8EfwSPBI8EnwSvBK8EvwTPBM8E3wTfBO8E/wT/BQ8FHwUfBS8FPwU/BU8FTwVfBW8FbwV/BY8FjwWfBa8FrwW/Bc8FzwXfBd8F7wX/Bf8GDwYfBh8GLwY/Bj8GTwZPCbD5oPmg+ZD5gPmA+XD5YPlg+VD5QPlA+TD5MPkg+RD5EPkA+PD48Pjg+ND40PjA+MD4sPig+KD4kPiA+ID4cPhg+GD4UPhA+ED4MPgw+CD4EPgQ+AD38Pfw9+D30Pd/OE8ITwhfCG8Ibwh/CI8IjwifCK8Irwi/CM8IzwjfCN8I7wj/CP8JDwkfCR8JLwk/CT8JTwlPCV8JbwlvCX8JjwmPCZ8JrwmvCb8JzwnPCd8J3wnvCf8J/woPCh8KHwXg9dD10PXA9cD1sPWg9aD1kPWA9YD1cPVg9WD1UPVA9UD1MPUw9SD1EPUQ9QD08PTw9OD00PTQ9MD0wPSw9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD4r2tvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28EoPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg91+bbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvBKD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPX/y28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0n/tvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28GgNSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg8yArbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvB+CkoPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPHQW28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwlAdKD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KDwcItvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28KkESg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg/xCrbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC/AUoPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oP2w228LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28LbwtvC28Lbw1v5KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9KD0oPSg9JD0gPSA9HD0YPRg9FD0QPRA9DD0MPQg9BD0EPQA8/Dz8PPg89Dz0PPA88DzsPOg86DzkPyPDI8MnwyvDK8MvwzPDM8M3wzfDO8M/wz/DQ8NHw0fDS8NPw0/DU8NTw1fDW8Nbw1/DY8Njw2fDa8Nrw2/Dc8Nzw3fDd8N7w3/Df8ODw4fDh8OLw4/Dj8OTw5PDl8Pn7Gg8ZDxgPGA8XDxYPFg8VDxQPFA8TDxMPEg8RDxEPEA8PDw8PDg8NDw0PDA8MDwsPCg8KDwkPCA8IDwcPBg8GDwUPBA8EDwMPAw8CDwEPAQ8AD/8O/w7+Dv0O/Q78DgTxBfEG8QbxB/EI8QjxCfEK8QrxC/EM8QzxDfEN8Q7xD/EP8RDxEfER8RLxE/ET8RTxFPEV8RbxFvEX8RjxGPEZ8RrxGvEb8RzxHPEd8R3xHvEf8R/xIPEh8SHxIvEz+d0O3A7cDtsO2g7aDtkO2A7YDtcO1g7WDtUO1A7UDtMO0w7SDtEO0Q7QDs8Ozw7ODs0OzQ7MDswOyw7KDsoOyQ7IDsgOxw7GDsYOxQ7EDsQOxA7EDsQOxA7EDsQOxA488TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88Tzxb/bEDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88Z7zxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDjzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88cQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA488TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPHEDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDjzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88cQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA7EDsQOxA488TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPE88TzxPPHEDsQOxA7EDsQOxA7EDsQOww7DDsIOwQ7BDsAOvw6/Dr4OvQ69DrwOvA67DroOug65DrgOuA63DrYOtg61DrQOtA6zDrMOsg6xDrEOsA6vDq8Org6tDq0OrA6sDqsOVvFW8VfxWPFY8VnxWvFa8VvxXPFc8V3xXfFe8V/xX/Fg8WHxYfFi8WPxY/Fk8WTxZfFm8WbxZ/Fo8WjxafFq8Wrxa/Fs8WzxbfFt8W7xb/Fv8XDxcfFx8XLxc/Fz8XTxjA6LDooOig6JDogOiA6HDoYOhg6FDoQOhA6DDoMOgg6BDoEOgA5/Dn8Ofg59Dn0OfA58DnsOeg56DnkOeA54DncOdg52DnUOdA50DnMOcw5yDnEOcQ5wDm8Obw5uDsbzk/GU8ZTxlfGW8Zbxl/GY8ZjxmfGa8Zrxm/Gc8ZzxnfGd8Z7xn/Gf8aDxofGh8aLxo/Gj8aTxpPGl8abxpvGn8ajxqPGp8arxqvGr8azxrPGt8a3xrvGv8a/xsPGx8U8OTg5NDk0OTA5MDksOSg5KDkkOSA5IDkcORg5GDkUORQ5EDkMOQw5CDkEOQQ5ADj8OPw4+Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ6m9sPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/E9Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OXfnD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49DhT8w/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8T0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ7L/sPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/EHDT0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OgAHD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxUAo9Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49DjcEw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8ZkHPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ7uBsPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HiBD0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OpQnD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxKwI9Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49DlwMw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8cPxw/HD8Xb/PQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49Dj0OPQ49DjwOPA47DjoOOg45DjgOOA43DjYONg41DjQONA4zDjMOMg4xDjEOMA4vDi8OLg4tDi0OLA4sDisOKg4qDtfx2PHY8dnx2vHa8dvx3PHc8d3x3fHe8d/x3/Hg8eHx4fHi8ePx4/Hk8eTx5fHm8ebx5/Ho8ejx6fHq8erx6/Hs8ezx7fHt8e7x7/Hv8fDx8fHx8fLx8/Hz8fTx9PHK/AoOCg4JDggOCA4HDgYOBg4FDgQOBA4DDgMOAg4BDgEOAA7/Df8N/g39Df0N/A38DfsN+g36DfkN+A34DfcN9g32DfUN9A30DfMN8w3yDfEN8Q3wDe8N7w3uDe0N7Q0U8hTyFfIW8hbyF/IY8hjyGfIa8hryG/Ic8hzyHfId8h7yH/If8iDyIfIh8iLyI/Ij8iTyJPIl8ibyJvIn8ijyKPIp8iryKvIr8ivyLPIt8i3yLvIv8i/yMPIx8jHyNvrNDc0NzA3MDcsNyg3KDckNyA3IDccNxg3GDcUNxQ3EDcMNww3CDcENwQ3ADb8Nvw2+Db0NvQ28DbwNuw26DboNuQ24DbgNtw22DbYNtg22DbYNtg22DbYNtg22DbYNSvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8qT3tg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DUrySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvIG9bYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg1K8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8kryafK2DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNSvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krytg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DUrySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8rYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg1K8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvK2DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNSvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krytg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DUrySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8rYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg3c80rySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvK2DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNefZK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krytg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DRb5SvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8rYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg2z+0rySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvK2DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNUP5K8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8kryEQ22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DewASvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8nQKtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg2JA0rySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvLXB7YNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNJwZK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8kryOQW2DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DcQISvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8pwCtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg1hC0rySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvJK8krySvIAALYNtg22DbYNtg22DbYNtg22DbYNtg22DbYNtg22DbUNsw2yDbENsA2uDa0NrA2qDakNqA2nDaUNpA2jDaENoA2fDZ4NnA2bDZoNmQ2XDZYNlQ2TDZINkQ2QDY4NjQ108nbyd/J48nnye/J88n3yf/KA8oHygvKE8oXyhvKH8onyivKL8o3yjvKP8pDykvKT8pTylvKX8pjymfKb8pzynfKe8qDyofKi8qTypfKm8qfyqfKq8qvyrfKu8q/yd/1ODU0NTA1KDUkNSA1HDUUNRA1DDUINQA0/DT4NPA07DToNOQ03DTYNNQ0zDTINMQ0wDS4NLQ0sDSoNKQ0oDScNJQ0kDSMNIg0gDR8NHg0cDRsNGg0ZDRcNFg0VDRMN7vLv8vDy8vLz8vTy9vL38vjy+fL78vzy/fL+8gDzAfMC8wTzBfMG8wfzCfMK8wvzDfMO8w/zEPMS8xPzFPMW8xfzGPMZ8xvzHPMd8x7zIPMh8yLzJPMl8ybzJ/Mp8xz71QzTDNIM0QzQDM4MzQzMDMsMyQzIDMcMxQzEDMMMwgzADL8Mvgy8DLsMugy5DLcMtgy1DLMMsgyxDLAMrgytDKwMqwypDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDFjzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPPE+KgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAxY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWvaoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY8/DzqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDFjzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY86gMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAxY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPOoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDFjzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY86gMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAxY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPOoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMUPRY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDLn2WPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY86gMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAwj+VjzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPOoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAypAFjzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzPgSoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMJwlY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY81jzWPNY88L7qAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgMqAyoDKgM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ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Cz9mguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLIPtm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRj9WAJmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC+cCZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvSXAZoLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguwCrP2ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0z/maC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmgt8/mb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0AwaaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLRAZm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Dz+mguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLEPpm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRz9nAKmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC9gBZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvRm9Gb0ZvSnApoLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguaC5oLmguZC5gLmAuXC5YLlguVC5QLlAuTC5MLkguRC5ELkAuPC48LjguNC40LjAuVCbH1dvR29Hf0ePR49Hn0evR69Hv0fPR89H30ffR+9H/0f/SA9IH0gfSC9IP0g/SE9IT0hfSG9Ib0h/SI9Ij0ifSK9Ir0i/SM9Iz0jfSN9I70j/SP9JD0kfSR9JL0k/ST9JT0lPSV9Jb0lvSX9Jj0mPSZ9Jr0mvSb9Jz0nPSd9J30nvSf9J/0oPSh9KH0ovSj9KP0pPSk9KX0pvSm9Kf0qPSo9Kn0qvSq9Kv0rPSs9K30rfSu9K/0r/Sw9LH0sfSy9LP0s/S09LT0tfS29Lb0t/S49Lj0BPtGC0YLRQtEC0QLQwtDC0ILQQtBC0ALPws/Cz4LPQs9CzwLPAs7CzoLOgs5CzgLOAs3CzYLNgs1CzQLNAszCzMLMgsxCzELMAsvCy8LLgstCy0LLAssCysLKgsqCykLKAsoCycLJgsmCyULJQskCyMLIwsiCyELIQsgCx8LHwseCx0LHQscCxwLGwsaCxoLGQsYCxgLFwsWCxYLFQsVCxQLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwuK/e307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O30wQYTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxML+ATt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9O307fTt9FT/EwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsTCxMLEwsSCxELEQsQCw8LDwsOCw0LDQsMCwwLCwsKCwoLCQsICwgLBwsGCwYLBQsECwQLAwsDCwILXPn/9AD1AfUB9QL1A/UD9QT1BPUF9Qb1BvUH9Qj1CPUJ9Qr1CvUL9Qz1DPUN9Q31DvUP9Q/1EPUR9RH1EvUT9RP1FPUU9RX1FvUW9Rf1GPUY9Rn1GvUa9Rv1G/Uc9R31HfUe9R/1H/Ug9SH1IfUi9SP1I/Uk9ST1JfUm9Sb1J/Uo9Sj1KfUq9Sr1K/Ur9Sz1LfUt9S71L/Uv9TD1MfUx9TL1M/Uz9TT1NPU19Tb1NvU39Tj1OPU59Tr1OvU79Tv1PPU99T31PvU/9T/1QPVB9UH1QvUk+KUKvAq8CrsKugq6CrkKuAq4CrcKtgq2CrUKtQq0CrMKswqyCrEKsQqwCq8KrwquCq0KrQqsCqwKqwqqCqoKqQqoCqgKpwqmCqYKpQqlCqQKowqjCqIKoQqhCqAKnwqfCp4KnQqdCpwKnAqbCpoKmgqZCpgKmAqXCpYKlgqVCpUKlAqTCpMKkgqRCpEKkAqPCo8KjgqNCo0KjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCrYAdPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPVgA4wKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjArJB571dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1TfyMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqx/HT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1ZgeMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKxAN09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09VIAjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKrPh09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPV09XT1dPU/+YwKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqMCowKjAqLCooKigqJCogKiAqHCoYKhgqFCoQKhAqDCoMKggqBCoEKgAp/Cn8Kfgp9Cn0KfAp8CnsKegp6CnkKeAp4CncKdgp2CsD/jPWM9Y31jfWO9Y/1j/WQ9ZH1kfWS9ZP1k/WU9ZT1lfWW9Zb1l/WY9Zj1mfWa9Zr1m/Wc9Zz1nfWd9Z71n/Wf9aD1ofWh9aL1o/Wj9aT1pPWl9ab1pvWn9aj1qPWp9ar1qvWr9av1rPWt9a31rvWv9a/1sPWx9bH1svWz9bP1tPW09bX1tvW29bf1uPW49bn1uvW69bv1u/W89b31vfW+9b/1v/XA9cH1wfXC9cP1w/XE9cT1xfXG9cb1x/XI9cj1yfXK9cr1y/XL9cz1zfXN9c71z/UyBDAKLwovCi4KLQotCiwKLAorCioKKgopCigKKAonCiYKJgolCiUKJAojCiMKIgohCiEKIAofCh8KHgodCh0KHAocChsKGgoaChkKGAoYChcKFgoWChUKFQoUChMKEwoSChEKEQoQCg8KDwoOCg0KDQoMCgwKCwoKCgoKCQoICggKBwoGCgYKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQp7Bvv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1aP0FCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQrx+/v1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79a728QcFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKqQL79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79TgBBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCmIJH/j79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/WA+gUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCtj++/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/UKBQUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQqQBfv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1+/X79fv1Uv4FCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoFCgUKBQoECgQKAwoDCgIKAQoBCgAK/wn/Cf4J/Qn9CfwJ/An7CfoJ+gn5CfgJ+An3CfYJ9gn1CfQJ9AnzCfMJ8gnxCfEJ8AnvCe8J7gntCe0J7AnsCesJ6gnqCekJ6AkV+xn2GvYa9hv2HPYc9h32HfYe9h/2H/Yg9iH2IfYi9iP2I/Yk9iT2JfYm9ib2J/Yo9ij2KfYq9ir2K/Ys9iz2LfYt9i72L/Yv9jD2MfYx9jL2M/Yz9jT2NPY19jb2NvY39jj2OPY59jr2OvY79jz2PPY99j32PvY/9j/2QPZB9kH2QvZD9kP2RPZE9kX2RvZG9kf2SPZI9kn2SvZK9kv2TPZM9k32TfZO9k/2T/ZQ9lH2UfZS9lP2U/ZU9lT2VfZW9lb2V/ZY9lj2WfZa9lr2W/Zb9ur3hgijCaIJoQmhCaAJnwmfCZ4JnQmdCZwJnAmbCZoJmgmZCZgJmAmXCZYJlgmVCZUJlAmTCZMJkgmRCZEJkAmPCY8JjgmNCY0JjAmMCYsJigmKCYkJiAmICYcJhgmGCYUJhQmECYMJgwmCCYEJgQmACX8Jfwl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4JpwGC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9gYCfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CQUIq/eC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvap+34Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CQr+gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvalBX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4JfglnBIL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2gvaC9oL2R/9+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4Jfgl+CX4JfQl9CXwJfAl7CXoJegl5CXgJeAl3CXYJdgl1CXQJdAlzCXMJcglxCXEJcAlvCW8JbgltCW0JbAlsCWsJaglqCWkJaAloCWcJZglmCWUJZAlkCWMJYwliCWEJYQlgCV8JXwleCV0JXQl/+qT2pfam9qb2p/ao9qj2qfaq9qr2q/as9qz2rfat9q72r/av9rD2sfax9rL2s/az9rT2tPa19rb2tva39rj2uPa59rr2uva79rz2vPa99r32vva/9r/2wPbB9sH2wvbD9sP2xPbE9sX2xvbG9sf2yPbI9sn2yvbK9sv2y/bM9s32zfbO9s/2z/bQ9tH20fbS9tP20/bU9tT21fbW9tb21/bY9tj22fba9tr22/bb9tz23fbd9t723/bf9uD24fbh9uL24/bj9uT25Pbl9ub25vbn9jT54AgXCRYJFgkVCRUJFAkTCRMJEgkRCREJEAkPCQ8JDgkNCQ0JDAkMCQsJCgkKCQkJCAkICQcJBgkGCQUJBQkECQMJAwkCCQEJAQkACf8I/wj+CP0I/Qj8CPwI+wj6CPoI+Qj4CPgI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcIvQAJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ97sC9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CMEGUPcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3Cfe5/PcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CFT9CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcmBvcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9whWAwn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3IgD3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wjp+Qn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9yD69wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI7P8J9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ940D9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CO8FCfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfeL/fcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CIH8CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3h/f4BvcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wiEAgn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn39AD3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcIiAgX+Qn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9/L69wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcIGv8J9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ918E9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CB0FCfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3Cfdd/vcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CK/7CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3CfcJ9wn3WfjKB/cI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPcI9wj3CPYI9gj1CPQI9AjzCPMI8gjxCPEI8AjvCO8I7gjtCO0I7AjrCOsI6gjqCOkI6AjoCOcI5gjmCOUI5AjkCOMI4wjiCOEI4QjgCN8I3wjeCN0I3QjcCNsI2wjaCNoI2QjYCNgI1wjWCNYI1QjUCNQI0wjTCNII0QjRCNAIzwjPCM4IzQjNCMwIywjLCMoIygiqATj3OPc59zr3Ovc79zz3PPc99z33Pvc/9z/3QPdB90H3QvdD90P3RPdF90X3RvdG90f3SPdI90n3SvdK90v3TPdM9033TfdO90/3T/dQ91H3UfdS91P3U/dU91X3VfdW91b3V/dY91j3Wfda91r3W/dc91z3Xfdd9173X/df92D3Yfdh92L3Y/dj92T3Zfdl92b3Zvdn92j3aPdp92r3avdr92z3bPdt9233bvdv92/3cPdx93H3cvdz93P3dPd193X3dvd293f3ePd493n3evd693v3sAGECIMIgwiCCIEIgQiACH8Ifwh+CH0IfQh8CHsIewh6CHoIeQh4CHgIdwh2CHYIdQh0CHQIcwhzCHIIcQhxCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIQge5+JD3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ9wP8cAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIYv6Q95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ9+MEcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCAsEkPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPeQ95D3kPc7/3AIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIcAhwCHAIbwhvCG4IbQhtCGwIawhrCGoIaghpCGgIaAhnCGYIZghlCGQIZAhjCGMIYghhCGEIYAhfCF8IXghdCF0IXAhbCFsIWghaCFkIWAhYCFcIVghWCFUIVAhUCFMIUwhSCFEIUQhQCE8ITwhOCE0ITQhMCEsISwhKCEoISQhICEgIRwhGCEYIRQhECEQIQwhDCEIIQQhBCEAIPwg/CEf7w/fD98T3xffF98b3xvfH98j3yPfJ98r3yvfL98z3zPfN9833zvfP98/30PfR99H30vfT99P31PfV99X31vfW99f32PfY99n32vfa99v33Pfc99333ffe99/33/fg9+H34ffi9+P34/fk9+X35ffm9+b35/fo9+j36ffq9+r36/fs9+z37fft9+737/fv9/D38ffx9/L38/fz9/T39Pf19/b39vf39/j3+Pf59/r3+vf79/z3/Pf99/33/vf/9//3APgB+AH4AvgD+AP4BPgE+AX46/mpB/kH+Af4B/cH9gf2B/UH9Af0B/MH8wfyB/EH8QfwB+8H7wfuB+0H7QfsB+wH6wfqB+oH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfGABf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4SgLpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kHFQZ0+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+P386QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kHzga0Apv+gfoX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/i7+dX97gEHBukH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QdSBjgCIP4G+hf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Db6UP5pAoMG6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB9cFvQGk/Yr5F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4svrM/uUC/wbpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kH6QfpB+kHWwVBASn9D/kX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4F/gX+Bf4GPgY+Bn4Gvga+Bv4HPgc+B34Hvge+B/4H/gg+CH4Ifgi+CP4I/gk+CX4Jfgm+Cf4J/go+Cj4Kfgq+Cr4K/gs+Cz4Lfgu+C74L/gv+DD4Mfgx+DL4M/gz+DT4Nfg1+Db4N/g3+Dj4OPg5+Dr4Ovg7+Dz4PPg9+D74Pvg/+D/4QPhB+EH4QvhD+EP4RPhF+EX4RvhG+Ef4SPhI+En4SvhK+Ev4TPhM+E34TvhO+E/4T/hQ+FH4UfhS+FP4U/hU+FX4VfhW+Fb4V/hY+Fj4Wfha+Fr4W/hc+Fz4Xfhe+F74X/hf+GD4Yfhh+GL4Y/hj+GT4Zfhl+Gb4Zvhn+Gj4aPhp+Gr4avhr+Gz4bPht+G74bvhv+G/4cPhx+HH4cvhz+HP4dPh1+HX4dvh2+Hf4ePh4+Hn4evh6+Hv4fPh8+H34fvh++H/4f/iA+IH4gfiC+IP4g/iE+IX4hfiG+Ib4h/iI+Ij4ifiK+Ir4i/iM+Iz4jfiO+I74j/iP+JD4kfiR+JL4k/iT+JT4lfiV+Jb4lviX+Jj4mPiZ+Jr4mvib+Jz4nPh/+1T/JwP6BmIHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgdiB2IHYgeNBLkA5vwS+Z74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvie+J74nvif+J/4oPih+KH4ovij+KP4pPil+KX4pvim+Kf4qPio+Kn4qviq+Kv4rPis+K34rviu+K/4r/iw+LH4sfiy+LP4s/i0+LX4tfi2+Lb4t/i4+Lj4ufi6+Lr4u/i8+Lz4vfi++L74v/i/+MD4wfjB+ML4w/jD+MT4xfjF+Mb4xvjH+Mj4yPjJ+Mr4yvjL+Az8yP+DAzIHMgcxBzEHMAcvBy8HLgctBy0HLAcrBysHKgcqBykHKAcoBycHJgcmByUHJAckByMHIgciByEHIQcgBx8HHwceBx0HHQccBxsHGwcaBxoHGQcYBxgHFwcWBxYHFQcUBxQHEwcSBxIHEQcRBxAHDwcPBw4HDQcNBwwHCwcLBwoHCgcJBwgHCAcHBwYHBgcFBwQHBAcDBwIHAgcBBwEHAAf/Bv8G/gb9Bv0G/Ab7BvsG+gb6BvkG+Ab4BvcG9gb2BvUG9Ab0BvMG8gbyBvEG8QbwBu8G7wbuBu0G7QbsBusG6wbqBuoG6QboBugG5wbmBuYG5QbkBuQG4wbiBuIG4QbhBuAG3wbfBt4G3QbdBtwG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBs4DQACz/CX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5qPw1AMMD2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsGYwPW/0n8Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5hfkT/aAALgTbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsGhgb4Amv/3fsl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfnw+X79CwGZBNsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wYbBo0CAP9y+yX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+SX5Jfkl+Vv66f12AQQF2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2wbbBtsG2gbZBtkG2AbYBtcG1gbWBtUG1AbUBtMG0gbSBtEG0AbQBs8GzwbOBs0GzQbMBssGywbKBskGyQbIBsgGxwbGBsYGxQbEBsQGwwbCBsIGwQbABsAGvwa/Br4GvQa9BrwGuwa7BroGuQa5BrgGuAa3BrYGtga1BrQGtAazBrIGsgaxBrAGsAavBq8GrgatBq0GrAarBqsGqgapBqkGqAaoBqcGpgamBqUGpAakBqMGogaiBqEGoAagBp8GnwaeBp0GnQacBpsGmwaaBpkGmQaYBpgGlwaWBpYGlQaUBpQGkwaSBpIGkQaRBpAGjwaPBo4GjQaNBowGiwaLBooGiQaJBogGiAaHBoYGhgaFBoQGhAaDBoIGggaBBoEGgAZ/Bn8GfgZ9Bn0GfAZ7BnsGegZ5BnkGeAZ4BncGdgZ2BnUGdAZ0BnMGcgZyBnEGcQZwBm8GbwZuBm0GbQZsBmsGawZqBmkGaQZoBmgGZwZmBmYGZQZkBmQGYwZiBmIGYQZhBmAGXwZfBl4GXQZdBlwGWwZbBloGWQZZBlgGWAZXBlYGVgZVBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBkAF+AGx/mn7rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5Lft1/rwBBAVUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQG3QSVAU7+Bvus+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rPms+az5rfmu+a75r/mw+bD5sfmx+bL5s/mz+bT5tfm1+bb5t/m3+bj5uPm5+br5uvm7+bz5vPm9+b75vvm/+cD5wPnB+cH5wvnD+cP5xPnF+cX5xvnH+cf5yPnI+cn5yvnK+cv5zPnM+c35zvnO+c/50PnQ+dH50fnS+dP50/nU+dX51fnW+df51/nY+dj52fna+dr52/nc+dz53fne+d753/ng+eD54fnh+eL54/m3++L+DAI3BRoGGQYZBhgGGAYXBhYGFgYVBhQGFAYTBhIGEgYRBhAGEAYPBg8GDgYNBg0GDAYLBgsGCgYJBgkGCAYIBgcGBgYGBgUGBAYEBgMGAgYCBgEGAQYABv8F/wX+Bf0F/QX8BfsF+wX6BfkF+QX4BfgF9wX2BfYF9QX0BfQF8wXyBfIF8QXxBfAF7wXvBe4F7QXtBewF6wXrBeoF6QXpBegF6AXnBeYF5gXlBeQF5AXjBeIF4gXhBeEF4AXfBd8F3gXdBd0F3AXbBdsF2gXZBdkF2AXYBdcF1gXWBdUF1AXUBdMF0gXSBdEF0QXQBc8FzwXOBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQUbBBkBGP4W+zP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+kn8S/9MAk4FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBcADvgC9/bv6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6pPym/6cCqQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FZgNkAGP9Yfoz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/r//AAAAQPNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQULAwkACP0z+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/pX+ln9WgBcA80FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQWyBbACsP+u/DP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+rL6tP21ALcDzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBc0FzQXNBVgFVgJV/1P8M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6M/oz+jP6OPo8+kH6RfpK+k76U/pX+lz6YPpl+mn6bvpy+nf6e/qA+oT6ifqN+pH6lvqa+p/6o/qo+qz6sfq1+rr6vvrD+sf6zPrQ+tX62fre+uL65/rr+vD69Pr4+v36AfsG+wr7D/sT+xj7HPsh+yX7Kvsu+zP7N/s8+0D7RftJ+077UvtX+1v7X/tk+2j7bftx+3b7evt/+4P7iPuM+5H7lfua+577o/un+6z7sPu1+7n7vvvC+8f7y/vP+9T72Pvd++H75vvq++/78/v4+/z7AfwF/Ar8DvwT/Bf8HPwg/CX8Kfwu/DL8Nvw7/D/8RPxI/E38UfxW/Fr8X/xj/Gj8bPxx/HX8evx+/IP8h/yM/JD8lfyZ/J38ovym/Kv8r/y0/Lj8vfzB/Mb8yvzP/NP82Pzc/OH85fzq/O788/z3/Pz8AP0F/Qn9Df0S/Rb9G/0f/ST9KP0t/TH9Nv06/T/9Q/1I/Uz9Uf1V/Vr9Xv1j/Wf9bP1w/XT9ef19/YL9hv2L/Y/9lP2Y/Z39of2m/ar9r/2z/bj9vP3B/cX9yv3O/dP91/3b/eD95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P3k/eT95P0="
    >The “audio” tag is not supported by your browser.</audio>
    
    <audio
      ref="audioDes"
      id="audioDesafio"
      :src="soundChalleng"
    >The “audio” tag is not supported by your browser.</audio>
    
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
import { create } from "domain";

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
      sounds: [],
      gameWord: [],
      guessedLetters: [],
      wrongLetters: [],
      heartImg: require("../_imagens/letreca/life.png"),
      filterGrayScale: "",
      contHeart: 6,
      imgChallenge: "",
      soundChalleng: "",
      rounds: 0,
      scores: 0
    };
  },

  created: function() {
    let cat = this.$route.params.id;
    console.log(cat);
    let url =
      "https://app.sisalfa.dcx.ufpb.br/letreca/v1/desafios/" +
      cat +
      "/contexto";
    if (cat !== undefined) {
      //url += cat;
      console.log(url);
    }
    axios
      .get(url)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          this.words.push(response.data[i].nome);
          this.images.push(response.data[i].imagem);
          this.sounds.push(response.data[i].audio);
        }
        this.newGame();
      })
      .catch(e => {
        console.log(e);
      });
  },

  methods: {
    selectWord: function() {
      if (this.words.length > 0) {
        var indexRandom = Math.floor(Math.random() * this.words.length);

        this.word = this.words[indexRandom].toUpperCase().split("");
        this.imgChallenge = this.images[indexRandom];
        this.soundChalleng = this.sounds[indexRandom];
        this.words.splice(indexRandom, 1);
        this.images.splice(indexRandom, 1);
        this.sounds.splice(indexRandom, 1);
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
      document.getElementById(event.target.querySelector("audio").id).play();
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

    soundError: function() {
      document.getElementById("audioE").play();
    },

    soundRight: function() {
      document.getElementById("audioR").play();
    },

    soundGame: function() {
      document.getElementById(this.$refs.audioDes.id).play();
      console.log(document.getElementById(this.$refs.audioDes.id));
      console.log(this.soundChalleng);
    },

    shouldFinishGame: function() {
      if (this.gameWord.indexOf("#") < 0) {
        this.rounds += 1;
        this.scores += 10;
        if (this.rounds >= 5) {
          document
            .querySelectorAll("a.btn-default")
            .forEach(function(el, index) {
              el.classList.add("disabled");
            });
          this.winner = true;
          setTimeout(
            function() {
              this.soundRight();
            }.bind(this),
            1000
          );
          setTimeout(
            function() {
              this.soundGame();
            }.bind(this),
            1500
          );
        } else {
          setTimeout(
            function() {
              this.soundRight();
            }.bind(this),
            1000
          );
          setTimeout(
            function() {
              this.soundGame();
            }.bind(this),
            1500
          );
          setTimeout(
            function() {
              this.nextChallenge();
            }.bind(this),
            2500
          );

          //alert("Next round")
        }
      } else if (!this.hasGuessers()) {
        this.rounds += 1;
        if (this.rounds >= 5) {
          document
            .querySelectorAll("a.btn-default")
            .forEach(function(el, index) {
              el.classList.add("disabled");
            });
          this.looser = true;
          setTimeout(
            function() {
              this.soundError();
            }.bind(this),
            1000
          );
        } else {
          setTimeout(
            function() {
              this.soundError();
            }.bind(this),
            1000
          );
          this.nextChallenge();
          alert("Errou!");
        }
      }
    },

    nextChallenge: function() {
      this.newGame();
    },

    repeatGame: function() {
      Object.assign(this.$data, this.$options.data.call(this));
      let cat = this.$route.params.id;
      let url =
        "https://app.sisalfa.dcx.ufpb.br/letreca/v1/desafios/" +
        cat +
        "/contexto";
      if (cat !== undefined) {
        //url += cat;
      }
      axios
        .get(url)
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            this.words.push(response.data[i].nome);
            this.images.push(response.data[i].imagem);
            this.sounds.push(response.data[i].audio);
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
    }
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
  background-color: #2a7039 !important;
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

.btn-voltar-engine {
  background-image: url(../_imagens/letreca/return.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  width: 7%;
  height: 3rem;
  z-index: 2;
  left: 1%;
  top: 1.5rem;
}

.btn-repeat-engine {
  background-image: url(../_imagens/letreca/repetir.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  width: 7%;
  height: 3rem;
  z-index: 2;
  left: 8.7%;
  top: 1.5rem;
}

.btn-home-engine {
  background-image: url(../_imagens/letreca/home.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  width: 7%;
  height: 3rem;
  z-index: 2;
  left: 16.1%;
  top: 1.5rem;
}

.btn-home2-engine {
  background-image: url(../_imagens/letreca/home.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  width: 7%;
  height: 3rem;
  z-index: 2;
  left: 1rem;
  top: 1rem;
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

.alert-warning {
  position: absolute !important;
  width: 95.5% !important;
  z-index: 99999 !important;
}
@media (min-width: 700px) {
  .container {
    max-width: 700px !important;
  }

  .container3 {
    width: 40%;
    left: 50%;
    top: 33%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 49%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 1.5rem;
  }
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
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 43%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 0.5rem;
  }
}

@media (max-width: 650px) {
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
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 43%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 0.5rem;
  }
}

@media (max-width: 600px) {
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
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 43%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 2rem;
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
    left: 30%;
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 9%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 2.5rem;
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
    left: 30%;
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 9%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 5rem;
  }
}

@media (max-width: 465px) {
  .container {
    max-width: 700px;
  }

  .container3 {
    width: 40%;
    left: 30%;
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 9%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }

  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 5rem;
  }
}

@media (max-width: 399px) {
  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 5rem;
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
    left: 30%;
    top: 30%;
  }

  .palavra {
    top: 20%;
    left: 8%;
  }

  .life {
    top: 12%;
    left: 12%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }
}

@media (max-width: 360px) {
  .container-teclado {
    background-color: #2a7039;
    padding-left: 2.5%;
    top: 5rem;
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
    left: 30%;
    top: 23%;
  }

  .palavra {
    top: 15%;
    left: 10%;
  }

  .life {
    top: 8%;
    left: 10%;
  }

  .teclado {
    width: 2.5rem !important;
    height: 2.5rem;
  }

  .btn-default {
    font-size: 1.2rem !important;
  }

  .col-auto {
    margin-top: 0% !important;
    margin-bottom: 2% !important;
  }
}
</style>

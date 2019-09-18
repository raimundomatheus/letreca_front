import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cadastroContexto from '@/components/cadastroContexto'
import desafios from '@/components/desafios'
import cadastroDesafio from '@/components/cadastroDesafio'
import editarContexto from '@/components/editarContexto'
import contextos from '@/components/contextos'
import engine from '@/components/engine'
import cadastroUsuario from '@/components/cadastroUsuario'
import login from '@/components/login'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  /* eslint-disable */
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/cadastroContexto',
      name: 'cadastroContexto',
      component: cadastroContexto,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next()
        } else {
          alert('Usuário não tem permissão.')
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }

      }
    },

    {
      path: '/desafios/:id',
      name: 'desafios',
      component: desafios,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next()
        } else {
          alert('Usuário não tem permissão.')
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }

      }
    },

    {
      path: '/cadastroDesafio',
      name: 'cadastroDesafio',
      component: cadastroDesafio,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next()
        } else {
          alert('Usuário não tem permissão.')
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }
      }
    },

    {
      path: '/editarContexto',
      name: 'editarContexto',
      component: editarContexto,
      beforeEnter: (to, from, next) => {
        if (window.localStorage.getItem('token')) {
          next()
        } else {
          alert('Usuário não tem permissão.')
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }

      }
    },

    {
      path: '/contextos',
      name: 'contextos',
      component: contextos
      // beforeEnter: (to, from, next) => {
      //   alert("oi")
      //   if(window.localStorage.getItem('token')){
      //     next()
      //   }

      // }
    },

    {
      path: '/engine/:id',
      name: 'engine',
      component: engine
    },
    {
      path: '/cadastroUsuario/',
      name: 'cadastroUsuario',
      component: cadastroUsuario
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/info',
      name: 'info',
      component: info
    }

  ]
})

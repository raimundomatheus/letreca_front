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
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/cadastroContexto',
      name: 'cadastroContexto',
      component: cadastroContexto
    },

    {
      path: '/desafios/:id',
      name: 'desafios',
      component: desafios
    },

    {
      path: '/cadastroDesafio',
      name: 'cadastroDesafio',
      component: cadastroDesafio
    },

    {
      path: '/editarContexto',
      name: 'editarContexto',
      component: editarContexto
    },

    {
      path: '/contextos',
      name: 'contextos',
      component: contextos
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

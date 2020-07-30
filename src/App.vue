<template>
  <div>hello vue3</div>
  <div>
   <router-link to="/">test</router-link>
   <router-link to="/test2">test2</router-link>
  </div>
  <router-view/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
 
}
</script>

<script>
  import api from '../api.js';
  import Card from 'primevue/card';
  export default {
    components: { Card },
   data() {
     return {
       posts:[],
     }
   },
    // beforeRouteEnter(to,from,next) {
    //     next(async ctx => {
    //       ctx.posts = await api.get('posts');
    //     })
    // },
   async mounted() {
     await api.get('posts').then(data => {
       this.posts = data.map(x => ({
          id:x.id,
          title:x.title.slice(0,50),
          body:x.body,
          img:this.$store.state.randomImage(1,6)
       }))
     });
   }
 }
</script>

<template>
  <div v-if="posts"  >
    <h1>posts </h1>
    <div class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center" >
      <div class="" v-for="post in posts" >
        <Card class="w-full overflow-hidden mx-auto" >
          <template #header>
            <img alt="user header" :src="post.img" class="object-cover h-50 w-full" />
          </template>
          <template #title>{{ post.title }}</template>
          <!--      <template #subtitle>Card subtitle</template>-->
          <template #content>
            <p class="m-0">
              {{ post.body }}
            </p>
          </template>

          </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
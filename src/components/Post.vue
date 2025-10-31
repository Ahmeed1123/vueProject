<script >
 import api from "@/api.js";
 import {router} from "@/router.js";
 import Card from 'primevue/card';

 export default {
   components: { Card },
   data() {
     return {
       post: {},
       comments:[]
     }
   },
   mounted() {
     const postResource = `posts/${this.$route.params.id}`;
     api.get(postResource).then( async data => {
       this.post = {
         id: data.id,
         title: data.title,
         body: data.body,
         img: this.$store.state.randomImage(1, 6)
       };

       // console.log(data);
       this.comments = await api.get(`${postResource}/comments`)
       // if (data == []) {
       //   router.back('/home');
       // }
       console.log(this.post);
       console.log(this.comments);
     }).catch(error => {
       router.back('/home');
       console.log('Error: ' , error)
     })
    // console.log(postResource);

   }
 }
</script>

<template>
  <h1 class="text-4xl">{{post.title}}</h1>
    <p class="m-0">
      {{ post.body }}
    </p>
    <hr class="!bg-gray-800 my-4" v-if="comments">
  <div v-if="comments" class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-4 justify-center items-center" >
    <Card v-for="comment in comments" class="w-full max-w-92 h-full overflow-hidden mx-auto my-3" >
      <template v-slot:title>{{ comment.email }}</template>
      <!--      <template #subtitle>Card subtitle</template>-->
      <template v-slot:content>
        <p class="m-0">
          {{ comment.body }}
        </p>
      </template>

    </Card>
  </div>

</template>

<style scoped>

</style>
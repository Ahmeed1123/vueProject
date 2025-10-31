<script>
import api from '../api.js';
import Card from 'primevue/card';
export default {
  components: { Card },
  data() {
    return {
      members:[],
    }
  },
  // beforeRouteEnter(to,from,next) {
  //     next(async ctx => {
  //       ctx.posts = await api.get('posts');
  //     })
  // },
  async mounted() {
     api.get('users').then(data => {
       this.members = data.map(x => ({
         id:x.id,
         name:x.name,
         phone:x.phone,
         address:x.address,
         avatar: this.$store.state.randomImage(1, 6)
       }))
     });
    console.log(this.members)
  }
}
</script>

<template>
  <div v-if="members"  >
    <h1>members </h1>
    <div class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center" >
      <div class="" v-for="member in members" >
        <Card class="w-full overflow-hidden mx-auto" >
          <template #header>
            <img alt="user header" :src="member.avatar" class="object-cover h-50 w-full" />
          </template>
          <template #title>{{ member.name }}</template>
          <!--      <template #subtitle>Card subtitle</template>-->
          <template v-slot:content>
            <p class="m-0">
              address: {{ member.address.street }}
            </p>
            <p class="m-0">
              phone: {{ member.phone }}
            </p>
          </template>

        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
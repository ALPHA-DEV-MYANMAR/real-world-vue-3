<template>
  <h1>Events For Good</h1>
  <div class="events">
    <event-card v-for='event in events' :key='event.id' :event='event' @click="detail(event)">
    </event-card>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from '@/services/EventService.js';

export default {
  name: "Home",
  components: {
    EventCard
  },
  data(){
    return {
      events : null
    }
  },
  methods: {
    detail(event){
      this.$router.push({ name : 'EventDetail' , params: { id : event.id }})
    },
  },
  created(){
     EventService.getEvent()
    .then(response => {
      this.events = response.data;
    })
    .catch(error => console.log(error));
  }
};
</script>

<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>

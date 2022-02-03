<template>
  <div class="event-card">

    <!-- Display event data  -->
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>

  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<style scoped>

  .event-card{
    padding : 10px;
    border : 1px solid black;
    border-radius : 5px;
    width : 30%;
    margin : auto;
    transition : 0.5s;
    cursor : pointer;
    margin-top : 10px;
  }

  .event-card:hover{
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
  }

</style>

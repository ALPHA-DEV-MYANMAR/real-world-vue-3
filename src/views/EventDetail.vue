<template>
    <div>
        <span>@ {{ event.time }} on {{ event.date }}</span>
        <h4>{{ event.title }}</h4>
        <p>{{ event.description }}</p>
        <span>{{ event.organizer }}</span>
        <span>{{ event.location }}</span>
    </div>
</template>


<script>
import EventService from '../services/EventService.js';
export default {
    name : 'EventDetail',
    props : ['id'],
    data (){
        return {
            event : null,
        }
    },
    created() {
        EventService.getEventDetail(this.id)
        .then(response => {
            this.event = response.data;
        })
    }
}
</script>
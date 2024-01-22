
<template>
  <a :href="url">{{ text }}</a>
  <p v-if="activity">{{ this.activity }}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NavLink',
  props: ['url', 'text'],
  activity:"Activity",

  mounted() {
  axios
    .get('https://www.boredapi.com/api/activity')
    .then((response) => {
      console.log(response)
      this.activity = response.data.activity
    })
    .catch((error) => {
      console.log(error)
    })
    }

}
</script>

<style>
a {
  text-decoration: none;
  margin:5%;
}
</style>
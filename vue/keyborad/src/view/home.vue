<template>
  <div>
    <myhead></myhead>
    <div
        style="width: 100%;height: 75vh;
        display: flex;justify-content: center;
        background:rgb(233 255 233);
        align-content: center;">
      <div style="margin: auto">
        <p style="font-size: 40px">创意小工具</p>
        <button @click="tty">keybord</button>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Foot from "@/components/foot.vue";
import myhead from "@/components/myhead.vue";

export default {
  name: "home",
  components: {Foot, myhead},
  methods: {
    tty() {
      this.$router.push("/keybord")
    }
  }
}
</script>

<style scoped>
button {
  width: 200px;
  height: 100px;
  border-radius: 20px;
  color: white;
  font-size: 30px;
  background-color: #42b883;
}
</style>

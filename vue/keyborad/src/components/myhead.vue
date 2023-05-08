<template>
  <div class="body">
    <div style="display: flex;padding: 0 15px">
      <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-7b849662>
        <path
            fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            data-v-7b849662>
        </path>
        <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-7b849662>
        </path>
      </svg>
      <span class="text">Vue.js</span>
    </div>
    <div style="display: flex;">
      <p class="logo" style="color: #81ecff">By XuXiao</p>
    </div>
    <div style="display: flex;" @click="click">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24" focusable="false"
           viewbox="0 0 24 24"
           class="logo">
        <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
        </path>
      </svg>
      <!--        <span class="text">github</span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "myhead",
  methods: {
    click() {
      window.open("https://github.com/xxnn888/keybord")
    }
  }
}
</script>

<style scoped>
.body {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
//background-color: #ccc;
}

.logo {
  margin-top: 15px;
  margin-right: 7px;
}

.text {
  line-height: 50px;
}
</style>

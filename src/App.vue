<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed } from 'vue'
import microApps from './micro-app'
// import { registerMicroApps,start } from 'qiankun'
// registerMicroApps([
//   {
//     name: 'vue app',
//     entry: '//localhost:7316',
//     container: '#micro-app',
//     activeRule: '/vue3Vite',
//   },
//   {
//     name: 'myMicroAppName',
//     entry: '//localhost:3001',
//     container: '#micro-app',
//     activeRule: '/vue3',
//   },
//     {
//     name: 'myMicroAppName1',
//     entry: '//localhost:8080',
//     container: '#micro-app',
//     activeRule: '/auth',
//   },
// ]);

// start();

const apps = computed(()=>microApps);

const handleJump = (val:string)=>{
  history.pushState(null,val,val)
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div class="menu-box">
  <el-menu
    active-text-color="#ffd04b"
    background-color="#324157"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    v-for="item in apps"
  >
    <el-menu-item :index="item.activeRule" @click="handleJump(item.activeRule)">
      <el-icon><icon-menu /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
  </div>
  <div id="micro-app"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-box {
  width: 240px;
}
</style>

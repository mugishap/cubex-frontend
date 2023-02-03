<template>
  <div
    class="w-full shadow px-12 bg-white h-20 flex items-center justify-between"
  >
    <div v-if="isNavVisible" class="fixed w-screen h-screen bg-black"></div>
    <div class="flex items-center justify-center">
      <img src="src/assets/logo.png" class="w-14" alt="" />
      <span class="flex flex-col ml-3">
        <span class="text-cubex-green font-bold text-2xl">
          Cubex Technologies
        </span>
        <span class="text-sm">Survey App</span>
      </span>
    </div>
    <div class="flex md:hidden relative items-center justify-center">
      <div @click="toggleNavbar" class="cursor-pointer flex flex-col">
        <div class="h-1 rounded bg-black my-[1px] w-6"></div>
        <div class="h-1 rounded bg-black my-[1px] w-6"></div>
        <div class="h-1 rounded bg-black my-[1px] w-6"></div>
      </div>
    </div>
    <div class="hidden md:flex w-fit lg:w-5/12 justify-around items-center">
      <div class="mr-4 flex bg-[#f5f5f5] px-2 rounded py-2 items-center">
        <input
          type="text"
          class="outline-none bg-inherit w-64"
          placeholder="Search Data"
        />
      </div>
      <router-link to="/profile" class="flex items-center justify-center">
        <span class="mxl:flex mr-2 hidden"> Mugisha Precieux </span>
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          class="rounded-full object-cover m-2 p-[2px] border-2 w-14 h-14 border-cubex-green cursor-pointer"
          alt=""
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import { reactive, watch, toRefs } from "vue";

export default {
  name: "Navbar",
  toggleNavbar: {
    type: Function,
    required: true,
  },
  setup() {
    return {
      showNavbar: false,
    };
  },
};
</script>
<style></style>

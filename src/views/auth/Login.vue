<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div
      class="hidden md:flex items-center justify-center w-1/2 h-full bg-cubex-green/75"
    >
      <img src="./../../assets/auth.png" class="object-cover w-9/12" alt="" />
    </div>
    <div class="flex w-full md:w-1/2 items-center justify-center">
      <div
        class="rounded w-11/12 md:w-10/12 mlg:w-9/12 lg:w-8/12 border-slate-300 sm10:border sm10:p-6 flex items-center justify-center flex-col"
      >
        <img src="./../../assets/logo.png" class="w-24" alt="" />
        <span class="font-mkt text-2xl font-bold my-3">Welcome Back</span>
        <form
          @submit.prevent="handleSubmit"
          class="items-center justify-center mt-8 w-full flex flex-col h-full"
        >
          <div class="flex my-2 w-full flex-col">
            <span class="mb-1">Email</span>
            <input
              v-model="formData.email"
              type="email"
              placeholder="whateveryoulike@mail.co"
              class="bg-slate-200 placeholder:text-slate-500 outline-none px-2 py-2"
            />
          </div>
          <div class="flex my-2 w-full flex-col">
            <span class="mb-1">Password</span>
            <input
              v-model="formData.password"
              type="password"
              placeholder="****"
              class="bg-slate-200 placeholder:text-slate-500 outline-none px-2 py-2"
            />
          </div>
          <button
            type="submit"
            class="font-bold mt-6 text-lg bg- text-center py-2 cursor-pointer text-white bg-cubex-blue rounded w-4/12"
          >
            CONTINUE
          </button>
        </form>
        <span class="mt-4">
          <span>Not yet in the family?</span>&nbsp;<router-link
            to="/auth/register"
            class="text-cubex-blue cursor-pointer"
            >Register</router-link
          >
        </span>
        <span class="mt-4">
          <span>Forgot your password?</span>&nbsp;<router-link
            to="/auth/register"
            class="text-cubex-blue cursor-pointer"
            >Let's help</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import api from "../../api";
export default {
  name: "Signup",
  setup() {
    const loading = ref(false);
    const formData = reactive({
      names: "",
      email: "",
      password: "",
    });
    const handleSubmit = async () => {
      console.log(formData);
      const res = await api({ requiresAuth: false }).post("/users/create", {
        ...formData,
      });
      const data = res.data;
      console.log(data);
    };
    return {
      loading,
      formData,
      handleSubmit,
    };
  },
};
</script>
<style></style>

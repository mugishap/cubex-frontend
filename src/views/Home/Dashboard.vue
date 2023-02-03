<template>
  <div class="w-full lg:h-screen bg-[#f5f5f5]">
    <Navbar :toggleNavbar="toggleNavbar" />
    <div
      v-if="showNavbar"
      class="w-full z-10 h-full absolute bg-black/40"
    ></div>
    <div class="mt-4 px-4 w-full flex flex-col">
      <div class="w-full flex justify-between items-center">
        <span class="font-bold text-2xl">Good Morning, Mugisha</span>
        <div class="hidden md:flex items-center justify-center">
          <input type="date" class="mx-4 h-10 w-56 rounded shadow p-2" />
          <router-link to="/survey/create"></router-link>
          <button
            class="text-white hover:border-4 border-cubex-green/20 bg-cubex-green w-40 h-10 rounded cursor-pointer shadow shadow-cubex-green"
          >
            Create New Survey
          </button>
        </div>
      </div>
      <div
        class="w-full mt-6 md:grid-cols-2 lg:grid-cols-3 mxl:grid-cols-4 grid gap-4"
      >
        <DataCard
          v-for="(data, index) in surveyData"
          :key="index"
          :data="data"
        />
      </div>
      <div class="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="w-11/12 m-auto h-64 rounded-2xl flex flex-col items-center justify-start shadow-2xl"
        >
          <div
            class="w-full bg-to-top flex items-center justify-center rounded-t-2xl h-24"
          >
            <div class="flex text-white text-lg flex-col items-center w-1/3">
              <span class="">Average Time</span>
              <span class="font-bold text-xl">5.32%</span>
            </div>
            <div
              class="flex text-white text-lg flex-col border-x-2 border-white items-center w-1/3"
            >
              <span class="">Completion Rate</span>
              <span class="font-bold text-xl">84.32%</span>
            </div>
            <div
              class="flex text-white h-full text-lg flex-col justify-center items-center w-1/3"
            >
              <div
                class="w-16 h-16 border-[14px] border-r-[#0C613B] -rotate-[36deg] rounded-full"
              ></div>
            </div>
          </div>
          <div
            class="w-7/12 flex items-center justify-center h-24 border-b-2 bg-bl border-slate-300"
          >
            <span class="flex items-center justify-center">
              <span class="text-2xl font-bold text-cubex-green mr-3">94%</span>
              <span class="text-xl">Total Responses</span>
            </span>
          </div>
        </div>
        <div
          class="p-4 w-11/12 m-auto h-64 rounded-2xl flex flex-col items-s tart justify-start shadow-2xl"
        >
          <span class="font-bold text-2xl">Highlight</span>
          <!-- options -->
          <div>
            <div class="w-full mt-6 flex px-4 border-b-2 border-slate-300">
              <div
                v-for="(category, index) in categories"
                :key="index"
                :class="`px-4 uppercase py-1 text-lg cursor-pointer  hover:bg-slate-200 ${
                  active === category
                    ? 'bg-slate-200 text-black border-b-2 border-b-black '
                    : 'text-gray-500'
                }`"
                @click="setState(category)"
              >
                {{ category }}
              </div>
            </div>
            <div v-if="active === 'nps'" class="w-full flex flex-col mt-4">
              <span class="text-lg font-bold">National Pension System</span>
              <input type="range" class="mt-3 w-11/12" v-model="nps" name="" id="">
              <span class="mt-3 text-xl font-bold">{{ nps }}%</span>
            </div>
            <div v-if="active === 'csat'">
              <span>Customer Satisfaction Score</span>
            </div>
            <div v-if="active === 'ces'">
              <span>Consumer Electronics Show</span>
            </div>
          </div>
        </div>
        <div
          class="w-11/12 m-auto h-64 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
import DataCard from "../../components/DataCard.vue";
import { reactive, watch,ref, toRefs } from "vue";

export default {
  name: "Dashboard",
  data() {
    const surveyData = [
      {
        text: "Survey Sent",
        value: 60,
        color: "black",
      },
      {
        text: "Response Received",
        value: 42,
        color: "green",
      },
      {
        text: "Response Pending",
        value: 12,
        color: "orange",
      },
      {
        text: "Customer Excluded",
        value: 6,
        color: "red",
      },
    ];
    const chartOptions = {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: [1991],
      },
    };
    const series = [
      {
        name: "series-1",
        data: [30],
      },
    ];
    const categories = ["nps", "csat", "ces"];
    return {
      categories,
      chartOptions,
      series,
      surveyData,
    };
  },
  components: {
    Navbar,
    DataCard,
  },
  setup() {
    const nps = ref(40)
    const activeState = reactive({ active: "nps" });
    watch(activeState, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    });
    const setState = (newValue) => {
      activeState.active = newValue;
    };
    const state = reactive({
      showNavbar: false,
    });
    const toggleNavbar = () => {
      console.log("Toggling");
      state.showNavbar = !state.showNavbar;
    };
    watch(state, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
    });
    return {
      ...toRefs(state),
      toggleNavbar,
      setState,
      nps,
      ...toRefs(activeState),
    };
  },
};
</script>
<style></style>

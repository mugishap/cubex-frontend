<template lang="">
  <div class="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div
      class="w-11/12 m-auto h-72 rounded-2xl flex flex-col items-center justify-start shadow-2xl"
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
          <span class=""> Rate</span>
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
        class="w-7/12 flex items-center justify-center h-36 border-b-2 bg-bl border-slate-300"
      >
        <span class="flex items-center justify-center">
          <span class="text-3xl font-bold text-cubex-green mr-3">94%</span>
          <span class="text-xl">Total Responses</span>
        </span>
      </div>
    </div>
    <div
      class="p-4 w-11/12 m-auto h-72 rounded-2xl flex flex-col items-s tart justify-start shadow-2xl"
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
          <input
            type="range"
            class="mt-3 w-11/12"
            v-model="nps"
            name=""
            id=""
          />
          <span class="mt-3 text-xl font-bold">{{ nps }}%</span>
        </div>
        <div v-if="active === 'csat'" class="mt-4 w-full flex flex-col">
          <div
            v-for="(tag, index) in tags"
            class="hover:bg-slate-200 my-2 flex flex-col px-3 rounded cursor-pointer w-full"
          >
            <span class="text-xl font-bold">{{ tag.heading }}</span>
            <div class="w- flex items-center justify-between">
              <span class="text-slate-500">{{ tag.text }}</span>
              <span :class="` text-lg font-bold text-${tag.color}`"
                >{{ tag.value }}%</span
              >
            </div>
          </div>
        </div>
        <div v-if="active === 'ces'">
          <div class="w-full flex flex-col mt-4">
            <span
              >CES is a yearly event that showcases new technology and
              innovation. Companies reveal their latest products and attendees
              have the opportunity to network and meet with industry leaders. It
              is a must-attend event for anyone interested in technology and the
              future of innovation.</span
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-11/12 m-auto h-72 rounded-2xl flex flex-col items-center justify-center shadow-2xl"
    >
    <span class="text-xl font-bold my-3">Perfomance</span>
    <apexchart width="350" type="bar" :options="performanceChartOptions" :series="perfomanceSeries"></apexchart>

</div>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "vue";

export default {
  name: "Row2",
  data() {
    const performanceChartOptions = {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: [
          "Wells Fargo",
          "Sate Empplyees",
          "PNC",
          "SunTrust",
          "Fidelity",
        ],
      },
    };
    const perfomanceSeries = [
      {
        name: "Score",
        data: [8, 5, 2, 5, 6],
      },
    ];
    const tags = [
      {
        heading: "Strongest Tag",
        text: "New Customer follow up",
        color: "cubex-green",
        value: 82.16,
      },
      {
        heading: "Weakest Tag",
        text: "Annual Customer Satisfaction survey",
        color: "red-600",
        value: 69.12,
      },
    ];
    const categories = ["nps", "csat", "ces"];
    return {
      tags,
      categories,
      performanceChartOptions,
      perfomanceSeries,
    };
  },
  setup() {
    const nps = ref(40);
    const activeState = reactive({ active: "csat" });

    const setState = (newValue) => {
      activeState.active = newValue;
    };
    return {
      setState,
      nps,
      ...toRefs(activeState),
    };
  },
};
</script>
<style lang=""></style>

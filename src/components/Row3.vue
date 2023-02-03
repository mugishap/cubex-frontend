<template lang="">
  <div class="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div class="w-11/12 m-auto h-96 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
      <span class="text-xl font-bold my-3">Perfomance</span>
      <apexchart
        width="350"
        type="pie"
        :options="performanceChartOptions"
        :series="perfomanceSeries"
      ></apexchart>
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

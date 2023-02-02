<template>
  <div class="w-full h-screen bg-[#f5f5f5]">
    <Navbar />
    <div class="mt-4 px-4 w-full flex flex-col">
      <div class="w-full flex justify-between items-center">
        <span class="font-bold text-2xl">Good Morning, Mugisha</span>
        <div class="flex items-center justify-center">
          <input type="date" class="mx-4 h-10 w-56 rounded shadow p-2" />
          <router-link to="/survey/create"></router-link>
          <button
            class="text-white hover:border-4 border-cubex-green/20 bg-cubex-green w-40 h-10 rounded cursor-pointer shadow shadow-cubex-green"
          >
            Create New Survey
          </button>
        </div>
      </div>
      <div class="w-full mt-6 grid-cols-4 grid gap-4">
        <DataCard
          v-for="(data, index) in surveyData"
          :key="index"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue";
import DataCard from "../../components/DataCard.vue";
export default {
  name: "Dashboard",
  data() {
    const surveyData = [
      {
        text: "Survey Sent",
        value: 60,
        color: 'black',
      },
      {
        text: "Response Received",
        value: 42,
        color: 'green',
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
    return {
      surveyData,
    };
  },
  components: {
    Navbar,
    DataCard,
  },
};
</script>
<style></style>

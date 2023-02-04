<template>
  <div
    class="w-full h-44 rounded border border-[#DDDDDD] flex items-center justify-center flex-col"
  >
    <span class="text-xl font-bold mb-6 text-slate-600">{{ data.text }}</span>
    <span
      class="text-4xl font-bold b-4"
      :style="`color: ${data.color} ;`"
      >{{ data.value }}</span
    >
  </div>
</template>
<script>
export default {
  name: "DataCard",
  props: ["data"],
};
</script>
<style lang=""></style>

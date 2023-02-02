<template>
  <div className="w-full">
    <head>
      <title>404 | CubeX</title>
    </head>
    <main
      className="bg-cubex-green/10 w-full   h-screen  flex items-center justify-center flex-col pt-12 pb-16"
    >
      <section className="relative flex flex-col">
        <div className="text-[#263048]  text-[200px] font-bold z-50 px-6">
          404
        </div>
        <div
          className="absolute bg-cubex-blue  bottom-12 h-[30%] w-full"
        ></div>
      </section>
      <section className="flex flex-col items-center space-y-3 pb-8">
        <h2 className="text-[#2A2C30] font-medium text-2xl">
          Sorry Page Not Found :(
        </h2>
        <p className="text-gray-primary text-center max-w-md text-[18px]">
          We are sorry. The Page you are looking for does not exist. It might
          have been moved or delete.
        </p>
      </section>
      <router-link to="/">
        <button className="text-white rounded bg-cubex-blue py-3 px-8 text-lg">
          Back To Home Page
        </button>
      </router-link>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

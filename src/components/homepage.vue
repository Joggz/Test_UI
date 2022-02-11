<template>
  <section class="py-10 w-2/4">
    <!-- <h4 class="text-center">the center screen</h4> -->
    <section id="accountBalance" class="flex mb-2 justify-between">
      <section class="pl-8 flex items-center">
        <div class="w-40 h-20 rounded-xl bg-blue-400"></div>

        <div class="text-blue-700">
          <span class="px-4"> Account Balance </span> <br />
          <span class="px-4 text-4xl"> # 13,000.17</span>
        </div>
      </section>
      <section class="pr-4 flex items-center">
        <div
          class="cursor-pointer w-10 h-10 rounded-full mx-4 bg-blue-100"
        ></div>
        <button
          class="cursor-pointer bg-blue-700 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg"
        >
          Add Money
        </button>
      </section>
    </section>

    <section
      id="nav"
      class="border-solid border-2 mx-8 border-sky-500 mt-12 rounded-xl shadow-lg"
    >
      <ul class="flex justify-between items-center p-4 text-lg cursor-pointer">
        <li id="bottomBorder">Spend</li>
        <li>Save</li>
        <li>Borrow</li>
      </ul>
    </section>

    <section
      class="search border-solid border-2 mx-8 border-sky-500 my-6 rounded-xl shadow-lg h-12"
    >
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <!-- ... -->
          </svg>
        </span>
        <input
          class="placeholder:text-black placeholder:text-lg bg-white w-full rounded-md py-2 pl-9 shadow-sm focus:outline-none sm:text-sm h-12h-12"
          placeholder="Search for Transaction..."
          type="text"
          name="search"
        />
      </label>
    </section>
  </section>
</template>

<script>
export default {
  name: "center screen",
  props: {},
};
</script>

<style>
#bottomBorder {
  /* handle the border bottom conditionally iusing v-directives */
  /* border-bottom: 2px solid red; */
}
</style>

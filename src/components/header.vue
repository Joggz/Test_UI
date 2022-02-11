<template>
  <div class="sticky top-0">
    <nav
      class="text-slate-500 h-20 bg-gray-50 shadow-lg shadow-cyan-500/50 flex justify-center items-center"
    >
      <div class="w-11/12 flex justify-around">
        <div class="py-4 pl-14 flex-1">Logo</div>
        <div class="py-4 flex flex-1">
          <section class="w-11/12 cursor-pointer">
            <ul class="flex justify-evenly opacity-40">
              <li class="px-4 text-grey">Home</li>
              <li class="px-4">Payment</li>
              <li class="px-4">Budget</li>
              <li class="px-4">card</li>
            </ul>
          </section>
        </div>
        <div class="py-4 flex flex-1 justify-end pr-14">
          <section class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mx-auto"
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
              width="5"
              height="5"
            />
            <span class="px-4 opacity-40"> Account </span>
          </section>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

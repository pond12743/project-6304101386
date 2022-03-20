<template>
  <div
    class="bg-image mt-5 p-3"
    style="
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xeBPbuFbT5mBYhIAIlSPYZxq_KgSTWNJEboBGl9KviHj0WLTewMHhBEM-l38Dg7kfC8&usqp=CAU');">
  <h1 class="text-white">Register</h1>
    <div class="w-full max-w-md m-auto text-white">
      <div>
        <div class="m-5 flex justify-center">
          <div>
            <div class="mb-5 rounded-lg">
              <p class="mb-3">Email</p>
              <input
                type="email"
                v-model="email"
                placeholder="example@gmail.com"
                class="text-black rounded-lg w-80 py-2 px-3 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200"
              />
            </div>
            <div class="mb-5 rounded-lg">
              <p class="mb-3">Password</p>
              <input
                type="password"
                v-model="password"
                placeholder="**********"
                class="text-black rounded-lg w-80 py-2 px-3 hover:bg-slate-200 shadow-lg shadow-blue-500/50 ease-in-out duration-200"
              />
            </div>
            <div class="flex justify-center mb-3">
              <button
                @click="signup()"
                class="mb-5 p-2">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebaseinit";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    signup() {
      // const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$router.replace("/about");
          alert("Sign up success!!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("error");
          // ..
        });
    },
  },
};
</script>

<style></style>

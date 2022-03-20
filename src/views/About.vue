<template>
  <div class="about">
    <div>
      <span class="text middle" data-text="data Form"></span>
    </div>
    <div
      class="bg-image"
      style="
        background-image: url('https://www.launch-marketing.com/wp-content/uploads/2012/01/GettyImages-1127556731.jpg');
        height: auto;
      "
    >
      <div class="gradiant-bg"><h1>ลงทะเบียนลุ้นรางวัลที่ 1</h1></div>
      <form @submit.prevent="addData">
        <div class="card-body">
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="floatingInput"
              placeholder="date"
              v-model="date"
            />
            <label for="floatingInput">Date</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="codeid"
              v-model="codeid"
            />
            <label for="floatingInput">Code</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="name"
              v-model="name"
            />
            <label for="floatingInput">Name & Lastname</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="idcard"
              v-model="idc"
            />
            <label for="floatingInput">ID Card</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="phone number"
              v-model="tel"
            />
            <label for="floatingInput">Phone Number</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
            />
            <label for="floatingInput">Email address</label>
          </div>

          <div class="d-grid gap-2 d-md-block">
            <button type="submit" class="bg-white text-black">ADD DATA</button>
          </div>
        </div>
      </form>
      <div class="card-body">
        <table class="container table table-striped table-hover">
          <thead>
            <tr class="tx">
              <th scope="col">Date</th>
              <th scope="col">Code</th>
              <th scope="col">Name & Lastname</th>
              <th scope="col">ID Card</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in csDoc" :key="index" align="center">
              <td>{{ i.data.date1 }}</td>
              <td>{{ i.data.code1 }}</td>
              <td>{{ i.data.name1 }}</td>
              <td>{{ i.data.idc1 }}</td>
              <td>{{ i.data.tel1 }}</td>
              <td>{{ i.data.email1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "../plugins/firebaseinit";

export default {
  data() {
    return {
      csDoc: [],
      codeid: "",
      name: "",
      email: "",
      idc: "",
      tel: "",
      date: "",
    };
  },
  beforeMount() {
    this.readData();
  },
  methods: {
    async addData() {
      try {
        this.csDoc = [];
        const docRef = await addDoc(collection(db, "cs313"), {
          name1: this.name,
          code1: this.codeid,
          email1: this.email,
          idc1: this.idc,
          tel1: this.tel,
          date1: this.date,
        });
        this.name = "";
        this.codeid = "";
        this.email = "";
        this.idc = "";
        this.tel = "";
        this.date = "";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    readData() {
      this.csDoc = [];
      const q = query(collection(db, "cs313"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.csDoc.push({ id: doc.id, data: doc.data() });
        });
        // console.log("Current cities in CA: ", this.csDoc.join(", "));
      });
    },
  },
};
</script>

<style>
.gradiant-bg {
  background: linear-gradient(80deg, #91e9c7, #ffffff);
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 2s infinite;
}

.tx {
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(80deg, #ffffff, #91fbe1);
  background-size: 50%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: gradient 2s infinite;
}


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>

<template>
  <div>
    <div class="Clock container">
      <p>
        {{ year }} / {{ month }} / {{ day }}
      </p>
      <p>
        <span>{{ hours }} : {{ minutes }}</span> : {{ seconds }}
      </p>
      <button @click="showMessage">１０秒アラーム</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockApp',
  data() {
    return {
      date: new Date(),
    }
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth() + 1;
    },
    day() {
      return this.dateTimePadding(this.date.getDate());
    },
    hours() {
      return this.dateTimePadding(this.date.getHours());
    },
    minutes() {
      return this.dateTimePadding(this.date.getMinutes());
    },
    seconds() {
      return this.dateTimePadding(this.date.getSeconds());
    },
  },
  methods: {
    dateTimePadding(num) {
      return ('0' + num ).slice(-2);
    },
    setDate() {
      this.date = new Date();
    },
    showMessage() {
      setTimeout(() => {
        alert('10秒経過っ!!')
      }, 10000)
    }
  },
  mounted() {
    this.setDate;
    setInterval(() => this.setDate(), 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding-block: 30px;
}

p {
  font-size: 1.5rem;
}

span {
  font-size: 5rem;
}

button {
  border: solid 1px white;
  background-color: black;
  color: white;
  padding: 0.5em 2rem;
  font-size: 1.1rem;
}
</style>

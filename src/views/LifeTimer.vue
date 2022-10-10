<template>
  <div class="LifeTimer">
    <p>computedを使って書き換え。リセットが効かないエラーの解決策を考え中。</p>
    <h2>ジャネーの法則を取り入れて改良予定</h2>
    <p>{{ elaspeMs }}</p>
    <p>{{ nowMs }}</p>
    <p>{{ startMs }}</p>
    <p>{{ formatedM }} : {{ formatedS }} : {{ formatedMs }}</p>
    <button id="start" @click="startTimer" v-show="!stateTimer">Start</button>
    <button id="stop" @click="stopTimer" v-show="stateTimer">Stop</button>
    <button id="resetTimer">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'LifeTimer',
  data() {
    return {
      stateTimer: false,

      startMs: 0,
      nowMs: 0,
      elaspeMs: 0,
      accumMs: 0,
      

      setIntervalContent: 0,
    }
  },
  methods: {
    startTimer() {
      this.stateTimer = true;

      this.startMs = Date.now();

      this.setIntervalContent = setInterval(() => {
        this.nowMs = Date.now();
        this.elaspeMs = this.accumMs + (this.nowMs - this.startMs)
      }, 10);
    },
    stopTimer() {
      this.stateTimer = false;
      this.accumMs = this.elaspeMs;
      clearInterval(this.setIntervalContent);
    },
    resetTimer() {
      this.stateTimer = false;
      clearInterval(this.setIntervalContent);
      this.elaspeMs = 0;
      this.accumMs = 0;

    }
  },
  computed: {
    formatedMs() {
      let ms = Math.floor(this.elaspeMs % 1000);
      return ('00' + ms).slice(-3);
    },
    formatedS() {
      let s = Math.floor((this.elaspeMs / 1000) % 60);
      return ('0' + s).slice(-2);
    },
    formatedM() {
      let m = Math.floor((this.elaspeMs / 1000 / 60) % 60);
      return ('0' + m).slice(-2);
    }
  }
}
</script>

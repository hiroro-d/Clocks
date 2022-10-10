<template>
  <div>
    <h1>StopWatch!</h1>
    <p>{{ nowMs }}</p>
    <p>{{ startMs }}</p>
    <p>{{ elaspeMs }}</p>
    <p>{{ formatedM }} : {{ formatedS }} : {{ formatedMs }}</p>
    <div>
      <button id="start__stop" @click="start">{{ startString }}</button>
      <button id="reset" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startString: 'Start', //スタートの文字
      startMs: 0, //スタート時の時刻
      nowMs: 0, //スタートから0.001秒ごとの現在時刻
      elaspeMs: 0, //経過時間
      ms: 0, //ミリ秒
      s: 0, //秒
      m: 0, //分
      formatedMs: 0, //3桁表示にしたミリ秒
      formatedS: 0, //2桁表示にした秒
      formatedM: 0, //2桁表示にした分

      state: 'start', //ボタンの状態を保持する変数で初期値はstart
      stopTime: 0, //止めた時の時刻を入れる変数
    }
  }, 
  methods: {
    start() {
      if(this.state === 'start') {
      
        this.state = 'stop' //ボタンの状態をstopに変更
        this.startString = 'Stop' //ボタンの表示をstopに変更

        this.startMs = Date.now()
        this.startMs -= this.elaspeMs
        //１２時スタート１２：１０ストップ、経過時間は１０分
        //１２時ー１０分で１１：５０
        //再スタートすると、nowMsから引く時間が１０分減るので、
        //１０分増えた状態から再スタートできるという仕組み

        this.stopTime = setInterval(() => {

          this.nowMs = Date.now()
          this.elaspeMs =  this.nowMs - this.startMs

          this.ms = this.elaspeMs % 1000
          this.s = Math.floor(this.elaspeMs / 1000) % 60
          this.m = Math.floor(this.elaspeMs / 1000 / 60) % 60

          this.formatedMs = this.ms.toString().padStart(3, '0')
          this.formatedS = this.s.toString().padStart(2, '0')
          this.formatedM = this.m.toString().padStart(2, '0')

        }, 10);
      } else {
          this.state = 'start'
          clearInterval(this.stopTime) //setIntervalを止めて、その時の時刻を残す
      }

    },
    reset() {
     this.state = 'start'
     this.startString = 'Start'
     clearInterval(this.stopTime)
     this.elaspeMs = 0
     this.ms = 0
     this.formatedMs = this.ms.toString().padStart(3, '0')
     this.s = 0
     this.formatedS = this.s.toString().padStart(2, '0')
     this.m = 0
     this.formatedM = this.m.toString().padStart(2, '0')
    }
  }
}
</script>

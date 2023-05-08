<template>
  <div class="body">
    <div class="head">Fun keyboard</div>
    <div class="main-keybord">
      <div>
        <ul class="main-keybord-list">
          <li ref="Escape" @click="handleClick">Esc</li>
          <li class="main-keybord-list-item1"></li>
          <li ref="F1" @click="handleClick">F1</li>
          <li ref="F2" @click="handleClick">F2</li>
          <li ref="F3" @click="handleClick">F3</li>
          <li ref="F4" @click="handleClick">F4</li>
          <li class="main-keybord-list-item2"></li>
          <li ref="F5" @click="handleClick">F5</li>
          <li ref="F6" @click="handleClick">F6</li>
          <li ref="F7" @click="handleClick">F7</li>
          <li ref="F8" @click="handleClick">F8</li>
          <li class="main-keybord-list-item2"></li>
          <li ref="F9" @click="handleClick">F9</li>
          <li ref="F10" @click="handleClick">F10</li>
          <li ref="F11" @click="handleClick">F11</li>
          <li class="toright" ref="F12" @click="handleClick">F12</li>
          <li id="main-keybord-list-item3" @click="handleClick">PrtScSysrq</li>
          <li id="main-keybord-list-item3" @click="handleClick">ScrollLock</li>
          <li id="main-keybord-list-item3" class="toright" @click="handleClick">PauseBreak</li>
          <li class="op">.</li>
          <li class="op">.</li>
          <li class="op">.</li>
        </ul>
      </div>
      <div>
        <ul class="main-keybord-list list2">
          <li ref="`" class="main-keybord-list1-item1"><span>~</span><span>`</span></li>
          <li ref="1" class="main-keybord-list1-item1"><span>!</span><span>1</span></li>
          <li ref="2" class="main-keybord-list1-item1"><span>@</span><span>2</span></li>
          <li ref="3" class="main-keybord-list1-item1"><span>#</span><span>3</span></li>
          <li ref="4" class="main-keybord-list1-item1"><span>$</span><span>4</span></li>
          <li ref="5" class="main-keybord-list1-item1"><span>%</span><span>5</span></li>
          <li ref="6" class="main-keybord-list1-item1"><span>^</span><span>6</span></li>
          <li ref="7" class="main-keybord-list1-item1"><span>&</span><span>7</span></li>
          <li ref="8" class="main-keybord-list1-item1"><span>*</span><span>8</span></li>
          <li ref="9" class="main-keybord-list1-item1"><span>(</span><span>9</span></li>
          <li ref="0" class="main-keybord-list1-item1"><span>)</span><span>0</span></li>
          <li ref="-" class="main-keybord-list1-item1"><span>-</span><span>_</span></li>
          <li ref="=" class="main-keybord-list1-item1"><span>+</span><span>=</span></li>
          <li ref="Backspace" class="main-keybord-list1-item2 toright">
            <svg t="1682942663096" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="13384" width="40" height="40">
              <path
                  d="M1017.28884579 534.09109115l-662.73273745 1e-8L354.55610835 472.72694864 1017.28884579 472.72694864l-2e-8 61.36414251z"
                  fill="#515151" p-id="13385"></path>
              <path d="M358.28692148 717.71907109L1.43220042 508.13772668l356.85472106-215.24570478 0 424.82704919z"
                    fill="#515151" p-id="13386"></path>
            </svg>
          </li>
          <li id="main-keybord-list2-item3" ref="insert" style="line-height: 40px">Insert</li>
          <li id="main-keybord-list2-item3" ref="home" style="line-height: 40px">Home</li>
          <li id="main-keybord-list2-item3" ref="pageup" class="toright">PageUp</li>
          <li id="main-keybord-list2-item3" ref="numlock">NumLock</li>
          <li>/</li>
          <li>*</li>
          <li>-</li>

        </ul>
      </div>
      <div>
        <ul class="main-keybord-list position">
          <li ref="Tab" class="main-keybord-list3-item1">tab</li>
          <li ref="q">Q</li>
          <li ref="w">W</li>
          <li ref="e">E</li>
          <li ref="r">R</li>
          <li ref="t">T</li>
          <li ref="y">Y</li>
          <li ref="u">U</li>
          <li ref="i">I</li>
          <li ref="o">O</li>
          <li ref="p">P</li>
          <li class="main-keybord-list1-item1" ref="["><span>{</span><span>[</span></li>
          <li class="main-keybord-list1-item1" ref="]"><span>}</span><span>]</span></li>
          <li class="main-keybord-list1-item1 toright" ref="\"><span>|</span><span>\</span></li>


          <li id="main-keybord-list2-item3" ref="Delete">Delete</li>
          <li id="main-keybord-list2-item3" style="line-height: 40px">End</li>
          <li id="main-keybord-list2-item3" class="toright">PageDown</li>
          <li class="SetFontSize main-keybord-list1-item1"><span>7</span><span>Home</span></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>8</span><span><svg t="1682942068167" class="icon"
                                                                                    viewBox="0 0 1024 1024"
                                                                                    version="1.1"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    p-id="2806" width="20"
                                                                                    height="20"><path
              d="M484.79497576 929.30892267l0-573.37869588L537.8855959 355.93022679 537.88559591 929.30892267l-53.09062015-1e-8z"
              fill="" p-id="2807"></path><path
              d="M325.92494307 349.78302687L507.24913481 41.04183601l186.22484524 308.74119086-367.54903697 0z"
              fill="" p-id="2808"></path></svg></span></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>9</span><span>PaUp</span></li>
          <li class="plus">+</li>
        </ul>
      </div>
      <div>
        <ul class="main-keybord-list">
          <li ref="CapsLock" class="main-keybord-list4-item1">Caps Lock</li>
          <li ref="a">A</li>
          <li ref="s">S</li>
          <li ref="d">D</li>
          <!--          <li ref="e">E</li>-->
          <li ref="f">F</li>
          <li ref="g">G</li>
          <li ref="h">H</li>
          <li ref="j">J</li>
          <li ref="k">K</li>
          <li ref="l">L</li>
          <li class="main-keybord-list1-item1" ref=";"><span>:</span><span>;</span></li>
          <li class="main-keybord-list1-item1" ref="'"><span>"</span><span>'</span></li>
          <li class="toright main-keybord-list3-item2" ref="Enter">Enter</li>


          <li class="hidden">.</li>
          <li class="hidden">.</li>
          <li class="toright hidden">.</li>
          <li class="SetFontSize main-keybord-list1-item1"><span>4</span><span><svg t="1682942148858" class="icon"
                                                                                    viewBox="0 0 1024 1024"
                                                                                    version="1.1"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    p-id="2958" width="20"
                                                                                    height="20"><path
              d="M1017.28884579 534.09109115l-662.73273745 1e-8L354.55610835 472.72694864 1017.28884579 472.72694864l-2e-8 61.36414251z"
              fill="" p-id="2959"></path><path
              d="M358.28692148 717.71907109L1.43220042 508.13772668l356.85472106-215.24570478 0 424.82704919z"
              fill="" p-id="2960"></path></svg></span></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>5</span></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>6</span><span><svg t="1682942180702" class="icon"
                                                                                    viewBox="0 0 1024 1024"
                                                                                    version="1.1"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    p-id="3110" width="20"
                                                                                    height="20"><path
              d="M45.53714915 504.31464081l611.60394228 0L657.14109143 560.94463562 45.53714915 560.94463562l2e-8-56.62999481z"
              fill="" p-id="3111"></path><path
              d="M663.69810468 334.85327261L993.02204159 528.26574379l-329.32393691 198.63983493 0-392.05230611z"
              fill="" p-id="3112"></path></svg></span></li>
          <li>+</li>
        </ul>
      </div>
      <div>
        <ul class="main-keybord-list position">
          <li ref="Shift" class="main-keybord-list5-item1">Shift</li>
          <li ref="z">Z</li>
          <li ref="x">X</li>
          <li ref="c">C</li>
          <li ref="v">V</li>
          <li ref="b">B</li>
          <li ref="n">N</li>
          <li ref="m">M</li>
          <li class="main-keybord-list1-item1" ref=","><span><</span><span>,</span></li>
          <li class="main-keybord-list1-item1" ref="."><span>></span><span>.</span></li>
          <li class="main-keybord-list1-item1" ref="/"><span>?</span><span>/</span></li>
          <li class="main-keybord-list5-item1 toright" ref="Shift">Shift</li>

          <li class="hidden"></li>
          <li ref="ArrowUp">
            <svg t="1682942457786" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="11712" width="20" height="20">
              <path
                  d="M484.79497576 929.30892267l0-573.37869588L537.8855959 355.93022679 537.88559591 929.30892267l-53.09062015-1e-8z"
                  fill="#bfbfbf" p-id="11713"></path>
              <path d="M325.92494307 349.78302687L507.24913481 41.04183601l186.22484524 308.74119086-367.54903697 0z"
                    fill="#bfbfbf" p-id="11714"></path>
            </svg>
          </li>
          <li class="hidden toright"></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>|</span><span>End</span></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>2</span><span><svg t="1682942218707" class="icon"
                                                                                    viewBox="0 0 1024 1024"
                                                                                    version="1.1"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    p-id="3262" width="20"
                                                                                    height="20"><path
              d="M533.74591785 14.43962576l0 652.37753843L473.34059007 666.81716419 473.34059007 14.43962576l60.40532778 1e-8z"
              fill="" p-id="3263"></path><path
              d="M714.5047106 673.81131166L508.1980747 1025.0901777l-211.88249064-351.27886604 418.18912654 0z"
              fill="" p-id="3264"></path></svg></span></li>
          <li class="SetFontSize main-keybord-list1-item1"><span>3</span><span>PaDn</span></li>
          <li class="enter">Enter</li>
        </ul>
      </div>
      <div>
        <ul class="main-keybord-list">
          <li ref="Control">Ctrl</li>
          <li ref="Meta">win</li>
          <li ref="Alt">Alt</li>
          <li>Fn</li>
          <li ref=" " class="main-keybord-list6-item1"></li>
          <li ref="Alt">Alt</li>
          <li ref="Meta">win</li>
          <li>Fn</li>
          <li ref="Control" class="toright">Ctrl</li>
          <li ref="ArrowLeft">
            <svg t="1682942567252" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="12352" width="20" height="20">
              <path
                  d="M1017.28884579 534.09109115l-662.73273745 1e-8L354.55610835 472.72694864 1017.28884579 472.72694864l-2e-8 61.36414251z"
                  fill="#bfbfbf" p-id="12353"></path>
              <path d="M358.28692148 717.71907109L1.43220042 508.13772668l356.85472106-215.24570478 0 424.82704919z"
                    fill="#bfbfbf" p-id="12354"></path>
            </svg>
          </li>
          <li ref="ArrowDown">
            <svg t="1682942517892" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="11960" width="20" height="20">
              <path
                  d="M533.74591785 14.43962576l0 652.37753843L473.34059007 666.81716419 473.34059007 14.43962576l60.40532778 1e-8z"
                  fill="#bfbfbf" p-id="11961"></path>
              <path d="M714.5047106 673.81131166L508.1980747 1025.0901777l-211.88249064-351.27886604 418.18912654 0z"
                    fill="#bfbfbf" p-id="11962"></path>
            </svg>
          </li>
          <li class="toright" ref="ArrowRight">
            <svg t="1682942592233" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="12552" width="20" height="20">
              <path
                  d="M45.53714915 504.31464081l611.60394228 0L657.14109143 560.94463562 45.53714915 560.94463562l2e-8-56.62999481z"
                  fill="#bfbfbf" p-id="12553"></path>
              <path
                  d="M663.69810468 334.85327261L993.02204159 528.26574379l-329.32393691 198.63983493 0-392.05230611z"
                  fill="#bfbfbf" p-id="12554"></path>
            </svg>
          </li>
          <li class="width SetFontSize main-keybord-list1-item1"><span>0</span><span>lns</span></li>
          <li>.</li>
          <li>Enter</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Foot from "@/components/foot.vue";

export default {
  name: 'keybord',
  components: {Foot},
  mounted() {
    window.addEventListener("keydown", this.KeyDown, true)
  },
  methods: {
    handleClick(event) {
      const content = event.target;
      console.log(content)
      // console.log(`你点击了${content}标签`);
    },
    KeyDown(event) {
      const refsArray = Object.keys(this.$refs);
      refsArray.forEach(i => {
        if (i === event.key) {
          this.$refs[i].style.backgroundColor = "red"
          setTimeout(() => {
            this.$refs[i].style.backgroundColor = "#e8ecef"
          }, 1000)
        }

      })

    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul, li {
  list-style: none;
}

.body {
  width: 1200px;
//height: 100%;
  /*background-color: #ccc;*/
  margin: 50px auto;
}

.head {
  width: 60%;
  font-size: 30px;
  background-color: #ffffff;
  text-align: center;
  border: #dadada 1px solid;
  line-height: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 22px 5px #dadada inset;
  margin: 0 auto 30px;
}

.main-keybord {
  padding: 10px;
  border-radius: 26px;
  background-color: #e8ecef;
  border: 2px solid #c1c2c5;
  box-shadow: 0 0 5px 1px #c1c2c5 inset;
}

.main-keybord-list {
  display: flex;
  justify-content: left;
}

.main-keybord ul {
  margin: 10px;
}

.main-keybord-list li {
  width: 40px;
  height: 40px;
  color: #847f78;
  margin-right: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  background-color: #e8ecef;
  box-shadow: #c6c7cb 6px 6px 6px 1px, #ffffff -6px -6px 6px -1px;
  border: #eaedef solid 1px;
}

.main-keybord-list li:hover {
  cursor: pointer;
}

.main-keybord-list-item1 {
  width: 25px !important;
  visibility: hidden;
  /*display: none;*/
}

.main-keybord-list-item2 {
  width: 20px !important;
  visibility: hidden;
}

.hidden {
  visibility: hidden;
}

.op {
  width: 56px !important;
}

#main-keybord-list-item3 {
  word-break: break-word;
  width: 40px;
  height: 40px;
  font-size: 14px;
  line-height: 22px;
}

.main-keybord-list1-item1 {
  /*padding: 5px !important;*/
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-keybord-list1-item1 span {
  width: 40px;
  height: 20px;
  align-items: center;
  line-height: 20px;
}

.main-keybord-list1-item2 {
  width: 88px !important;
}

.toright {
  margin-right: 20px !important;
}

#main-keybord-list2-item3 {
  word-break: break-word;
  width: 40px;
  height: 40px;
  font-size: 14px;
  line-height: 19px;
}

.main-keybord-list3-item1 {
  width: 85px !important;
}

.main-keybord-list3-item2 {
  width: 90px !important;
}

.SetFontSize {
  font-size: 10px;
  line-height: 10px;
}

.main-keybord-list4-item1 {
  width: 88px !important;
}

.main-keybord-list5-item1 {
  width: 115px !important;
}

.main-keybord-list6-item1 {
  width: 345px !important;
}

.width {
  width: 91px !important;
}


.enter {

  height: 40px !important;
}

.plus {

  height: 40px !important;
}

</style>

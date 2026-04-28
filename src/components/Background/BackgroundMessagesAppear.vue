<template>
  <div ref="text-panel" class="absolute w-full h-full inset-0 text-appear">
    <TransitionGroup name="fade">
      <div
        v-for="message in activeMessages" :key="message.key"
        v-memo="message.key"
        class="absolute"
        :class="message.cssClass"
        :style="{
          left: message.position.x + 'px',
          top: message.position.y + 'px'
        }" 
        v-html="message.label"
      />
      </TransitionGroup>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  maxActiveMessages?: number,
  interval?: number,
  padding?: number,
  gap?: number
}>(), {
  maxActiveMessages: 3,
  interval: 2000,
  padding: 64,
  gap: 32
});

const effects: string[] = [
  'effect-class-1',
  'effect-class-2',
  'effect-class-3',
  'effect-class-4',
  'effect-class-5',
  'effect-class-6'
]
const fonts: string[] = [
  "font-1",
  "font-2",
  "font-3",
]
class Position {
  x: number = 0;
  y: number = 0;
}
class Message {
  key: number;
  label: string;
  cssClass: string;
  position: Position;
  opacity: number = 0;
  constructor(key: number, label: string, cssClass: string, position: Position) {
    this.key = key;
    this.label = label;
    this.cssClass = cssClass;
    this.position = position
  }
};
const labels: string[] = [
  'Onism',        // suffering from being in one place at a time, experiencing few things
  'Wifty',        // someone who often forgets, losses things
  'Laconic',      // someone who says few words
  'Noceur',       // someone who often stays up late
  'Dendrophile',  // to like forest/trees
  'Viridity',     // naive/innocent
  'Delucent'      // sweet, soothing (especially sound)
];

const activeMessages = ref<Message[]>([]);
const wordPanel = useTemplateRef("text-panel") as Ref<HTMLDivElement>;
let activeIndex = 0;
let activeKey = 0;
let itervalCreateID: number;

function isPositionOverlapping(position: Position): boolean {
  activeMessages.value.forEach((message: Message) => {
    if ((position.x < (message.position.x + props.gap)) && ((message.position.x - props.gap) < position.x)){
      if ((position.y < (message.position.y + props.gap)) && ((message.position.y - props.gap) < position.y)) {
        return true;
      }
    }
  })
  return false;
}
function randomPosition(): Position {
  const position: Position = new Position();
  const maxPositionRandomization = 10;
  let randommed = 0;
  do {
    position.x = props.padding + Math.floor(Math.random() * (wordPanel.value?.clientWidth - props.padding*2));
    position.y = props.padding + Math.floor(Math.random() * (wordPanel.value?.clientHeight - props.padding*2));
    ++randommed;
  } while(isPositionOverlapping(position) && randommed < maxPositionRandomization);
  return position;
}
function randomStringFromArray(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)]!;
}

function randomMessage(key: number = 0): Message {
  const randommedMessage = new Message(
    key,
    randomStringFromArray(labels),
    randomStringFromArray(effects) + ' ' + randomStringFromArray(fonts),
    randomPosition()
  );
  return randommedMessage;
}

function activateNewMessage() {
  if(activeMessages.value.length >= activeIndex+1){
    activeMessages.value[activeIndex] = randomMessage(activeKey);
  }else{
    activeMessages.value.push(randomMessage(activeKey));
  }
  activeIndex = (activeIndex + 1) % props.maxActiveMessages;
  activeKey = (activeKey + 1) % (props.maxActiveMessages*2);
}

onMounted(() => {
  itervalCreateID = window.setInterval(activateNewMessage, props.interval);
})
onUnmounted(() => {
  window.clearInterval(itervalCreateID);
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barriecito&family=Metamorphous&family=Wallpoet&display=swap');
</style>

<style scoped>
.text-appear {
  font-size: 2rem;
  font-weight: 600;
  font-family: Comic sans-serif, system-ui;
}

.effect-class-1 {
  animation: lightSpeedInRight 1s linear;
}
.effect-class-2 {
  animation: flipInX 1s linear;
}
.effect-class-3 {
  animation: jackInTheBox 1s linear;
}
.effect-class-4 {
  animation: rotateIn 1s linear;
}
.effect-class-5 {
  animation: fadeInUp 1s linear;
}
.effect-class-6 {
  animation: zoomInDown 1s linear;
}
.font-1 {
  font-family: "Metamorphous", system-ui;
}
.font-2 {
  font-family: "Wallpoet", system-ui;
}
.font-3 {
  font-family: "Barriecito", system-ui;
}
</style>
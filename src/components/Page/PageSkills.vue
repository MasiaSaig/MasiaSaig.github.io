<template>
  <PageLayoutMiddle :active="active">
    <template #background>
      <Transition name="fade">
        <BackgroundBlinkingSquares v-if="active" />
      </Transition>
    </template>

    <WrapperText :active="active">
      <div class="grid grid-rows-1 md:grid-cols-3 grid-cols-5 gap-4 w-full">
        <div class="md:col-span-1 col-span-2 flex-1 flex flex-col justify-center">
          <ContentDecorator>
            <h1 class="title my-4">Skills</h1>
          </ContentDecorator>

          <p>
            I tried many different tools, programming languages and frameworks, 
            but decided not to include them here, since I do not feel comfortable using them, yet.
          </p>
          
          <h2 class="sub-title py-2 mt-4">
            Other Skills and Tools
          </h2>
          <div class="skills-side">
            <IconGit />
            <ImageDef src="/skills/linux.svg" />
            <ImageDef src="/skills/postgresql.svg" />
            <ImageDef src="/skills/qt.svg" />
            <!-- <ImageDef src="/skills/cmake.svg" /> -->
            <ImageDef src="/skills/sql.svg" />
          </div>
        </div>

        <div class="md:col-span-2 col-span-3 skills-main grid grid-rows-3 grid-cols-3">
          <div v-for="(skill, index) in mainSkills" :key="index">
            <ImageOverlay
              :alt="skill.label"
              :src="skill.src"
              class="animate__animated"
              :class="[
                active ? 'animate__fadeIn' : 'animate__fadeOut',
              ]"
              :style="active 
                ? `animation-delay: ${calculateAnimationDelay(index)}ms`
                : `animation-delay: ${calculateAnimationDelay(mainSkills.length - index, 0, 10)}ms`"
              :label="skill.label"
            />
          </div>
        </div>
      </div>
    </WrapperText>
  </PageLayoutMiddle>
</template>

<script setup lang="ts">
defineProps<{
  active: boolean
}>();

interface MainSkill {src: string, label: string};
const mainSkills: readonly MainSkill[] = [
  {src: "/skills/c.svg", label: "C"},
  {src: "/skills/cpp.svg", label: 'C++' },
  {src: "/skills/php.svg", label: 'PHP' },
  {src: "/skills/python.svg", label: 'Python' },
  {src: "/skills/html.svg", label: 'HTML' },
  {src: "/skills/javascript.svg", label: 'JavaScript' },
  {src: "/skills/css.svg", label: 'CSS' },
  {src: "/skills/typescript.svg", label: 'TypeScript' },
  {src: "/skills/vue.svg", label: 'Vue' }
]

const calculateAnimationDelay = (index: number, initialDelay: number = 50, diff: number = 120) : number => {
  // in miliseconds
  // const initialDelay: number = 200;
  const numberOfCols: number = 3;
  const numberOfRows: number = 3;
  // const diff: number = 150;

  const row: number = Math.floor(index / numberOfCols);
  const col: number = (index % numberOfRows);
  const even: boolean = (row % 2) === 0;

  const columnDelay: number = even ? col * diff : (numberOfCols - col - 1) * diff;
  const rowDelay: number = row * (numberOfCols) * diff;
  return initialDelay + columnDelay + rowDelay;
}
</script>

<style lang="scss" scoped>
.skills-side {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 44px;
    width: auto;
  }
  svg {
    height: 44px;
    width: auto;
  }
}

.skills-main{
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

// .carousel {
//   height: 80vh;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   *::-webkit-scrollbar {
//     display: none;
//   }

//   // Make top and bottom transparent gradient
//   -webkit-mask-image: linear-gradient(
//     to bottom,
//     transparent,
//     black 64px,
//     black calc(100% - 64px),
//     transparent
//   );
//   mask-image: linear-gradient(
//     to bottom,
//     transparent,
//     black 64px,
//     black calc(100% - 64px),
//     transparent
//   );

//   img {
//     width: 100%;
//   }
// }
</style>
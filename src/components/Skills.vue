<template>
  <div class="flex flex-col gap-4 w-full p-2 md:flex-row mb-8">
    <div class="flex flex-col justify-center w-full md:w-[40%]">
      <ContentDecorator>
        <Header label="Skills" />
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
        <ImageDef src="/skills/postgresql.svg" />
        <ImageDef src="/skills/qt.svg" />
        <ImageDef src="/skills/sql.svg" />
      </div>
    </div>

    <div class="flex-1 skills-main grid grid-rows-3 min-[400px]:grid-cols-3 min-[300px]:grid-cols-2 grid-cols-1">
      <div v-for="(skill, index) in mainSkills" :key="index" class="max-[400px]:hidden block">
        <ImageOverlay
          :alt="skill.label"
          :src="skill.src"
          data-aos="fade-in"
          data-aos-offset="150"
          :data-aos-delay="calculateAnimationDelay(index)"
          :label="skill.label"
        />
      </div>

      <div v-for="(skill, index) in mainSkills" :key="index" class="max-[400px]:block hidden">
        <ImageOverlay
          :alt="skill.label"
          :src="skill.src"
          class="skill-main"
          data-aos="fade-in"
          data-aos-offset="200"
          :data-aos-delay="index * 100"
          :label="skill.label"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MainSkill {src: string, label: string}

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

const calculateAnimationDelay = (index: number, initialDelay: number = 100, diff: number = 100) : number => {
  // in miliseconds
  const numberOfCols: number = 3;
  const numberOfRows: number = 3;
  // const diff: number = 150;

  const row: number = Math.floor(index / numberOfCols);
  const col: number = (index % numberOfRows);
  const even: boolean = (row % 2) === 0;

  const columnDelay: number = even ? col * diff : (numberOfCols - col - 1) * diff;
  // const rowDelay: number = row * (numberOfCols) * diff;
  return initialDelay + columnDelay;
}
</script>

<style lang="scss" scoped>
.skills-side {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  & > * {
    height: 36px;
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

.sub-title {
  font-size: 1.5rem;
  line-height: 1.25rem;
  font-weight: 600;
}
</style>
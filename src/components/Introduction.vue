<template>
  <div class="relative flex items-center overflow-hidden lg:h-[648px] px-2 py-16 min-[390px]:py-20 sm:py-25 min-[700px]:aspect-[1024/648]">
    <BackgroundDandelions :style="`bottom: ${dandelionsOffset}px`" />

    <ContentDecorator class="lg:w-[50%] w-full">
      
      <Header label="Maciej Müller" :article-name="articles[0]!.id" />
      <div class="flex gap-2 pb-[4px]">
        <ButtonLinkedin class="size-10 animate__animated animate__pulse animate__delay-2s animate_slow" />
        <ButtonGithub class="size-10 animate__animated animate__pulse animate__delay-2s animate_slow" />
      </div>

      <div class="lg:hidden image-shape"></div>
      <h2 class="introduction-content text-base antialiased pb-4 sm:text-[1.25rem]">
        Developer, IT and fantasy entusiast.<br>
        Engineer after graduating from AGH University of Science and Technology in Applied Computer Science.
      </h2>
    </ContentDecorator>
  </div>
</template>

<script setup lang="ts">
import { articles } from '@/composables/useArticlesArray';
const dandelionsOffset = ref<number>(0);

const scrollPosition = ref<number>(0);
const handleScroll = () => {
  dandelionsOffset.value = -(window.scrollY || window.pageYOffset) / 2;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

watch(scrollPosition, () => {
  console.log("Scroll position changed:", dandelionsOffset.value);
});
</script>

<style lang="scss" scoped>
.introduction-content {
  text-shadow: 0px 0px 4px var(--color-font-reverse);
}

.image-shape {
  float: right;
  /* aspect-ratio: 161 / 194;
  aspect-ratio: 1 / 1; */
  width: 46%;
  shape-outside: content-box;

  @media (max-width: 187px) {
    margin-top: 235px;
    height: 50px;
  }
  @media (min-width: 187px) and (max-width: 240px) {
    margin-top: 150px;
    height: 50px;
  }
  @media (min-width: 240px) and (max-width: 300px){
    margin-top: 100px;
    height: 50px;
  }
  @media (min-width: 300px) and (max-width: 315px){
    margin-top: 75px;
    height: 80px;
  }
  @media (min-width: 315px) and (max-width: 340px){
    margin-top: 65px;
    height: 80px;
  }
  @media (min-width: 340px) and (max-width: 390px){
    margin-top: 45px;
    height: 80px;
  }
  @media (min-width: 390px){
    margin-top: 40px;
    height: 80px;
  }
}
</style>
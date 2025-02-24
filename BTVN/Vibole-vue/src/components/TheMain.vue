<script setup>
    import Social from './MainPart/Social.vue';
    import PostContent from './MainPart/PostContent.vue';
    import ContentMain from './MainPart/ContentMain.vue';
    import Toc from './MainPart/Toc.vue';
</script>
<template>
    <main>
        <div class="top-section">
            <Social />
            <PostContent />
            <Toc />
        </div>
        <ContentMain />
    </main>
</template>
<style scoped>
main {
    padding: 40px 104px;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    width: 100%; 
    max-width: 1200px; 
    align-items: center;
}

.top-section {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    margin: 15px 0;
}
.mid-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 450px);
    max-width: 900px;
    margin: 40px auto;
    padding: 40px;
}


</style>
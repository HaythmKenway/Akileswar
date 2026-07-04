<script setup>
import { onMounted } from 'vue'

defineProps({
  badges: {
    type: Array,
    required: true,
  },
})

function loadEmbedScript() {
  if (document.querySelector('script[data-credly-embed]')) return
  const script = document.createElement('script')
  script.src = '//cdn.credly.com/assets/utilities/embed.js'
  script.async = true
  script.setAttribute('data-credly-embed', 'true')
  document.body.appendChild(script)
}

onMounted(() => {
  loadEmbedScript()
})
</script>

<template>
  <div class="credly-badges">
    <figure v-for="badge in badges" :key="badge.id" class="credly-badge">
      <div
        :data-iframe-width="badge.width || 150"
        :data-iframe-height="badge.height || 270"
        :data-share-badge-id="badge.id"
        data-share-badge-host="https://www.credly.com"
      ></div>
      <figcaption v-if="badge.label">{{ badge.label }}</figcaption>
    </figure>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  color: {
    type: Number,
    default: 0x0f6b4f,
  },
})

const canvasEl = ref(null)

let renderer, scene, camera, points, animationId
let pointerX = 0
let pointerY = 0
let targetRotationX = 0
let targetRotationY = 0

function onResize() {
  if (!renderer || !camera) return
  const { innerWidth, innerHeight } = window
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
}

function onPointerMove(event) {
  pointerX = (event.clientX / window.innerWidth) * 2 - 1
  pointerY = (event.clientY / window.innerHeight) * 2 - 1
}

function buildScene() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.z = 9

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const count = 340
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i += 1) {
    const radius = 6 + Math.random() * 5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6
    positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: props.color,
    size: 0.045,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.55,
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)
}

watch(
  () => props.color,
  (value) => {
    if (!points) return
    points.material.color.setHex(value)
    if (prefersReducedMotion) renderStaticFrame()
  }
)

function animate() {
  animationId = requestAnimationFrame(animate)
  if (!points) return

  targetRotationY += (pointerX * 0.3 - targetRotationY) * 0.02
  targetRotationX += (pointerY * 0.2 - targetRotationX) * 0.02

  points.rotation.y += 0.0009
  points.rotation.x = targetRotationX
  points.rotation.y += targetRotationY * 0.001

  renderer.render(scene, camera)
}

function renderStaticFrame() {
  renderer.render(scene, camera)
}

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

onMounted(() => {
  if (!canvasEl.value || typeof window === 'undefined') return
  buildScene()
  window.addEventListener('resize', onResize, { passive: true })

  if (prefersReducedMotion) {
    renderStaticFrame()
    return
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  animate()
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('pointermove', onPointerMove)
  points?.geometry.dispose()
  points?.material.dispose()
  renderer?.dispose()
})
</script>

<template>
  <canvas ref="canvasEl" class="three-bg" aria-hidden="true"></canvas>
</template>

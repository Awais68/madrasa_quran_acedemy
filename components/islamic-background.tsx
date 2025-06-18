"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function IslamicBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Create stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 800
    const starsPositions = new Float32Array(starsCount * 3)

    for (let i = 0; i < starsCount * 3; i++) {
      starsPositions[i] = (Math.random() - 0.5) * 2000
    }

    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3))

    const starsMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 2,
      transparent: true,
      opacity: 0.6,
    })

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Create floating particles (representing Islamic geometric patterns)
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 50
    const particlesPositions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlesPositions[i] = (Math.random() - 0.5) * 1000
      particlesPositions[i + 1] = (Math.random() - 0.5) * 1000
      particlesPositions[i + 2] = (Math.random() - 0.5) * 1000
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPositions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x2563eb,
      size: 4,
      transparent: true,
      opacity: 0.3,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 500

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate stars slowly
      stars.rotation.x += 0.0005
      stars.rotation.y += 0.0005

      // Float particles
      particles.rotation.x += 0.001
      particles.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}

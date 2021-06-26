import { PhaserLogo } from '../objects/phaserLogo'

export class MainScene extends Phaser.Scene {
  private phaserLogo: PhaserLogo

  constructor() {
    super({ key: 'MainScene' })
  }

  preload(): void {
    this.load.image('phaserLogo', 'images/phaser3-logo.png')
    this.load.image('redParticle', 'images/red.png')
  }

  create(): void {
    const particles = this.add.particles('redParticle')

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD'
    })

    this.phaserLogo = new PhaserLogo({
      scene: this,
      x: 400,
      y: 300,
      texture: 'phaserLogo'
    })

    emitter.startFollow(this.phaserLogo)
  }
}

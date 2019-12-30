import { writable } from 'svelte/store';

export const spells = [
  {
    title: 'Light',
    kind: 'Utility',
    level: 0,
    casting: {
      time: 1,
      kind: 'Action',
    },
    components: {
      v: true,
      m: true,
      s: true,
    },
    description: `You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.`,

  },
  {
    title: 'Sacred Flame',
    kind: 'Attack',
    level: 0,
    casting: {
      time: 1,
      kind: 'Action',
    },
    components: {
      v: true,
      m: false,
      s: true,
    },
    description: `Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.

    The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`,

  }
];
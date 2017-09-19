import {byZone} from './EggFilter'

describe('byZone', () => {
  it('should give data only for expected zone', () => {
    const data = {
      "Pondry Hills": {
        "lowRankMonsters": [
          "Aptonoth"
        ],
        "highRankMonsters": [
          "Nargacuga"
        ]
      },
      "Darj Snowfields": {
        "lowRankMonsters": [
          "Popo"
        ],
        "highRankMonsters": [
          "Tigrex"
        ]
      }
    };
    const results = byZone("Pondry Hills", data);
    expect(results).toEqual(data["Pondry Hills"]);
  });
});
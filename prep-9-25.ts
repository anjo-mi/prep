/**
 * bowling game
 *  - real world bowling
 *  - 1-2 rolls per frame, if all 10 pins are knocked down on the first, not a second roll
 *    - if total pins
 *
 * X  X  X  00 5  6  7  8  9  10
 *
 *
 *
 * [5,10,9,1, 6 , 3  7 ,...     10,0,1]
 *
 *
 */

const bowling = (rolls: number[]): number => {
  const frames: number[][] = [];
  let frame: number[] = [];
  let pinsThisFrame = 0;
  let rollsThisFrame = 0;
  for (let i = 0; i < rolls.length; i++) {
    const pins = rolls[i];
    pinsThisFrame += pins;
    rollsThisFrame++;
    frame.push(pins);
    if (pinsThisFrame > 10) return -1;
    if (pinsThisFrame === 10 || rollsThisFrame === 2) {
      frames.push(frame);
      frame = [];
      pinsThisFrame = 0;
    }
  }
  return 0;
};

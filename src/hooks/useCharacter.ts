import { useState } from "react";
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../data/map.Spots";

export const useCharacter = () => {
  const [pos, setPos] = useState({ x: 3, y: 5 });
  const [side, setSide] = useState<CharacterSides>("down");

  const moveLeft = () => {
    if (canMove(pos.x - 1, pos.y))
      setPos((pos) => ({
        x: pos.x - 1,
        y: pos.y,
      }));
    setSide("left");
  };

  const moveRight = () => {
    if (canMove(pos.x + 1, pos.y))
      setPos((pos) => ({
        x: pos.x + 1,
        y: pos.y,
      }));
    setSide("right");
  };

  const moveDown = () => {
    if (canMove(pos.x, pos.y + 1))
      setPos((pos) => ({
        x: pos.x,
        y: pos.y + 1,
      }));
    setSide("down");
  };

  const moveUp = () => {
    if (canMove(pos.x, pos.y - 1))
      setPos((pos) => ({
        x: pos.x,
        y: pos.y - 1,
      }));
    setSide("up");
  };

  const canMove = (x: number, y: number) => {
    if (x < 0 || y < 0) return false;

    return true;
  };

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
};

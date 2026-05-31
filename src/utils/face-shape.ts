export type FaceShape =
  | "Oval"
  | "Round"
  | "Square"
  | "Heart"
  | "Diamond"
  | "Oblong";

export function detectFaceShape(
  landmarks: { x: number; y: number; z?: number }[]
): FaceShape {
  if (!landmarks || landmarks.length === 0) {
    return "Oval";
  }

  const foreheadLeft = landmarks[54];
  const foreheadRight = landmarks[284];

  const jawLeft = landmarks[172];
  const jawRight = landmarks[397];

  const chin = landmarks[152];

  const foreheadCenter = landmarks[10];

  const faceWidth = distance(
    jawLeft.x,
    jawLeft.y,
    jawRight.x,
    jawRight.y
  );

  const faceHeight = distance(
    foreheadCenter.x,
    foreheadCenter.y,
    chin.x,
    chin.y
  );

  const foreheadWidth = distance(
    foreheadLeft.x,
    foreheadLeft.y,
    foreheadRight.x,
    foreheadRight.y
  );

  const jawWidth = faceWidth;

  const ratio = faceHeight / faceWidth;

  if (ratio > 1.55) {
    return "Oblong";
  }

  if (
    foreheadWidth > jawWidth &&
    ratio < 1.5
  ) {
    return "Heart";
  }

  if (
    Math.abs(faceWidth - faceHeight) < 0.15
  ) {
    return "Round";
  }

  if (
    jawWidth > foreheadWidth &&
    ratio < 1.45
  ) {
    return "Square";
  }

  if (
    foreheadWidth < jawWidth &&
    ratio > 1.45
  ) {
    return "Diamond";
  }

  return "Oval";
}

function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  return Math.sqrt(
    Math.pow(x2 - x1, 2) +
      Math.pow(y2 - y1, 2)
  );
}
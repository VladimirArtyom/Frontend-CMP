import { RATING_SCALE } from '../config/rating';
import type { RatingCriteria } from '../types';

export const getTotalScore = (ratings: RatingCriteria[]): number =>
  ratings.reduce((sum, r) => sum + (r.value ?? 0), 0);

export const getMaxScore = (ratings: RatingCriteria[]): number =>
  ratings.length * Math.max(...RATING_SCALE.map((o) => o.value));

export const isRatingComplete = (ratings: RatingCriteria[]): boolean => ratings.every((r) => r.value !== null);

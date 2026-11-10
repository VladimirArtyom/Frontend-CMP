export type RatingValue = 2 | 4 | 6 | 8;

export interface GroupData  {
    name: string;
    className: string;
    number?: number;
}


export interface RatingCriteria{
    id: string;
    title: string;
    description: string;
    value: RatingValue | null;
}

export interface RatingScaleOption{
    label: string;
    value: RatingValue;
}

export const INITIAL_RATINGS: RatingCriteria[] = [
  { id: '1', title: 'Mitra Collaboration', description: 'Menjawab permasalahan mitra', value: null },
  { id: '2', title: 'Final Product', description: 'Berhasil menerapkan teknologi AI dan terkini', value: null },
  { id: '3', title: 'Final Report & Poster', description: 'Poster produk yang menarik dan profesional', value: null },
  { id: '4', title: 'Presentation', description: 'Video promosi/iklan produk yang menarik', value: null },
]
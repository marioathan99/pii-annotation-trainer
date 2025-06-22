
/**
 * Τύποι PII που χρησιμοποιούνται στην εφαρμογή
 */

// Τύποι PII: Άμεση, Ισχυρή έμμεση, Αδύναμη έμμεση
export type PIIType = 'direct' | 'strongIndirect' | 'weakIndirect';

// Θέματα PII για ομαδοποίηση
export type PIITopic =
  | 'contact'
  | 'governmentId'
  | 'age'
  | 'financial'
  | 'products'
  | 'vehicle'
  | 'records'
  | 'physical'
  | 'affiliation'
  | 'social';

// Κατηγορία PII με όλες τις πληροφορίες
export interface PIICategory {
  id: string;
  name: string;
  nameEn: string; // English name for SRT tool
  topic: PIITopic;
  type: PIIType;
  description: string;
  examples: string[];
  annotationRule: string;
  whenToTag: 'always' | 'depends';
}

// Παράδειγμα επισήμανσης
export interface AnnotationExample {
  id: string;
  text: string;
  annotations: Annotation[];
  explanation: string;
}

// Πληροφορίες επισήμανσης
export interface Annotation {
  text: string;
  category: string;
  start: number;
  end: number;
}

// Άσκηση επισήμανσης
export interface PracticeExercise {
  id: string;
  text: string;
  correctAnnotations: Annotation[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// Δεδομένα χρήστη για την άσκηση
export interface UserAnnotation extends Annotation {
  id: string;
}

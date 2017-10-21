/**
 * Interface for classes that represent a single item in the music collection.
 * @interface
 */
export interface Music {
  id: string;
  title: string;
  imageUrl?: string;
  composer?: string[];
  lyricist?: string[];
  artists: string[];
  recordingYear?: number;
  recordingDate?: string;
  cast?: string;
}

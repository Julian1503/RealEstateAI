/**
 * Props for the Hero component
 * Currently, this component doesn't require any props
 */
export interface HeroProps {
  // No props needed at this time
}

/**
 * Props for the HeroImage component
 */
export interface HeroImageProps {
  /**
   * Width of the image
   */
  width: number;
  
  /**
   * Height of the image
   */
  height: number;
  
  /**
   * CSS styles for the image
   */
  style: React.CSSProperties;
  
  /**
   * Source URL of the image
   */
  src: string;
  
  /**
   * Alt text for the image
   */
  alt: string;
}
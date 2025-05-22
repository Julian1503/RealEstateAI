/**
 * Property object structure
 */
export interface Property {
  /**
   * Unique identifier for the property
   */
  id: number;
  
  /**
   * Property address
   */
  address: string;
  
  /**
   * Property price (formatted as string, e.g. "$450,000")
   */
  price: string;
  
  /**
   * Current status of the property (e.g. "For Sale", "Just Listed", "Open House", "Sold")
   */
  status: string;
  
  /**
   * Number of bedrooms
   */
  beds: number;
  
  /**
   * Number of bathrooms
   */
  baths: number;
  
  /**
   * Square footage of the property
   */
  sqft: number;
  
  /**
   * Optional URL to the property image
   */
  image?: string;
}

/**
 * Props for the PropertyCard component
 */
export interface PropertyCardProps {
  /**
   * Property object to display in the card
   */
  property: Property;
}

/**
 * Status color mapping type
 */
export type StatusColor = 'primary' | 'error' | 'secondary' | 'success' | 'default';
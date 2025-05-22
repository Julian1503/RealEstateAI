import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ShareIcon from '@mui/icons-material/Share';
import RectangleIcon from '@mui/icons-material/Rectangle';
import EmailIcon from '@mui/icons-material/Email';
import ImageIcon from '@mui/icons-material/Image';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { SectionContainer } from "@components/core/Container/SectionContainer";
import { SectionHeading } from "@components/core/Container/SectionHeading";
import { FeaturesSectionProps, FeatureItem } from './FeatureSection.types';
import { FeatureGrid } from './FeatureGrid';

/**
 * FeaturesSection component - displays a section with feature cards
 */
export const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  // Feature data
  const FEATURE_DATA: FeatureItem[] = [
    {
      id: "feature-card-1",
      icon: <CreateIcon />,
      title: "Property Descriptions",
      description: "Generate compelling, SEO-optimized property descriptions based on features, location, and target audience."
    },
    {
      id: "feature-card-2",
      icon: <ShareIcon />,
      title: "Social Media Content",
      description: "Create engaging posts for various platforms with captions that drive engagement and interest."
    },
    {
      id: "feature-card-3",
      icon: <RectangleIcon />,
      title: "Marketing Flyers",
      description: "Design professional flyers and brochures with customizable templates and AI-generated copy."
    },
    {
      id: "feature-card-4",
      icon: <EmailIcon />,
      title: "Email Campaigns",
      description: "Craft personalized email templates for client outreach, follow-ups, and nurturing campaigns."
    },
    {
      id: "feature-card-5",
      icon: <ImageIcon />,
      title: "Image Enhancement",
      description: "Enhance property photos, remove unwanted objects, and create virtual staging to showcase properties."
    },
    {
      id: "feature-card-6",
      icon: <ShowChartIcon />,
      title: "Performance Analytics",
      description: "Track content performance, engagement metrics, and optimize your marketing strategy with AI insights."
    }
  ];

  return (
    <SectionContainer
      id="features-section"
      bgcolor="background.default"
    >
      <SectionHeading
        title="Powerful AI Features"
        subtitle="Our AI-powered platform offers everything you need to create professional real estate content quickly and efficiently."
      />

      <FeatureGrid features={FEATURE_DATA} />
    </SectionContainer>
  );
};
import React from 'react';
import { SectionContainer } from '@core/Container/SectionContainer';
import { SectionHeading } from '@core/Container/SectionHeading';
import { SectionProps } from '@core/Container/Container.types';

export const Section: React.FC<SectionProps> = ({
                                                    id,
                                                    bgcolor,
                                                    maxWidth,
                                                    py,
                                                    px,
                                                    sx,
                                                    useContainer,
                                                    title,
                                                    subtitle,
                                                    heading = {},
                                                    children
                                                }) => {
    // Merge basic heading props with advanced customization
    const headingConfig = {
        title,
        subtitle,
        ...heading
    };

    const showHeading = headingConfig.title || headingConfig.subtitle;

    return (
        <SectionContainer
            id={id}
            bgcolor={bgcolor}
            maxWidth={maxWidth}
            py={py}
            px={px}
            sx={sx}
            useContainer={useContainer}
        >
            {showHeading && <SectionHeading {...headingConfig} />}
            {children}
        </SectionContainer>
    );
};
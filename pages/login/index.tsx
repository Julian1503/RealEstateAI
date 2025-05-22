'use client';

import React, {useState} from 'react';
import WandIcon from '@/components/core/Icons/WandIcon';
import BoltIcon from '@/components/core/Icons/BoltIcon';
import ChartLineIcon from '@/components/core/Icons/ChartLineIcon';
import {OnboardingModal} from "@components/features/auth/OnboardingModal";
import {AuthSidebar} from "@components/layout/auth/AuthSidebar";
import {AuthLayout} from "@components/layout/auth/AuthLayout";
import {LoginPanel} from "@components/features/auth/LoginPanel";


export default function Index() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add authentication logic here
        window.location.href = '/dashboard';
    };

    const handleGoogleSignIn = () => {
        // Add Google authentication logic here
        window.location.href = '/dashboard';
    };

    const handleCreateAccount = () => {
        // Handle account creation logic or navigation
        window.location.href = '/register';
    };

    // Contenido del panel izquierdo (formulario de login)
    const leftContent = (
        <LoginPanel onAuth={handleGoogleSignIn} onSubmit={handleSubmit}/>
    );

    // Contenido del panel derecho (beneficios)
    const rightContent = (
        <AuthSidebar
            title="Transform Your Real Estate Marketing"
            subtitle="Join thousands of real estate professionals who are using AI to create compelling content and close more deals."
            benefits={[
                { icon: <WandIcon sx={{width:"18px"}} />, text: "AI-powered content generation" },
                { icon: <BoltIcon sx={{width:"18px"}} />, text: "Instant property descriptions" },
                { icon: <ChartLineIcon sx={{width:"18px"}} />, text: "Marketing analytics & insights" }
            ]}
            callToAction={{
                text: "Don't have an account?",
                buttonText: "Create Account",
                onClick: handleCreateAccount
            }}
        />
    );

    return (
        <>
            <AuthLayout
                leftContent={leftContent}
                rightContent={rightContent}
            />
            <OnboardingModal open={showModal} onClose={() => setShowModal(false)} />
        </>
    );
}
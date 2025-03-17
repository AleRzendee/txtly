import AuthForm from "../components/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Txt.ly ! Login",
    description: "Edite e formate textos de forma simples e moderna",
    icons: {
        icon: '/images/002-txtly_logo.png',
    }
};


export default function LoginPage() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-900">
            <AuthForm type="login" />
        </div>
    );
}

import AuthForm from "@/app/components/AuthForm";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-950">
            <AuthForm type="login" />
        </div>
    );
}

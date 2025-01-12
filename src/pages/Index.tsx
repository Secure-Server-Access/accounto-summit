import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-chase-gray">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <img
            src="/placeholder.svg"
            alt="Chase Logo"
            className="h-12 mb-8"
          />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
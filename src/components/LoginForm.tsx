import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      toast({
        title: "Login successful",
        description: "Redirecting to your account...",
      });
      setTimeout(() => navigate("/dashboard"), 1500);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter both username and password",
      });
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-chase-navy">Sign in</h1>
          <p className="text-sm text-gray-500">Access your accounts securely</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full bg-chase-blue hover:bg-chase-navy">
          Sign in
        </Button>

        <div className="text-center space-y-2">
          <a href="#" className="text-sm text-chase-blue hover:underline block">
            Forgot username/password?
          </a>
          <a href="#" className="text-sm text-chase-blue hover:underline block">
            Create an account
          </a>
        </div>
      </form>
    </div>
  );
};
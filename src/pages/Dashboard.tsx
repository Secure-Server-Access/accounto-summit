import { AccountCard } from "@/components/AccountCard";

const mockData = {
  checking: {
    type: "Checking Account",
    accountNumber: "4321",
    balance: 5234.67,
    transactions: [
      {
        id: 1,
        date: "2024-03-20",
        description: "Direct Deposit - Employer",
        amount: 2500.00,
        type: "credit"
      },
      {
        id: 2,
        date: "2024-03-19",
        description: "Amazon.com",
        amount: 54.99,
        type: "debit"
      },
      {
        id: 3,
        date: "2024-03-18",
        description: "Grocery Store",
        amount: 127.35,
        type: "debit"
      }
    ]
  },
  savings: {
    type: "Savings Account",
    accountNumber: "8765",
    balance: 12750.42,
    transactions: [
      {
        id: 1,
        date: "2024-03-15",
        description: "Transfer from Checking",
        amount: 1000.00,
        type: "credit"
      },
      {
        id: 2,
        date: "2024-03-01",
        description: "Interest Payment",
        amount: 12.50,
        type: "credit"
      }
    ]
  },
  credit: {
    type: "Credit Card",
    accountNumber: "9876",
    balance: 1234.56,
    transactions: [
      {
        id: 1,
        date: "2024-03-17",
        description: "Restaurant Payment",
        amount: 85.00,
        type: "debit"
      },
      {
        id: 2,
        date: "2024-03-16",
        description: "Gas Station",
        amount: 45.00,
        type: "debit"
      },
      {
        id: 3,
        date: "2024-03-15",
        description: "Payment Thank You",
        amount: 500.00,
        type: "credit"
      }
    ]
  }
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-chase-gray">
      <header className="bg-chase-navy text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <img
              src="/placeholder.svg"
              alt="Chase Logo"
              className="h-8"
            />
            <button className="text-sm hover:underline">Sign Out</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-chase-navy mb-8">Account Summary</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AccountCard {...mockData.checking} />
          <AccountCard {...mockData.savings} />
          <AccountCard {...mockData.credit} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
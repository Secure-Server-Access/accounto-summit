import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
}

interface AccountCardProps {
  type: string;
  accountNumber: string;
  balance: number;
  transactions: Transaction[];
}

export const AccountCard = ({
  type,
  accountNumber,
  balance,
  transactions,
}: AccountCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{type}</span>
          <span className="text-2xl font-bold">{formatCurrency(balance)}</span>
        </CardTitle>
        <p className="text-sm text-gray-500">Account ending in {accountNumber}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="font-semibold">Recent Transactions</h3>
          <div className="space-y-2">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex justify-between items-center py-2 border-b"
              >
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <span
                  className={`font-semibold ${
                    transaction.type === "credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.type === "credit" ? "+" : "-"}
                  {formatCurrency(transaction.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { LayoutDashboard, Package, Settings, ShoppingBag, Store, Menu, DollarSign, ClipboardList } from "lucide-react";

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const overview = {
    totalProducts: 50,
    pendingOrders: 5,
    dailyOrders: 10,
    dailyEarnings: 15000,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <CardContent>
                <h2 className="text-gray-700 text-lg font-semibold">Daily Earnings</h2>
                <p className="text-2xl font-bold text-primary">₦{overview.dailyEarnings}</p>
              </CardContent>
              <DollarSign className="w-8 h-8 text-primary" />
            </Card>
            <Card className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <CardContent>
                <h2 className="text-gray-700 text-lg font-semibold">Daily Orders</h2>
                <p className="text-2xl font-bold text-primary">{overview.dailyOrders}</p>
              </CardContent>
              <ClipboardList className="w-8 h-8 text-primary" />
            </Card>
            <Card className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <CardContent>
                <h2 className="text-gray-700 text-lg font-semibold">Total Products</h2>
                <p className="text-2xl font-bold text-primary">{overview.totalProducts}</p>
              </CardContent>
              <Package className="w-8 h-8 text-primary" />
            </Card>
            <Card className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <CardContent>
                <h2 className="text-gray-700 text-lg font-semibold">Pending Orders</h2>
                <p className="text-2xl font-bold text-primary">{overview.pendingOrders}</p>
              </CardContent>
              <ShoppingBag className="w-8 h-8 text-primary" />
            </Card>
          </div>
        );
      case "orders":
        return <div>Orders Section</div>;
      case "products":
        return <div>Products Section</div>;
      case "shop":
        return <div>Shop Section</div>;
      case "settings":
        return <div>Settings Section</div>;
      default:
        return <div>Dashboard</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-md p-4 transition-all duration-300 border-r border-gray-200 ${isSidebarOpen ? "w-64" : "w-16"}`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-4 text-gray-600">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex flex-col gap-4">
          <Button variant="ghost" onClick={() => setActiveTab("dashboard")} className="flex items-center gap-2 text-gray-700">
            <LayoutDashboard /> {isSidebarOpen && "Dashboard"}
          </Button>
          <Button variant="ghost" onClick={() => setActiveTab("orders")} className="flex items-center gap-2 text-gray-700">
            <ShoppingBag /> {isSidebarOpen && "Orders"}
          </Button>
          <Button variant="ghost" onClick={() => setActiveTab("products")} className="flex items-center gap-2 text-gray-700">
            <Package /> {isSidebarOpen && "Products"}
          </Button>
          <Button variant="ghost" onClick={() => setActiveTab("shop")} className="flex items-center gap-2 text-gray-700">
            <Store /> {isSidebarOpen && "Shop"}
          </Button>
          <Button variant="ghost" onClick={() => setActiveTab("settings")} className="flex items-center gap-2 text-gray-700">
            <Settings /> {isSidebarOpen && "Settings"}
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default VendorDashboard;

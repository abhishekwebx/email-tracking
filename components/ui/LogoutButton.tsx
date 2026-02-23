"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      {/* Logout Button */}
      <Button
        className="mt-6 cursor-pointer"
        variant="destructive"
        onClick={() => setShowConfirm(true)}
      >
        Logout
      </Button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[320px] space-y-4">
            <h2 className="text-lg font-semibold">Confirm Logout</h2>

            <p className="text-sm text-muted-foreground">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>

              <Button
                variant="destructive"
                className="cursor-pointer"
                onClick={() => {
                  setShowConfirm(false);
                  handleLogout();
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

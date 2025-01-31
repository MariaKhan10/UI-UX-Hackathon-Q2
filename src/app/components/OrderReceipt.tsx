import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";


interface OrderReceiptProps {
  orderPlaced: boolean;
  cartItems: { name: string; price: number; quantity: number }[];
  formValues: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address1: string;
    city: string;
    country: string;
  };
  selectedPaymentMethod: string;
  bankDetails?: { bankName: string; accountName: string; accountNumber: string };
  cartSubtotal: number;
  shippingCharge: number;
  totalAmount: number;
}

const OrderReceipt: React.FC<OrderReceiptProps> = ({
  orderPlaced,
  cartItems,
  formValues,
  selectedPaymentMethod,
  bankDetails,
  cartSubtotal,
  shippingCharge,
  totalAmount,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  if (orderPlaced) {
    setIsModalOpen(true);
   
  }
}, [orderPlaced]);

 



const generatePDF = () => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("ORDER RECEIPT", 105, 15, { align: "center" });

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  let yPosition = 30;

  // Customer Details
  doc.setFont("helvetica", "bold");
  doc.text("Customer Details :", 10, yPosition);
  doc.line(10, yPosition + 1, 50, yPosition + 1); // Underline
  doc.setFont("helvetica", "normal");
  yPosition += 7;
  doc.text(`Name: ${formValues.firstName} ${formValues.lastName}`, 10, yPosition);
  yPosition += 7;
  doc.text(`Email: ${formValues.email}`, 10, yPosition);
  yPosition += 7;
  doc.text(`Phone: ${formValues.phoneNumber}`, 10, yPosition);
  yPosition += 7;
  doc.text(`Address: ${formValues.address1}, ${formValues.city}, ${formValues.country}`, 10, yPosition);
  yPosition += 12;

  // Payment Information
  doc.setFont("helvetica", "bold");
  doc.text("Payment Information :", 10, yPosition);
  doc.line(10, yPosition + 1, 60, yPosition + 1); // Underline
  doc.setFont("helvetica", "normal");
  yPosition += 7;
  const paymentMethodText = selectedPaymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer";
  doc.text(`Payment Method: ${paymentMethodText}`, 10, yPosition);
  yPosition += 10;

  if (selectedPaymentMethod === "bankTransfer" && bankDetails) {
    doc.text(`Bank Name: ${bankDetails.bankName}`, 10, yPosition);
    yPosition += 7;
    doc.text(`Account Name: ${bankDetails.accountName}`, 10, yPosition);
    yPosition += 7;
    doc.text(`Account Number: ${bankDetails.accountNumber}`, 10, yPosition);
    yPosition += 12;
  }

  // Order Summary
  doc.setFont("helvetica", "bold");
  doc.text("Order Summary :", 10, yPosition);
  doc.line(10, yPosition + 1, 50, yPosition + 1); // Underline
  doc.setFont("helvetica", "normal");
  yPosition += 7;

  // Generate AutoTable
  autoTable(doc, {
    startY: yPosition,
    head: [["#", "Item Name", "Price", "Qty", "Total"]],
    body: cartItems.map((item, index) => [
      index + 1,
      item.name,
      `Rs. ${item.price}`,
      item.quantity,
      `Rs. ${(item.price * item.quantity).toFixed(2)}`
    ]),
    theme: "striped",
    styles: { fontSize: 10, cellPadding: 3 },
    headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] }
  });

  // Get Y position after the table
  const finalY = (doc as any).lastAutoTable.finalY + 10;

  doc.text(`Subtotal: Rs. ${cartSubtotal.toFixed(2)}`, 140, finalY);
  doc.text(`Shipping Charge: Rs. ${shippingCharge.toFixed(2)}`, 140, finalY + 7);
  doc.text(`Total Amount: Rs. ${totalAmount.toFixed(2)}`, 140, finalY + 14);

  doc.save("order_receipt.pdf");
};


  if (!orderPlaced) return null;

  return (
    <div className="max-w-2xl mx-auto">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative 
                          max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-7 right-2 text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-md font-bold mb-4 m-auto text-center underline text-[#51801c]">Your Order has been placed Successfully ✔</h2>
            <h2 className="text-2xl font-semibold mb-4">Order Receipt</h2>
            <p>
              <strong>Name:</strong> {formValues.firstName} {formValues.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formValues.email}
            </p>
            <p>
              <strong>Phone:</strong> {formValues.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong> {formValues.address1}, {formValues.city},{" "}
              {formValues.country}
            </p>
            <p>
              <strong>Payment Method:</strong>{" "}
              {selectedPaymentMethod === "cod"
                ? "Cash on Delivery"
                : "Bank Transfer"}
            </p>

            {selectedPaymentMethod === "bankTransfer" && bankDetails && (
              <div className="bg-gray-100 p-3 rounded-lg mt-2">
                <p>
                  <strong>Bank Name:</strong> {bankDetails.bankName}
                </p>
                <p>
                  <strong>Account Name:</strong> {bankDetails.accountName}
                </p>
                <p>
                  <strong>Account Number:</strong> {bankDetails.accountNumber}
                </p>
              </div>
            )}

            <h3 className="text-lg font-semibold mt-4">Items:</h3>
            <ul className="divide-y divide-gray-300">
              {cartItems.map((item, index) => (
                <li key={index} className="py-2 flex justify-between">
                  <span>
                    {item.name} - {item.quantity} x {item.price.toFixed(2)} Rupees
                  </span>
                  <span className="font-semibold">
                    {(item.price * item.quantity).toFixed(2)} Rupees
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p>
                <strong>Subtotal:</strong> {cartSubtotal.toFixed(2)} Rupees
              </p>
              <p>
                <strong>Shipping Charge:</strong> {shippingCharge.toFixed(2)} Rupees
              </p>
              <p className="text-lg font-bold">
                Total Amount: {totalAmount.toFixed(2)} Rupees
              </p>
            </div>

            <button
              onClick={generatePDF}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderReceipt;

// // DonationComponent.js
// import React, { useState } from "react";
// import DonationModal from "./DonationModal";

// const DonationComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleDonationInfoClick = () => {
//     // Toggle the state to show/hide the modal
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       <button onClick={handleDonationInfoClick}>
//         {isModalOpen ? "Hide" : "Show"} Donation Information
//       </button>

//       <DonationModal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default DonationComponent;

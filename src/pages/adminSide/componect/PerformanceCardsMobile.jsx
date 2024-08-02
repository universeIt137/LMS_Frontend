import PerformanceCardMobile from "./PerformanceCardMobile";

const PerformanceCardsMobile = () => {
  return (
    <div className="carousel md:hidden carousel-vertical rounded-box h-96 border border-red-700 w-full">
      <PerformanceCardMobile></PerformanceCardMobile>
      <PerformanceCardMobile></PerformanceCardMobile>
      <PerformanceCardMobile></PerformanceCardMobile>
      <PerformanceCardMobile></PerformanceCardMobile>
      <PerformanceCardMobile></PerformanceCardMobile>
      <PerformanceCardMobile></PerformanceCardMobile>
    </div>
  );
};

export default PerformanceCardsMobile;
import React, { useContext } from "react";
import { useParams } from "react-router";
import {
  FaRegBell,
  FaArchive,
  FaTrashAlt,
  FaRegCommentDots,
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TimeLineContext } from "../../context/TimeLineContext";

const FriendDetailsSection = ({ friends }) => {
  let { events, setEvents } = useContext(TimeLineContext);

  const { id } = useParams();
  const friend = friends?.find((f) => f.id.toString() === id);

  if (!friend) {
    return (
      <div className="text-center py-20 font-bold text-red-500">
        Friend not found!
      </div>
    );
  }

  // 2. Toast Handler Function :
  const handleCheckIn = (type) => {
    toast.success(`${type} with ${friend.name}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

    // Mapping Contract Icon :
    const iconMap = {
      Text: <FaRegCommentDots className="text-emerald-600" />,
      Call: <FaPhoneAlt className="text-emerald-600" />,
      Video: <FaVideo className="text-emerald-600" />,
    };

    const newEvent = {
      ...friend,
      contactType: type,
      icon: iconMap[type],
      timestamp: new Date().toLocaleDateString(),
    };

    setEvents([...events, newEvent]);
  };
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return "bg-red-500 text-white uppercase tracking-wider";
      case "upcoming":
      case "almost due":
        return "bg-amber-400 text-white uppercase tracking-wider";
      default:
        return "bg-emerald-500 text-white uppercase tracking-wider";
    }
  };

  return (
    <section className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto pt-3 md:pt-5 lg:pt-10 pb-10">
      <div className="w-full bg-white shadow-sm rounded-xl p-8 md:p-10 lg:p-13 font-sans text-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            {/* Left Column: Profile Card & Actions */}
            <div className="md:col-span-4 lg:col-span-3 space-y-3">
              <div className="bg-white p-5 md:p-4 lg:p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mb-3 border-4 border-white shadow-md">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="geist text-[15px] md:text-[16px] lg:text-[18px] font-bold text-[#1F2937]">
                  {friend.name}
                </h3>
                <p className="text-[13px] md:text-[11px] lg:text-[15px] text-gray-500 mb-2">
                  {friend.lastSeen}
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-1.5 mb-3">
                  {friend.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#D1FAE5] text-[#18644f] text-[9px] md:text-[8px] lg:text-[12px] font-bold px-2 py-1 rounded-full uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`text-[9px] md:text-[10px] lg:text-[11px] font-bold px-3 py-1 rounded-full shadow-sm ${getStatusStyles(friend.status)}`}
                >
                  {friend.status}
                </span>

                <p className="mt-3 text-gray-500 text-[11.7px] md:text-[12px] lg:text-[13px] font-medium px-2 py-1 rounded-full">
                  "{friend.bio}"
                </p>
                <p className=" text-gray-800 text-[11px] md:text-[11.5px] lg:text-[12px] font-medium px-2 py-1 rounded-full mb-1">
                  Email : {friend.email}
                </p>
              </div>

              {/* Action Buttons : */}
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-2.5 md:py-2 lg:py-3 rounded-lg text-sm md:text-[12px] lg:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                  <FaRegBell className="md:size-3 lg:size-4" />{" "}
                  <span className="md:hidden lg:inline">Snooze 2 Weeks</span>
                  <span className="hidden md:inline lg:hidden">Snooze</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-2.5 md:py-2 lg:py-3 rounded-lg text-sm md:text-[12px] lg:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                  <FaArchive className="md:size-3 lg:size-4" /> Archive
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-2.5 md:py-2 lg:py-3 rounded-lg text-sm md:text-[12px] lg:text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
                  <FaTrashAlt className="md:size-3 lg:size-4" /> Delete
                </button>
              </div>
            </div>

            {/* Right Column: Stats & Goals */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4 lg:y-6">
              {/* Stats Cards : */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 ">
                <div className="bg-white p-4 md:p-3 lg:p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col justify-center items-center min-h-25 md:min-h-30">
                  <p className="text-xl md:text-[22px] lg:text-[27px] font-bold text-slate-800 leading-tight">
                    {friend.days_since_contact || "N/A"}
                  </p>
                  <p className="text-[11px] md:text-[11px] lg:text-[14px] text-slate-400 mt-1 uppercase font-medium">
                    Days Since Contact
                  </p>
                </div>
                <div className="bg-white p-4 md:p-3 lg:p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col justify-center items-center min-h-25 md:min-h-30">
                  <p className="text-xl md:text-[22px] lg:text-[27px] font-bold text-slate-800 leading-tight">
                    {friend.goal || "N/A"}
                  </p>
                  <p className="text-[11px] md:text-[11px] lg:text-[14px] text-slate-400 mt-1 uppercase font-medium">
                    Goal (Days)
                  </p>
                </div>

                <div className="bg-white p-4 md:p-3 lg:p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col justify-center items-center min-h-25 md:min-h-30">
                  <p className="text-xl md:text-[16px] lg:text-[25px] font-bold text-emerald-900 leading-tight">
                    {friend.next_due_date || "N/A"}
                  </p>
                  <p className="text-[11px] md:text-[11px] lg:text-[14px] text-slate-400 mt-1 uppercase font-medium">
                    Next Due
                  </p>
                </div>
              </div>

              {/* Goal Section */}
              <div className="bg-white p-4 md:p-4 lg:p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-md md:text-sm lg:text-lg font-bold text-emerald-800">
                    Relationship Goal
                  </h3>
                  <button className="bg-slate-50 px-2 py-1 rounded text-slate-500 text-[9.5px] md:text-[11px] lg:text-[12px] font-bold uppercase border border-slate-200 hover:bg-black hover:text-white cursor-pointer">
                    Edit
                  </button>
                </div>
                <p className="text-slate-600 text-sm md:text-xs lg:text-base">
                  Connect every{" "}
                  <span className="font-bold text-slate-900">
                    {friend.goal || "N/A"} days
                  </span>
                </p>
              </div>

              <ToastContainer />
              {/* Check-In Section */}
              <div className="bg-white p-4 md:p-4 lg:p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="text-md md:text-sm lg:text-lg font-bold text-emerald-800 mb-4">
                  Quick Check-In
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* 4. Click handlers added below */}
                  <button
                    onClick={() => handleCheckIn("Text")}
                    className="flex flex-col items-center py-4 md:py-3 lg:py-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-emerald-50 transition-all group cursor-pointer"
                  >
                    <FaRegCommentDots className="text-slate-600 group-hover:text-emerald-600 md:size-5 lg:size-6" />
                    <span className="text-xs md:text-[11px] lg:text-sm font-semibold mt-2 ">
                      Text
                    </span>
                  </button>

                  <button
                    onClick={() => handleCheckIn("Call")}
                    className="flex flex-col items-center py-4 md:py-3 lg:py-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-emerald-50 transition-all group cursor-pointer"
                  >
                    <FaPhoneAlt className="text-slate-600 group-hover:text-emerald-600 md:size-4 lg:size-5" />
                    <span className="text-xs md:text-[11px] lg:text-sm font-semibold mt-2">
                      Call
                    </span>
                  </button>

                  <button
                    onClick={() => handleCheckIn("Video")}
                    className="flex flex-col items-center py-4 md:py-3 lg:py-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-emerald-50 transition-all group cursor-pointer"
                  >
                    <FaVideo className="text-slate-600 group-hover:text-emerald-600 md:size-4 lg:size-5" />
                    <span className="text-xs md:text-[11px] lg:text-sm font-semibold mt-2">
                      Video
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetailsSection;

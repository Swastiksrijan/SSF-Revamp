const teamMembers = [
  { name: "Name", position: "Position", img: "https://i.pravatar.cc/300?img=1" },
  { name: "Name", position: "Position", img: "https://i.pravatar.cc/300?img=2" },
  { name: "Name", position: "Position", img: "https://i.pravatar.cc/300?img=3" },
  { name: "Name", position: "Position", img: "https://i.pravatar.cc/300?img=4" },
  { name: "Name", position: "Position", img: "https://i.pravatar.cc/300?img=5" },
  { name: "Name", position: "Position", img: "https://i.pravatar.cc/300?img=7" },
  { name: "Name", position: "Position", img: "https://i.pravatar.cc" },
];

export default function TeamSection() {
  const loopMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="bg-gray-100 py-4 ">
      <div className="w-full min-h-[70vh] flex items-center justify-center relative">
        <div className="flex gap-1 md:gap-6 animate-scrollX hover:[animation-play-state:paused]">

          {loopMembers.map((member, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center transition-all duration-300
                ${idx % 2 === 0 ? "translate-y-20" : "-translate-y-20"}`}
            >
              <div className="w-30 border h-30 md:w-52 md:h-52 rounded-full overflow-hidden  ">
                <img src={member.img} className="w-full h-full object-cover" />
              </div>

              <h3 className="font-semibold text-lg mt-3">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.position}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

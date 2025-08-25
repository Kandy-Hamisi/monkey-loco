import React from "react";
import { Crown, Trophy, Award } from "lucide-react";

const RankIcon = ({ rank }: { rank: number }) => {
  const iconProps = { size: 20, className: "text-white" };

  switch (rank) {
    case 1:
      return <Crown {...iconProps} className="text-yellow-400" />;
    case 2:
      return <Trophy {...iconProps} className="text-gray-300" />;
    case 3:
      return <Award {...iconProps} className="text-amber-600" />;
    default:
      return null;
  }
};

type NomineeCardProps = {
  nominee: any;
  isWinner?: boolean;
};

const WinnerCard: React.FC<NomineeCardProps> = ({
  nominee,
  isWinner = false,
}) => {
  const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;
  const formatVotes = (votes: number) => votes.toLocaleString();

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        isWinner ? "col-span-full md:col-span-2" : "col-span-1"
      }`}
    >
      {/* Image Container */}
      <div className={`relative ${isWinner ? "h-80 md:h-96" : "h-64 md:h-72"}`}>
        <img
          src={nominee.post.imageUrl}
          alt={`${nominee.user.displayName}'s outfit`}
          className="w-full h-full object-cover"
        />

        {/* Rank Badge */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
          <RankIcon rank={nominee.contest.rank} />
          <span className="text-white font-semibold text-sm">
            #{nominee.contest.rank}
          </span>
        </div>

        {/* Vote Count Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-3 py-2">
          <span className="text-white font-bold text-sm">
            {formatVotes(nominee.contest.votesReceived)} votes
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      {/* end of image container */}

      {/* Content */}
      <div className={`p-4 ${isWinner ? "md:p-6" : "md:p-4"}`}>
        {/* User Info */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={nominee.user.avatarUrl}
            alt={nominee.user.displayName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-900 truncate">
                {nominee.user.displayName}
              </p>
              {nominee.user.isVerified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500">@{nominee.user.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;

type Props = {
  name: string;
  description: string;
};

const ClubCard = ({ name, description }: Props) => {
  return (
    <div className="bg-neutral-100 p-4 rounded-2xl shadow-sm flex items-start space-x-4">
      <div className="min-w-8 min-h-8 bg-neutral-500 rounded-full mt-1"></div>
      <div>
        <h3 className="font-semibold text-neutral-800 text-lg">{name}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ClubCard;

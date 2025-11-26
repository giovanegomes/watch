export default function SingersCard({ name, backgroundImage }: PropsTypes) {
  return (
    <div
      className="relative bg-white min-w-[208px] h-[288px] rounded-md bg-cover bg-center bg-no-repeat hover:border-primary hover:border-3"
      style={{ backgroundImage: `url('/images/${backgroundImage}')` }}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-md" />
      <h1 className="absolute w-full text-center mt-[220px] font-bold z-10">
        {name}
      </h1>
    </div>
  );
}

type PropsTypes = {
  name: string;
  backgroundImage: string;
};
